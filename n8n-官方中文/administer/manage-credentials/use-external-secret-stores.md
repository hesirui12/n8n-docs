---
title: 外部密钥（External secrets）
description: 在 n8n 中使用外部密钥保险库（vault）。
contentType: howto
nodeTitle: 使用外部密钥存储
originalFilePath: external-secrets.md
originalUrl: 'https://docs.n8n.io/external-secrets'
url: 'https://docs.n8n.io/administer/manage-credentials/use-external-secret-stores'
layout:
  description:
    visible: false
---

# 外部密钥（External secrets）

{% hint style="info" %}
**功能可用性（Feature availability）**

* 外部密钥功能在**企业版自托管（Enterprise Self-hosted）**和**企业版云（Enterprise Cloud）**套餐中可用。
* n8n 支持以下密钥提供方（secret providers）：1Password（通过 [Connect Server](https://developer.1password.com/docs/connect/get-started/)）、AWS Secrets Manager、Azure Key Vault、GCP Secrets Manager、HashiCorp Vault 和 Infisical。
* 从 n8n 版本 **2.10.0** 开始，每个密钥提供方可以连接**多个保险库（vaults）**。更早的版本每个提供方只支持一个保险库。
* 从版本 **`2.13.0`** 开始，如果启用了该功能，项目编辑者（project editors）可以在项目中使用外部密钥，项目管理员（project admins）还可以管理项目保险库。
* n8n **不支持** [HashiCorp Vault Secrets](https://developer.hashicorp.com/hcp/docs/vault-secrets)（HashiCorp 云平台的产品，注意与开源的 HashiCorp Vault 区分）。
{% endhint %}

* 存储在外部密钥存储中的凭证**只能在凭证（Credentials）字段中解析**，不能在其它支持表达式（expressions）的字段中使用。

{% hint style="info" %}
**大白话（为什么有这个限制）**：`$secrets` 表达式是专门为「凭证里的某个输入框」设计的。如果你想把外部密钥用在普通节点的参数字段里（比如 HTTP 请求的 URL），n8n 不会去解析它——因为外部密钥的取值时机和权限校验只绑定在凭证系统里。
{% endhint %}

你可以使用外部密钥存储（external secrets store）来管理 n8n 的凭证[^1]。

n8n 默认把所有凭证加密存储在数据库中，并限制对它们的访问。有了外部密钥功能，你可以把敏感的凭证信息存储在外部的保险库（vault）中，让 n8n 在需要时加载进来。这提供了一层额外的安全保护，并且允许你在**一个中心位置**管理多个 [n8n 环境（environments）](../use-source-control-and-environments/README.md) 中使用的凭证。

{% hint style="info" %}
**大白话（外部密钥是什么）**：可以把外部密钥存储理解成「公司的保险柜」。以前，所有密码都写在 n8n 自己的数据库里（相当于每个人办公桌抽屉里）；现在可以把密码统一放进一个专门的保险柜（如 AWS Secrets Manager、HashiCorp Vault 等），n8n 要用的时候才去保险柜取。好处是：① 密码不散落在各处，集中管理；② 开发环境、生产环境可以各用各的保险柜，互不混淆；③ 即使 n8n 数据库被拖库，密码也不在里面。
{% endhint %}

## 全局保险库 / Global vaults

默认情况下，密钥保险库是**全局（global）**的：实例上的所有用户都可以在凭证中使用引用该保险库密钥的凭证。

在个人项目（personal projects）中，只有实例所有者和管理员可以在凭证中使用来自全局保险库的密钥。

## 项目保险库 / Project vaults

实例管理员可以把一个保险库共享给某个特定的[项目（project）](../manage-users-and-access/set-permissions-and-roles-rbac/organize-work-in-projects.md)。一旦你把保险库分配给某个项目，就只有**该项目的凭证**能引用它的密钥。你可以选择把保险库绑定到单个项目，也可以让它保持全局。

要更改保险库的作用范围（scope）：

1. 在 n8n 中，进入 **Settings（设置）** > **External Secrets（外部密钥）**。
2. 找到你要配置的保险库，选择 **Edit（编辑）**。
3. 在 **Share（共享）** 下，选择以下选项之一：
    - **Global（全局）**：在整个 n8n 实例中共享此保险库。这允许实例中的所有凭证引用这些密钥。
    - **Project（项目）**：将此保险库限制为特定项目。选择项目会将密钥访问权限限制为仅该项目的凭证。
4. **Save（保存）** 你的配置。

{% hint style="info" %}
**大白话（全局 vs 项目）**：全局保险库 = 「公司公共保险柜」，全公司都能取；项目保险库 = 「某个项目组的保险柜」，只有这个项目的工作流能取。如果你有「给客户 A 做项目用的密钥」和「给客户 B 做项目用的密钥」，把它们分到两个项目保险库，就能保证 A 项目永远碰不到 B 项目的密钥。
{% endhint %}

## 把 n8n 连接到你的密钥存储 / Connect n8n to your secrets store

{% hint style="info" %}
**密钥值（Secret values）**

n8n 只支持**纯文本（plaintext）**的密钥值，不支持 JSON 对象。
{% endhint %}

1. 在 n8n 中，进入 **Settings（设置）** > **External Secrets（外部密钥）**。
2. 点击 **Add secrets vault（添加密钥保险库）**。
3. 为你的保险库输入一个**唯一的名字**。这个名字将是你在凭证中引用该保险库时的表达式 `{{ $secrets.<vault-name>... }}` 的第一段（vault-name 部分）。
4. 选择一个受支持的密钥提供方。
5. 输入你的提供方的凭证。详细信息请参考下面的各提供方章节。
6. **Save（保存）** 你的配置。

只要这个存储保持连接状态，你就可以在凭证中引用它的密钥。

{% hint style="info" %}
**大白话（唯一名字的作用）**：这个「唯一名字」就像保险柜上的标签。之后在凭证里写 `{{ $secrets.我的保险柜.某个密钥 }}` 时，`我的保险柜` 这一截必须和这里填的名字**一字不差**，否则 n8n 找不到保险柜。
{% endhint %}

### 1Password

{% hint style="info" %}
**需要 1Password Connect Server**

n8n 与 [1Password Connect Server](https://developer.1password.com/docs/connect/get-started/) 集成——这是 1Password 提供的、用于机器访问的**自托管 API**。它**不是**个人或团队的普通 1Password 账号。要使用这个提供方，你必须自己部署并运行一个 Connect Server。
{% endhint %}

提供你的 **Connect Server URL（连接服务器地址）** 和 **Access Token（访问令牌）**。Connect Server URL 是你的服务器可访问的地址（例如 `http://localhost:8080`）。Access Token 是你为 Connect Server 集成创建的令牌。

n8n 会读取该令牌可访问的所有保险库和条目（items）。每个 1Password 条目会变成一个密钥，条目的字段可以作为属性（properties）访问。使用 `{{ $secrets.<vault-name>.<item-title>.<field-label> }}` 来访问某个具体的字段值。

{% hint style="info" %}
**大白话（1Password 的表达式）**：1Password 的结构是「保险库 → 条目 → 字段」三层。所以表达式里要写三段：保险库名、条目标题、字段标签。例如 `{{ $secrets.vault1.MyGmailAccount.password }}`，意思就是「在 vault1 保险库里，MyGmailAccount 这个条目的 password 字段」。
{% endhint %}

### AWS Secrets Manager（AWS 密钥管理器）

提供你的 **access key ID（访问密钥 ID）**、**secret access key（秘密访问密钥）** 和 **region（区域）**。IAM 用户必须拥有 `secretsmanager:ListSecrets`、`secretsmanager:BatchGetSecretValue` 和 `secretsmanager:GetSecretValue` 权限。

要让 n8n 访问 AWS Secrets Manager 中的**所有**密钥，你可以给 IAM 用户附加以下策略（policy）：

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "AccessAllSecrets",
			"Effect": "Allow",
			"Action": [
				"secretsmanager:ListSecrets",
				"secretsmanager:BatchGetSecretValue",
				"secretsmanager:GetResourcePolicy",
				"secretsmanager:GetSecretValue",
				"secretsmanager:DescribeSecret",
				"secretsmanager:ListSecretVersionIds"
			],
			"Resource": "*"
		}
	]
}
```

你也可以更严格一些，只给 n8n 访问**特定的** AWS Secrets Manager 密钥。你仍然需要允许 `secretsmanager:ListSecrets` 和 `secretsmanager:BatchGetSecretValue` 权限来访问所有资源。这两个权限允许 n8n 检索 ARN 限定的密钥，但**不会**提供密钥值的访问权限。

接下来，你需要把 `secretsmanager:GetSecretValue` 权限的作用范围（scope）限定为你希望共享给 n8n 的密钥的**具体 Amazon Resource Names（ARNs，亚马逊资源名称）**。请确保每个资源 ARN 中使用了正确的区域和账号 ID。你可以在 AWS 控制台中查看密钥的 ARN 详情。

例如，下面的 IAM 策略只允许访问你指定的 AWS 账号和区域中、**名称以 `n8n` 开头**的密钥：

```json
{
	"Version": "2012-10-17",
	"Statement": [
		{
			"Sid": "ListingSecrets",
			"Effect": "Allow",
			"Action": [
				"secretsmanager:ListSecrets",
				"secretsmanager:BatchGetSecretValue"
			],
			"Resource": "*"
		},
		{
			"Sid": "RetrievingSecrets",
			"Effect": "Allow",
			"Action": [
				"secretsmanager:GetSecretValue",
				"secretsmanager:DescribeSecret"
			],
			"Resource": [
				"arn:aws:secretsmanager:us-west-2:123456789000:secret:n8n*"
			]
		}
	]
}
```

{% hint style="info" %}
**大白话（为什么分两段策略）**：AWS 的策略设计是「先允许列出、再允许读取」。第一段允许 n8n「看到有哪些密钥」（List 和 BatchGet 只能拿到清单/ARN，拿不到值）；第二段才允许 n8n 真正「读取密钥内容」，并且限定在 `n8n*` 开头的 ARN 上。这样即使 n8n 的密钥泄露，攻击者也读不到 `n8n` 之外的密钥。
{% endhint %}

更多 IAM 权限策略示例，请查阅 [AWS 官方文档](https://docs.aws.amazon.com/secretsmanager/latest/userguide/auth-and-access_iam-policies.html#auth-and-access_examples_batch)。

### Azure Key Vault（Azure 密钥保险库）

提供你的 **vault name（保险库名称）**、**tenant ID（租户 ID）**、**client ID（客户端 ID）** 和 **client secret（客户端密钥）**。请参考 Azure 文档来[注册 Microsoft Entra ID 应用并创建服务主体（service principal）](https://learn.microsoft.com/en-us/entra/identity-platform/howto-create-service-principal-portal)。n8n 只支持密钥的**单行值**。

### GCP Secrets Manager（GCP 密钥管理器）

为服务账号提供一个至少拥有以下角色的 **Service Account Key（服务账号密钥，JSON 格式）**：`Secret Manager Secret Accessor`（密钥访问者）和 `Secret Manager Secret Viewer`（密钥查看者）。更多信息请参考 Google 的[服务账号文档](https://cloud.google.com/iam/docs/service-account-overview)。

### HashiCorp Vault

提供你的保险库实例的 **Vault URL（保险库地址）**，并选择你的 **Authentication Method（认证方式）**。输入你的认证详细信息。可选：提供一个 namespace（命名空间）。

- 有关你的认证方式，请参考 HashiCorp 文档：
	- [Token 认证方式（Token auth method）](https://developer.hashicorp.com/vault/docs/auth/token)
	- [AppRole 认证方式（AppRole auth method）](https://developer.hashicorp.com/vault/docs/auth/approle)
	- [Userpass 认证方式（Userpass auth method）](https://developer.hashicorp.com/vault/docs/auth/userpass)
- 如果你使用 vault namespaces（命名空间），可以输入 n8n 应连接的命名空间。关于 HashiCorp Vault 命名空间的更多信息，请参考 [Vault Enterprise namespaces](https://developer.hashicorp.com/vault/docs/enterprise/namespaces)。

{% hint style="info" %}
**大白话（认证方式怎么选）**：Token 是「一把钥匙」，最简单直接；AppRole 是「给程序用的身份卡」，适合自动化场景（密钥可以轮换）；Userpass 是「用户名+密码」的人类登录方式。生产环境建议用 AppRole 或 Token，并限制它的权限范围。
{% endhint %}

#### 手动配置 KV 挂载点 / Manual KV mount configuration

默认情况下，n8n 会通过读取 `sys/mounts` 来自动发现（autodiscover）KV 密钥引擎。如果你的 Vault token 没有访问 `sys/mounts` 的权限，你可以手动指定 KV 引擎的挂载路径（mount path）和版本：

- **KV Mount Path（KV 挂载路径）**：你的 KV 密钥引擎的挂载路径（例如 `secret/`）。设置后，n8n 会跳过 `sys/mounts` 自动发现，直接使用这个路径。留空则使用自动发现。
- **KV Version（KV 版本）**：KV 引擎的版本（`v1` 或 `v2`）。默认为 `v2`。仅当你指定了 **KV Mount Path** 时才生效。

你的 Vault token 仍然需要对 KV 路径本身具有读取（read）和列出（list）权限。下面的示例展示了一个针对 `secret/` 挂载的 KV v2 引擎的最小 Vault 策略（policy）：

```hcl
# Read and list secrets at the "secret/" KV v2 mount
path "secret/data/*" {
  capabilities = ["read"]
}
path "secret/metadata/*" {
  capabilities = ["read", "list"]
}
```

对于 KV v1，你只需要一个策略路径：

```hcl
# Read and list secrets at the "kv/" KV v1 mount
path "kv/*" {
  capabilities = ["read", "list"]
}
```

{% hint style="info" %}
**大白话（v1 和 v2 的区别）**：KV v2 在真实数据外面包了一层版本管理（所以路径是 `secret/data/...` 和 `secret/metadata/...`）；KV v1 没有版本概念，路径直接就是 `kv/...`。绝大多数新部署都用 v2。如果你不知道自己的 Vault 是哪个版本，可以登录 Vault UI 看挂载点信息。
{% endhint %}

### Infisical

{% hint style="info" %}
**版本 `2.26.0` 及以上**

Infisical 密钥管理支持仅在 **`2.26.0`** 及以后的版本中可用。
{% endhint %}

要连接 Infisical，请提供以下信息：

- **Site URL（站点地址）**：你的 Infisical 实例的基础 URL。默认为 `https://app.infisical.com`。只有当你自托管 Infisical 时才需要修改。
- **Project ID（项目 ID）**：要读取密钥的 Infisical 项目的 ID。
- **Environment（环境）**：环境 slug（标识符），例如 `dev`（开发）、`staging`（预发布）或 `prod`（生产）。
- **Secret Path（密钥路径）**：项目内要读取密钥的路径。默认为 `/`。
- **Authentication Method（认证方式）**：选择 **Universal Auth（通用认证，推荐）** 或 **Access Token（访问令牌）**。

n8n 推荐使用 Universal Auth（通用认证），它使用 Infisical 的 [Machine Identity（机器身份）](https://infisical.com/docs/documentation/platform/identities/machine-identities)。令牌会在过期前自动刷新。

在 Infisical 中，给 Machine Identity 授予一个有权读取目标项目中密钥的角色。内置的 **Viewer（查看者）** 角色就可以，或者你也可以创建一个自定义角色，授予其在目标环境和密钥路径上的 `secrets` 权限：**Read Value（读取值）** 和 **Describe Secret（描述密钥）**。请参阅 Infisical 的[项目角色文档](https://infisical.com/docs/documentation/platform/access-controls/role-based-access-controls)。

{% tabs %}
{% tab title="Universal Auth（通用认证）" %}
提供：

- **Client ID**：机器身份的 Client ID。
- **Client Secret**：机器身份的 Client Secret。

在 Infisical 中，创建一个机器身份，用上述角色把它附加到项目上，然后复制 Client ID 和 Client Secret。请参阅 Infisical 的 [Universal Auth 文档](https://infisical.com/docs/documentation/platform/identities/universal-auth)。
{% endtab %}

{% tab title="Access Token（访问令牌）" %}
提供：

- **Access Token**：在机器身份内部颁发的令牌。

在 Infisical 中，创建一个机器身份，用上述角色把它附加到项目上，然后点击 `Add Auth Method（添加认证方式）` 并选择 `Token Auth（令牌认证）`。请参阅 Infisical 的 [Token 认证文档](https://infisical.com/docs/documentation/platform/identities/token-auth)。
{% endtab %}
{% endtabs %}

## 在 n8n 凭证中使用密钥 / Use secrets in n8n credentials

要在 n8n 凭证中使用来自你的存储的密钥：

1. 创建一个新凭证，或打开一个现有的凭证。
2. 在你想使用密钥的字段上：
	1. 将鼠标悬停在该字段上。
	2. 选择 **Expression（表达式）**。
3. 在你想使用密钥的字段中，输入一个引用密钥名称的表达式[^2]：
	```js
	{{ $secrets.<vault-name>.<secret-name> }}
	```
	`<vault-name>` 是你在添加存储时输入的名字。把 `<secret-name>` 替换为密钥在你的保险库中显示的名称。

{% hint style="info" %}
**大白话（表达式的两个占位符）**：`<vault-name>`（保险库名）和 `<secret-name>`（密钥名）都要换成真实内容，包括去掉尖括号。比如你给保险库起名叫 `myvault`、密钥叫 `api_key`，那么写出来就是 `{{ $secrets.myvault.api_key }}`。注意是**点号**连接，不能写成斜杠或空格。
{% endhint %}

## 在 n8n 环境中使用外部密钥 / Using external secrets with n8n environments

n8n 的[源代码控制与环境（Source control and environments）](../use-source-control-and-environments/README.md)功能允许你创建由 Git 支撑的不同 n8n 环境。该功能**不支持**在不同的实例中使用不同的凭证。你可以用外部密钥保险库为不同环境提供不同凭证：把每个 n8n 实例连接到不同的保险库或项目环境（project environment）即可。

例如，你有两个 n8n 实例，一个用于开发（development），一个用于生产（production）。在你的密钥提供方中，创建一个带有两个环境（开发和生产）的项目。为你的密钥提供方的每个环境各生成一个令牌（token）。用开发环境的令牌连接你的开发 n8n 实例，用生产环境的令牌连接你的生产 n8n 实例。

{% hint style="info" %}
**大白话（为什么这很重要）**：源代码控制能同步「工作流的逻辑」，但同步不了「密钥」。如果开发和生产用同一套密钥，测试时不小心用了真实数据就很危险。用「一套密钥提供方、两个环境、两个令牌」的办法，开发和生产的密钥天然隔离，各用各的。
{% endhint %}

## 在项目中使用外部密钥 / Using external secrets in projects

你可以把保险库共享给某个项目，这样只有该项目的凭证才能引用它的密钥。设置步骤请参考[项目保险库（Project vaults）](#project-vaults)。项目级保险库从版本 `2.11.0` 开始可用。

### 项目角色的访问权限 / Access for project roles

{% hint style="info" %}
**版本 `2.13.0` 及以上**

在版本 `2.13.0` 之前，在 [RBAC 项目（RBAC project）](../manage-users-and-access/set-permissions-and-roles-rbac/README.md) 中使用外部密钥，要求项目成员中包含[实例所有者或实例管理员](../manage-users-and-access/understand-instance-roles.md)。
{% endhint %}

从版本 `2.13.0` 开始，实例所有者和管理员可以授予[项目编辑者（project editors）](../manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles.md#project-editor)和[项目管理员（project admins）](../manage-users-and-access/set-permissions-and-roles-rbac/see-available-roles.md#project-admin)访问外部密钥的权限。

要启用此功能：

1. 进入 **Settings（设置）** > **External Secrets（外部密钥）**。
2. 打开 **Enable external secrets for project roles（为项目角色启用外部密钥）**。

启用后，**项目编辑者（Project Editors）** 可以：

-   查看与项目共享的可用的外部密钥保险库（在 **Project（项目）** > **Settings（设置）** 中）。
-   在凭证中使用项目保险库中的密钥。

**项目管理员（Project Admins）** 拥有同样的权限，此外他们还可以：

-   为项目创建新的保险库（在 **Project（项目）** > **Settings（设置）** 中）。
-   更新和删除分配给项目的保险库。

{% hint style="info" %}
**全局保险库访问权限（Global vault access）**

在 **Settings（设置）** > **External Secrets（外部密钥）** 中创建的全局保险库，在 **Project（项目）** > **Settings（设置）** 中可见，但对项目角色来说是**只读**的。只有实例管理员可以修改或删除全局保险库。
{% endhint %}

### 自定义角色 / Custom roles

要实现更细粒度的访问控制，实例所有者和管理员可以创建[自定义项目角色（custom project role）](../manage-users-and-access/set-permissions-and-roles-rbac/create-custom-project-roles.md)。进入 **Settings（设置）** > **Roles（角色）** > **Project roles（项目角色）** > **Create role（创建角色）**。在权限列表中配置：

- **Secrets vaults（密钥保险库）**：控制保险库管理（查看、创建、编辑、删除和同步保险库）。
- **Secrets（密钥）**：控制该角色是否可以在凭证表达式中使用密钥。

两个权限是**相互独立**的。例如，某个角色可能只需要 **Secrets（密钥）** 权限来在凭证中使用密钥，而不需要管理保险库。完整的可用作用范围列表请参考[密钥保险库作用范围（Secret vault scopes）](../manage-users-and-access/set-permissions-and-roles-rbac/create-custom-project-roles.md#secret-vault-scopes)。

## 故障排查 / Troubleshooting

### 密钥在生产环境中无法解析 / Secrets don't resolve in production

{% hint style="info" %}
**版本 `2.13.0` 及以上**

从版本 `2.13.0` 开始，[已启用密钥访问权限](#access-for-project-roles)的项目编辑者和管理员可以在自己的凭证中使用外部密钥。下面的限制只适用于更早的版本，或者当该「选择加入」开关处于关闭状态时。
{% endhint %}

在 `2.13.0` 之前的版本中（或当 **Enable external secrets for project roles（为项目角色启用外部密钥）** 处于关闭状态时），只有实例所有者和管理员可以在运行时解析密钥。如果所有者或管理员用密钥表达式更新了**其他用户**的凭证，在预览（preview）中可能看起来正常，但在生产环境中会失败。

在这种情况下，**只**在归实例所有者或管理员所有的凭证中使用外部密钥。

{% hint style="info" %}
**大白话（为什么预览正常、生产失败）**：预览时是「管理员自己」在解析表达式，所以能看到值；生产运行时是「凭证的拥有者」在工作流里取密钥，而旧版本只允许管理员取密钥，于是取不到、报错。解决办法就是：旧版本里，只有管理员自己的凭证才用外部密钥；新版本（≥2.13.0）则给项目角色打开开关即可。
{% endhint %}

[^1]: 在 n8n 中，凭证（credentials）存储用于连接特定应用和服务的认证信息。用你的认证信息（用户名和密码、API 密钥、OAuth 密钥等）创建凭证后，就可以使用对应的应用节点（app node）与该服务交互。
[^2]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。与其提供一个静态值，你可以使用 n8n 的表达式语法，根据前面节点的数据、其他工作流或你的 n8n 环境来定义参数的值。
