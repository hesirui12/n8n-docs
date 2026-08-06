---
nodeTitle: Array
originalFilePath: data/expression-reference/array.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/array'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/array
layout:
  description:
    visible: false
---
# Array 数组 <a href="#array" id="array"></a>

{% hint style="info" %}
**大白话**：数组（列表）的常用操作：`append()`/`concat()`/`union()` 加元素、`filter()`/`find()` 筛选查找、`map()`/`reduce()` 批量处理、`first()`/`last()`/`slice()` 取部分、`sum()`/`average()`/`max()`/`min()` 算数、`sort()`/`reverse()` 排序、`removeDuplicates()`/`unique()` 去重，还有 `toJsonString()` 转 JSON 文本。
{% endhint %}

## _`Array`_.**`append()`** <a href="#arrayappend" id="arrayappend"></a>

**说明：** 在数组末尾添加新元素。类似于 <code>push()</code>，但它返回修改后的数组。也可以考虑改用展开语法（spread syntax，见示例）。

**语法：** _`Array`_.append(elem1, elem2?, ..., elemN?)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `elem1` (any) - 要追加的第一个元素
  * `elem2` (any) - 可选 - 要追加的第二个元素
  * `elemN` (any) - 可选 - 要追加的第 N 个元素

**示例：**

  ```javascript
  // arr = ['forget', 'me']
  arr.append('not') //=> arr = ['forget', 'me', 'not']
  ```

  ```javascript
  // arr = [9, 0, 2]
  arr.append(1, 0) //=> [9, 0, 2, 1, 0]
  
  // Consider using spread syntax instead
  [...arr, 1, 0]  //=> [9, 0, 2, 1, 0]
  ```

## _`Array`_.**`average()`** <a href="#arrayaverage" id="arrayaverage"></a>

**说明：** 返回数组中所有数字的平均值。如果含有非数字，会抛出错误。

**语法：** _`Array`_.average()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = [12, 1, 5]
  arr.average() //=> 6
  ```

## _`Array`_.**`chunk()`** <a href="#arraychunk" id="arraychunk"></a>

**说明：** 把数组拆分成多个子数组，每个子数组包含指定数量的元素

**语法：** _`Array`_.chunk(length)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `length` (Number) - 每个块（chunk）里的元素个数

**示例：**

  ```javascript
  // arr = [1, 2, 3, 4, 5, 6]
  arr.chunk(2) //=> [ [1,2], [3,4], [5,6] ]
  ```

## _`Array`_.**`compact()`** <a href="#arraycompact" id="arraycompact"></a>

**说明：** 移除数组中的所有空值。<code>null</code>、<code>""</code> 和 <code>undefined</code> 都算空值。

**语法：** _`Array`_.compact()

**返回：** Array（数组）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = [2, null, 1, ""]
  arr.compact() //=> [2, 1]
  ```

## _`Array`_.**`concat()`** <a href="#arrayconcat" id="arrayconcat"></a>

**说明：** 把一个或多个数组接到基础数组的末尾

**语法：** _`Array`_.concat(array2, array3?, ... arrayN?)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `array2` (Array) - 接到基础数组末尾的第一个数组
  * `array3` (Array) - 可选 - 接到基础数组末尾的第二个数组
  * `arrayN` (Array) - 可选 - 接到基础数组末尾的第 N 个数组

**示例：**

  ```javascript
  // arr1 = ['Nathan', 'Jan']
  arr1.concat(['Steve', 'Bill']) // ['Nathan', 'Jan', 'Steve', 'Bill']
  ```

  ```javascript
  // arr1 = [5, 4]
  // arr2 = [100, 101]
  // arr3 = ['a', 'b']
  arr1.concat(arr2, arr3) // [5, 4, 100, 101, 'a', 'b']
  ```

## _`Array`_.**`difference()`** <a href="#arraydifference" id="arraydifference"></a>

**说明：** 比较两个数组。返回基础数组中所有不在 <code>otherArray</code> 里出现的元素。

**语法：** _`Array`_.difference(otherArray)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `otherArray` (Array) - 与基础数组比较的数组

**示例：**

  ```javascript
  // arr = [1, 2, 3]
  arr.difference([2, 3]) //=> [1]
  ```

## _`Array`_.**`filter()`** <a href="#arrayfilter" id="arrayfilter"></a>

**说明：** 返回只包含满足条件的元素的数组。条件是一个返回 <code>true</code> 或 <code>false</code> 的函数。

**语法：** _`Array`_.filter(function(element, index?, array?), thisValue?)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `function()` (function) - 对每个数组元素运行的函数。如果返回 <code>true</code>，该元素会被保留。可以考虑使用<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions”>箭头函数写法</a>来节省篇幅。
  * `element` (any) - 当前元素的值
  * `index` (Number) - 可选 - 当前元素在数组中的位置（从 0 开始）
  * `array` (Array) - 可选 - 正在处理的数组。很少需要。
  * `thisValue` (any) - 可选 - 作为函数的 <code>this</code> 值传入的值。很少需要。

**示例：**

  ```javascript
  // Keep ages over 18 (using arrow function notation):
  // ages = [12, 33, 16, 40]
  ages.filter(age => (age > 18)) //=> [33, 40]
  ```

  ```javascript
  // Keep names under 5 letters long (using arrow function notation):
  // names = ['Nathan', 'Bob', 'Sebastian']
  ages.filter(age => (age.length < 5)) //=> ["Bob"]
  
  // Or using traditional function notation:
  ages.filter(function(age){return age.length < 5}) //=> ["Bob"]
  ```

  ```javascript
  // Keep numbers at odd indexes
  // nums = [1, 7, 3, 10, 5]
  ages.filter((num, index) => {return index%2 != 0}) //=> [7, 10]
  ```

## _`Array`_.**`find()`** <a href="#arrayfind" id="arrayfind"></a>

**说明：** 返回数组中第一个满足给定条件的元素。条件是一个返回 <code>true</code> 或 <code>false</code> 的函数。如果没有匹配项则返回 <code>undefined</code>。

如果你需要所有匹配的元素，请用 <code>filter()</code>。

**语法：** _`Array`_.find(function(element, index?, array?), thisValue?)

**返回：** any（任意类型）

**来源：** JavaScript 函数

**参数：**

  * `function()` (function) - 对每个数组元素运行的函数。一旦它返回 <code>true</code>，就返回该元素。可以考虑使用<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions”>箭头函数写法</a>来节省篇幅。
  * `element` (any) - 当前元素的值
  * `index` (Number) - 可选 - 当前元素在数组中的位置（从 0 开始）
  * `array` (Array) - 可选 - 当前元素所在的数组。很少需要。
  * `thisValue` (any) - 可选 - 作为函数的 <code>this</code> 值传入的值。很少需要。

**示例：**

  ```javascript
  // Find first age over 18 (using arrow function notation):
  // ages = [12, 33, 16, 40]
  ages.find(age => (age > 18)) //=> 33
  ```

  ```javascript
  // Find first name under 5 letters long (using arrow function notation):
  // names = ['Nathan', 'Bob', 'Sebastian']
  ages.find(age => (age.length < 5)) //=> 'Bob'
  
  // Or using traditional function notation:
  ages.find(function(age){return age.length < 5}) //=> 'Bob'
  ```

## _`Array`_.**`first()`** <a href="#arrayfirst" id="arrayfirst"></a>

**说明：** 返回数组的第一个元素

**语法：** _`Array`_.first()

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = ['quick', 'brown', 'fox']
  arr.first() //=> 'quick'
  ```

## _`Array`_.**`includes()`** <a href="#arrayincludes" id="arrayincludes"></a>

**说明：** 如果数组包含指定元素，则返回 <code>true</code>

**语法：** _`Array`_.includes(element, start?)

**返回：** Boolean（布尔值）

**来源：** JavaScript 函数

**参数：**

  * `element` (any) - 要在数组中搜索的值
  * `start` (Number) - 可选 - 开始搜索的索引

**示例：**

  ```javascript
  // names = ["Bob", "Bill", "Nat"];
  names.includes("Nat") //=> true
  names.includes("Nathan") //=> false
  ```

## _`Array`_.**`indexOf()`** <a href="#arrayindexof" id="arrayindexof"></a>

**说明：** 返回数组中第一个匹配元素的位置，找不到则返回 -1。位置从 0 开始。

**语法：** _`Array`_.indexOf(element, start?)

**返回：** Number（数字）

**来源：** JavaScript 函数

**参数：**

  * `element` (any) - 要查找的值
  * `start` (Number) - 可选 - 开始搜索的索引

**示例：**

  ```javascript
  // names = ["Bob", "Bill", "Nat"];
  names.indexOf("Nat") //=> 2
  ```

  ```javascript
  // names = ["Bob", "Bill", "Nat"];
  names.indexOf("Nathan") //=> -1
  ```

## _`Array`_.**`intersection()`** <a href="#arrayintersection" id="arrayintersection"></a>

**说明：** 比较两个数组。返回基础数组中同样出现在另一个数组里的所有元素。

**语法：** _`Array`_.intersection(otherArray)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `otherArray` (Array) - 与基础数组比较的数组

**示例：**

  ```javascript
  // arr = [1, 2]
  arr.intersection([2, 3]) //=> [2]
  ```

## _`Array`_.**`isEmpty()`** <a href="#arrayisempty" id="arrayisempty"></a>

**说明：** 如果数组没有元素，或者是 <code>null</code>，则返回 <code>true</code>

**语法：** _`Array`_.isEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = []
  arr.isEmpty() //=> true
  ```

  ```javascript
  // arr = ['quick', 'brown', 'fox']
  arr.isEmpty() //=> false
  ```

## _`Array`_.**`isNotEmpty()`** <a href="#arrayisnotempty" id="arrayisnotempty"></a>

**说明：** 如果数组至少有一个元素，则返回 <code>true</code>

**语法：** _`Array`_.isNotEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = ['quick', 'brown', 'fox']
  arr.isNotEmpty() //=> true
  ```

  ```javascript
  // arr = []
  arr.isNotEmpty() //=> false
  ```

## _`Array`_.**`join()`** <a href="#arrayjoin" id="arrayjoin"></a>

**说明：** 把数组的所有元素合并成一个字符串，元素之间可插入可选的分隔符。

与 <code>split()</code> 正好相反。

**语法：** _`Array`_.join(separator?)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `separator` (String) - 可选 - 插入每个元素之间的字符

**示例：**

  ```javascript
  // arr = ['Wind', 'Water', 'Fire']
  a.join(" + ") //=> 'Wind + Water + Fire'
  ```

  ```javascript
  // arr = ['Wind', 'Water', 'Fire']
  a.join() //=> 'Wind,Water,Fire'
  a.join("") //=> 'WindWaterFire'
  ```

## _`Array`_.**`last()`** <a href="#arraylast" id="arraylast"></a>

**说明：** 返回数组的最后一个元素

**语法：** _`Array`_.last()

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = ['quick', 'brown', 'fox']
  arr.last() //=> 'fox'
  
  ```

## _`Array`_.**`length`** <a href="#arraylength" id="arraylength"></a>

**说明：** 数组中元素的数量

**语法：** _`Array`_.length

**返回：** Number（数字）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  // names = ["Bob", "Bill", "Nat"];
  names.length //=> 3
  ```

## _`Array`_.**`map()`** <a href="#arraymap" id="arraymap"></a>

**说明：** 通过对原数组的每个元素应用一个函数，生成一个新数组

**语法：** _`Array`_.map(function(element, index?, array?), thisValue?)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `function()` (function) - 对每个数组元素运行的函数。在新数组里，这个函数的输出会取代原来的元素。可以考虑使用<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions”>箭头函数写法</a>来节省篇幅。
  * `element` (any) - 当前元素的值
  * `index` (Number) - 可选 - 当前元素在数组中的位置（从 0 开始）
  * `array` (Array) - 可选 - 当前元素所在的数组。很少需要。
  * `thisValue` (any) - 可选 - 作为函数的 <code>this</code> 值传入的值。很少需要。

**示例：**

  ```javascript
  // Double all numbers (using arrow function notation):
  // nums = [12, 33, 16]
  nums.map(num => num*2) //=> [24, 66, 32]
  ```

  ```javascript
  // Convert elements to uppercase (using arrow function notation):
  // words = ['hello', 'old', 'chap']
  words.map(word => word.toUpperCase()) //=> ['HELLO', 'OLD', 'CHAP']]
  
  // Or using traditional function notation:
  words.map(function(word){return word.toUpperCase()}) //=> ['HELLO', 'OLD', 'CHAP']]
  ```

## _`Array`_.**`max()`** <a href="#arraymax" id="arraymax"></a>

**说明：** 返回数组中最大的数字。如果含有非数字，会抛出错误。

**语法：** _`Array`_.max()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = [1, 12, 5]
  arr.max() //=> 12
  
  ```

## _`Array`_.**`min()`** <a href="#arraymin" id="arraymin"></a>

**说明：** 返回数组中最小的数字。如果含有非数字，会抛出错误。

**语法：** _`Array`_.min()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = [12, 1, 5]
  arr.min() //=> 1
  ```

## _`Array`_.**`pluck()`** <a href="#arraypluck" id="arraypluck"></a>

**说明：** 返回一个数组，包含数组中每个对象里给定字段（可多个）的值。会忽略那些不是对象、或没有匹配字段名的数组元素。

**语法：** _`Array`_.pluck(fieldName1?, fieldName2?, …)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `fieldName1` (String) - 可选 - 要取值的第一键
  * `fieldName2` (String) - 可选 - 要取值的第二个键

**示例：**

  ```javascript
  // arr = [{'name':'Nathan','age':42},{'name':'Jan','city':'Berlin'}]
  arr.pluck('name') //=> ["Nathan", "Jan"]
  ```

  ```javascript
  // arr = [{'name':'Nathan','age':42},{'name':'Jan','city':'Berlin'}]
  arr.pluck('age') //=> [42]
  ```

## _`Array`_.**`randomItem()`** <a href="#arrayrandomitem" id="arrayrandomitem"></a>

**说明：** 从数组中随机返回一个元素

**语法：** _`Array`_.randomItem()

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = ['quick', 'brown', 'fox']
  arr.randomItem() //=> 'brown'
  arr.randomItem() //=> 'quick'
  ```

## _`Array`_.**`reduce()`** <a href="#arrayreduce" id="arrayreduce"></a>

**说明：** 通过对每个元素应用一个函数，把数组归约为单个值。该函数把当前元素与前面元素归约的结果合并，产生新的结果。

**语法：** _`Array`_.reduce(function(prevResult, currentElem, currentIndex?, array?), initResult)

**来源：** JavaScript 函数

**参数：**

  * `function()` (function) - 对每个数组元素运行的函数。接收累计结果和当前元素，返回新的累计结果。可以考虑使用<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions”>箭头函数写法</a>来节省篇幅。
  * `prevResult` (any) - 对前面元素应用函数后累计得到的结果。处理第一个元素时，它被设为 <code>initResult</code>（如果没指定，则为数组第一个元素）。
  * `currentElem` (any) - 当前正在处理的数组值
  * `currentIndex` (Number) - 可选 - 当前元素在数组中的位置（从 0 开始）
  * `array` (Array) - 可选 - 正在处理的数组。很少需要。
  * `initResult` (any) - 可选 - prevResult 的初始值，在对第一个数组元素调用函数时使用。未指定时它被设为数组第一个元素，第一次函数调用会在第二个元素上进行，而不是第一个。

**示例：**

  ```javascript
  // Sum numbers (using arrow function notation):
  // nums = [12, 33, 16]
  nums.reduce((result, num) => (result+num), 0) //=> 61
  ```

  ```javascript
  // Join letters and uppercase (using arrow function notation):
  // chars = ['a', 'b', 'c']
  chars.reduce((result, char) => (result+char.toUpperCase()), '') //=> 'ABC'
  
  // Or using traditional function notation:
  chars.reduce(function(result, char){return result+char.toUpperCase()}, '') //=> 'ABC'
  ```

## _`Array`_.**`removeDuplicates()`** <a href="#arrayremoveduplicates" id="arrayremoveduplicates"></a>

**说明：** 移除数组中重复出现的元素

**语法：** _`Array`_.removeDuplicates(keys?)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `keys` (String) - 可选 - 用于对象数组。一个键，或用逗号分隔的多个键，用来限定检查范围。省略时检查所有键。

**示例：**

  ```javascript
  // arr = ['quick', 'brown', 'quick']
  arr.removeDuplicates() //=> ['quick', 'brown']
  ```

## _`Array`_.**`renameKeys()`** <a href="#arrayrenamekeys" id="arrayrenamekeys"></a>

**说明：** 修改数组中所有对象里匹配的键（字段名）。要重命名多个键，可以添加更多参数，即 <code>from1, to1, from2, to2, ...</code>。

**语法：** _`Array`_.renameKeys(from, to)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `from` (String) - 要重命名的键
  * `to` (String) - 新的键名

**示例：**

  ```javascript
  // arr = [{'name':'bob'},{'name':'meg'}]
  arr.renameKeys('name', 'x') //=> [{"x": "bob"},{"x": "meg"}]]
  ```

## _`Array`_.**`reverse()`** <a href="#arrayreverse" id="arrayreverse"></a>

**说明：** 反转数组中元素的顺序

**语法：** _`Array`_.reverse()

**返回：** Array（数组）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  // arr = ['dog', 'bites', 'man']
  arr.reverse() //=> ['man', 'bites', 'dog']
  ```

## _`Array`_.**`slice()`** <a href="#arrayslice" id="arrayslice"></a>

**说明：** 返回数组的一部分，从 <code>start</code> 索引开始，到 <code>end</code> 索引结束（不含 end）。索引从 0 开始。

**语法：** _`Array`_.slice(start, end)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `start` (Number) - 可选 - 开始的位置。位置从 0 开始。负数表示从数组末尾倒数。
  * `end` (Number) - 可选 - 选择到哪个位置为止。end 位置的元素不包含在内。负数表示从数组末尾选择。省略时，一直取到数组末尾。

**示例：**

  ```javascript
  // arr = [1, 2, 3, 4, 5]
  arr.slice(2, 4) //=> [3, 4]
  ```

  ```javascript
  // arr = [1, 2, 3, 4, 5]
  arr.slice(2) //=> [3, 4, 5]
  ```

  ```javascript
  // arr = [1, 2, 3, 4, 5]
  arr.slice(-2) //=> [4, 5]
  ```

## _`Array`_.**`smartJoin()`** <a href="#arraysmartjoin" id="arraysmartjoin"></a>

**说明：** 从对象数组创建一个单一对象。数组中的每个对象为返回的对象提供一个字段。数组中的每个对象必须包含一个存键名的字段和一个存值的字段。

**语法：** _`Array`_.smartJoin(keyField, nameField)

**返回：** Object（对象）

**来源：** n8n 自定义功能

**参数：**

  * `keyField` (String) - 每个对象中存键名的字段
  * `nameField` (String) - 每个对象中存值的字段

**示例：**

  ```javascript
  // arr => [{'field':'age','value':2},{'field':'city','value':'Berlin'}]
  arr.smartJoin('field','value') //=> {"age": 2, "city": "Berlin"}
  ```

## _`Array`_.**`sort()`** <a href="#arraysort" id="arraysort"></a>

**说明：** 重新排列数组中的元素。按字母顺序给字符串排序时不需要参数。排序数字或对象时，请看示例。

**语法：** _`Array`_.sort(compareFunction(a, b)?)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `compareFunction` (function) - 可选 - 用于比较两个数组元素并返回一个数字来指示谁排在前面的函数：
<b>返回 < 0</b>：<code>a</code> 排在 <code>b</code> 前面
<b>返回 0</b>：<code>a</code> 和 <code>b</code> 相等（保持顺序不变）
<b>返回 > 0</b>：<code>b</code> 排在 <code>a</code> 前面

如果没有指定函数，则把所有值转成字符串并按字符代码比较。
  * `a` (any) - 函数中要比较的第一个元素
  * `b` (any) - 函数中要比较的第二个元素

**示例：**

  ```javascript
  // No need for a param when sorting strings
  // arr = ['d', 'a', 'c', 'b']
  arr.sort() //=> ['a', 'b', 'c', 'd']
  ```

  ```javascript
  // To sort numbers, you must use a function
  // arr = [4, 2, 1, 3]
  arr.sort((a, b) => (a - b)) //=> [1, 2, 3, 4]
  
  // Or using traditional function notation:
  arr.sort(function(a, b){return a - b}) //=> [1, 2, 3, 4]
  ```

  ```javascript
  // Sort in reverse alphabetical order
  // arr = ['d', 'a', 'c', 'b']
  arr.sort((a, b) => b.localeCompare(a)) //=> ['d', 'c', 'b', 'a']
  ```

  ```javascript
  // Sort array of objects by a property
  // arr = [{name:'Zak'}, {name:'Abe'}, {name:'Bob'}]
  arr.sort((a, b) => a.name.localeCompare(b.name)) //=> [{name:'Abe'}, {name:'Bob'}, {name:'Zak'}]
  ```

## _`Array`_.**`sum()`** <a href="#arraysum" id="arraysum"></a>

**说明：** 返回数组中所有数字的总和。如果含有非数字，会抛出错误。

**语法：** _`Array`_.sum()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = [12, 1, 5]
  arr.sum() //=> 18
  ```

## _`Array`_.**`toJsonString()`** <a href="#arraytojsonstring" id="arraytojsonstring"></a>

**说明：** 把数组转成 JSON 字符串。与 JavaScript 的 <code>JSON.stringify()</code> 相同。

**语法：** _`Array`_.toJsonString()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // obj = ['quick', 'brown', 'fox']
  obj.toJsonString() //=> '["quick","brown","fox"]'
  ```

## _`Array`_.**`toSpliced()`** <a href="#arraytospliced" id="arraytospliced"></a>

**说明：** 在指定位置添加和/或移除数组元素。

另见 <code>slice()</code> 和 <code>append()</code>。

**语法：** _`Array`_.toSpliced(start, deleteCount, elem1, ....., elemN)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `start` (Number) - 添加或移除元素的索引（位置）。新元素会插入到该索引处的元素之前。负数索引表示从数组末尾倒数。
  * `deleteCount` (Number) - 可选 - 要移除的元素数量。省略时，会移除从 <code>start</code> 索引开始往后的所有元素。
  * `elem1` (any) - 可选 - 要添加的第一个新元素
  * `elem2` (any) - 可选 - 要添加的第二个新元素
  * `elemN` (any) - 可选 - 要添加的第 N 个新元素

**示例：**

  ```javascript
  // Insert element at index 1
  // months = ['Jan', 'Mar']
  months.toSpliced(1, 0, "Feb") // ['Jan', 'Feb', 'Mar']
  ```

  ```javascript
  // Delete 2 elements starting at index 1
  // arr = ["don't", "make", "me", "do", "this"]
  arr.toSpliced(1, 2) // ["don't", "do", "this"]
  ```

  ```javascript
  // Replace 2 elements starting at index 1
  // arr = ["don't", "be", "evil"]
  arr.toSpliced(1, 2, 'eat', 'slugs') // ["don't", "eat", "slugs"]
  ```

## _`Array`_.**`toString()`** <a href="#arraytostring" id="arraytostring"></a>

**说明：** 把数组转成字符串，值之间用逗号分隔。想用其他分隔符，请改用 <code>join()</code>。

**语法：** _`Array`_.toString()

**返回：** String（字符串）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  // words = ['make', 'my', 'day']
  words.toString() //=> 'make,my,day'
  ```

## _`Array`_.**`union()`** <a href="#arrayunion" id="arrayunion"></a>

**说明：** 拼接两个数组，然后移除所有重复项

**语法：** _`Array`_.union(otherArray)

**返回：** Array（数组）

**来源：** n8n 自定义功能

**参数：**

  * `otherArray` (Array) - 与基础数组合并的数组

**示例：**

  ```javascript
  // arr = [1, 2]
  arr.union([2, 3]) //=> [1, 2, 3]
  
  ```

## _`Array`_.**`unique()`** <a href="#arrayunique" id="arrayunique"></a>

**说明：** 移除数组中任何重复的元素

**语法：** _`Array`_.unique()

**返回：** Array（数组）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // arr = ['quick', 'brown', 'quick']
  arr.unique() //=> ['quick', 'brown']
  ```
