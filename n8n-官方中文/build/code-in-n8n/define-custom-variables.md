---
title: 自定义变量（Custom variables）
description: 自定义变量允许你在 n8n 工作流中存储和复用值。
contentType: howto
nodeTitle: 定义自定义变量
originalFilePath: code/variables.md
originalUrl: 'https://docs.n8n.io/code/variables'
url: 'https://docs.n8n.io/build/code-in-n8n/define-custom-variables'
layout:
  description:
    visible: false
---

# 自定义变量 / Custom variables

{% hint style="info" %}
**功能可用性（Feature availability）**

* 仅 **自托管企业版（Self-hosted Enterprise）** 和 **Pro 云版（Pro Cloud）** 套餐可用。
* 只有 **实例所有者（instance owners）** 和 **管理员（admins）** 才能创建变量。
{% endhint %}

自定义变量（custom variables）是**只读（read-only）**的变量，你可以用它们在 n8n 工作流中存储并复用一些值。

{% hint style="info" %}
**大白话**：变量就像「一张写好的便利贴」——把某个值（比如邮箱地址、API 密钥的替代名、某个固定配置）存进去，起个名字（Key），之后在工作流里用 `$vars.名字` 随时取用。改值时只需要改便利贴本身，所有用到它的地方会自动生效，不用一个个节点去改。正因为这样方便，n8n 把变量设计成只读的，防止工作流运行时意外改动它。
{% endhint %}

{% hint style="warning" %}
**变量的作用范围（Variable scope and availability）**

* **全局变量（Global variables）**：对你 n8n 实例上的**所有人、所有项目**都可用。
* **项目级变量（Project-scoped variables）**：只在其创建的**特定项目内部**可用。
* 项目级变量需要 n8n **1.118.0 及以上**版本才支持。更早的版本只支持从左侧菜单访问的全局变量。
{% endhint %}

{% hint style="info" %}
**大白话（作用范围）**：可以把「全局变量」理解为「整个公司公用的饮水机」，谁都能接水；把「项目级变量」理解为「某个项目组自己办公室里的饮水机」，只有这个组的人能用。如果同一个名字两边都有，项目级的值会「压过」全局的值（见下文「变量优先级」）。
{% endhint %}

## 创建变量 / Create variables

你可以从**概览页（overview page）**或**某个特定项目**里进入 **Variables（变量）** 标签页。

要创建一个新变量：

1. 在 **Variables（变量）** 标签页上，选择 **Add Variable（添加变量）**。
2. 输入 **Key（键）** 和 **Value（值）**。键的最大长度为 **50 个字符**，值的最大长度为 **1000 个字符**。n8n 对键和值里能用的字符有限制：只允许大小写字母、数字和下划线（`A-Z`、`a-z`、`0-9`、`_`）。
3. 选择 **Scope（作用范围）**（只有从概览页创建时才可选）：
    * **Global（全局）**：该变量在 n8n 实例的所有项目中都可用。
    * **Project（项目）**：该变量只在特定项目内可用（你可以选择是哪个项目）。
    * 从某个项目页面创建时，作用范围会自动设为该项目。
4. 选择 **Save（保存）**。现在这个变量就可以根据它的作用范围在工作流中使用了。

{% hint style="info" %}
**大白话（Key 是什么）**：Key 是变量的「名字」，Value 是「内容」。比如你可以创建一个 Key 叫 `support_email`、Value 是 `support@example.com` 的变量，之后在工作流里写 `$vars.support_email` 就能拿到这个邮箱。命名时建议用能看懂的名字（比如 `support_email`），别用 `a1` 这种。
{% endhint %}

## 编辑和删除变量 / Edit and delete variables

要编辑或删除一个变量：

1. 在 **Variables（变量）** 标签页上，把鼠标悬停到要改的变量上。
2. 选择 **Edit（编辑）** 或 **Delete（删除）**。

## 在工作流中使用变量 / Use variables in workflows

你可以在**代码节点（Code node）**里和**表达式（expressions）**[^1] 中访问变量：

```javascript
// Access a variable
$vars.<variable-name>
```

{% hint style="info" %}
**大白话（访问语法）**：`$vars` 是 n8n 内置的一个「装着所有变量的小盒子」，把 `<variable-name>` 换成你自己的 Key 即可。例如变量 Key 是 `support_email`，就写 `$vars.support_email`。这段代码就是你在代码节点（Code node）或表达式（expressions）里实际使用的写法。
{% endhint %}

所有变量都是**字符串（strings）**类型。

在工作流执行过程中，n8n 会把变量替换成变量的实际值。如果这个变量**没有值**，n8n 会把它当作 `undefined`（未定义）处理——这种情况下工作流**不会**自动失败，所以你要自己在逻辑里判断（比如用 `$vars.myVar !== undefined` 之类的检查）。

{% hint style="info" %}
**变量优先级（Variable precedence）**

当某个**项目级变量**的 Key 与某个**全局变量**相同（重名）时，在该项目的所有工作流里，**项目级变量的值优先**，会覆盖（override）全局变量的值。
{% endhint %}

变量是**只读**的。你必须通过 UI（界面）来更改变量的值。如果你需要在工作流内部**设置并访问自定义数据**（比如在运行过程中动态记录一些状态、下次运行时再读出来），请改用 [工作流静态数据（Workflow static data）](cookbook/built-in-methods-and-variables-examples/getworkflowstaticdata.md)。

{% hint style="info" %}
**大白话（为什么需要 Workflow static data）**：变量（Variables）是给「人人可用的固定配置」准备的，而且只能管理员在界面里改；而工作流静态数据（Workflow static data）是给「工作流自己记住自己的状态」准备的，比如记录「上次处理到第几页了」，下次运行接着来。两者的用途完全不同。
{% endhint %}

[^1]: 在 n8n 中，表达式（expressions）允许你通过执行 JavaScript 代码来动态填充节点参数。与其提供一个写死的静态值，你可以用 n8n 的表达式语法，根据前面节点的数据、其他工作流或你的 n8n 环境（environment）来定义参数的值。
