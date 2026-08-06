---
contentType: reference
title: 代码编辑器键盘快捷键
description: >-
  Code 节点编辑器支持的多平台键盘快捷键列表。
priority: high
nodeTitle: Code editor keyboard shortcuts
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.code/keyboard-shortcuts.md
originalUrl: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/keyboard-shortcuts
url: >-
  https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.code/keyboard-shortcuts
layout:
  description:
    visible: false
---

# 使用代码编辑器时的键盘快捷键（Keyboard shortcuts when using the Code editor）

{% hint style="info" %}
**大白话**：这一页是 Code 节点编辑器的「快捷键大全」。它把操作分成十几类（光标移动、选择、基本操作、删除、行操作、自动补全、缩进、代码折叠、多光标、格式化等），每一类下面分 Windows / macOS / Linux 三个选项卡，分别列出各自的按键组合。用熟了能大大加快写代码的速度。
{% endhint %}

Code 节点编辑环境支持一系列键盘快捷键，可以加快并改善你的使用体验。选择对应的选项卡，查看适合你的操作系统的快捷键。

## 光标移动（Cursor Movement）

{% tabs %}
{% tab title="Windows" %}
<table><thead><tr><th width="349">Action（操作）</th><th>Shortcut（快捷键）</th></tr></thead><tbody><tr><td>向左移动光标 Move cursor left</td><td><kbd>← Left</kbd></td></tr><tr><td>向右移动光标 Move cursor right</td><td><kbd>→ Right</kbd></td></tr><tr><td>向上移动光标 Move cursor up</td><td><kbd>↑ Up</kbd></td></tr><tr><td>向下移动光标 Move cursor down</td><td><kbd>↓ Down</kbd></td></tr><tr><td>按单词向左移动光标 Move cursor by word left</td><td><kbd>^ Ctrl</kbd> + <kbd>← Left</kbd></td></tr><tr><td>按单词向右移动光标 Move cursor by word right</td><td><kbd>^ Ctrl</kbd> + <kbd>→ Right</kbd></td></tr><tr><td>移动到行首 Move to line start</td><td><kbd>⤒ Home</kbd> <strong>或</strong> <kbd>^ Ctrl</kbd> + <kbd>← Left</kbd></td></tr><tr><td>移动到行尾 Move to line end</td><td><kbd>⤓ End</kbd> <strong>或</strong> <kbd>^ Ctrl</kbd> + <kbd>→ Right</kbd></td></tr><tr><td>移动到文档开头 Move to document start</td><td><kbd>^ Ctrl</kbd> <strong>或</strong> <kbd>⤒ Home</kbd> </td></tr><tr><td>移动到文档末尾 Move to document end</td><td><kbd>^ Ctrl</kbd> <strong>或</strong>  <kbd>⤓ End</kbd> </td></tr><tr><td>向上翻页 Move page up</td><td><kbd>⇞ Page Up</kbd></td></tr><tr><td>向下翻页 Move page down</td><td><kbd>⇟ Page Down</kbd></td></tr></tbody></table>
{% endtab %}

{% tab title="macOS" %}
| Action（操作）                    | Shortcut（快捷键）                                                                       |
| ------------------------- | ------------------------------------------------------------------------------ |
| 向左移动光标 Move cursor left          | <kbd>← Left</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>B</kbd>                      |
| 向右移动光标 Move cursor right         | <kbd>→ Right</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>F</kbd>                     |
| 向上移动光标 Move cursor up            | <kbd>↑ Up</kbd>  **或** <kbd>^ Ctrl</kbd> + <kbd>P</kbd>                       |
| 向下移动光标 Move cursor down          | <kbd>↓ Down</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>N</kbd>                      |
| 按单词向左移动光标 Move cursor by word left  | <kbd>⌥ Option</kbd> + <kbd>← Left</kbd>                                        |
| 按单词向右移动光标 Move cursor by word right | <kbd>⌥ Option</kbd> + <kbd>→ Right</kbd>                                       |
| 移动到行首 Move to line start        | <kbd>⌘ Cmd</kbd> +  <kbd>← Left</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>A</kbd>  |
| 移动到行尾 Move to line end          | <kbd>⌘ Cmd</kbd> +  <kbd>→ Right</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>E</kbd> |
| 移动到文档开头 Move to document start    | <kbd>⌘ Cmd</kbd> + <kbd>↑ Up</kbd>                                             |
| 移动到文档末尾 Move to document end      | <kbd>⌘ Cmd</kbd> + <kbd>↓ Down</kbd>                                           |
| 向上翻页 Move page up              | <kbd>⇞ Page Up</kbd>                                                           |
| 向下翻页 Move page down            | <kbd>⇟ Page Down</kbd>                                                         |
{% endtab %}

{% tab title="Linux" %}
<table><thead><tr><th width="349">Action（操作）</th><th>Shortcut（快捷键）</th></tr></thead><tbody><tr><td>向左移动光标 Move cursor left</td><td><kbd>← Left</kbd></td></tr><tr><td>向右移动光标 Move cursor right</td><td><kbd>→ Right</kbd></td></tr><tr><td>向上移动光标 Move cursor up</td><td><kbd>↑ Up</kbd> </td></tr><tr><td>向下移动光标 Move cursor down</td><td><kbd>↓ Down</kbd></td></tr><tr><td>按单词向左移动光标 Move cursor by word left</td><td><kbd>^ Ctrl</kbd> + <kbd>← Left</kbd></td></tr><tr><td>按单词向右移动光标 Move cursor by word right</td><td><kbd>^ Ctrl</kbd> + <kbd>→ Right</kbd></td></tr><tr><td>移动到行首 Move to line start</td><td><kbd>⤒ Home</kbd> <strong>或</strong> <kbd>^ Ctrl</kbd> + <kbd>← Left</kbd></td></tr><tr><td>移动到行尾 Move to line end</td><td><kbd>⤓ End</kbd> <strong>或</strong> <kbd>^ Ctrl</kbd> + <kbd>→ Right</kbd></td></tr><tr><td>移动到文档开头 Move to document start</td><td><kbd>^ Ctrl</kbd> <strong>或</strong> <kbd>⤒ Home</kbd> </td></tr><tr><td>移动到文档末尾 Move to document end</td><td><kbd>^ Ctrl</kbd> <strong>或</strong>  <kbd>⤓ End</kbd> </td></tr><tr><td>向上翻页 Move page up</td><td><kbd>⇞ Page Up</kbd></td></tr><tr><td>向下翻页 Move page down</td><td><kbd>⇟ Page Down</kbd></td></tr></tbody></table>
{% endtab %}
{% endtabs %}

## 选择（Selection）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）                          | Shortcut（快捷键）                                               |
| ------------------------------- | ------------------------------------------------------ |
| 用任意移动键进行选择 Selection with any movement key | <kbd>⇧ Shift</kbd> + \[Movement Key（移动键）]                   |
| 全选 Select all                      | <kbd>^ Ctrl</kbd> + <kbd>A</kbd>                       |
| 选择当前行 Select line                     | <kbd>^ Ctrl</kbd> + <kbd>L</kbd>                       |
| 选择下一个匹配项 Select next occurrence          | <kbd>^ Ctrl</kbd> + <kbd>D</kbd>                       |
| 选择所有匹配项 Select all occurrences          | <kbd>⇧ Shift</kbd> + <kbd>^ Ctrl</kbd> + <kbd>L</kbd>  |
| 跳到匹配的括号 Go to matching bracket          | <kbd>⇧ Shift</kbd> + <kbd>^ Ctrl</kbd> + <kbd>\\</kbd> |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）                          | Shortcut（快捷键）                                              |
| ------------------------------- | ----------------------------------------------------- |
| 用任意移动键进行选择 Selection with any movement key | <kbd>⇧ Shift</kbd> + \[Movement Key（移动键）]                  |
| 全选 Select all                      | <kbd>⌘ Cmd</kbd> + <kbd>A</kbd>                       |
| 选择当前行 Select line                     | <kbd>⌘ Cmd</kbd> + <kbd>L</kbd>                       |
| 选择下一个匹配项 Select next occurrence          | <kbd>⌘ Cmd</kbd> + <kbd>D</kbd>                       |
| 跳到匹配的括号 Go to matching bracket          | <kbd>⇧ Shift</kbd> + <kbd>⌘ Cmd</kbd> + <kbd>\\</kbd> |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）                          | Shortcut（快捷键）                                               |
| ------------------------------- | ------------------------------------------------------ |
| 用任意移动键进行选择 Selection with any movement key | <kbd>⇧ Shift</kbd> + \[Movement Key（移动键）]                   |
| 全选 Select all                      | <kbd>^ Ctrl</kbd> + <kbd>A</kbd>                       |
| 选择当前行 Select line                     | <kbd>^ Ctrl</kbd> + <kbd>L</kbd>                       |
| 选择下一个匹配项 Select next occurrence          | <kbd>^ Ctrl</kbd> + <kbd>D</kbd>                       |
| 选择所有匹配项 Select all occurrences          | <kbd>⇧ Shift</kbd> + <kbd>^ Ctrl</kbd> + <kbd>L</kbd>  |
| 跳到匹配的括号 Go to matching bracket          | <kbd>⇧ Shift</kbd> + <kbd>^ Ctrl</kbd> + <kbd>\\</kbd> |
{% endtab %}
{% endtabs %}

## 基本操作（Basic Operations）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）                    | Shortcut（快捷键）                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| 换行并带缩进 New line with indentation | <kbd>Enter ⏎</kbd>                                                                            |
| 撤销 Undo                      | <kbd>^ Ctrl</kbd> + <kbd>Z</kbd>                                                              |
| 重做 Redo                      | <kbd>^ Ctrl</kbd> + <kbd>Y</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>V</kbd> |
| 撤销选择 Undo selection            | <kbd>^ Ctrl</kbd> + <kbd>U</kbd>                                                              |
| 复制 Copy                      | <kbd>^ Ctrl</kbd> + <kbd>C</kbd>                                                              |
| 剪切 Cut                       | <kbd>^ Ctrl</kbd> + <kbd>X</kbd>                                                              |
| 粘贴 Paste                     | <kbd>^ Ctrl</kbd> + <kbd>V</kbd>                                                              |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）                    | Shortcut（快捷键）                                                                                     |
| ------------------------- | -------------------------------------------------------------------------------------------- |
| 换行并带缩进 New line with indentation | <kbd>Enter ⏎</kbd>                                                                           |
| 撤销 Undo                      | <kbd>⌘ Cmd</kbd> + <kbd>Z</kbd>                                                              |
| 重做 Redo                      | <kbd>⌘ Cmd</kbd> + <kbd>Y</kbd> **或** <kbd>⌘ Cmd</kbd> + <kbd>⇧ Shift</kbd> +  <kbd>Y</kbd> |
| 撤销选择 Undo selection            | <kbd>⌘ Cmd</kbd> + <kbd>U</kbd>                                                              |
| 复制 Copy                      | <kbd>⌘ Cmd</kbd> + <kbd>C</kbd>                                                              |
| 剪切 Cut                       | <kbd>⌘ Cmd</kbd> + <kbd>X</kbd>                                                              |
| 粘贴 Paste                     | <kbd>⌘ Cmd</kbd> + <kbd>V</kbd>                                                              |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）                    | Shortcut（快捷键）                                                                                      |
| ------------------------- | --------------------------------------------------------------------------------------------- |
| 换行并带缩进 New line with indentation | <kbd>Enter ⏎</kbd>                                                                            |
| 撤销 Undo                      | <kbd>^ Ctrl</kbd> + <kbd>Z</kbd>                                                              |
| 重做 Redo                      | <kbd>^ Ctrl</kbd> + <kbd>Y</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>V</kbd> |
| 撤销选择 Undo selection            | <kbd>^ Ctrl</kbd> + <kbd>U</kbd>                                                              |
| 复制 Copy                      | <kbd>^ Ctrl</kbd> + <kbd>C</kbd>                                                              |
| 剪切 Cut                       | <kbd>^ Ctrl</kbd> + <kbd>X</kbd>                                                              |
| 粘贴 Paste                     | <kbd>^ Ctrl</kbd> + <kbd>V</kbd>                                                              |
{% endtab %}
{% endtabs %}

## 删除操作（Delete Operations）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）                 | Shortcut（快捷键）                                              |
| ---------------------- | ----------------------------------------------------- |
| 删除左侧字符 Delete character left  | <kbd>⌫ Backspace</kbd>                                |
| 删除右侧字符 Delete character right | <kbd>⌦ Del</kbd>                                      |
| 删除左侧单词 Delete word left       | <kbd>^ Ctrl</kbd> + <kbd>⌫ Backspace</kbd>            |
| 删除右侧单词 Delete word right      | <kbd>^ Ctrl</kbd> + <kbd>⌦ Del</kbd>                  |
| 删除整行 Delete line            | <kbd>⇧ Shift</kbd> + <kbd>^ Ctrl</kbd> + <kbd>K</kbd> |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）                 | Shortcut（快捷键）                                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------------------------- |
| 删除左侧字符 Delete character left  | <kbd>⌫ Backspace</kbd>                                                                                  |
| 删除右侧字符 Delete character right | <kbd>⌦ Del</kbd>                                                                                        |
| 删除左侧单词 Delete word left       | <kbd>⌥ Option</kbd> + <kbd>⌫ Backspace</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>⌘ Cmd</kbd> + <kbd>H</kbd> |
| 删除右侧单词 Delete word right      | <kbd>⌥ Option</kbd> + <kbd>⌦ Del</kbd> **或** <kbd>Fn</kbd> + <kbd>⌥ Option</kbd> + <kbd>⌦ Del</kbd>    |
| 删除整行 Delete line            | <kbd>⇧ Shift</kbd> + <kbd>⌘ Cmd</kbd> + <kbd>K</kbd>                                                    |
| 删除到行首 Delete to line start   | <kbd>⌘ Cmd</kbd> + <kbd>⌫ Backspace</kbd>                                                               |
| 删除到行尾 Delete to line end     | <kbd>⌘ Cmd</kbd> + <kbd>⌦ Del</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>K</kbd>                             |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）                 | Shortcut（快捷键）                                              |
| ---------------------- | ----------------------------------------------------- |
| 删除左侧字符 Delete character left  | <kbd>⌫ Backspace</kbd>                                |
| 删除右侧字符 Delete character right | <kbd>⌦ Del</kbd>                                      |
| 删除左侧单词 Delete word left       | <kbd>^ Ctrl</kbd> + <kbd>⌫ Backspace</kbd>            |
| 删除右侧单词 Delete word right      | <kbd>^ Ctrl</kbd> + <kbd>⌦ Del</kbd>                  |
| 删除整行 Delete line            | <kbd>⇧ Shift</kbd> + <kbd>^ Ctrl</kbd> + <kbd>K</kbd> |
{% endtab %}
{% endtabs %}

## 行操作（Line Operations）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）               | Shortcut（快捷键）                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| 上移当前行 Move line up         | <kbd>⎇ Alt</kbd> + <kbd>↑ Up</kbd>                                         |
| 下移当前行 Move line down       | <kbd>⎇ Alt</kbd> + <kbd>↓ Down</kbd>                                       |
| 向上复制当前行 Copy line up         | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↑ Up</kbd>                    |
| 向下复制当前行 Copy line down       | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↓ Down</kbd>                  |
| 切换行注释 Toggle line comment  | <kbd>^ Ctrl</kbd> + <kbd>/</kbd>                                           |
| 添加行注释 Add line comment     | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>C</kbd> |
| 移除行注释 Remove line comment  | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>U</kbd> |
| 切换块注释 Toggle block comment | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>A</kbd>                       |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）               | Shortcut（快捷键）                                                                 |
| -------------------- | ------------------------------------------------------------------------ |
| 上移当前行 Move line up         | <kbd>⌥ Option</kbd> + <kbd>↑ Up</kbd>                                    |
| 下移当前行 Move line down       | <kbd>⌥ Option</kbd> + <kbd>↓ Down</kbd>                                  |
| 向上复制当前行 Copy line up         | <kbd>⇧ Shift</kbd> + <kbd>⌥ Option</kbd> + <kbd>↑ Up</kbd>               |
| 向下复制当前行 Copy line down       | <kbd>⇧ Shift</kbd> + <kbd>⌥ Option</kbd> + <kbd>↓ Down</kbd>             |
| 切换行注释 Toggle line comment  | <kbd>⌘ Cmd</kbd> + <kbd>/</kbd>                                          |
| 添加行注释 Add line comment     | <kbd>⌘ Cmd</kbd> + <kbd>K</kbd> **然后** <kbd>⌘ Cmd</kbd> + <kbd>C</kbd> |
| 移除行注释 Remove line comment  | <kbd>⌘ Cmd</kbd> + <kbd>K</kbd> **然后** <kbd>⌘ Cmd</kbd> + <kbd>U</kbd> |
| 切换块注释 Toggle block comment | <kbd>⇧ Shift</kbd> + <kbd>⌥ Option</kbd> + <kbd>A</kbd>                  |
| 拆分当前行 Split line           | <kbd>^ Ctrl</kbd> + <kbd>O</kbd>                                         |
| 交换相邻字符 Transpose characters | <kbd>^ Ctrl</kbd> + <kbd>T</kbd>                                         |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）               | Shortcut（快捷键）                                                                   |
| -------------------- | -------------------------------------------------------------------------- |
| 上移当前行 Move line up         | <kbd>⎇ Alt</kbd> + <kbd>↑ Up</kbd>                                         |
| 下移当前行 Move line down       | <kbd>⎇ Alt</kbd> + <kbd>↓ Down</kbd>                                       |
| 向上复制当前行 Copy line up         | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↑ Up</kbd>                    |
| 向下复制当前行 Copy line down       | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↓ Down</kbd>                  |
| 切换行注释 Toggle line comment  | <kbd>^ Ctrl</kbd> + <kbd>/</kbd>                                           |
| 添加行注释 Add line comment     | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>C</kbd> |
| 移除行注释 Remove line comment  | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>U</kbd> |
| 切换块注释 Toggle block comment | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>A</kbd>                       |
{% endtab %}
{% endtabs %}

## 自动补全（Autocomplete）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）                      | Shortcut（快捷键）                                   |
| --------------------------- | ------------------------------------------ |
| 开始自动补全 Start completion            | <kbd>^ Ctrl</kbd> + <kbd>Space</kbd>       |
| 接受补全 Accept completion           | <kbd>Enter ⏎</kbd> **或** <kbd>Tab ⇥</kbd> |
| 关闭补全 Close completion            | <kbd>⎋ Esc</kbd>                           |
| 浏览补全选项 Navigate completion options | <kbd>↑ Up</kbd> **或** <kbd>↓ Down</kbd>   |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）                      | Shortcut（快捷键）                                   |
| --------------------------- | ------------------------------------------ |
| 开始自动补全 Start completion            | <kbd>^ Ctrl</kbd> + <kbd>Space</kbd>       |
| 接受补全 Accept completion           | <kbd>Enter ⏎</kbd> **或** <kbd>Tab ⇥</kbd> |
| 关闭补全 Close completion            | <kbd>⎋ Esc</kbd>                           |
| 浏览补全选项 Navigate completion options | <kbd>↑ Up</kbd> **或** <kbd>↓ Down</kbd>   |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）                      | Shortcut（快捷键）                                   |
| --------------------------- | ------------------------------------------ |
| 开始自动补全 Start completion            | <kbd>^ Ctrl</kbd> + <kbd>Space</kbd>       |
| 接受补全 Accept completion           | <kbd>Enter ⏎</kbd> **或** <kbd>Tab ⇥</kbd> |
| 关闭补全 Close completion            | <kbd>⎋ Esc</kbd>                           |
| 浏览补全选项 Navigate completion options | <kbd>↑ Up</kbd> **或** <kbd>↓ Down</kbd>   |
{% endtab %}
{% endtabs %}

## 缩进（Indentation）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）      | Shortcut（快捷键）                                                                       |
| ----------- | ------------------------------------------------------------------------------ |
| 增加缩进 Indent more | <kbd>Tab ⇥</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>]</kbd>                       |
| 减少缩进 Indent less | <kbd>⇧ Shift</kbd> + <kbd>Tab ⇥</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>\[</kbd> |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）      | Shortcut（快捷键）                         |
| ----------- | -------------------------------- |
| 增加缩进 Indent more | <kbd>⌘ Cmd</kbd> + <kbd>]</kbd>  |
| 减少缩进 Indent less | <kbd>⌘ Cmd</kbd> + <kbd>\[</kbd> |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）      | Shortcut（快捷键）                                                                       |
| ----------- | ------------------------------------------------------------------------------ |
| 增加缩进 Indent more | <kbd>Tab ⇥</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>]</kbd>                       |
| 减少缩进 Indent less | <kbd>⇧ Shift</kbd> + <kbd>Tab ⇥</kbd> **或** <kbd>^ Ctrl</kbd> + <kbd>\[</kbd> |
{% endtab %}
{% endtabs %}

## 代码折叠（Code Folding）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）      | Shortcut（快捷键）                                                                   |
| ----------- | -------------------------------------------------------------------------- |
| 折叠代码 Fold code   | <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>\[</kbd>                     |
| 展开代码 Unfold code | <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>]</kbd>                      |
| 全部折叠 Fold all    | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>0</kbd> |
| 全部展开 Unfold all  | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>J</kbd> |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）      | Shortcut（快捷键）                                                                  |
| ----------- | ------------------------------------------------------------------------- |
| 折叠代码 Fold code   | <kbd>⌘ Cmd</kbd> + <kbd>⌥ Option</kbd> + <kbd>\[</kbd>                    |
| 展开代码 Unfold code | <kbd>⌘ Cmd</kbd> + <kbd>⌥ Option</kbd> + <kbd>]</kbd>                     |
| 全部折叠 Fold all    | <kbd>⌘ Cmd</kbd> + <kbd>K</kbd> **然后** <kbd>⌘ Cmd</kbd> + <kbd>0</kbd>  |
| 全部展开 Unfold all  | <kbd>⌘ Cmd</kbd> + <kbd>K</kbd> **然后** <kbd>⌘ Cmd</kbd> + <kbd>J</kbd>  |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）      | Shortcut（快捷键）                                                                   |
| ----------- | -------------------------------------------------------------------------- |
| 折叠代码 Fold code   | <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>\[</kbd>                     |
| 展开代码 Unfold code | <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>]</kbd>                      |
| 全部折叠 Fold all    | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>0</kbd> |
| 全部展开 Unfold all  | <kbd>^ Ctrl</kbd> + <kbd>K</kbd> **然后** <kbd>^ Ctrl</kbd> + <kbd>J</kbd> |
{% endtab %}
{% endtabs %}

## 多光标（Multi-cursor）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）                       | Shortcut（快捷键）                                                 |
| ---------------------------- | -------------------------------------------------------- |
| 在点击位置添加光标 Add cursor at click position | <kbd>⎇ Alt</kbd> + <kbd>Left Button</kbd>                |
| 在上方添加光标 Add cursor above             | <kbd>^ Ctrl</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↑ Up</kbd>   |
| 在下方添加光标 Add cursor below             | <kbd>^ Ctrl</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↓ Down</kbd> |
| 在所有行尾添加光标 Add cursors to line ends     | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>I</kbd>     |
| 清除多个光标 Clear multiple cursors       | <kbd>⎋ Esc</kbd>                                         |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）                       | Shortcut（快捷键）                                                    |
| ---------------------------- | ----------------------------------------------------------- |
| 在点击位置添加光标 Add cursor at click position | <kbd>⌥ Option</kbd> + <kbd>Left Button</kbd>                |
| 在上方添加光标 Add cursor above             | <kbd>^ Ctrl</kbd> + <kbd>⌥ Option</kbd> + <kbd>↑ Up</kbd>   |
| 在下方添加光标 Add cursor below             | <kbd>^ Ctrl</kbd> + <kbd>⌥ Option</kbd> + <kbd>↓ Down</kbd> |
| 在所有行尾添加光标 Add cursors to line ends     | <kbd>⇧ Shift</kbd> + <kbd>⌥ Option</kbd> + <kbd>I</kbd>     |
| 清除多个光标 Clear multiple cursors       | <kbd>⎋ Esc</kbd>                                            |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）                       | Shortcut（快捷键）                                                 |
| ---------------------------- | -------------------------------------------------------- |
| 在点击位置添加光标 Add cursor at click position | <kbd>⎇ Alt</kbd> + <kbd>Left Button</kbd>                |
| 在上方添加光标 Add cursor above             | <kbd>^ Ctrl</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↑ Up</kbd>   |
| 在下方添加光标 Add cursor below             | <kbd>^ Ctrl</kbd> + <kbd>⎇ Alt</kbd> + <kbd>↓ Down</kbd> |
| 在所有行尾添加光标 Add cursors to line ends     | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>I</kbd>     |
| 清除多个光标 Clear multiple cursors       | <kbd>⎋ Esc</kbd>                                         |
{% endtab %}
{% endtabs %}

## 格式化（Formatting）

{% tabs %}
{% tab title="Windows" %}
| Action（操作）          | Shortcut（快捷键）                                             |
| --------------- | ---------------------------------------------------- |
| 格式化文档 Format document | <kbd>⇧ Shift</kbd> + <kbd>⎇ Alt</kbd> + <kbd>F</kbd> |
{% endtab %}

{% tab title="macOS" %}
| Action（操作）          | Shortcut（快捷键）                                             |
| --------------- | ---------------------------------------------------- |
| 格式化文档 Format document | <kbd>⇧ Shift</kbd> + <kbd>⌘ Cmd</kbd> + <kbd>F</kbd> |
{% endtab %}

{% tab title="Linux" %}
| Action（操作）          | Shortcut（快捷键）                                              |
| --------------- | ----------------------------------------------------- |
| 格式化文档 Format document | <kbd>^ Ctrl</kbd> + <kbd>⇧ Shift</kbd> + <kbd>I</kbd> |
{% endtab %}
{% endtabs %}

## 搜索与导航（Search & Navigation）
