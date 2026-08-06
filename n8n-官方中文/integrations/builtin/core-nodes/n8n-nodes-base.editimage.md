---
title: 编辑图片（Edit Image）
contentType:
  - integration
  - reference
priority: medium
nodeTitle: 编辑图片
originalFilePath: integrations/builtin/core-nodes/n8n-nodes-base.editimage.md
originalUrl: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage
url: https://docs.n8n.io/integrations/builtin/core-nodes/n8n-nodes-base.editimage
description: >-
  n8n 工作流自动化平台中「编辑图片」节点的文档。包含用法说明和示例链接。
layout:
  width: default
  title:
    visible: true
  description:
    visible: false
  tableOfContents:
    visible: true
  outline:
    visible: true
  pagination:
    visible: true
  metadata:
    visible: true
  tags:
    visible: true
  actions:
    visible: true
---

# 编辑图片（Edit Image）

{% hint style="info" %}
**大白话（这个节点是干什么的）**：Edit Image 节点相当于把「美图秀秀/PS 的基础功能」做进了工作流，可以在无人值守的情况下自动处理图片：模糊、加边框、裁剪、调整大小、旋转、加水印文字、两张图叠加、把某种颜色变透明等等。适合自动化场景，比如「用户上传头像 → 自动裁剪成正方形并压缩 → 保存」。
{% endhint %}

使用「编辑图片」（Edit Image）节点来处理和编辑图片。

{% hint style="info" %}
**依赖项（Dependencies）**

1. 如果你不是在 Docker 上运行 n8n，你需要安装 [GraphicsMagick](http://www.graphicsmagick.org/README.html)（一个开源的图片处理引擎，Edit Image 节点内部靠它干活）。
2. 你需要使用一个节点——比如 [从磁盘读写文件（Read/Write Files from Disk）](n8n-nodes-base.readwritefile.md) 节点或 [HTTP Request](n8n-nodes-base.httprequest/README.md) 节点——把图片文件作为数据属性传给 Edit Image 节点。

{% hint style="info" %}
**小白提示（怎么把图片送进来）**：图片在 n8n 里也是以「二进制字段」的形式存在的。你可以用 Read/Write Files from Disk 节点从服务器硬盘读取图片，或者用 HTTP Request 节点从网上下载图片，然后连接到 Edit Image 节点即可。
{% endhint %}
{% endhint %}

## 操作（Operations）

* 给图片添加**模糊（Blur）** 效果，降低清晰度
* 给图片添加**边框（Border）**
* 把一张图片**叠加（Composite）** 到另一张图片上
* **创建（Create）** 一张新图片
* **裁剪（Crop）** 图片
* 在图片上**绘制（Draw）**
* 获取图片的**信息（Get Information）**
* **多步骤（Multi Step）**：对图片执行多个操作
* **调整大小（Resize）**：改变图片的尺寸
* **旋转（Rotate）** 图片
* 沿 X 轴或 Y 轴**斜切（Shear）** 图片
* 给图片添加**文字（Text）**
* 让图片中的某一种颜色变**透明（Transparent）**

## 节点参数（Node parameters）

此节点的参数取决于你选择的操作。

{% hint style="info" %}
**小白提示（Property Name 是什么）**：下面每个操作都会要求填 **Property Name（属性名）**，意思是「图片存在输入数据的哪个二进制字段里」。默认情况下图片通常在 `data` 字段，如果你用特定节点读取的图片，按它的输出字段名填就行。
{% endhint %}

### 模糊参数（Blur parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Blur（模糊强度）**：输入一个 0 到 1000 之间的数字，设置模糊的强度。数字越大，图片越模糊。
* **Sigma（西格玛）**：输入一个 0 到 1000 之间的数字，设置模糊的 sigma 值。数字越大，图片越模糊。

{% hint style="info" %}
**大白话（Blur 和 Sigma 的区别）**：简单理解：**Blur** 是模糊的「总强度」，**Sigma** 是模糊的「扩散程度」。两者都调大，模糊效果更强。想快速给敏感信息（如地址、人脸）打码，可以用它。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 边框参数（Border parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Border Width（边框宽度）**：输入边框的宽度。
* **Border Height（边框高度）**：输入边框的高度。
* **Border Color（边框颜色）**：设置边框的颜色。你可以输入十六进制颜色值（hex），或者点击颜色色块打开取色器选择。

可参考[节点选项](#node-options)进行可选的配置。

### 叠加参数（Composite parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。这张图是你要叠加的**底层图（base image）**。
* **Composite Image Property（叠加图片属性）**：输入存放要叠加到 **Property Name** 图片之上的图片的二进制属性名称。
* **Operator（叠加方式）**：选择叠加运算符，它决定叠加的效果。选项包括：
  * **Add（相加）**
  * **Atop（置于其上）**
  * **Bumpmap（凹凸贴图）**
  * **Copy（复制）**
  * **Copy Black（复制黑色）**
  * **Copy Blue（复制蓝色）**
  * **Copy Cyan（复制青色）**
  * **Copy Green（复制绿色）**
  * **Copy Magenta（复制品红）**
  * **Copy Opacity（复制不透明度）**
  * **Copy Red（复制红色）**
  * **Copy Yellow（复制黄色）**
  * **Difference（差值）**
  * **Divide（相除）**
  * **In（取交集）**
  * **Minus（相减）**
  * **Multiply（正片叠底）**
  * **Out（取差集）**
  * **Over（覆盖，最常用的叠加方式）**
  * **Plus（相加）**
  * **Subtract（减去）**
  * **Xor（异或）**
* **Position X（X 轴位置）**：输入叠加图片的 x 轴（水平）位置。
* **Position Y（Y 轴位置）**：输入叠加图片的 y 轴（垂直）位置。

{% hint style="info" %}
**大白话（Composite 是什么）**：把两张图合成一张。最常见的是用 **Over**：上层图放在底层图上面（比如把 logo 放在照片角落）。其他运算符是更高级的混合模式，一般用不到，先记住 **Over** 就行。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 创建参数（Create parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Background Color（背景颜色）**：设置图片的背景颜色。你可以输入十六进制颜色值，或者点击颜色色块打开取色器选择。
* **Image Width（图片宽度）**：输入图片的宽度。
* **Image Height（图片高度）**：输入图片的高度。

{% hint style="info" %}
**大白话（Create 是干什么的）**：不依赖任何输入图片，直接生成一张纯色图片（相当于新建一个「画布」）。比如生成一张指定尺寸的占位图。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 裁剪参数（Crop parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Width（宽度）**：输入你想要裁剪到的宽度。
* **Height（高度）**：输入你想要裁剪到的高度。
* **Position X（X 轴位置）**：输入裁剪开始的 x 轴（水平）位置。
* **Position Y（Y 轴位置）**：输入裁剪开始的 y 轴（垂直）位置。

{% hint style="info" %}
**大白话（怎么裁剪）**：把原图想象成一张大纸，你指定「从左上角 (Position X, Position Y) 这个点开始，向右 Width、向下 Height」画一个矩形，只保留矩形里的部分。比如原图 1000×800，想取左上角 500×500 的正方形，就填 Position X=0、Position Y=0、Width=500、Height=500。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 绘制参数（Draw parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Primitive（图形）**：选择要绘制的图形。可选择：
  * **Circle（圆形）**
  * **Line（直线）**
  * **Rectangle（矩形）**
* **Color（颜色）**：设置图形的颜色。你可以输入十六进制颜色值，或者点击颜色色块打开取色器选择。
* **Start Position X（起始 X 位置）**：输入开始绘制的 x 轴（水平）位置。
* **Start Position Y（起始 Y 位置）**：输入开始绘制的 y 轴（垂直）位置。
* **End Position X（结束 X 位置）**：输入停止绘制的 x 轴（水平）位置。
* **End Position Y（结束 Y 位置）**：输入开始绘制的 y 轴（垂直）位置。
* **Corner Radius（圆角半径）**：输入一个数字设置圆角半径。添加圆角半径会让绘制的图形边角变圆。

{% hint style="info" %}
**大白话（怎么绘制）**：画**直线**时，起点填 Start 位置、终点填 End 位置；画**矩形**时，起点是左上角、终点是右下角；画**圆形**时，起点是圆心、终点用来确定半径大小。想要圆角矩形（像按钮那样），就给 **Corner Radius** 填一个数字。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 获取信息参数（Get Information parameters）

对于此操作，你只需要填写存放图片数据的二进制属性的 **Property Name（属性名）** 即可。

{% hint style="info" %}
**大白话（这个操作干嘛的）**：输出图片的尺寸、格式等基本信息（比如宽高、文件大小、颜色模式），不修改图片。适合在自动化流程里先「看一眼」图片符不符合要求。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 多步骤参数（Multi Step parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Operations（操作）**：添加你希望「多步骤」操作执行的操作。你可以使用任何其他操作。

{% hint style="info" %}
**大白话（Multi Step 是什么）**：一次对图片执行多个操作，比如「先裁剪、再加水印、最后调整大小」，不用串联好几个 Edit Image 节点。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 调整大小参数（Resize parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Width（宽度）**：输入你希望图片达到的新宽度。
* **Height（高度）**：输入你希望图片达到的新高度。
* **Option（选项）**：选择你想要如何调整图片大小。可选择：
  * **Ignore Aspect Ratio（忽略宽高比）**：忽略宽高比，把图片缩放为你输入的精确高度和宽度。
  * **Maximum Area（最大面积）**：你输入的高度和宽度是图片的最大面积/尺寸。图片保持宽高比，不会比你输入的高度和/或宽度更大。
  * **Minimum Area（最小面积）**：你输入的高度和宽度是图片的最小面积/尺寸。图片保持宽高比，不会比你输入的高度和/或宽度更小。
  * **Only if Larger（仅当更大时）**：只有当图片比你输入的宽度和高度大时才调整大小。图片保持宽高比。
  * **Only if Smaller（仅当更小时）**：只有当图片比你输入的宽度和高度小时才调整大小。图片保持宽高比。
  * **Percent（百分比）**：把输入的宽度和高度作为原图的百分比来调整图片大小。

{% hint style="info" %}
**小白提示（宽高比是什么）**：宽高比就是图片「宽和高的比例」，比如 4:3、16:9。直接拉伸会变形。想让图片不变形地缩小，用 **Maximum Area**（塞进指定框内）最省心；想把图放大的同时保证至少填满某个尺寸，用 **Minimum Area**。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 旋转参数（Rotate parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Rotate（旋转角度）**：输入旋转图片的度数，范围是 -360 到 360。
* **Background Color（背景颜色）**：设置图片的背景颜色。你可以输入十六进制颜色值，或者点击颜色色块打开取色器选择。当图片旋转 90 度的倍数时，这个颜色用来填充空出来的背景。如果 **Rotate** 字段使用 90 度的倍数，则不会使用背景颜色。

可参考[节点选项](#node-options)进行可选的配置。

### 斜切参数（Shear parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Degrees X（X 轴度数）**：输入从 x 轴方向斜切的度数。
* **Degrees Y（Y 轴度数）**：输入从 y 轴方向斜切的度数。

{% hint style="info" %}
**大白话（斜切是什么）**：斜切（Shear）让图片沿某个轴「歪斜」变形，像把正方形推成平行四边形。属于比较少见的效果操作，一般做特效时才用。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 文字参数（Text parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Text（文字）**：输入你想要写在图片上的文字。
* **Font Size（字号）**：选择文字的字号。
* **Font Color（字体颜色）**：设置字体颜色。你可以输入十六进制颜色值，或者点击颜色色块打开取色器选择。
* **Position X（X 轴位置）**：输入文字开始的 x 轴（水平）位置。
* **Position Y（Y 轴位置）**：输入文字开始的 y 轴（垂直）位置。
* **Max Line Length（最大行长度）**：输入一行文字在换行之前最多可以有多少个字符。

{% hint style="info" %}
**大白话（怎么用）**：给图片加水印、加标题就用它。**Position X / Y** 决定文字从图片的哪个位置开始；如果文字太长，设置 **Max Line Length** 让它自动换行。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

### 透明参数（Transparent parameters）

* **Property Name（属性名）**：输入存放图片数据的二进制属性名称。
* **Color（颜色）**：设置要变成透明的颜色。你可以输入十六进制颜色值，或者点击颜色色块打开取色器选择。

{% hint style="info" %}
**大白话（怎么用）**：把图片中所有「和所选颜色一样」的像素变成透明。比如产品图的纯白背景，把颜色设为白色，背景就变成透明的了（适合做 PNG 素材）。
{% endhint %}

可参考[节点选项](#node-options)进行可选的配置。

## 节点选项（Node options）

* **File Name（文件名）**：输入输出文件的文件名。
* **Format（格式）**：输入输出文件的图片格式。可选择：
  * **bmp**
  * **gif**
  * **jpeg**
  * **png**
  * **tiff**
  * **WebP**

**Text（文字）** 操作还包含 **Font Name or ID（字体名称或 ID）** 选项。从下拉列表中选择文本字体，或使用[表达式](https://app.gitbook.com/s/rPN1zU5jaYNvwH7RzxqA/work-with-data/expressions-versus-data-nodes)指定一个 ID。

{% hint style="info" %}
**小白提示（格式怎么选）**：需要透明背景选 **png**；网页展示追求体积小选 **jpeg**（不支持透明）或 **WebP**；动图选 **gif**。不知道选什么就选 **png**，兼容性最好。
{% endhint %}

## 模板和示例（Templates and examples）

[浏览 Edit Image 集成模板](https://n8n.io/integrations/edit-image) 或[搜索所有模板](https://n8n.io/workflows/)
