---
title: 配置 n8n 使用你自己的证书颁发机构
description: >-
  自定义 n8n 容器，使其在连接服务时支持自签名证书（self-signed certificates）。
contentType: howto
nodeTitle: 配置自定义 SSL 证书颁发机构
originalFilePath: hosting/configuration/configuration-examples/custom-certificate-authority.md
originalUrl: >-
  https://docs.n8n.io/hosting/configuration/configuration-examples/custom-certificate-authority
url: >-
  https://docs.n8n.io/deploy/host-n8n/configure-n8n/basic-configuration/configuration-examples/configure-custom-ssl-certificate-authorities
layout:
  description:
    visible: false
---

# 配置 n8n 使用你自己的证书颁发机构（CA）或自签名证书 / Configure n8n to use your own certificate authority or self-signed certificate

你可以把自己的证书颁发机构（certificate authority，简称 CA）或自签名证书（self-signed certificate）添加到 n8n 中。这样你就能「信任某一个特定的 SSL 证书」，而不是「信任所有无效证书」——后者是一个潜在的安全风险。

{% hint style="info" %}
**版本要求：1.42.0 及以上**

此功能在 1.42.0 及更高版本中可用。
{% endhint %}

{% hint style="info" %}
**大白话**：SSL 证书就像「网站/服务的身份证」，用来证明「我就是我」。正常情况下，系统只信任由权威机构（CA）签发的证书。但在公司内网里，很多自建服务用的是「自签名证书」（自己给自己签发，没有权威机构背书），n8n 默认会不信任它、拒绝连接。这个功能就是告诉 n8n：「请额外信任我提供的这些证书」。这样既能连上内网自签名服务，又不会像「跳过证书校验」那样把所有证书都放行（后者等于把安全大门敞开了）。
{% endhint %}

要使用此功能，你需要把证书放到一个文件夹中，并把该文件夹挂载（mount）到容器内的 `/opt/custom-certificates` 路径。你映射到 `/opt/custom-certificates` 的外部路径必须是容器可写（writable）的。

{% hint style="info" %}
**大白话**：「挂载（mount）」是 Docker 的概念——把服务器（宿主机）上的一个文件夹「借」给容器用，容器里看到的就是主机上的内容。也就是说：你在主机的 `pki` 文件夹里放好证书文件，挂载后 n8n 容器就能在 `/opt/custom-certificates` 里读到它们。要求「外部路径可写」是因为 n8n 可能需要处理/整理这些证书文件。
{% endhint %}

## Docker / Docker

下面的示例假定你有一个名为 `pki` 的文件夹，里面放着你的证书——它要么在你执行命令的当前目录下，要么在你的 docker compose 文件旁边。

{% hint style="info" %}
**大白话**：`pki` 就是「放证书的文件夹名字」。两个示例（Docker CLI 和 Docker Compose）都假设这个文件夹就在你当前的目录下，这样命令里的 `./pki` 才能找到它。如果目录不对，挂载会失败，请改成你证书实际所在的路径。
{% endhint %}

### Docker CLI / Docker CLI

使用命令行（CLI）时，你可以用 `-v` 参数：

```bash
docker run -it --rm \
 --name n8n \
 -p 5678:5678 \
 -v ./pki:/opt/custom-certificates \
 docker.n8n.io/n8nio/n8n
```

{% hint style="info" %}
**大白话**：逐行解释这条命令：`docker run` 表示「启动一个新容器」；`--name n8n` 给容器起名叫 n8n；`-p 5678:5678` 把容器内的 5678 端口映射到主机的 5678 端口（这是访问 n8n 界面的端口）；`-v ./pki:/opt/custom-certificates` 就是把当前目录下的 `pki` 文件夹挂载到容器内的 `/opt/custom-certificates`；最后 `docker.n8n.io/n8nio/n8n` 是要运行的镜像。整条命令的意思是：启动 n8n，并让它信任 `pki` 文件夹里的证书。
{% endhint %}

### Docker Compose / Docker Compose

```yaml
name: n8n
services:
    n8n:
        volumes:
            - ./pki:/opt/custom-certificates
        container_name: n8n
        ports:
            - 5678:5678
        image: docker.n8n.io/n8nio/n8n
```

{% hint style="info" %}
**大白话**：Docker Compose 是「用配置文件管理 Docker」的方式，适合长期运行、配置复杂的情况。这个文件的核心就是 `volumes`（卷）下的那一行：`./pki:/opt/custom-certificates`，作用跟上面的 `-v` 一样，都是把本机 `pki` 文件夹挂载进容器。其余部分是端口映射和镜像名。把这段保存为 `docker-compose.yml`，然后运行 `docker compose up -d` 即可启动。
{% endhint %}

你还应该给导入的证书设置正确的权限。可以在容器运行后执行（这里假设容器名为 n8n）：

```bash
docker exec --user 0 n8n chown -R 1000:1000 /opt/custom-certificates
```

{% hint style="info" %}
**大白话**：这行命令的意思是：「进入 n8n 容器，用 root 用户（`--user 0`）把 `/opt/custom-certificates` 文件夹的属主改成 1000:1000（n8n 容器内默认运行用户的 UID:GID）。」为什么要改？因为容器里跑 n8n 的用户可能不是 root，如果证书文件属于 root，n8n 可能没有权限读取。所以导入证书后建议执行一次这条命令，把权限交给 n8n 用户。
{% endhint %}

## 自定义信任库的证书要求 / Certificate requirements for Custom Trust Store

支持的证书类型：

- 根 CA 证书（Root CA Certificates）：这是由证书颁发机构签发的、用于签署其他证书的证书。信任它，就等于接受所有由该 CA 签发的证书。
- 自签名证书（Self-Signed Certificates）：由服务器自己创建并签名的证书。信任它，仅代表接受与「那一台特定服务器」的连接。

{% hint style="info" %}
**大白话**：两种证书对应两种场景。场景一：公司有一套自己的内网 CA（比如用来给所有内部系统统一签发证书），那你就把「这个 CA 的根证书」放进来，所有内部系统就都能连了。场景二：只有某一台服务器用了自签名证书（比如某台测试机自己签的），那就把「它自己的证书」放进来，只放行这一台。简单记：放根 CA 证书 = 信任一整个体系；放自签名证书 = 只信任这一台机器。
{% endhint %}

你必须使用 PEM 格式：

- 基于文本的格式，带有 BEGIN/END 标记（BEGIN/END markers）
- 支持的文件扩展名：`.pem`、`.crt`、`.cer`
- 包含公钥证书（不需要私钥）

例如：

```
-----BEGIN CERTIFICATE-----
MIIDXTCCAkWgAwIBAgIJAKoK/heBjcOuMA0GCSqGSIb3DQEBBQUAMEUxCzAJBgNV
[base64 encoded data]
-----END CERTIFICATE-----
```

{% hint style="info" %}
**大白话**：PEM 格式的证书本质上是一段「以 `-----BEGIN CERTIFICATE-----` 开头、以 `-----END CERTIFICATE-----` 结尾」的文本，中间是一长串字母数字（base64 编码）。你只要把证书文件用文本编辑器打开看一眼：能看到这个开头结尾标记，就是 PEM 格式；打不开或全是乱码，就是二进制格式（不支持）。另外注意：这里只需要「公钥证书」，**千万不要**把私钥（private key）放进来——私钥泄露出去了等于证书体系被攻破。
{% endhint %}

系统不接受以下格式：

- DER/二进制格式的文件
- PKCS#7（.p7b）文件
- PKCS#12（.pfx、.p12）文件
- 私钥文件
- 使用前请先把这些格式转换为 PEM 格式。

{% hint style="info" %}
**大白话**：如果手头只有 `.pfx`、`.p12`、`.cer`（二进制版）之类的证书，需要先转换成 PEM 文本格式。转换一般用 OpenSSL 命令行工具，比如：`openssl x509 -inform der -in 证书.cer -out 证书.pem`（把 DER 转成 PEM）或 `openssl pkcs12 -in 证书.pfx -clcerts -nokeys -out 证书.pem`（从 pfx 中提取公钥证书）。转换后把 PEM 文件放进 `pki` 文件夹再挂载即可。
{% endhint %}

{% hint style="info" %}
**国内部署提示**：国内企业内网非常普遍地使用自签名证书或自建 CA（内部 OA、GitLab、私有 npm 镜像等）。如果你在 n8n 里调用这些内部服务时报「证书无效 / self-signed certificate」之类的错误，用本页的方法把这些证书信任进来，就能正常连接，同时不必关闭全局证书校验（保持安全）。
{% endhint %}
