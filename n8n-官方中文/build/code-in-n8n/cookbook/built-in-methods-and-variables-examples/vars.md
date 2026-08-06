---
description: Access your environment's custom variables.
contentType: reference
nodeTitle: vars
originalFilePath: code/cookbook/builtin/vars.md
originalUrl: 'https://docs.n8n.io/code/cookbook/builtin/vars'
url: >-
  https://docs.n8n.io/build/code-in-n8n/cookbook/built-in-methods-and-variables-examples/vars
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话：** `$vars` 用来读取你所在环境里设置好的「自定义变量」（类似全局配置项，只读）。这个功能需要企业版（Self-hosted Enterprise 或 Pro/Enterprise Cloud 套餐），并且要登录 n8n 实例的管理员（owner）账号才能创建变量。
{% endhint %}

# `vars` <a href="#vars" id="vars"></a>

{% hint style="info" %}
**功能可用性**

* 在 Self-hosted Enterprise 以及 Pro、Enterprise Cloud 套餐上可用。
* 创建变量需要访问 n8n 实例所有者（owner）账号。
{% endhint %}

`vars` 包含当前环境的所有 [Variables（变量）](../../define-custom-variables.md)。它是只读的：你可以通过 `vars` 访问变量，但必须用界面（UI）来设置它们。

{% tabs %}
{% tab title="JavaScript" %}
```js
// Access a variable
$vars.<variable-name>
```
{% endtab %}

{% tab title="Python" %}
```python
# Access a variable
_vars.<variable-name>
```
{% endtab %}
{% endtabs %}

{% hint style="info" %}
**`vars` 和 `env` 的区别**

`vars` 访问的是用户创建的变量，属于 [Environments（环境）](https://app.gitbook.com/s/wMJrGrimpx3PxCJpUswm/use-source-control-and-environments) 功能的一部分。`env` 访问的是你 n8n 实例的 [配置环境变量](https://app.gitbook.com/s/jm0ZYRpZIPWge2ZSiDYO/host-n8n/configure-n8n/basic-configuration/use-environment-variables)。
{% endhint %}
