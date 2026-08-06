---
nodeTitle: Object
originalFilePath: data/expression-reference/object.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/object'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/object
layout:
  description:
    visible: false
---
# Object 对象 <a href="#object" id="object"></a>

{% hint style="info" %}
**大白话**：对象的常用操作：`keys()`/`values()` 取所有键/值、`hasField()` 查有没有某个字段、`removeField()` 删字段、`merge()` 合并两个对象、`compact()` 去掉空值字段、`toJsonString()` 转 JSON 文本、`urlEncode()` 拼 URL 参数。
{% endhint %}

## _`Object`_.**`compact()`** <a href="#objectcompact" id="objectcompact"></a>

**说明：** 移除所有值为空的字段，即值为 <code>null</code> 或 <code>""</code> 的字段

**语法：** _`Object`_.compact()

**返回：** Object（对象）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'x':null, 'y':2, 'z':''}
  obj.compact() //=> {'y':2}
  ```

## _`Object`_.**`hasField()`** <a href="#objecthasfield" id="objecthasfield"></a>

**说明：** 如果存在名为 <code>name</code> 的字段则返回 <code>true</code>。只检查顶层键。比较区分大小写。

**语法：** _`Object`_.hasField(name)

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**参数：**

  * `name` (String) - 要搜索的键的名称

**示例：**

  ```javascript
  // obj = {'name':'Nathan', 'age':42}
  obj.hasField('name') //=> true
  ```

  ```javascript
  // obj = {'name':'Nathan', 'age':42}
  obj.hasField('Name') //=> false
  obj.hasField('inventedField') //=> false
  ```

## _`Object`_.**`isEmpty()`** <a href="#objectisempty" id="objectisempty"></a>

**说明：** 如果对象没有任何键（字段），或者是 <code>null</code>，则返回 <code>true</code>

**语法：** _`Object`_.isEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'name': 'Nathan'}
  obj.isEmpty() //=> false
  ```

  ```javascript
  // obj = {}
  obj.isEmpty() //=> true
  ```

## _`Object`_.**`isNotEmpty()`** <a href="#objectisnotempty" id="objectisnotempty"></a>

**说明：** 如果对象至少有一个键（字段），则返回 <code>true</code>

**语法：** _`Object`_.isNotEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'name': 'Nathan'}
  obj.isNotEmpty() //=> true
  ```

  ```javascript
  // obj = {}
  obj.isNotEmpty() //=> false
  ```

## _`Object`_.**`keepFieldsContaining()`** <a href="#objectkeepfieldscontaining" id="objectkeepfieldscontaining"></a>

**说明：** 移除所有值不完全匹配给定 <code>value</code> 的字段。比较区分大小写。非字符串的字段总会被移除。

**语法：** _`Object`_.keepFieldsContaining(value)

**返回：** Object（对象）

**来源：** n8n 自定义功能

**参数：**

  * `value` (String) - 字段值必须包含的文本，否则该字段会被移除

**示例：**

  ```javascript
  // obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42 }
  obj.keepFieldsContaining('Nathan') //=> {'name': 'Mr Nathan'}
  ```

  ```javascript
  // obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42 }
  obj.keepFieldsContaining('nathan') //=> {}
  obj.keepFieldsContaining('han') //=> {'name': 'Mr Nathan', 'city':'hanoi'}
  ```

## _`Object`_.**`keys()`** <a href="#objectkeys" id="objectkeys"></a>

**说明：** 返回对象包含的所有字段名（键）组成的数组。与 JavaScript 的 <code>Object.keys(obj)</code> 相同。

**语法：** _`Object`_.keys()

**返回：** Array<String>

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'name': 'Mr Nathan', age: 42 }
  obj.keys() //=> ['name', 'age']
  ```

## _`Object`_.**`merge()`** <a href="#objectmerge" id="objectmerge"></a>

**说明：** 把两个对象合并成一个。如果某个键（字段名）在两个对象里都存在，则使用第一个（基础）对象里的值。

**语法：** _`Object`_.merge(otherObject)

**返回：** Object（对象）

**来源：** n8n 自定义功能

**参数：**

  * `otherObject` (Object) - 要与基础对象合并的对象。

**示例：**

  ```javascript
  // obj1 = {'name':'Nathan', 'age': 42}
  // obj2 = {'name':'Jan', 'city': 'hanoi'}
  obj1.merge(obj2) //=> {'name':'Jan', 'city': 'hanoi', 'age':42}
  ```

## _`Object`_.**`removeField()`** <a href="#objectremovefield" id="objectremovefield"></a>

**说明：** 从对象中移除一个字段。与 JavaScript 的 <code>delete</code> 相同。

**语法：** _`Object`_.removeField(key)

**返回：** Object（对象）

**来源：** n8n 自定义功能

**参数：**

  * `key` (String) - 要移除的字段名称

**示例：**

  ```javascript
  // obj = {'name':'Nathan', 'city':'hanoi'}
  obj.removeField('name') //=> {'city':'hanoi'}
  ```

## _`Object`_.**`removeFieldsContaining()`** <a href="#objectremovefieldscontaining" id="objectremovefieldscontaining"></a>

**说明：** 移除所有值部分匹配给定 <code>value</code> 的键（字段）。比较区分大小写。非字符串的字段总会被保留。

**语法：** _`Object`_.removeFieldsContaining(value)

**返回：** Object（对象）

**来源：** n8n 自定义功能

**参数：**

  * `value` (String) - 字段值必须包含的文本，否则该字段会被移除

**示例：**

  ```javascript
  // obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42}
  obj.removeFieldsContaining('Nathan') //=> {'city':'hanoi', age: 42}
  ```

  ```javascript
  // obj = {'name': 'Mr Nathan', 'city':'hanoi', age: 42}
  obj.removeFieldsContaining('han') //=> {age: 42}
  obj.removeFieldsContaining('nathan') //=> {'name': 'Mr Nathan', 'city':'hanoi', age: 42}
  ```

## _`Object`_.**`toJsonString()`** <a href="#objecttojsonstring" id="objecttojsonstring"></a>

**说明：** 把对象转成 JSON 字符串。与 JavaScript 的 <code>JSON.stringify()</code> 类似。

**语法：** _`Object`_.toJsonString()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'name':'Nathan', age:42}
  obj.toJsonString() //=> '{"name":"Nathan","age":42}'
  
  ```

## _`Object`_.**`urlEncode()`** <a href="#objecturlencode" id="objecturlencode"></a>

**说明：** 根据对象的键和值生成一个 URL 参数字符串。只支持顶层键。

**语法：** _`Object`_.urlEncode()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'name':'Mr Nathan', 'city':'hanoi'}
  obj.urlEncode() //=> 'name=Mr+Nathan&city=hanoi'
  ```

## _`Object`_.**`values()`** <a href="#objectvalues" id="objectvalues"></a>

**说明：** 返回对象包含的所有字段值组成的数组。与 JavaScript 的 <code>Object.values(obj)</code> 相同。

**语法：** _`Object`_.values()

**返回：** Array<String>

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = {'name': 'Mr Nathan', age: 42 }
  obj.values() //=> ['Mr Nathan', 42]
  ```
