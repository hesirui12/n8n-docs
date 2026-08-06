---
title: 配置自定义工作流模板库
description: 为你的自托管 n8n 实例设置自定义工作流模板库。
contentType: howto
nodeTitle: 配置自定义工作流模板库
originalFilePath: hosting/configuration/configuration-examples/custom-templates.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/custom-templates
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-a-custom-workflow-templates-library
layout:
  description:
    visible: false
---

# 配置自定义工作流模板库 / Configure a custom workflow templates library

n8n 提供了一个工作流模板库（workflow templates）[^1]。当你自托管（self-hosting）n8n 时，你可以：

* 继续使用 n8n 官方的工作流模板库（这是默认行为）
* 禁用工作流模板
* 创建你自己的工作流模板库

{% hint style="info" %}
**大白话**：模板（templates）就是别人做好的「现成工作流」。在 n8n 编辑器里新建工作流时，你可以从模板库挑一个直接套用，省去从零搭建的时间。默认情况下，你使用的是 n8n 官方模板库（由 n8n 团队和社区成员贡献）。如果你想完全不用官方模板（比如公司内网环境、想强制使用内部沉淀的模板），可以按下面的方法：要么把模板功能整个关掉，要么把模板来源换成你自己搭的 API。
{% endhint %}

## 禁用工作流模板 / Disable workflow templates

在你的环境变量（environment variables）中，将 `N8N_TEMPLATES_ENABLED` 设置为 `false`。

{% hint style="info" %}
**大白话**：这一节只有一句话——在环境变量里加一行 `N8N_TEMPLATES_ENABLED=false`。如何加环境变量？如果你用 Docker，就在 docker-compose 文件的 `environment` 部分加；如果你直接用命令行启动 n8n，就在启动命令前加 `export`（本目录下其他页面有大量环境变量设置示例）。设置之后，编辑器里「使用模板」的功能入口就会被关闭。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：n8n 官方模板库的接口位于国外服务器（api.n8n.io），国内网络访问可能较慢或超时。如果你遇到「模板加载不出来」的情况，可以考虑按下一节的方法自建模板库，或者干脆关掉模板功能，不影响 n8n 正常使用。
{% endhint %}

## 使用你自己的工作流模板库 / Use your own workflow templates library

在你的环境变量（environment variables）中，将 `N8N_TEMPLATES_HOST` 设置为你的 API 的基础地址（base URL）。

{% hint style="info" %}
**大白话**：把 n8n 官方模板库换成你自己的模板库。你需要自己搭建一个「模板 API」服务（一个网址），然后通过环境变量 `N8N_TEMPLATES_HOST=https://你的API地址` 告诉 n8n 去那里取模板。**关键点**：你的 API 必须长得跟 n8n 官方模板 API 一模一样（同样的接口路径、同样的数据格式），否则 n8n 读不到数据。下面会详细列出你的 API 需要提供的所有接口。
{% endhint %}

### 接口列表 / Endpoints

你的 API 必须提供与 n8n 相同的接口（endpoints）和数据结构（data structure）。

需要提供的接口如下：

| 方法 | 路径 | 作用 |
| --- | --- | --- |
| GET | `/templates/workflows/<id>` | 获取模板元数据（用于预览/浏览） |
| GET | `/workflows/templates/<id>` | 获取工作流数据（用于导入到画布） |
| GET | `/templates/search` | 搜索工作流模板 |
| GET | `/templates/collections/<id>` | 获取某个模板合集（collection） |
| GET | `/templates/collections` | 列出所有模板合集 |
| GET | `/templates/categories` | 列出所有模板分类 |
| GET | `/health` | 健康检查接口 |

{% hint style="info" %}
**大白话**：接口（endpoint）就是「一个网址 + 一种请求方式」，相当于你这个模板 API 对外提供的「服务窗口」。n8n 会按照上表的路径去请求你的 API。比如当用户在编辑器里搜索模板时，n8n 就会请求 `GET /templates/search`；当用户点某个模板预览时，n8n 就请求 `GET /templates/workflows/<模板ID>`。所以这 7 个接口你一个都不能少。
{% endhint %}

**重点：两个工作流接口需要不同的返回格式**

这两个工作流接口要求**不同的响应格式（response formats）**：

* `**/templates/workflows/{id}**`：返回模板本身，其中 `workflow` 键里包含工作流（即：模板元数据 + 实际工作流定义）
* `**/workflows/templates/{id}**`：返回该模板所包含的工作流（扁平结构，不带外层 `workflow` 键）

{% hint style="info" %}
**大白话**：同样都叫「模板」，这两个接口的返回结构不一样。一个像「带包装盒的礼物」（外面包了一层 `workflow` 键），一个像「直接给礼物」（扁平结构）。写接口的时候千万别搞混，否则 n8n 解析数据会出错。具体结构见下方「数据结构（Schemas）」小节和代码示例。
{% endhint %}

#### 两个接口返回格式对比（代码示例） / Endpoint response formats

```json
// GET /templates/workflows/{id} returns (wrapped):
{
  "workflow": {
    "id": 123,
    "name": "...",
    "totalViews": 1000,
    // ... see full workflow item schema below
    "workflow": {    // actual workflow definition
      "nodes": [...],
      "connections": {}
    }
  }
}

// GET /workflows/templates/{id} returns (flat):
{
  "id": 123,
  "name": "...",
  "workflow": {      // actual workflow definition
    "nodes": [...],
    "connections": {}
  }
}
```

{% hint style="info" %}
**大白话**：上面代码里的注释（`//` 开头）分别说明：第一个接口返回的是「包了一层 `workflow` 键」的结构（`wrapped`），里面又嵌套了一个真正的工作流定义；第二个接口返回的是「扁平结构」（`flat`），直接就是工作流数据。写你的模板 API 时照着这个结构返回即可。
{% endhint %}

### 查询参数 / Query parameters

`/templates/search` 接口支持以下查询参数（query parameters）：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `page` | 整数 | 要返回的结果页码 |
| `rows` | 整数 | 每页最多返回的结果数 |
| `category` | 逗号分隔的字符串列表（分类名） | 在哪些分类内搜索 |
| `search` | 字符串 | 搜索关键词 |

`/templates/collections` 接口支持以下查询参数：

| 参数 | 类型 | 说明 |
| --- | --- | --- |
| `category` | 逗号分隔的字符串列表（分类名） | 在哪些分类内搜索 |
| `search` | 字符串 | 搜索关键词 |

{% hint style="info" %}
**大白话**：查询参数就是「跟在网址问号后面的附加条件」，用来筛选结果。比如 n8n 搜索模板时，会请求类似 `/templates/search?search=slack&page=1&rows=20` 的网址：`search=slack` 表示搜关键词「slack」，`page=1` 表示第 1 页，`rows=20` 表示每页 20 条。你的 API 需要能正确解析这些参数并返回对应的结果。
{% endhint %}

### 数据结构 / Schemas

两个工作流接口的关键区别在于返回格式：一个包了一层 `workflow` 键，一个是扁平返回。下面是各响应对象的详细数据结构（schema）说明。

#### 工作流条目数据（workflow item data） / Workflow item data schema

供 `/templates/workflows/{id}` 接口使用（整个对象包在 `workflow` 键中）。

该结构描述的是「模板元数据」，用于在搜索/浏览界面中展示模板。它内部嵌套了一个 `workflow` 属性，其中包含实际可导入的工作流定义。

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "Generated schema for Root",
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "totalViews": {
      "type": "number"
    },
    "price": {},
    "purchaseUrl": {},
    "recentViews": {
      "type": "number"
    },
    "createdAt": {
      "type": "string"
    },
    "user": {
      "type": "object",
      "properties": {
        "username": {
          "type": "string"
        },
        "verified": {
          "type": "boolean"
        }
      },
      "required": [
        "username",
        "verified"
      ]
    },
    "nodes": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "icon": {
            "type": "string"
          },
          "name": {
            "type": "string"
          },
          "codex": {
            "type": "object",
            "properties": {
              "data": {
                "type": "object",
                "properties": {
                  "details": {
                    "type": "string"
                  },
                  "resources": {
                    "type": "object",
                    "properties": {
                      "generic": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "url": {
                              "type": "string"
                            },
                            "icon": {
                              "type": "string"
                            },
                            "label": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "url",
                            "label"
                          ]
                        }
                      },
                      "primaryDocumentation": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "url": {
                              "type": "string"
                            }
                          },
                          "required": [
                            "url"
                          ]
                        }
                      }
                    },
                    "required": [
                      "primaryDocumentation"
                    ]
                  },
                  "categories": {
                    "type": "array",
                    "items": {
                      "type": "string"
                    }
                  },
                  "nodeVersion": {
                    "type": "string"
                  },
                  "codexVersion": {
                    "type": "string"
                  }
                },
                "required": [
                  "categories"
                ]
              }
            }
          },
          "group": {
            "type": "string"
          },
          "defaults": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "color": {
                "type": "string"
              }
            },
            "required": [
              "name"
            ]
          },
          "iconData": {
            "type": "object",
            "properties": {
              "icon": {
                "type": "string"
              },
              "type": {
                "type": "string"
              },
              "fileBuffer": {
                "type": "string"
              }
            },
            "required": [
              "type"
            ]
          },
          "displayName": {
            "type": "string"
          },
          "typeVersion": {
            "type": "number"
          },
          "nodeCategories": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "id": {
                  "type": "number"
                },
                "name": {
                  "type": "string"
                }
              },
              "required": [
                "id",
                "name"
              ]
            }
          }
        },
        "required": [
          "id",
          "icon",
          "name",
          "codex",
          "group",
          "defaults",
          "iconData",
          "displayName",
          "typeVersion"
        ]
      }
    },
    "description": {
      "type": "string"
    },
    "image": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "url": {
            "type": "string"
          }
        }
      }
    },
    "categories": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          },
          "name": {
            "type": "string"
          }
        }
      }
    },
    "workflowInfo": {
      "type": "object",
      "properties": {
        "nodeCount": {
          "type": "number"
        },
        "nodeTypes": {
          "type": "object"
        }
      }
    },
    "workflow": {
      "type": "object",
      "properties": {
        "nodes": {
          "type": "array"
        },
        "connections": {
          "type": "object"
        },
        "settings": {
          "type": "object"
        },
        "pinData": {
          "type": "object"
        }
      },
      "required": [
        "nodes",
        "connections"
      ]
    }
  },
  "required": [
    "id",
    "name",
    "totalViews",
    "createdAt",
    "user",
    "nodes",
    "workflow"
  ]
}
```

{% hint style="info" %}
**大白话**：这段是 JSON Schema——一种用来「描述数据应该长什么样」的规范文档，相当于数据格式的「说明书」。如果你是小白，不需要看懂每一行，只要知道：这是 n8n 官方模板接口返回数据的完整格式定义，你自建接口时对照着它来返回数据即可（字段名、嵌套结构、类型都要一致）。
{% endhint %}

#### 分类条目数据（category item data） / Category item data schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "name": {
      "type": "string"
    }
  },
  "required": [
    "id",
    "name"
  ]
}
```

#### 合集条目数据（collection item data） / Collection item data schema

```json
{
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "id": {
      "type": "number"
    },
    "rank": {
      "type": "number"
    },
    "name": {
      "type": "string"
    },
    "totalViews": {},
    "createdAt": {
      "type": "string"
    },
    "workflows": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "number"
          }
        },
        "required": [
          "id"
        ]
      }
    },
    "nodes": {
      "type": "array",
      "items": {}
    }
  },
  "required": [
    "id",
    "rank",
    "name",
    "totalViews",
    "createdAt",
    "workflows",
    "nodes"
  ]
}
```

你也可以在线交互式地探索 n8n 官方模板 API 的接口：

[https://api.n8n.io/templates/categories](https://api.n8n.io/templates/categories) [https://api.n8n.io/templates/collections](https://api.n8n.io/templates/collections) [https://api.n8n.io/templates/search](https://api.n8n.io/templates/search) [https://api.n8n.io/health](https://api.n8n.io/health)

如需更多支持，你可以[联系我们](mailto:help@n8n.io)。

{% hint style="info" %}
**大白话**：上面几个链接是 n8n 官方模板 API 的真实地址，直接用浏览器打开就能看到它实际返回的数据长什么样。做自建模板库时，你可以先打开这些链接研究一下真实返回格式，然后照着仿写自己的接口。
{% endhint %}

## 把你的工作流提交到 n8n 模板库 / Add your workflows to the n8n library

你可以把你的工作流提交到 n8n 的模板库。

n8n 正在筹备创作者计划（creator program），并开发一个模板市场（marketplace of templates）。这是一个持续进行的项目，具体细节可能会变化。

关于如何提交模板并成为创作者，请参阅 [n8n Creator hub（创作者中心）](https://www.notion.so/n8n/n8n-Creator-hub-7bd2cbe0fce0449198ecb23ff4a2f76f)。

{% hint style="info" %}
**大白话**：这一节是说「把你做的工作流贡献给 n8n 官方模板库，让全世界的人都能用」。这是面向愿意开源分享的用户的功能，目前还在完善中。如果你想贡献，去 Creator hub 页面了解提交流程即可；如果不感兴趣，跳过这节完全不影响使用。
{% endhint %}

[^1]: n8n 模板（templates）是由 n8n 和社区成员设计好的预构建工作流（pre-built workflows），你可以把它导入到自己的 n8n 实例中使用。使用模板时，你可能需要填写凭据（credentials）并根据自己的需求调整配置。
