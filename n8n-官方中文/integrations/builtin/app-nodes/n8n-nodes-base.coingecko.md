---
title: CoinGecko 节点文档
description: >-
  学习如何在 n8n 中使用 CoinGecko 节点。按照技术文档将 CoinGecko
  节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: CoinGecko 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.coingecko.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.coingecko'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.coingecko'
layout:
  description:
    visible: false
---

# CoinGecko 节点

> **大白话**：CoinGecko 是加密货币行情网站，能查比特币、以太坊等各种币的价格、历史走势、市值和交易数据。这个节点让 n8n 能直接调用 CoinGecko 的数据接口——比如定时抓取某个币的当前价格、K 线图数据、历史行情，拿去做监控告警或自动播报。举例：每天早上 8 点，工作流自动把比特币价格发到你的微信群。

使用 CoinGecko 节点可以自动化处理 CoinGecko 里的工作，并让 CoinGecko 与其他应用程序互通。n8n 内置支持 CoinGecko 的众多功能，包括获取币种和事件数据等。

本页列出了 CoinGecko 节点支持的操作清单，以及更多资源的链接。

{% include "https://app.gitbook.com/s/GixZThfitWP21x2gQFpD/~/reusable/6vuTxJwns2nA8U7V56ij/" %}

## 支持的操作

* Coin（币种）
    * 获取所选币种的 K 线图（开高低收 open-high-low-close）数据
    * 获取某个币种的当前数据
    * 获取所有币种
    * 获取某个币种在指定日期的历史数据（名称、价格、市值、统计）
    * 获取与所选币种匹配的所有交易对的价格和市值相关数据
    * 获取历史市场数据，包括价格、市值和 24 小时成交量（粒度自动）
    * 获取任意加密货币在你需要的任意支持币种下的当前价格
    * 获取币种行情（tickers）
* Event（事件）
    * 获取所有事件

## 模板与示例


[浏览 CoinGecko 节点集成模板](https://n8n.io/integrations/coingecko) 或 [搜索全部模板](https://n8n.io/workflows/)
