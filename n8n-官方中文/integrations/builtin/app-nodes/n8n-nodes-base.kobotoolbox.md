---
title: KoboToolbox 节点文档
description: >-
  学习如何在 n8n 中使用 KoboToolbox 节点。按照技术文档将
  KoboToolbox 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: KoboToolbox 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.kobotoolbox.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kobotoolbox'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.kobotoolbox'
---

{% hint style="info" %}
**大白话**：KoboToolbox 是公益组织和非营利机构常用的「调查问卷 / 数据采集」工具，在非洲和东南亚做田野调查、灾后评估时用得很多（手机离线也能填表）。这个节点能让你在 n8n 里管理：文件（File）、表单（Form）、钩子（Hook，外部回调）、以及问卷提交的数据（Submission），支持增删改查、重新部署表单、重试钩子、校验提交数据等。还内置了「数据整理」功能，能把提交数据从字符串变成更规整的 JSON 结构。
{% endhint %}

# KoboToolbox 节点

使用 KoboToolbox 节点来自动化你在 KoboToolbox 中的工作，并把它与其它应用集成。n8n 内置支持 KoboToolbox 的大量功能，包括创建、更新、删除、获取文件（File）、表单（Form）、钩子（Hook）和提交数据（Submission）。

在本页你可以看到 KoboToolbox 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [KoboToolbox 凭证](../credentials/kobotoolbox.md)。
{% endhint %}

## 操作

* File（文件）
	* Create（创建）
	* Delete（删除）
	* Get（获取单个）
	* Get Many（获取多个）
* Form（表单）
    * Get（获取单个）
    * Get Many（获取多个）
		* Redeploy（重新部署）
* Hook（钩子）
    * Get（获取单个）
    * Get Many（获取多个）
    * Logs（查看日志）
    * Retry All（全部重试）
    * Retry One（重试单个）
* Submission（提交数据）
    * Delete（删除）
    * Get（获取单个）
    * Get Many（获取多个）
    * Get Validation Status（获取校验状态）
    * Update Validation Status（更新校验状态）

## 模板与示例

[浏览 KoboToolbox 节点的官方集成模板](https://n8n.io/integrations/kobotoolbox)，或[搜索全部模板](https://n8n.io/workflows/)。

## 选项

### 查询选项（Query Options）

**Query Submission（查询提交数据）** 操作支持以下查询选项：

* 在 **Parameters（参数）** 面板的主区域里：
    * **Start**：控制查询开始的索引偏移量（用来配合 API 的分页逻辑）。
    * **Limit**：设置最多返回多少条记录。注意：无论你填多少，API 最多只会返回 30,000 条记录。
* 在 **Query Options（查询选项）** 区域，你可以启用以下参数：
    * **Query**：让你用 MongoDB 的 JSON 查询格式来写筛选条件。例如：`{"status": "success", "_submission_time": {"$lt": "2021-11-01T01:02:03"}}` 表示查询所有 `status` 字段值为 `success`、并且提交时间在 2021 年 11 月 1 日 01:02:03 之前的提交数据。
    * **Fields**：让你指定要获取哪些字段，这样响应数据会更轻量。
    * **Sort**：让你用 MongoDB JSON 格式提供一组排序条件。例如 `{"status": 1, "_submission_time": -1}` 表示先按 `status` 升序排列，再按 `_submission_time` 降序排列。

这些选项的更多细节可以看 [Formhub API 文档](https://github.com/SEL-Columbia/formhub/wiki/Formhub-Access-Points-(API)#api-parameters)。

### 提交数据选项（Submission Options）

所有返回表单提交数据的操作都提供一些选项来调整响应内容，包括：

- **下载选项（Download options）**：可以下载每条表单提交关联的附件（比如图片和视频），还可以选择文件的命名规则，以及要下载的文件大小（如果有的话——通常针对图片）。
- **格式化选项（Formatting options）**：按下面[关于数据整理](#关于数据整理)中描述的方式重新整理数据。

#### 关于数据整理（About reformatting）

KoboToolbox 提交数据的默认 JSON 格式有时很难处理，因为它不认识数据结构（schema），所有字段都以字符串返回。

这个节点提供了一套轻量、带主观取舍的数据整理逻辑，通过 **Reformat?（是否整理？）** 参数开启，所有返回表单提交数据的操作（提交查询、获取、附件下载）都支持。

开启后，数据整理会做以下事情：

- 把 JSON 按表单的分组重新组织成多级层级结构。默认情况下，问题分组层级用字段名里的 `/` 字符来表示，例如 `Group1/Question1`。开启整理后，n8n 会把它们整理成嵌套的 JSON 对象，例如 `Group1.Question1`。
- 重命名字段，去掉 `_` 前缀（很多下游系统不支持下划线开头的字段）。
- 把所有地理空间字段（Point 点、Line 线和 Area 区域类型的问题）解析成标准的 GeoJSON 格式。
- 把所有符合 **Multiselect Mask（多选掩码）** 通配符掩码的字段拆分成数组。因为多选字段在数据里是空格分隔的字符串，算法无法猜出哪些是，所以你必须提供字段命名掩码。掩码用逗号分隔的列表填写，列表支持 `*` 通配符。
- 把所有符合 **Number Mask（数字掩码）** 通配符掩码的字段转换成 JSON 浮点数。

下面是一个详细的 JSON 示例：

```json
{
  "_id": 471987,
  "formhub/uuid": "189436bb09a54957bfcc798e338b54d6",
  "start": "2021-12-05T16:13:38.527+02:00",
  "end": "2021-12-05T16:15:33.407+02:00",
  "Field_Details/Field_Name": "Test Fields",
  "Field_Details/Field_Location": "-1.932914 30.078211 1421 165",
  "Field_Details/Field_Shape": "-1.932914 30.078211 1421 165;-1.933011 30.078085 0 0;-1.933257 30.078004 0 0;-1.933338 30.078197 0 0;-1.933107 30.078299 0 0;-1.932914 30.078211 1421 165",
  "Field_Details/Crops_Grown": "maize beans avocado",
  "Field_Details/Field_Size_sqm": "2300",
  "__version__": "veGcULpqP6JNFKRJbbMvMs",
  "meta/instanceID": "uuid:2356cbbe-c1fd-414d-85c8-84f33e92618a",
  "_xform_id_string": "ajXVJpBkTD5tB4Nu9QXpgm",
  "_uuid": "2356cbbe-c1fd-414d-85c8-84f33e92618a",
  "_attachments": [],
  "_status": "submitted_via_web",
  "_geolocation": [
    -1.932914,
    30.078211
  ],
  "_submission_time": "2021-12-05T14:15:44",
  "_tags": [],
  "_notes": [],
  "_validation_status": {},
  "_submitted_by": null
}
```

开启整理功能，并给多选和数字字段配上合适的掩码后（例如分别用 `Crops_*` 和 `*_sqm`），n8n 会把它解析成：

```json
{
  "id": 471987,
  "formhub": {
    "uuid": "189436bb09a54957bfcc798e338b54d6"
  },
  "start": "2021-12-05T16:13:38.527+02:00",
  "end": "2021-12-05T16:15:33.407+02:00",
  "Field_Details": {
    "Field_Name": "Test Fields",
    "Field_Location": {
      "lat": -1.932914,
      "lon": 30.078211
    },
    "Field_Shape": {
      "type": "polygon",
      "coordinates": [
        {
          "lat": -1.932914,
          "lon": 30.078211
        },
        {
          "lat": -1.933011,
          "lon": 30.078085
        },
        {
          "lat": -1.933257,
          "lon": 30.078004
        },
        {
          "lat": -1.933338,
          "lon": 30.078197
        },
        {
          "lat": -1.933107,
          "lon": 30.078299
        },
        {
          "lat": -1.932914,
          "lon": 30.078211
        }
      ]
    },
    "Crops_Grown": [
      "maize",
      "beans",
      "avocado"
    ],
    "Field_Size_sqm": 2300
  },
  "version": "veGcULpqP6JNFKRJbbMvMs",
  "meta": {
    "instanceID": "uuid:2356cbbe-c1fd-414d-85c8-84f33e92618a"
  },
  "xform_id_string": "ajXVJpBkTD5tB4Nu9QXpgm",
  "uuid": "2356cbbe-c1fd-414d-85c8-84f33e92618a",
  "attachments": [],
  "status": "submitted_via_web",
  "geolocation": {
    "lat": -1.932914,
    "lon": 30.078211
  },
  "submission_time": "2021-12-05T14:15:44",
  "tags": [],
  "notes": [],
  "validation_status": {},
  "submitted_by": null
}
```

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/96ifDzfcUuwOyYrubZUt/" %}
