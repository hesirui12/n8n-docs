---
contentType: howto
nodeTitle: 环境变量安装社区节点
layout:
  description:
    visible: false
---

# 环境变量安装 / Environment variable installation

> 💡 **大白话**：适合自动化部署：在环境变量里写好要装的包清单，n8n 每次启动自动「对账」——缺的补装、版本纠正、多余的卸载。

{% hint style="info" %}
**从 n8n v2.21.0 起可用**

{% endhint %}

在自托管的 n8n 上，你可以通过环境变量管理已安装的社区包集合。n8n 在**每次启动时**将已安装的包与列表对账：安装缺失的包、纠正版本、卸载不在列表中的包。用这种方法可以通过部署流水线用一组固定的包初始化实例。

{% hint style="warning" %}
**启用后，不在列表中的包会被卸载**

第一次用 `N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV=true` 启动 n8n 时，n8n 会卸载所有当前已安装但不在 `N8N_COMMUNITY_PACKAGES` 中的社区包。如果你已经在用 UI 管理包，先查看 **Community nodes** 设置页，把想保留的包加入 `N8N_COMMUNITY_PACKAGES`，再启用这个变量。
{% endhint %}

## 配置 / Configure

在你的 n8n 实例上设置以下环境变量，然后重启：

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/w3ftfKhp9KdsaTfUFHE8/" %}

{% hint style="info" %}
**社区包必须处于启用状态**

`N8N_COMMUNITY_PACKAGES_ENABLED` 必须为 `true`（默认值）。如果社区包在实例级别被禁用，n8n 会忽略 `N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV` 并在启动时记录一条警告。
{% endhint %}

例如：

```bash
export N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV=true
export N8N_COMMUNITY_PACKAGES='[{"name":"n8n-nodes-foo","version":"1.2.3"}]'
```

当 `N8N_COMMUNITY_PACKAGES_MANAGED_BY_ENV` 为 `true` 时，**Community nodes** 设置页变为只读：你无法从 UI 安装、更新或卸载包。

### 每个包的字段 / Per-package fields

| 字段 | 类型 | 必填 | 说明 |
| :--- | :--- | :--- | :--- |
| `name` | string | 是 | npm 包名。可以把版本内联写成 `<包名>@<版本>`。如果这样写，就不要再把 `version` 字段设成不同的值，n8n 会拒绝冲突的版本。 |
| `version` | string | 否 | 版本说明符。省略时，n8n 会在已审查包注册表中查找该包并使用该版本；如果包未经过审查，n8n 会安装 npm 解析出的任意版本，且不会在重启间校正版本。 |
| `checksum` | string | 否 | 解析出的 tarball 的 SHA-512 校验和（`sha512-...`）。要求必须设置 `version`。n8n 在可能的情况下会自动从已审查注册表解析校验和。 |

三个字段都有的示例：

```json
[
  { "name": "n8n-nodes-foo", "version": "1.2.3" },
  { "name": "n8n-nodes-bar@0.5.0" },
  { "name": "n8n-nodes-baz", "version": "2.0.0", "checksum": "sha512-..." }
]
```

{% hint style="warning" %}
**未经审查的包需要校验和**

如果某个包不在已审查包注册表中，且 `N8N_UNVERIFIED_PACKAGES_ENABLED` 为 `false`，n8n 将无法启动。要么为该包固定一个 `checksum`，要么设置 `N8N_UNVERIFIED_PACKAGES_ENABLED=true`，要么改用已审查的包。
{% endhint %}

关于设置环境变量的支持方式，参见[配置方法](../../../deploy/host-n8n/configure-n8n/basic-configuration.html)。

## 管理包 / Manage packages

要添加、移除、升级或降级某个包，编辑 `N8N_COMMUNITY_PACKAGES` 并重启 n8n。n8n 会在下次启动时对账到新列表。

{% hint style="warning" %}
**版本中的破坏性变更**

节点开发者可能会在新版本中引入破坏性变更（破坏原有功能的更新）。改版本时务必小心。如果新版本引发问题，把 `version` 改回之前的值并重启 n8n 即可回滚。
{% endhint %}
