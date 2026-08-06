---
nodeTitle: String
originalFilePath: data/expression-reference/string.md
originalUrl: 'https://docs.n8n.io/data/expression-reference/string'
url: >-
  https://docs.n8n.io/build/work-with-data/transform-data/expression-reference/string
layout:
  description:
    visible: false
---
# String 字符串 <a href="#string" id="string"></a>

{% hint style="info" %}
**大白话**：字符串常用操作：拼接 `concat()`、查找 `includes()`/`indexOf()`/`search()`/`match()`、截取 `slice()`/`substring()`/`split()`、替换 `replace()`/`replaceAll()`、大小写转换 `toUpperCase()`/`toLowerCase()`/`toTitleCase()`、判断类型 `isEmail()`/`isUrl()`/`isDomain()`/`isNumeric()`、提取内容 `extractEmail()`/`extractUrl()`/`extractDomain()`，还能 `base64Encode()`/`urlEncode()`/`hash()`/`parseJson()` 做编码转换。
{% endhint %}

## _`String`_.**`base64Decode()`** <a href="#stringbase64decode" id="stringbase64decode"></a>

**说明：** 把 base64 编码的字符串解码为普通文本

**语法：** _`String`_.base64Encode()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "aGVsbG8=".base64Decode() //=> "hello"
  ```

## _`String`_.**`base64Encode()`** <a href="#stringbase64encode" id="stringbase64encode"></a>

**说明：** 把普通文本编码成 base64 字符串

**语法：** _`String`_.base64Encode()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "hello".base64Encode() //=> "aGVsbG8="
  ```

## _`String`_.**`concat()`** <a href="#stringconcat" id="stringconcat"></a>

**说明：** 把一个或多个字符串接到基础字符串的末尾。也可以改用 <code>+</code> 运算符（见示例）。

**语法：** _`String`_.concat(string1, string2?, ..., stringN?)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `string1` (String) - 要追加的第一个字符串
  * `string2` (String) - 可选 - 要追加的第二个字符串
  * `stringN` (String) - 可选 - 要追加的第 N 个字符串

**示例：**

  ```javascript
  'sea'.concat('food') //=> 'seafood'
  'sea' + 'food' //=> 'seafood'
  ```

  ```javascript
  'work'.concat('a', 'holic') //=> 'workaholic'
  ```

## _`String`_.**`extractDomain()`** <a href="#stringextractdomain" id="stringextractdomain"></a>

**说明：** 如果字符串是邮箱地址或 URL，返回它的域名（找不到则返回 <code>undefined</code>）。

如果字符串还包含其他内容，可以先试试用 <code>extractEmail()</code> 或 <code>extractUrl()</code>。

**语法：** _`String`_.extractDomain()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "me@example.com".extractDomain() //=> 'example.com'
  ```

  ```javascript
  "http://n8n.io/workflows".extractDomain() //=> 'n8n.io'
  ```

  ```javascript
  "It's me@example.com".extractEmail().extractDomain() //=> 'example.com'
  ```

## _`String`_.**`extractEmail()`** <a href="#stringextractemail" id="stringextractemail"></a>

**说明：** 提取字符串中找到的第一个邮箱地址。找不到则返回 <code>undefined</code>。

**语法：** _`String`_.extractEmail()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "My email is me@example.com".extractEmail() //=> 'me@example.com'
  ```

## _`String`_.**`extractUrl()`** <a href="#stringextracturl" id="stringextracturl"></a>

**说明：** 提取字符串中找到的第一个 URL。找不到则返回 <code>undefined</code>。只识别完整的 URL，例如以 <code>http</code> 开头的。

**语法：** _`String`_.extractUrl()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "Check out http://n8n.io".extractUrl() //=> 'http://n8n.io'
  ```

## _`String`_.**`extractUrlPath()`** <a href="#stringextracturlpath" id="stringextracturlpath"></a>

**说明：** 返回 URL 中域名之后的部分，没有 URL 则返回 <code>undefined</code>。

如果字符串还包含其他内容，可以先试试用 <code>extractUrl()</code>。

**语法：** _`String`_.extractUrlPath()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "http://n8n.io/workflows".extractUrlPath() //=> '/workflows'
  ```

  ```javascript
  "Check out http://n8n.io/workflows".extractUrl().extractUrlPath() //=> '/workflows'
  ```

## _`String`_.**`hash()`** <a href="#stringhash" id="stringhash"></a>

**说明：** 用指定算法对字符串做哈希。未指定时默认使用 md5。

**语法：** _`String`_.hash(algo?)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `algo` (String) - 可选 - 使用的哈希算法。可选值为 <code>md5</code>、<code>base64</code>、<code>sha1</code>、<code>sha224</code>、<code>sha256</code>、<code>sha384</code>、<code>sha512</code>、<code>sha3</code>、<code>ripemd160</code>
        

**示例：**

  ```javascript
  "hello".hash() //=> '5d41402abc4b2a76b9719d911017c592'
  ```

## _`String`_.**`includes()`** <a href="#stringincludes" id="stringincludes"></a>

**说明：** 如果字符串包含 <code>searchString</code>，则返回 <code>true</code>。区分大小写。

**语法：** _`String`_.includes(searchString, start?)

**返回：** Boolean（布尔值）

**来源：** JavaScript 函数

**参数：**

  * `searchString` (String) - 要搜索的文本
  * `start` (Number) - 可选 - 开始搜索的位置（索引）

**示例：**

  ```javascript
  'team'.includes('tea') //=> true
  'team'.includes('i') //=> false 
  ```

  ```javascript
  // Returns false if the case doesn't match, so consider using .toLowerCase() first
  'team'.includes('Tea') //=> false
  'Team'.toLowerCase().includes('tea') //=> true
  ```

## _`String`_.**`indexOf()`** <a href="#stringindexof" id="stringindexof"></a>

**说明：** 返回 <code>searchString</code> 在基础字符串中第一次出现的索引（位置），找不到则返回 -1。区分大小写。

**语法：** _`String`_.indexOf(searchString, start?)

**返回：** Number（数字）

**来源：** JavaScript 函数

**参数：**

  * `searchString` (String) - 要搜索的文本
  * `start` (Number) - 可选 - 开始搜索的位置（索引）

**示例：**

  ```javascript
  'steam'.indexOf('tea') //=> 1
  'steam'.indexOf('i') //=> -1 
  ```

  ```javascript
  // Returns -1 if the case doesn't match, so consider using .toLowerCase() first
  'STEAM'.indexOf('tea') //=> -1
  'STEAM'.toLowerCase().indexOf('tea') //=> 1
  ```

## _`String`_.**`isDomain()`** <a href="#stringisdomain" id="stringisdomain"></a>

**说明：** 如果字符串是一个域名，则返回 <code>true</code>

**语法：** _`String`_.isDomain()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "n8n.io".isDomain() //=> true
  ```

  ```javascript
  "http://n8n.io".isDomain() //=> false
  ```

  ```javascript
  "hello".isDomain() //=> false
  ```

## _`String`_.**`isEmail()`** <a href="#stringisemail" id="stringisemail"></a>

**说明：** 如果字符串是一个邮箱地址，则返回 <code>true</code>

**语法：** _`String`_.isEmail()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "me@example.com".isEmail() //=> true
  ```

  ```javascript
  "It's me@example.com".isEmail() //=> false
  ```

  ```javascript
  "hello".isEmail() //=> false
  ```

## _`String`_.**`isEmpty()`** <a href="#stringisempty" id="stringisempty"></a>

**说明：** 如果字符串没有字符，或者是 <code>null</code>，则返回 <code>true</code>

**语法：** _`String`_.isEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "".isEmpty() // => true
  ```

  ```javascript
  "hello".isEmpty() // => false
  ```

## _`String`_.**`isNotEmpty()`** <a href="#stringisnotempty" id="stringisnotempty"></a>

**说明：** 如果字符串至少有一个字符，则返回 <code>true</code>

**语法：** _`String`_.isNotEmpty()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "hello".isNotEmpty() // => true
  ```

  ```javascript
  "".isNotEmpty() // => false
  ```

## _`String`_.**`isNumeric()`** <a href="#stringisnumeric" id="stringisnumeric"></a>

**说明：** 如果字符串表示一个数字，则返回 <code>true</code>

**语法：** _`String`_.isNumeric()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "1.2234".isNumeric() // true
  ```

  ```javascript
  "hello".isNumeric() // false
  ```

  ```javascript
  "123E23".isNumeric() // true
  ```

## _`String`_.**`isUrl()`** <a href="#stringisurl" id="stringisurl"></a>

**说明：** 如果字符串是一个有效的 URL，则返回 <code>true</code>

**语法：** _`String`_.isUrl()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "https://n8n.io".isUrl() //=> true
  ```

  ```javascript
  "n8n.io".isUrl() //=> false
  ```

  ```javascript
  "hello".isUrl() //=> false
  ```

## _`String`_.**`length`** <a href="#stringlength" id="stringlength"></a>

**说明：** 字符串中字符的数量

**语法：** _`String`_.length

**返回：** Number（数字）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  "hello".length //=> 5
  ```

## _`String`_.**`match()`** <a href="#stringmatch" id="stringmatch"></a>

**说明：** 用<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a>匹配字符串。返回包含第一个匹配项的数组；如果正则表达式设置了 <code>g</code> 标志，则返回所有匹配项。没有匹配项时返回 <code>null</code>。

如果只是想检查文本是否存在，可以考虑用 <code>includes()</code>。

**语法：** _`String`_.match(regexp)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `regexp` (RegExp) - 包含要查找模式的<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a>。如果带有 <code>g</code> 标志，会查找多个匹配项（见示例）。

**示例：**

  ```javascript
  // Match all words starting with 'r'
  "rock and roll".match(/r[^ ]*/g) //=> ['rock', 'roll']
  ```

  ```javascript
  // Match first word starting with 'r' (no 'g' flag)
  "rock and roll".match(/r[^ ]*/) //=> ['rock']
  ```

  ```javascript
  // For case-insensitive, add 'i' flag
  "ROCK and roll".match(/r[^ ]*/ig) //=> ['ROCK', 'roll']
  ```

## _`String`_.**`parseJson()`** <a href="#stringparsejson" id="stringparsejson"></a>

**说明：** 返回字符串所表示的 JavaScript 对象或值；如果字符串不是有效 JSON，则返回 <code>undefined</code>。不支持单引号 JSON。

**语法：** _`String`_.parseJson()

**返回：** any（任意类型）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  '{"name":"Nathan"}'.parseJson() //=> {"name":"Nathan"}
  ```

  ```javascript
  "{'name':'Nathan'}".parseJson() //=> undefined
  ```

  ```javascript
  'hello'.parseJson() //=> undefined
  ```

## _`String`_.**`quote()`** <a href="#stringquote" id="stringquote"></a>

**说明：** 给字符串加上引号，并转义字符串中已有的引号。在构造 JSON、SQL 等时很有用。

**语法：** _`String`_.quote(mark?)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `mark` (String) - 可选 - 要使用的引号类型

**示例：**

  ```javascript
  'Nathan says "hi"'.quote() //=> '"Nathan says \"hi\""'
  ```

## _`String`_.**`removeMarkdown()`** <a href="#stringremovemarkdown" id="stringremovemarkdown"></a>

**说明：** 移除字符串中的所有 Markdown 格式。也会移除 HTML 标签。

**语法：** _`String`_.removeMarkdown()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "*bold*, [link]()".removeMarkdown() //=> "bold, link"
  ```

## _`String`_.**`removeTags()`** <a href="#stringremovetags" id="stringremovetags"></a>

**说明：** 移除字符串中的标签，例如 HTML 或 XML 标签

**语法：** _`String`_.removeTags()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "<b>bold</b>, <a>link</a>".removeTags() //=> "bold, link"
  ```

## _`String`_.**`replace()`** <a href="#stringreplace" id="stringreplace"></a>

**说明：** 返回把 <code>pattern</code> 的第一次出现替换成 <code>replacement</code> 后的字符串。

要替换所有出现的地方，请改用 <code>replaceAll()</code>。

**语法：** _`String`_.replace(pattern, replacement)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `pattern` (String|RegExp) - 字符串中要替换的模式。可以是匹配用的字符串或<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a>。
  * `replacement` (String) - 用来替换的新文本

**示例：**

  ```javascript
  'Red or blue or green'.replace('or', 'and') //=> 'Red and blue or green'
  ```

  ```javascript
  // A global, case-insensitive replacement:
  let text = "Mr Blue has a blue house and a blue car";
  let result = text.replace(/blue/gi, "red");
  ```

  ```javascript
  // A function to return the replacement text:
  let text = "Mr Blue has a blue house and a blue car";
  let result = text.replace(/blue|house|car/i, function (x) {
    return x.toUpperCase();
  });
  ```

## _`String`_.**`replaceAll()`** <a href="#stringreplaceall" id="stringreplaceall"></a>

**说明：** 返回把 <code>pattern</code> 的所有出现都替换成 <code>replacement</code> 后的字符串

**语法：** _`String`_.replaceAll(pattern, replacement)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `pattern` (String|RegExp) - 字符串中要替换的模式。可以是匹配用的字符串或<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a>。
  * `replacement` (String|function) - 用来替换的新文本。可以是字符串，也可以是一个返回字符串的函数（见示例）。

**示例：**

  ```javascript
  'Red or blue or green'.replace('or', 'and') //=> 'Red and blue and green'
  ```

  ```javascript
  // Uppercase any occurrences of 'blue' or 'car'
  // (You must include the 'g' flag when using a regex)
  
  // text = 'Mr Blue has a blue car'
  text.replaceAll(/blue|car/gi, x => x.toUpperCase()) //=> 'Mr BLUE has a BLUE CAR'
  
  // Or with traditional function notation:
  text.replaceAll(/blue|car/gi, function(x){return x.toUpperCase()}) //=> 'Mr BLUE has a BLUE CAR'
  ```

## _`String`_.**`replaceSpecialChars()`** <a href="#stringreplacespecialchars" id="stringreplacespecialchars"></a>

**说明：** 把字符串中的特殊字符替换成最接近的 ASCII 字符

**语法：** _`String`_.replaceSpecialChars()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "déjà".replaceSpecialChars() //=> "deja"
  ```

## _`String`_.**`search()`** <a href="#stringsearch" id="stringsearch"></a>

**说明：** 返回模式在字符串中第一次出现的索引（位置），找不到则返回 -1。模式用<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a>指定。想用普通文本，请看 <code>indexOf()</code>。

**语法：** _`String`_.search(regexp)

**返回：** Number（数字）

**来源：** JavaScript 函数

**参数：**

  * `regexp` (RegExp) - 包含要查找模式的<a href=”https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_expressions”>正则表达式</a>

**示例：**

  ```javascript
  // Pos of first word starting with 'n'
  "Neat n8n node".search(/n[^ ]*/) //=> 5
  ```

  ```javascript
  // Case-insensitive match with 'i'
  // Pos of first word starting with 'n' or 'N'
  "Neat n8n node".search(/n[^ ]*/i) //=> 0
  ```

## _`String`_.**`slice()`** <a href="#stringslice" id="stringslice"></a>

**说明：** 在指定位置截取字符串的一段。更高级的提取方式，请看 <code>match()</code>。

**语法：** _`String`_.slice(start, end?)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `start` (Number) - 开始的位置。位置从 0 开始。负数表示从字符串末尾倒数。
  * `end` (String) - 可选 - 选择到哪个位置为止。end 位置的字符不包含在内。负数表示从字符串末尾选择。省略时，一直取到字符串末尾。

**示例：**

  ```javascript
  'Hello from n8n'.slice(0, 5) //=> 'Hello'
  ```

  ```javascript
  'Hello from n8n'.slice(6) //=> 'from n8n'
  ```

  ```javascript
  'Hello from n8n'.slice(-3) //=> 'n8n'
  ```

## _`String`_.**`split()`** <a href="#stringsplit" id="stringsplit"></a>

**说明：** 把字符串拆分成子字符串数组。每次拆分都在 <code>separator</code> 处进行，分隔符不会包含在输出里。

与对数组使用 <code>join()</code> 正好相反。

**语法：** _`String`_.split(separator?, limit?)

**返回：** Array（数组）

**来源：** JavaScript 函数

**参数：**

  * `separator` (String) - 可选 - 用于拆分的字符串（或正则表达式）。省略时，返回只包含原字符串的数组。
  * `limit` (Number) - 可选 - 最多返回的数组元素数量。省略时返回所有元素。

**示例：**

  ```javascript
  "wind,fire,water".split(",") //=> ['wind', 'fire', 'water']
  ```

  ```javascript
  "me and you and her".split("and") //=> ['me ', ' you ', ' her']
  ```

  ```javascript
  // Split one or more of space, comma and '?' using a regular expression
  "me? you, and her".split(/[ ,?]+/) //=> ['me', 'you', 'and', 'her']
  ```

## _`String`_.**`startsWith()`** <a href="#stringstartswith" id="stringstartswith"></a>

**说明：** 如果字符串以 <code>searchString</code> 开头，则返回 <code>true</code>。区分大小写。

**语法：** _`String`_.startsWith(searchString, start?)

**返回：** Boolean（布尔值）

**来源：** JavaScript 函数

**参数：**

  * `searchString` (String) - 用来检查基础字符串开头是否匹配的文本
  * `start` (Number) - 可选 - 开始搜索的位置（索引）

**示例：**

  ```javascript
  'team'.startsWith('tea') //=> true
  'team'.startsWith('Tea') //=> false
  ```

  ```javascript
  // Returns false if the case doesn't match, so consider using .toLowerCase() first
  'Team'.toLowerCase().startsWith('tea') //=> true
  ```

## _`String`_.**`substring()`** <a href="#stringsubstring" id="stringsubstring"></a>

**说明：** 在指定位置截取字符串的一段。更高级的提取方式，请看 <code>match()</code>。

**语法：** _`String`_.substring(start, end?)

**返回：** String（字符串）

**来源：** JavaScript 函数

**参数：**

  * `start` (Number) - 开始的位置。位置从 0 开始。
  * `end` (String) - 可选 - 选择到哪个位置为止。end 位置的字符不包含在内。省略时，一直取到字符串末尾。

**示例：**

  ```javascript
  'Hello from n8n'.substring(0, 5) //=> 'Hello'
  ```

  ```javascript
  'Hello from n8n'.substring(6) //=> 'from n8n'
  ```

## _`String`_.**`toBoolean()`** <a href="#stringtoboolean" id="stringtoboolean"></a>

**说明：** 把字符串转成布尔值。<code>0</code>、<code>false</code> 和 <code>no</code> 解析为 <code>false</code>，其他所有值解析为 <code>true</code>。不区分大小写。

**语法：** _`String`_.toBoolean()

**返回：** Boolean（布尔值）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "true".toBoolean() //=> true
  ```

  ```javascript
  "false".toBoolean() //=> false
  ```

  ```javascript
  "0".toBoolean() //=> false
  ```

  ```javascript
  "hello".toBoolean() //=> true
  ```

## _`String`_.**`toDateTime()`** <a href="#stringtodatetime" id="stringtodatetime"></a>

**说明：** 把字符串转成 DateTime。方便做进一步转换。支持的字符串格式有 ISO 8601、HTTP、RFC2822、SQL 和毫秒 Unix 时间戳。

要解析其他格式，请使用 <a href=”https://moment.github.io/luxon/api-docs/index.html#datetimefromformat”> <code>DateTime.fromFormat()</code></a>。

**语法：** _`String`_.toDateTime()

**返回：** DateTime

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "2024-03-29T18:06:31.798+01:00".toDateTime()
  ```

  ```javascript
  "Fri, 29 Mar 2024 18:08:01 +0100".toDateTime()
  ```

  ```javascript
  "20240329".toDateTime()
  ```

  ```javascript
  "1711732132990".toDateTime()
  ```

## _`String`_.**`toJsonString()`** <a href="#stringtojsonstring" id="stringtojsonstring"></a>

**说明：** 准备好要插入 JSON 对象的字符串。转义所有引号和特殊字符（如换行符），并给字符串加上引号。

与 JavaScript 的 <code>JSON.stringify()</code> 相同。

**语法：** _`String`_.toJsonString()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  // str = 'The "best" colours: red\nbrown'
  str.toJsonString() //=> '"The \\"best\\" colours: red\\nbrown"'
  ```

## _`String`_.**`toLowerCase()`** <a href="#stringtolowercase" id="stringtolowercase"></a>

**说明：** 把字符串中的所有字母转成小写

**语法：** _`String`_.toLowerCase()

**返回：** String（字符串）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  "I'm SHOUTing".toLowerCase() //=> "i'm shouting"
  ```

## _`String`_.**`toNumber()`** <a href="#stringtonumber" id="stringtonumber"></a>

**说明：** 把表示数字的字符串转成数字。如果字符串不是以有效数字开头，会抛出错误。

**语法：** _`String`_.toNumber()

**返回：** Number（数字）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "123".toNumber() //=> 123
  ```

  ```javascript
  "1.23E10".toNumber() //=> 12300000000
  ```

## _`String`_.**`toSentenceCase()`** <a href="#stringtosentencecase" id="stringtosentencecase"></a>

**说明：** 把字符串改成句子大小写（sentence case）。每个句子的首字母大写，其余字母小写。

**语法：** _`String`_.toSentenceCase()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "quick! brown FOX".toSentenceCase() //=> "Quick! Brown fox"
  ```

## _`String`_.**`toSnakeCase()`** <a href="#stringtosnakecase" id="stringtosnakecase"></a>

**说明：** 把字符串改成蛇形命名（snake case）。空格和连字符替换成 <code>_</code>，移除符号，所有字母小写。

**语法：** _`String`_.toSnakeCase()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "quick brown $FOX".toSnakeCase() //=> "quick_brown_fox"
  ```

## _`String`_.**`toTitleCase()`** <a href="#stringtotitlecase" id="stringtotitlecase"></a>

**说明：** 把字符串改成标题大小写（title case）。每个单词的首字母大写，其余保持不变。短介词和连词不大写（例如 'a'、'the'）。

**语法：** _`String`_.toTitleCase()

**返回：** String（字符串）

**来源：** n8n 自定义功能

**示例：**

  ```javascript
  "quick a brown FOX".toTitleCase() //=> "Quick a Brown Fox"
  ```

## _`String`_.**`toUpperCase()`** <a href="#stringtouppercase" id="stringtouppercase"></a>

**说明：** 把字符串中的所有字母转成大写

**语法：** _`String`_.toUpperCase()

**来源：** JavaScript 函数

**示例：**

  ```javascript
  "I'm not angry".toUpperCase() //=> "I'M NOT ANGRY"
  ```

## _`String`_.**`trim()`** <a href="#stringtrim" id="stringtrim"></a>

**说明：** 移除字符串两端的空白字符。空白包括换行、制表符、空格等。

**语法：** _`String`_.trim()

**返回：** String（字符串）

**来源：** JavaScript 函数

**示例：**

  ```javascript
  '   lonely   '.trim() //=> 'lonely'
  ```

## _`String`_.**`urlDecode()`** <a href="#stringurldecode" id="stringurldecode"></a>

**说明：** 解码 URL 编码的字符串。把形如 <code>%XX</code> 的字符代码替换成对应的字符。

**语法：** _`String`_.urlDecode(allChars?)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `allChars` (Boolean) - 可选 - 是否解码属于 URI 语法的字符（例如 <code>=</code>、<code>?</code>）

**示例：**

  ```javascript
  "name%3DNathan%20Automat".urlDecode() //=> "name=Nathan Automat"
  ```

  ```javascript
  "name%3DNathan%20Automat".urlDecode(true) //=> "name%3DNathan Automat"
  ```

## _`String`_.**`urlEncode()`** <a href="#stringurlencode" id="stringurlencode"></a>

**说明：** 对字符串编码，使其可以用于 URL。空格和特殊字符会替换成形如 <code>%XX</code> 的代码。

**语法：** _`String`_.urlEncode(allChars?)

**返回：** String（字符串）

**来源：** n8n 自定义功能

**参数：**

  * `allChars` (Boolean) - 可选 - 是否编码属于 URI 语法的字符（例如 <code>=</code>、<code>?</code>）

**示例：**

  ```javascript
  "name=Nathan Automat".urlEncode() //=> "name%3DNathan%20Automat"
  ```

  ```javascript
  "name=Nathan Automat".urlEncode(true) //=> "name=Nathan%20Automat"
  ```
