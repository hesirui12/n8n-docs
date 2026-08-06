---
title: uProc 节点文档
description: >-
  学习如何在 n8n 中使用 uProc 节点。按照技术文档将
  uProc 节点集成到你的工作流中。
contentType:
  - integration
  - reference
nodeTitle: uProc 节点文档
originalFilePath: integrations/builtin/app-nodes/n8n-nodes-base.uproc.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uproc'
url: 'https://docs.n8n.io/integrations/builtin/app-nodes/n8n-nodes-base.uproc'
layout:
  description:
    visible: false
---

{% hint style="info" %}
**大白话**：uProc 是一个「数据清洗与信息补全」工具网站，提供几百个小工具（工具式 API）。这个节点把这些工具全部搬进了 n8n。它们按类别分组：Audio（音频：文字转语音）、Communication（通信：查邮箱是否有效、手机号是否真实等）、Company（公司：按域名/邮箱查公司信息）、Finance（金融：校验银行卡、IBAN、VAT 等）、Geographical（地理：查时区、坐标、邮编对应的城市等）、Image（图像：图片 OCR 文字识别、二维码、截图等）、Internet（互联网：查域名、SSL 证书、WHOIS 等）、Personal（个人：查年龄、性别、某人邮箱等）、Product（产品：校验 ISBN/EAN/UPC 条码等）、Security（安全：密码强度、黑名单等）、Text（文本：字符串各种校验和转换）。用到哪类就展开哪类，找到对应的小工具，把参数填上即可。大量工具面向西班牙（Spain）数据源，不是西班牙用户的话忽略标注「only for Spain / 仅西班牙」的即可。
{% endhint %}

# uProc 节点

使用 uProc 节点来自动化你在 uProc 中的工作，并把它与其它应用集成。n8n 内置支持 uProc 的大量功能，包括获取高级人类音频文件、通信数据、公司、金融和产品信息。

在本页你可以看到 uProc 节点支持的全部操作列表，以及更多资源的链接。

{% hint style="info" %}
**凭证（Credentials）**

关于如何设置认证，请参考 [uProc 凭证](../credentials/uproc.md)。
{% endhint %}

## 操作

### Audio（音频）

- Get advanced human audio file by provided text and language（按提供的文本和语言获取高级人声音频文件）
- Get an audio file by provided text and language（按提供的文本和语言获取音频文件）

### Communication（通信）

- Discover if a domain has a social network presence（发现一个域名是否有社交网络账号）
- Discover if an email is valid, hard bounce, soft bounce, spam-trap, free, temporary, and recipient exists（检查邮箱是否有效、硬退信、软退信、垃圾邮件陷阱、免费邮箱、临时邮箱，以及收件人是否存在）
- Discover if the email recipient exists, returning email status（检查邮箱收件人是否存在，并返回邮箱状态）
- Check if an email domain has an SMTP server to receive emails（检查邮箱域名是否有 SMTP 服务器可接收邮件）
- Discover if the email has a social network presence（发现该邮箱是否有社交网络账号）
- Check if an email has a valid format（检查邮箱格式是否有效）
- Check if an email domain belongs to a disposable email service（检查邮箱域名是否属于一次性邮箱服务）
- Check if email belongs to free service provider like Gmail（检查邮箱是否属于 Gmail 之类的免费服务商）
- Check if email is catchall（检查邮箱是否为 catchall（通配）邮箱）
- Discover if an email exists in the Robinson list (only Spain)（检查邮箱是否在 Robinson 名单中（仅西班牙））
- Check if email belongs to a system or role-based account（检查邮箱是否属于系统或角色型账号，如 admin@、info@）
- Check if an email is a spam trap（检查邮箱是否为垃圾邮件陷阱）
- Discover if an IMEI number has a valid format（检查 IMEI（手机串号）格式是否有效）
- Check if a LinkedIn profile is a first-degree contact（检查 LinkedIn 主页是否为一级联系人）
- Discover if mobile phone number exists in network operator, with worldwide coverage（检查手机号是否存在于运营商网络中，全球覆盖）
- Discover if a mobile phone number has a valid format with worldwide coverage（检查手机号格式是否有效，全球覆盖）
- Discover if a mobile phone number has a valid format (only Spain)（检查手机号格式是否有效（仅西班牙））
- Discover if a mobile phone number has a valid prefix, with worldwide coverage（检查手机号前缀是否有效，全球覆盖）
- Discover if a Spanish mobile phone number has a valid prefix（检查西班牙手机号前缀是否有效）
- Discover if a mobile number is switched on to call it later, with worldwide coverage（检查手机是否开机以便稍后呼叫，全球覆盖）
- Discover if a mobile number can receive SMS with worldwide coverage（检查手机号能否接收短信，全球覆盖）
- Discover if a phone (landline or mobile) exists in a Robinson list (only Spain)（检查电话（固话或手机）是否在 Robinson 名单中（仅西班牙））
- Discover if a landline or mobile number has a valid prefix（检查固话或手机号前缀是否有效）
- Discover if a landline phone number is valid, with Spain coverage（检查固话号码是否有效，覆盖西班牙）
- Allows discovering if landline number has a good international format, depending on the country（检查固话号码是否符合该国良好的国际格式）
- Discover if a landline phone number prefix exists, with worldwide coverage（检查固话号码前缀是否存在，全球覆盖）
- Clean a phone removing non allowed characters（清理电话号码，移除不允许的字符）
- Allows getting country code of a mobile phone number with international format（获取国际格式手机号的国家代码）
- Allows getting a domain from an email（从邮箱地址中提取域名）
- Discover an email by company website or domain and prospect's first-name and last-name（按公司网站/域名 + 潜在客户的名字和姓氏查找邮箱）
- Check if an email is personal or generic（检查邮箱是个人邮箱还是通用邮箱）
- Get emails list found on the internet by domain or URI（按域名或 URI 获取网上找到的邮箱列表）
- Get an emails list found on the internet by non-free email（按非免费邮箱获取网上找到的邮箱列表）
- Get emails list found inside the website by domain or URI（按域名或 URI 获取网站内找到的邮箱列表）
- Get three first web references of an email published on the internet（获取某邮箱在网上发布的前三条网页引用）
- Allows you to fix the email domain of those misspelled emails（修正拼写错误的邮箱域名）
- Fix the international prefix of a phone based on the ISO code of a country（按国家 ISO 代码修正电话的国际前缀）
- Get GDPR compliant emails list by domain for your Email Marketing campaigns in Europe（按域名获取符合 GDPR 的邮箱列表，用于欧洲的邮件营销活动）
- Discover if mobile exist using real-time HLR query（使用实时 HLR 查询检查手机号是否存在）
- Get personal email by social network profile（通过社交网络主页获取个人邮箱）
- Get portability data about a landline or mobile number, only for Spain（获取固话或手机号的携号转网数据，仅西班牙）
- Extract results from a LinkedIn search (employees in a company)（提取 LinkedIn 搜索结果（公司员工））
- Get members in a LinkedIn group（获取 LinkedIn 群组成员）
- Get 'Search LinkedIn Contacts' URL（获取「搜索 LinkedIn 联系人」的 URL）
- Extract the last 80 connections from your LinkedIn profile（提取你 LinkedIn 主页最近的 80 个联系人）
- Extract the last 80 invitations sent from your LinkedIn（提取你 LinkedIn 最近发出的 80 条邀请）
- Get users who comment on a post on LinkedIn（获取在 LinkedIn 帖子下评论的用户）
- Get users who like a post on LinkedIn（获取点赞 LinkedIn 帖子的用户）
- Extract a LinkedIn profile（提取 LinkedIn 主页）
- Extract results from a LinkedIn search (profiles)（提取 LinkedIn 搜索结果（主页））
- Extract last profiles that have published content on LinkedIn by specific keywords（按关键词提取最近在 LinkedIn 发布内容的主页）
- Discover if mobile exist using real-time HLR query, as well as portability and roaming data（使用实时 HLR 查询检查手机号是否存在，并获取携号转网和漫游数据）
- Get existence, portability, and roaming of a mobile phone using MNP query（使用 MNP 查询获取手机号的存在性、携号转网和漫游信息）
- Discover if mobile or landline prefix exists in Spain（检查西班牙手机或固话前缀是否存在）
- Allows normalizing email address, removing non allowed characters（规范化邮箱地址，移除不允许的字符）
- Allows normalizing a mobile phone, removing non-allowed characters（规范化手机号，移除不允许的字符）
- Parse phone number in multiple fields and verify format and prefix validity（把电话号码解析到多个字段，并验证格式和前缀是否有效）
- Allows getting country prefix number by country code（按国家代码获取国家前缀号码）
- Discover an email by company website or domain and prospect's first-name and last-name（按公司网站/域名 + 潜在客户的名字和姓氏查找邮箱）
- This tool parses a social URI address and extracts any available indicators（解析社交 URI 地址并提取所有可用的标识信息）
- Search all social networks by domain, parses all found URLs, and returns social networks data（按域名搜索所有社交网络，解析找到的所有 URL，并返回社交网络数据）
- Discover if a domain or a website has social activity and returns all social network profiles found（检查域名或网站是否有社交活动，并返回找到的所有社交网络主页）
- Discover if an email has social activity, and get all social network profiles found（检查邮箱是否有社交活动，并获取找到的所有社交网络主页）
- Discover if a mobile phone has social activity, and get all social network profiles found（检查手机号是否有社交活动，并获取找到的所有社交网络主页）
- Get web references for an email published on the internet（获取某邮箱在网上发布的网页引用）
- Send a custom message invitation to a non connected LinkedIn profile（向未连接的 LinkedIn 主页发送自定义消息邀请）
- Send a custom email to a recipient（向收件人发送自定义邮件）
- Send a custom SMS to a recipient with worldwide coverage（向收件人发送自定义短信，全球覆盖）
- Send a custom invitation message if a profile is connected or a custom message otherwise（如果主页已连接则发送自定义邀请消息，否则发送自定义消息）
- Visits a profile to show interest and get profile views in return from contact, increasing your LinkedIn network（访问主页以示兴趣，并换取对方的回访，扩大你的 LinkedIn 人脉）
- Send a custom private message to a connected LinkedIn profile（向已连接的 LinkedIn 主页发送自定义私信）
- Get an email by contact's LinkedIn profile URI（通过联系人的 LinkedIn 主页 URI 获取邮箱）
- Discover an email by company's name and prospect's full name（按公司名称 + 潜在客户全名查找邮箱）
- Discover an email by company's website or domain and prospect's full name（按公司网站/域名 + 潜在客户全名查找邮箱）
- Get email by first name, last name, and company（按名字、姓氏和公司获取邮箱）
- Get parsed and validated phone（获取解析并验证后的电话号码）

### Company（公司）

- Discover if a CIF card number is valid（检查 CIF（西班牙企业税号）号码是否有效）
- Check if a company is a debtor by TaxID（按 TaxID 检查公司是否为债务人）
- Check if the ISIN number is valid（检查 ISIN（证券识别码）是否有效）
- Check if the SS number is valid, only for Spain（检查 SS（西班牙社保）号码是否有效，仅西班牙）
- Identify and classify a prospecting role in detecting the right area and seniority to filter later（识别并归类潜在客户角色，找出正确的领域和资历以便后续筛选）
- Get a company's contact, social, and technology data by domain（按域名获取公司的联系人、社交和技术数据）
- Get a company's contact, social, and technology data by email（按邮箱获取公司的联系人、社交和技术数据）
- Get a company's data by CIF（按 CIF 获取公司数据）
- Get a company's data by DUNS（按 DUNS（邓白氏编码）获取公司数据）
- Get a company's data by domain（按域名获取公司数据）
- Get a company's data by email（按邮箱获取公司数据）
- Get a company's data by IP address（按 IP 地址获取公司数据）
- Get a company's data by name（按名称获取公司数据）
- Get a company's data by phone number（按电话号码获取公司数据）
- Get a company's data by social networks URI (LinkedIn, Twitter)（按社交网络 URI（LinkedIn、Twitter）获取公司数据）
- Get a company's name by company domain（按公司域名获取公司名称）
- Get professional data of a decision-maker by company name/domain and area（按公司名称/域名和领域获取决策者的职业数据）
- Discover more suitable decision-maker using search engines (Bing) by company name and area（使用搜索引擎（Bing）按公司名称和领域寻找更合适的决策者）
- Get professional emails of decision-makers by company domain and area（按公司域名和领域获取决策者的职业邮箱）
- Discover up to ten decision-makers using search engines (Bing) by company name and area（使用搜索引擎（Bing）按公司名称和领域查找最多十位决策者）
- Get a company's domain by company name（按公司名称获取公司域名）
- Get employees by company name or domain, area, seniority, and country（按公司名称/域名、领域、资历和国家获取员工）
- Get a company's Facebook profile by name without manually searching on Google or Facebook（按名称获取公司的 Facebook 主页，无需手动在 Google 或 Facebook 上搜索）
- Get geocoded company data by IP address（按 IP 地址获取地理编码后的公司数据）
- Get a company's LinkedIn profile by name without manually searching on Google or LinkedIn（按名称获取公司的 LinkedIn 主页，无需手动在 Google 或 LinkedIn 上搜索）
- Allows normalizing a CIF number, removing non-allowed characters（规范化 CIF 号码，移除不允许的字符）
- Get a company's phone by company domain（按公司域名获取公司电话）
- Get a company's sales data by a company's DUNS number（按公司 DUNS 号码获取公司销售数据）
- Get a company's sales data by a company's domain name（按公司域名获取公司销售数据）
- Get a company's sales data by a company's name（按公司名称获取公司销售数据）
- Get a company's sales data by a company's tax ID (CIF)（按公司税号（CIF）获取公司销售数据）
- Get a company's Twitter profile by name without manually searching on Google or Twitter（按名称获取公司的 Twitter 主页，无需手动在 Google 或 Twitter 上搜索）
- Get decision maker by search engine（通过搜索引擎获取决策者）
- Get decision makers by search engine（通过搜索引擎获取多位决策者）
- Get Facebook URI by company's domain（按公司域名获取 Facebook URI）
- Get GitHub URI by company's domain（按公司域名获取 GitHub URI）
- Get Instagram URI by company's domain（按公司域名获取 Instagram URI）
- Get LinkedIn URI by company's domain（按公司域名获取 LinkedIn URI）
- Get Pinterest URI by company's domain（按公司域名获取 Pinterest URI）
- Get Twitter URI by company's domain（按公司域名获取 Twitter URI）
- Get YouTube URI by company's domain（按公司域名获取 YouTube URI）

### Finance（金融）

- Check if crypto wallet is valid（检查加密货币钱包地址是否有效）
- Discover if a BIC number has a valid format（检查 BIC（银行识别码）格式是否有效）
- Discover if an account number has a valid format（检查账号格式是否有效）
- Check if credit card number checksum is valid（检查信用卡号校验和是否有效）
- Discover if an IBAN account number has a valid format（检查 IBAN（国际银行账号）格式是否有效）
- Discover if an ISO currency code is valid（检查 ISO 货币代码是否有效）
- Check if a TIN exists in Europe（检查 TIN（税号）是否存在于欧洲）
- Convert amount between supported currencies and an exchange date（在支持的货币之间按汇率日期换算金额）
- Get credit card type（获取信用卡类型）
- Get multiple ISO currency codes by a country name（按国家名称获取多个 ISO 货币代码）
- Get all ISO currency by an IP address（按 IP 地址获取所有 ISO 货币）
- Get multiple ISO currency codes by a country ISO code（按国家 ISO 代码获取多个 ISO 货币代码）
- Get ISO currency code by IP address（按 IP 地址获取 ISO 货币代码）
- Get ISO currency code by a currency ISO code（按货币 ISO 代码获取 ISO 货币代码）
- Get ISO currency code by an ISO country code（按国家 ISO 代码获取 ISO 货币代码）
- Get ISO currency code by a country name（按国家名称获取 ISO 货币代码）
- Get related European TIN in Europe（获取欧洲相关的 TIN 税号）
- Get IBAN by account number of the country（按国家账号获取 IBAN）
- Get to search data bank information by IBAN account number（按 IBAN 账号搜索银行信息）
- Get country VAT by address（按地址获取国家增值税（VAT））
- Get country VAT by coordinates（按坐标获取国家增值税）
- Get Swift code lookup（查询 Swift 代码）
- Get VAT by IP address（按 IP 地址获取增值税）
- Get VAT value by country ISO code（按国家 ISO 代码获取增值税数值）
- Get VAT by phone number, with worldwide coverage（按电话号码获取增值税，全球覆盖）
- Get VAT by zip code（按邮政编码获取增值税）


### Geographical（地理）

- Check if a country's ISO code exists（检查国家 ISO 代码是否存在）
- Discover if the distance between two coordinates is equal to another（检查两个坐标之间的距离是否等于另一个距离）
- Discover if the distance (kilometers) between two coordinates is greater than the given input（检查两个坐标之间的距离（公里）是否大于给定输入）
- Discover if the distance (kilometers) between two coordinates is greater or equal to the given input（检查两个坐标之间的距离（公里）是否大于或等于给定输入）
- Discover if the distance(kilometers) between two coordinates is lower than the given input（检查两个坐标之间的距离（公里）是否小于给定输入）
- Check if an address exists by a partial address search（通过部分地址搜索检查地址是否存在）
- Check if a house number exists by a partial address search（通过部分地址搜索检查门牌号是否存在）
- Check if coordinates have a valid format（检查坐标格式是否有效）
- Discover if a zip code number prefix exists (only for Spain)（检查邮政编码前缀是否存在（仅西班牙））
- Discover if a zip code number has a valid format (only for Spain)（检查邮政编码格式是否有效（仅西班牙））
- Get cartesian coordinates(X, Y, Z/WGS84) by Latitude and Longitude（按纬度和经度获取笛卡尔坐标（X, Y, Z/WGS84））
- Get location by parameters（按参数获取位置）
- Get multiple cities by phone prefix (only for Spain)（按电话前缀获取多个城市（仅西班牙））
- Get multiple cities by partial initial text (only for Spain)（按部分起始文本获取多个城市（仅西班牙））
- Get multiple cities by zip code prefix (only for Spain)（按邮政编码前缀获取多个城市（仅西班牙））
- Get a city from IP（从 IP 获取城市）
- City search by partial name (only for Spain)（按部分名称搜索城市（仅西班牙））
- Discover the city name by a local phone number (only for Spain)（按本地电话号码发现城市名称（仅西班牙））
- Discover the city name by the zip code (only for Spain)（按邮政编码发现城市名称（仅西班牙））
- Discover the community name from a zip code (only for Spain)（按邮政编码发现自治区名称（仅西班牙））
- Discover latitude and longitude coordinates of an IP address（发现 IP 地址的纬度和经度坐标）
- Discover latitude and longitude coordinates of a postal address（发现邮政地址的纬度和经度坐标）
- Get multiple country names by currency ISO code（按货币 ISO 代码获取多个国家名称）
- Get multiple countries by ISO code（按 ISO 代码获取多个国家）
- Get multiple country names by initial name（按起始名称获取多个国家名称）
- Get country name by currency ISO code（按货币 ISO 代码获取国家名称）
- Get country name by IP address（按 IP 地址获取国家名称）
- Get country name by its ISO code（按 ISO 代码获取国家名称）
- Get country by a prefix（按前缀获取国家）
- Get country name by phone number, with worldwide coverage（按电话号码获取国家名称，全球覆盖）
- Get Aplha2 code by a country prefix or a name（按国家前缀或名称获取 Alpha2 代码）
- Get decimal coordinates (degrees, minutes, and seconds) by latitude and longitude（按纬度和经度获取十进制度分秒坐标）
- Returns straight-line distance (kilometers) between two addresses（返回两个地址之间的直线距离（公里））
- Returns straight-line distance (kilometers) between two GPS coordinates (latitude and longitude)（返回两个 GPS 坐标（纬度和经度）之间的直线距离（公里））
- Returns straight-line distance (kilometers) between two IP addresses（返回两个 IP 地址之间的直线距离（公里））
- Returns straight-line distance (kilometers) between two landline phones, using city and province of every phone（返回两个固话之间的直线距离（公里），使用每个电话的城市和省）
- Returns straight-line distance (kilometers) between two zip codes, using city and province of every zip code（返回两个邮政编码之间的直线距离（公里），使用每个邮编的城市和省）
- Get an exact address by a partial address search（通过部分地址搜索获取精确地址）
- Discover geographical, company, timezone, and reputation data by IPv4 address（按 IPv4 地址发现地理、公司、时区和信誉数据）
- Discover the city name, zip code, province, country, latitude, and longitude from an IPv4 or IPv6 address and geocodes it（从 IPv4 或 IPv6 地址发现城市、邮编、省、国家、纬度和经度，并进行地理编码）
- Parse postal address into separated fields, getting an improved resolution（把邮政地址解析为多个字段，获得更精确的结果）
- Discover locale data (currency, language) by IPv4 or IPv6 address（按 IPv4 或 IPv6 地址发现区域数据（货币、语言））
- Discover the city name, zip code, province, or country by latitude and longitude（按纬度和经度发现城市名、邮编、省或国家）
- Discover the city name, zip code, province, country, latitude, and longitude from an IPv4 or IPv6 address（从 IPv4 或 IPv6 地址发现城市名、邮编、省、国家、纬度和经度）
- Discover the city and the province from a landline phone number (only Spain)（从固话号码发现城市和省（仅西班牙））
- Discover location data by name（按名称发现位置数据）
- Discover the city and the province from a zip code number (only Spain)（从邮政编码发现城市和省（仅西班牙））
- Get the most relevant locations by name（按名称获取最相关的位置）
- Get the most relevant locations by name, category, location, and radius（按名称、类别、位置和半径获取最相关的位置）
- Get multiple personal names by a prefix（按前缀获取多个个人姓名）
- Discover network data by IPv4 or IPv6 address（按 IPv4 或 IPv6 地址发现网络数据）
- Allow normalizing an address by removing non allowed characters（规范化地址，移除不允许的字符）
- Allow normalizing a city by removing non allowed characters（规范化城市名，移除不允许的字符）
- Allow normalizing a country by removing non allowed characters（规范化国家名，移除不允许的字符）
- Allow normalizing a province by removing non allowed characters（规范化省名，移除不允许的字符）
- Allow normalizing a zip code by removing non allowed characters（规范化邮政编码，移除不允许的字符）
- Get normalized country（获取规范化后的国家名）
- Parse postal address into separated fields, getting a basic resolution（把邮政地址解析为多个字段，获得基本结果）
- Discover the province name from an IP address（从 IP 地址发现省名）
- Get the first province by a name prefix (only for Spain)（按名称前缀获取第一个省（仅西班牙））
- Discover the province name from a landline phone number (only for Spain)（从固话号码发现省名（仅西班牙））
- Discover the province name from a zip code number (only for Spain)（从邮政编码发现省名（仅西班牙））
- Get a province list by a name prefix (only for Spain)（按名称前缀获取省列表（仅西班牙））
- Get a province list by a phone prefix (only for Spain)（按电话前缀获取省列表（仅西班牙））
- Get a province list by a zip code prefix (only for Spain)（按邮政编码前缀获取省列表（仅西班牙））
- Discover reputation by IPv4 or IPv6 address（按 IPv4 或 IPv6 地址发现信誉数据）
- Returns driving routing time, distance, fuel consumption, and cost between two addresses（返回两个地址之间的驾驶路线时间、距离、油耗和费用）
- Returns driving routing time, distance, fuel consumption, and cost between two GPS coordinates（返回两个 GPS 坐标之间的驾驶路线时间、距离、油耗和费用）
- Returns driving routing time, distance, fuel consumption, and cost between two  IP addresses（返回两个 IP 地址之间的驾驶路线时间、距离、油耗和费用）
- Returns driving routing time, distance, fuel consumption, and cost between two landline phones, using city and province of every phone (only for Spain)（返回两个固话之间的驾驶路线时间、距离、油耗和费用，使用每个电话的城市和省（仅西班牙））
- Returns driving routing time, distance, fuel consumption, and cost between two zip codes, using city and province of every zip code（返回两个邮政编码之间的驾驶路线时间、距离、油耗和费用，使用每个邮编的城市和省）
- Discover date-time data by IPv4 or IPv6 address（按 IPv4 或 IPv6 地址发现日期时间数据）
- Get USNG coordinates by latitude and longitude（按纬度和经度获取 USNG 坐标）
- Get UTM coordinates by latitude and longitude（按纬度和经度获取 UTM 坐标）
- Discover the zip code if you have an IP address（如果你有 IP 地址，发现对应的邮政编码）
- Get the first zip code by prefix, only for Spain（按前缀获取第一个邮政编码，仅西班牙）
- Get multiple zip codes by prefix, with worldwide coverage（按前缀获取多个邮政编码，全球覆盖）
- Get time data by coordinates（按坐标获取时间数据）
- Get time data by postal address（按邮政地址获取时间数据）


### Image（图像）

- Get QR code decoded content by an image URL（按图片 URL 获取解码后的二维码内容）
- It allows discovering all geographical and technical EXIF metadata present in a photographic JPEG image（发现 JPEG 照片中的所有地理和技术 EXIF 元数据）
- Get an encoded barcode by number and a required standard（按数字和所需标准获取编码后的条形码）
- Get QR code encoded by a text（按文本生成编码后的二维码）
- Generate a new image by URL and text（按 URL 和文本生成新图像）
- Discover logo (favicon) used in a domain（发现域名使用的徽标（favicon））
- Generate a screenshot by URL provided using Chrome browser（使用 Chrome 浏览器按提供的 URL 生成截图）
- Get OCR text from image（从图像中获取 OCR 识别文本）


### Internet（互联网）

- Check if a domain exists（检查域名是否存在）
- Check if a domain has a DNS record（检查域名是否有 DNS 记录）
- Check if a  domain has the given IP address assigned（检查域名是否分配了给定的 IP 地址）
- Check if a domain has an MX record（检查域名是否有 MX 记录）
- Check if a domain has a valid SSL certificate（检查域名是否有有效的 SSL 证书）
- Check if a domain has a valid format（检查域名格式是否有效）
- Check if a domain accepts all emails, existing or not（检查域名是否接受所有邮件，无论邮箱是否存在）
- Check if a domain is a free service domain provider（检查域名是否为免费服务域名提供商）
- Check if a domain is temporary or not（检查域名是否为临时域名）
- Discover if a computer is switched on（检查某台电脑是否开机在线）
- Discover if service in a port is available（检查某端口的服务是否可用）
- Check if an URL contains a string or regular expression（检查 URL 是否包含某字符串或正则表达式）
- Check if an URL exists（检查 URL 是否存在）
- Check that an URL has a valid format（检查 URL 格式是否有效）
- Get full SSL certificate data by a domain (or website) and monitor your certificate status（按域名（或网站）获取完整 SSL 证书数据，并监控证书状态）
- Get feed entries by domain（按域名获取订阅源（feed）条目）
- Get last feed entry by domain（按域名获取最后一条订阅源条目）
- Get text data from web, PDF or image allowing to filter some elements by regular expressions or field names（从网页、PDF 或图片中获取文本数据，并可用正则表达式或字段名过滤某些元素）
- Decode URL to recover original（解码 URL 以还原原始地址）
- Get valid, existing, and default URL when accessing a domain using a web browser（使用网页浏览器访问域名时，获取有效、存在且默认的 URL）
- Get long version of shortened URL（获取短链接的长版本 URL）
- Discover device features by a user agent（按 User Agent 发现设备特性）
- Get the network name of and IP address（获取 IP 地址的网络名称）
- Get the domain record by its type（按类型获取域名记录）
- Encode URL to avoid problems（编码 URL 以避免问题）
- Copy file from one URL to another URL（把文件从一个 URL 复制到另一个 URL）
- Fix an IP address to the right format（把 IP 地址修正为正确格式）
- Get the IPv4 address linked with a domain（获取与域名关联的 IPv4 地址）
- Convert a number to an IP address（把数字转换为 IP 地址）
- Get ISP known name of email domain name（获取邮箱域名的 ISP 已知名称）
- Convert an IP address to numeric notation（把 IP 地址转换为数字表示法）
- Scan a host and returns the most commonly open ports（扫描主机并返回最常见的开放端口）
- Obtains a list with multiple results from a website（从网站获取包含多个结果的列表）
- Obtains the content of a website（获取网站内容）
- Decode URL into multiple fields（把 URL 解码到多个字段）
- Generate a PDF file by URL (provided using Chrome browser)（按 URL 生成 PDF 文件（使用 Chrome 浏览器））
- Get the root domain of any web address, removing non needed characters（获取任何网址的根域名，移除不需要的字符）
- Generates shareable URIs to use on social networks and email using a content URI and a text（使用内容 URI 和文本生成可用于社交网络和邮件的可分享 URI）
- Get data from the existing table in an HTML page or a PDF file（从 HTML 页面或 PDF 文件中的现有表格获取数据）
- Discover client and server technologies used in a domain（发现域名使用的客户端和服务器技术）
- Discover client and server technologies used in web pages（发现网页使用的客户端和服务器技术）
- Analyze URL's health status about SSL, broken links, conflictive HTTP links with SSL, and more（分析 URL 的健康状况：SSL、坏链接、与 SSL 冲突的 HTTP 链接等）
- Get website visits and rank of any domain（获取任何域名的网站访问量和排名）
- Get a domain's WHOIS data by fields（按字段获取域名的 WHOIS 数据）
- Get WHOIS data fields by IP address provided（按提供的 IP 地址获取 WHOIS 数据字段）


### Personal（个人）

- Check if age is between two numbers（检查年龄是否在两个数字之间）
- Check if date returns an age between 20 and 29（检查日期计算出的年龄是否在 20 到 29 之间）
- Check if date returns an age between 40 and 49（检查日期计算出的年龄是否在 40 到 49 之间）
- Check if age is greater than another（检查年龄是否大于另一个年龄）
- Check if birth date returns an age greater than 64（检查出生日期计算出的年龄是否大于 64）
- Check if birth date belongs to an adult (18 years for Spain)（检查出生日期是否属于成年人（西班牙为 18 岁））
- Check if age is lower than another（检查年龄是否小于另一个年龄）
- Check if age is lower or equal than another（检查年龄是否小于或等于另一个年龄）
- Check if ages are equal（检查年龄是否相等）
- Discover if a date is between two dates（检查日期是否在两个日期之间）
- Discover if a date is greater（检查日期是否更大（更晚））
- Discover if a date is greater or equal（检查日期是否更大或相等）
- Discover if a date belongs to a leap year（检查日期是否属于闰年）
- Discover if a date is lower（检查日期是否更小（更早））
- Discover if a date is lower or equal（检查日期是否更小或相等）
- Discover if a date has a valid format（检查日期格式是否有效）
- Discover if a gender value is valid（检查性别值是否有效）
- Discover if an NIE card number is valid（检查 NIE（西班牙外国人税号）号码是否有效）
- Discover if a NIF card number is valid（检查 NIF（西班牙税号）号码是否有效）
- Check if a personal name exists in the INE data source (only for Spain)（检查个人姓名是否存在于 INE（西班牙国家统计局）数据源中（仅西班牙））
- Check if a name contains accepted characters（检查姓名是否包含可接受的字符）
- Discover if a NIF exists in the Robinson list (only for Spain)（检查 NIF 是否在 Robinson 名单中（仅西班牙））
- Check if surname contains accepted characters（检查姓氏是否包含可接受的字符）
- Check if a personal surname appears in INE data source (only for Spain)（检查个人姓氏是否出现在 INE 数据源中（仅西班牙））
- Discover if a DNI card number is valid（检查 DNI（西班牙身份证）号码是否有效）
- Discover the age of a birth date（计算出生日期的年龄）
- Discover the age range of a person by birth date（按出生日期发现一个人的年龄范围）
- Get the difference between two dates（获取两个日期之间的差值）
- Discover the gender of a person by the email（按邮箱发现一个人的性别）
- Discover the gender of a person or company by the name（按名称发现一个人或公司的性别）
- Get LinkedIn employee profile URI by business email（按商务邮箱获取 LinkedIn 员工主页 URI）
- Get LinkedIn employee profile URI by first name, last name, and company（按名字、姓氏和公司获取 LinkedIn 员工主页 URI）
- Discover the letter of a DNI card number（发现 DNI 号码的校验字母）
- Get first personal name matching by prefix and gender from INE data source (only for Spain)（从 INE 数据源按前缀和性别获取第一个匹配的个人名字（仅西班牙））
- Get LinkedIn URI by email（按邮箱获取 LinkedIn URI）
- Get LinkedIn URI by phone（按电话获取 LinkedIn URI）
- Allow normalizing a DNI number by removing non allowed characters（规范化 DNI 号码，移除不允许的字符）
- Allow normalizing an NIE number by removing non allowed characters（规范化 NIE 号码，移除不允许的字符）
- Normalize name by removing non allowed characters（规范化名字，移除不允许的字符）
- Normalize surname（规范化姓氏）
- Get parsed date-time（获取解析后的日期时间）
- Normalize full name, fixing abbreviations, sorting if necessary, and returning first name, last name, and gender（规范化全名：修正缩写、必要时排序，并返回名字、姓氏和性别）
- Get prospect's contact data and the company's location and social data by email（按邮箱获取潜在客户的联系数据以及公司的位置和社交数据）
- Get contact, location, and social data by email and company name and location（按邮箱以及公司名称和位置获取联系人、位置和社交数据）
- Get personal and social data by social profile（按社交主页获取个人和社交数据）
- Get personal data by email（按邮箱获取个人数据）
- Get personal data by first name, last name, company, and location（按名字、姓氏、公司和位置获取个人数据）
- Get personal data by mobile（按手机号获取个人数据）
- Get personal data by social network profile（按社交网络主页获取个人数据）
- Generate random fake data（生成随机假数据）
- Get first personal surname matching by prefix from INE data source (only for Spain)（从 INE 数据源按前缀获取第一个匹配的个人姓氏（仅西班牙））
- Get personal surname matching by prefix from INE data source (only for Spain)（从 INE 数据源按前缀获取匹配的个人姓氏（仅西班牙））
- Get Twitter profile by first name, last name, and company（按名字、姓氏和公司获取 Twitter 主页）
- Get XING profile by first name, last name, and company（按名字、姓氏和公司获取 XING 主页）
- Add a contact email to a person list（把联系人邮箱添加到人员列表）

### Product（产品）

- Check if an ASIN code exists on the Amazon Marketplace（检查 ASIN 代码是否存在于亚马逊商城）
- Check if an ASIN code has a valid format（检查 ASIN 代码格式是否有效）
- Check if an EAN code exists on Amazon Marketplace（检查 EAN 码是否存在于亚马逊商城）
- Check if an EAN barcode has a valid format（检查 EAN 条码格式是否有效）
- Check if an EAN barcode of 13 digits has a valid format（检查 13 位 EAN 条码格式是否有效）
- Check if an EAN barcode of 14 digits has a valid format（检查 14 位 EAN 条码格式是否有效）
- Check if an EAN barcode of 18 digits has a valid format（检查 18 位 EAN 条码格式是否有效）
- Check if an EAN barcode of 8 digits has a valid format（检查 8 位 EAN 条码格式是否有效）
- Check if a GTIN barcode has a valid format（检查 GTIN 条码格式是否有效）
- Check if a GTIN barcode of 13 digits has a valid format（检查 13 位 GTIN 条码格式是否有效）
- Check if a GTIN barcode of 14 digits has a valid format（检查 14 位 GTIN 条码格式是否有效）
- Check if a GTIN barcode of 8 digits has a valid format（检查 8 位 GTIN 条码格式是否有效）
- Check if VIN Number is valid（检查 VIN（车辆识别码）是否有效）
- Allows checking if an ISBN book exists（检查 ISBN 图书是否存在）
- Allows checking if an ISBN10/13 code has a valid format（检查 ISBN10/13 代码格式是否有效）
- Allows checking if an ISBN10 code has a valid format（检查 ISBN10 代码格式是否有效）
- Allows checking if an ISBN13 code has a valid format（检查 ISBN13 代码格式是否有效）
- Check if a UPC exists（检查 UPC 是否存在）
- Check if a UPC has a valid format（检查 UPC 格式是否有效）
- Get ASIN by EAN（按 EAN 获取 ASIN）
- Get a book by author's surname（按作者姓氏获取图书）
- Get all publications by category（按类别获取全部出版物）
- Get book data by an editor's name（按出版社名称获取图书数据）
- Get book or publication data by 10 or 13 digits ISBN code（按 10 或 13 位 ISBN 代码获取图书或出版物数据）
- Get book data by title（按标题获取图书数据）
- Get books by author's surname（按作者姓氏获取图书列表）
- Get all books by category（按类别获取全部图书）
- Get all books by editor（按出版社获取全部图书）
- Get all books by title（按标题获取全部图书）
- Get EAN code by ASIN code（按 ASIN 代码获取 EAN 代码）
- Get product data on a UPC on Amazon Marketplace（在亚马逊商城按 UPC 获取产品数据）
- Get ISBN10 code by ISBN13 code（按 ISBN13 代码获取 ISBN10 代码）
- Get ISBN13 code by ISBN10 code（按 ISBN10 代码获取 ISBN13 代码）
- Get data By VIN number（按 VIN 号码获取数据）

### Security（安全）

- Check if a Luhn number is valid（检查 Luhn（卢恩）算法数字是否有效）
- Check if a password is strong（检查密码是否足够强）
- Check if a UUID number is valid（检查 UUID 是否有效）
- Get blacklists for a domain（获取域名的黑名单）
- Get blacklists for an IP address（获取 IP 地址的黑名单）

### Text（文本）

- Check if a string only contains alphabets（检查字符串是否只包含字母）
- Check if a string is alphanumeric（检查字符串是否为字母数字）
- Check if a string is boolean（检查字符串是否为布尔值）
- Check if the largest item in a list matches the provided item（检查列表中的最大项是否与提供的项匹配）
- Check if IPv4 or IPv6 address has a valid format（检查 IPv4 或 IPv6 地址格式是否有效）
- Check if IPv4 address has a valid format（检查 IPv4 地址格式是否有效）
- Check if IPv6 address has a valid format（检查 IPv6 地址格式是否有效）
- Check if the length of a list is between two quantities（检查列表长度是否在两个数量之间）
- Checks if the length of a list equals a specified quantity（检查列表长度是否等于指定数量）
- Checks if the length of a list is greater than or equal to a certain amount（检查列表长度是否大于或等于某个数量）
- Check if the length of a list is lower than a certain amount（检查列表长度是否小于某个数量）
- Check if the list contains a specific item（检查列表是否包含特定项）
- Check if the list ends with a specific element（检查列表是否以特定元素结尾）
- Check if a list is sorted in ascending order（检查列表是否按升序排序）
- Check if the list starts with a specific element（检查列表是否以特定元素开头）
- Checks if the smallest element in a list matches the provided element（检查列表中的最小元素是否与提供的元素匹配）
- Check if a string contains only numbers（检查字符串是否只包含数字）
- Check if a string contains a character（检查字符串是否包含某个字符）
- Check if a string ends with a character（检查字符串是否以某个字符结尾）
- Check if a string has no content（检查字符串是否为空）
- Check if a string contains random characters（检查字符串是否包含随机字符）
- Check if a string contains a value that matches with a regular expression（检查字符串是否包含与正则表达式匹配的值）
- Check if the length of a string is between two numbers（检查字符串长度是否在两个数字之间）
- Check if the length of a string is equal to a number（检查字符串长度是否等于某个数字）
- Check if the length of a string is greater than a number（检查字符串长度是否大于某个数字）
- Check if the length of a string is greater or equal to a number（检查字符串长度是否大于或等于某个数字）
- Check if the length of a string is lower than a number（检查字符串长度是否小于某个数字）
- Check if the length of a string is lower or equal to a number（检查字符串长度是否小于或等于某个数字）
- Check if a string starts with a character（检查字符串是否以某个字符开头）
- Check if a string contains only lowercase characters（检查字符串是否只包含小写字符）
- Check if a string contains only uppercase characters（检查字符串是否只包含大写字符）
- Check if a list consists of unique elements（检查列表是否由唯一元素组成）
- Check if the supplied values form a valid list of elements（检查提供的值是否构成有效的元素列表）
- Check if the number of words in a sentence is between two determined quantities（检查句子中的单词数是否在两个确定数量之间）
- Check if the number of words in a sentence equals a certain amount（检查句子中的单词数是否等于某个数量）
- Check if the number of words in a sentence is greater than a certain amount（检查句子中的单词数是否大于某个数量）
- Check if the number of words in a sentence is greater than（检查句子中的单词数是否大于）
- Check if the word count is lower（检查单词数是否更少）
- Check if the number of words present in a sentence is less than or equal to a quantity（检查句子中的单词数是否小于或等于某个数量）
- Convert a string to Base64 encoded value（把字符串转换为 Base64 编码值）
- Discover banned English words in an email body or subject（在邮件正文或主题中发现被禁用的英文单词）
- Get field names by analyzing the field value provided（通过分析提供的字段值获取字段名）
- Get HTML code from Markdown（从 Markdown 获取 HTML 代码）
- Get Markdown text from HTML（从 HTML 获取 Markdown 文本）
- Get text without HTML（获取去掉 HTML 后的文本）
- Get spin string（获取旋转字符串（spin text））
- Format a string using a format pattern（使用格式模板格式化字符串）
- Generate random string using a regular expression as a pattern（使用正则表达式作为模板生成随机字符串）
- Return the largest item in a list（返回列表中的最大项）
- Return the smallest item in a list（返回列表中的最小项）
- Convert to lowercase（转换为小写）
- Convert a string to MD5 encoded value（把字符串转换为 MD5 编码值）
- Merge two strings（合并两个字符串）
- Normalize a string depending on the field name（根据字段名规范化字符串）
- Analyze string and return all emails, phones, zip codes, and links（分析字符串并返回所有邮箱、电话、邮编和链接）
- Convert a string to an SHA encoded value（把字符串转换为 SHA 编码值）
- Analyze an English text with emojis and detect sentiment（分析带表情符号的英文文本并检测情感倾向）
- Returns an ascending sorted list（返回升序排序后的列表）
- Split a value into two parts and join them using a separator from the original string（把一个值分成两部分，并用原始字符串中的分隔符重新连接）
- Split a value into two parts using a separator from the original string（使用原始字符串中的分隔符把一个值分成两部分）
- Get the length of a string（获取字符串长度）
- Lookup string between multiple values by fuzzy logic and regex patterns（通过模糊逻辑和正则表达式在多个值中查找字符串）
- Clean abuse words from a string（从字符串中清除辱骂词汇）
- Replace the first value found in a string with another（替换字符串中找到的第一个值）
- Replace all values found in a string with another（替换字符串中找到的所有值）
- Translate a text into any language（把文本翻译成任何语言）
- Return a single list with no repeating elements（返回无重复元素的单一列表）
- Convert all letters to uppercase（把所有字母转换为大写）
- Count total words in a text（统计文本中的总单词数）

## 模板与示例

[浏览 uProc 节点的官方集成模板](https://n8n.io/integrations/uproc)，或[搜索全部模板](https://n8n.io/workflows/)。

（官方此处嵌入了通用资源组件，此处从略。）
