---
title: 加密密钥轮换（Encryption key rotation）
description: >-
  启用并轮换用于保护自托管 n8n 实例上凭据和其他敏感数据的数据加密密钥。
contentType: howto
nodeTitle: 轮换加密密钥
originalFilePath: hosting/securing/encryption-key-rotation.md
originalUrl: 'https://docs.n8n.io/hosting/securing/encryption-key-rotation'
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/security/rotate-encryption-keys
layout:
  description:
    visible: false
---

# 加密密钥轮换（Encryption key rotation）

{% hint style="info" %}
**功能可用性**

* 仅限自托管（self-hosted）的 n8n 实例。
* 你必须是实例所有者（instance owner）才能启用此功能并轮换密钥。
{% endhint %}

{% hint style="info" %}
**小白提示**：为什么需要轮换密钥？密钥（key）用来把数据加密成「看不懂的乱码」。密钥用得越久，泄露的风险越高（比如某台服务器被入侵过、有员工离职、密钥可能被备份文件带走等）。定期换新密钥是安全领域的最佳实践，就像定期改密码一样。n8n 用「两层密钥」设计，让你可以只换「数据加密密钥」这一层，而不用动「主密钥」，这样对部署、重启、备份都几乎零影响。
{% endhint %}

加密密钥轮换（encryption key rotation）让你可以定期更换「用于加密 n8n 数据（如凭据、OAuth 令牌和其他敏感内容）」的密钥，而无需改变实例的主加密密钥（master encryption key）。

## 加密密钥轮换的工作原理（How encryption key rotation works）

n8n 使用两层密钥模型：

* **实例加密密钥（Instance encryption key）**（`N8N_ENCRYPTION_KEY`）：你的主密钥，在部署时设置。这个密钥永远不变。n8n 只用它来保护「数据加密密钥」。
* **数据加密密钥（Data encryption key）**：直接加密你的凭据数据的密钥。这就是你要轮换的密钥。n8n 把它加密后存储在数据库中，由实例密钥保护。

轮换时，n8n 会生成一个新的数据加密密钥，用于之后的所有新写入。用旧密钥加密的已有数据仍然可读。n8n 会在你下次更新某条记录时，悄悄把它用新密钥重新加密。

{% hint style="info" %}
**小白提示**：为什么要设计成两层？因为主密钥一旦更换，所有旧数据都得重新加密一遍，风险和工作量都很大。而「数据加密密钥」这一层可以随时轮换：新数据用新密钥，旧数据仍然用旧密钥可读，等每条数据被更新时再慢慢「迁移」到新密钥，整个过程对用户无感、零停机。
{% endhint %}

## 开始之前（Before you begin）

{% hint style="danger" %}
**启用此功能前，请先做完整的数据库备份**

启用加密密钥轮换是一次性的、单向的变更，没有回滚路径。详情请见[向后兼容与回滚](#backwards-compatibility-and-rollback)。
{% endhint %}

你还需要确保：

* 所有 n8n 实例——主实例（main）和所有 worker——使用相同的 `N8N_ENCRYPTION_KEY` 值。
* 你能直接控制环境变量和 n8n 数据库。这只有在自托管部署下才可能。

{% hint style="info" %}
**小白提示**：worker（工作节点）= 在队列模式（queue mode）下，负责实际执行工作流任务的独立进程。主实例和所有 worker 必须使用同一个密钥，否则一个加密、一个解密，密钥对不上，凭据就解密不了。如果你对队列模式不熟悉，可以先看文末「相关资源」里的队列模式文档。
{% endhint %}

## 启用加密密钥轮换（Enable encryption key rotation）

1. 在**所有** n8n 实例（主实例和 worker）上设置以下环境变量：

    ```sh
    N8N_ENV_FEAT_ENCRYPTION_KEY_ROTATION=true
    ```

2. 重启所有实例。启动时，n8n 会自动生成初始的数据加密密钥，并加密后存储到你的数据库中。
3. 确认功能已启用：进入 **Settings（设置）** > **Data Encryption Keys（数据加密密钥）**。你应该能看到当前生效的密钥被列出来。

{% hint style="info" %}
**小白提示**：`N8N_ENV_FEAT_` 开头的环境变量是 n8n 的功能开关（feature flag）命名惯例——`FEAT` 后面跟功能名。设置成 `true` 就是打开该功能。这条命令要写在启动 n8n 之前生效的位置（比如 `.env` 文件里，或 Docker Compose 的 `environment` 部分）。
{% endhint %}

## 轮换当前密钥（Rotate the active key）

功能启用后，你可以随时轮换到新的数据加密密钥。

### 使用界面（Using the UI）

进入 **Settings（设置）** > **Data Encryption Keys（数据加密密钥）**，点击 **Rotate key（轮换密钥）**。

### 使用 API（Using the API）

向 `/encryption/keys` 端点发送 `POST` 请求。该请求需要 `encryptionKey:manage` 全局权限（global scope）。n8n 绝不会在 API 响应中返回密钥内容本身，只会返回元数据（如 ID、算法、状态和时间戳）。

轮换之后，n8n 会用新的当前密钥进行所有新写入。用之前密钥加密的记录仍然可读；下次你更新每条记录时，n8n 会把它重新加密为新密钥。

## 向后兼容与回滚（Backwards compatibility and rollback）

{% hint style="danger" %}
**这是一次单向迁移**

在启用加密密钥轮换之前，请仔细阅读本节。
{% endhint %}

一旦你启用加密密钥轮换，n8n 就会开始用一种「包含密钥标识符的新格式」写入凭据和其他敏感数据。旧版本的 n8n，以及没有开启该功能开关的实例，无法读取这种格式。

* **在有任何数据以新格式写入后，不要关闭功能开关**：删除 `N8N_ENV_FEAT_ENCRYPTION_KEY_ROTATION` 或把它设为 `false`，会使得「启用该功能之后加密的所有数据」永久无法访问。
* **启用后不要降级 n8n 版本**：旧版本无法解密新格式。

没有自动化工具可以把「新格式加密的数据」转换回旧格式。唯一的恢复途径是：从「启用该功能之前」的数据库备份中恢复。

{% hint style="info" %}
**小白提示**：为什么这么「危险」？因为新格式的加密数据带有一个「密钥标识」，旧版本 n8n 和关闭开关的实例不认识这个标识，自然就无法解密。所以一旦启用，请把它当成「只能前进、不能后退」的功能——先备份，再启用，启用后别再关开关、别降级。
{% endhint %}

## 推荐步骤（Recommended steps）

1. **备份数据库**。在做任何更改之前，先做完整快照。
2. **先在预发布环境（staging）启用**。在非生产环境设置 `N8N_ENV_FEAT_ENCRYPTION_KEY_ROTATION=true`，重启，然后验证凭据仍然能正确解密。
3. **再在生产环境启用**。只有在验证过预发布环境的行为之后才这么做。
4. **不要关闭开关或降级**。一旦生产数据以新格式写入，请保持开关开启，并停留在相同或更新的 n8n 版本上。

{% hint style="info" %}
**小白提示**：staging（预发布/测试环境）= 和生产环境几乎一模一样、但只用来测试的环境。先在 staging 上验证「升级后凭据还能正常解密」，确认没问题再上生产，是避免「生产环境翻车」的标准操作。
{% endhint %}

## 相关资源（Related resources）

* [设置自定义加密密钥](../basic-configuration/configuration-examples/set-a-custom-encryption-key.md)：设置实例级的 `N8N_ENCRYPTION_KEY` 值。
* [部署环境变量](../basic-configuration/use-environment-variables/deployment.md)：`N8N_ENCRYPTION_KEY` 和 `N8N_ENV_FEAT_ENCRYPTION_KEY_ROTATION` 的参考文档。
* [配置队列模式](../scaling/enable-queue-mode.md)：确保所有 worker 共享同一个实例加密密钥。
