---
contentType: howto
nodeTitle: Install private nodes
originalFilePath: integrations/creating-nodes/deploy/install-private-nodes.md
originalUrl: 'https://docs.n8n.io/integrations/creating-nodes/deploy/install-private-nodes'
url: >-
  https://docs.n8n.io/connect/create-nodes/deploy-your-node/install-private-nodes
layout:
  description:
    visible: false
---

# 安装私有节点（Install private nodes）

你可以构建自己的节点，并把它们安装到你的 n8n 实例中，而不必发布到 npm 上。这对于那些你只为公司内部使用而创建的节点来说非常有用。

{% hint style="info" %}
**小白提示：为什么会有「私有节点」这个需求？**

假设你们公司有一套内部系统，它的接口（API）不对外公开。你把对应的 n8n 节点做好了，但显然不能把内部系统的接口细节发到公开的 npm 仓库里。这时候「私有安装」就是唯一正解：节点只装在自己人的 n8n 实例里，代码不外泄。
{% endhint %}

## 在 Docker 版的 n8n 实例中安装你的节点（Install your node in a Docker n8n instance）

如果你是用 Docker 运行 n8n 的，你需要创建一个把节点装进 n8n 的 Docker 镜像（image）。

1. 创建一个 Dockerfile，并粘贴[这个 Dockerfile](https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/Dockerfile)中的代码。

	你的 Dockerfile 应该长这样：

	```Dockerfile
	FROM node:16-alpine

	ARG N8N_VERSION

	RUN if [ -z "$N8N_VERSION" ] ; then echo "The N8N_VERSION argument is missing!" ; exit 1; fi

	# Update everything and install needed dependencies
	RUN apk add --update graphicsmagick tzdata git tini su-exec

	# Set a custom user to not have n8n run as root
	USER root

	# Install n8n and the packages it needs to build it correctly.
	RUN apk --update add --virtual build-dependencies python3 build-base ca-certificates && \
		npm config set python "$(which python3)" && \
		npm_config_user=root npm install -g full-icu n8n@${N8N_VERSION} && \
		apk del build-dependencies \
		&& rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root;


	# Install fonts
	RUN apk --no-cache add --virtual fonts msttcorefonts-installer fontconfig && \
		update-ms-fonts && \
		fc-cache -f && \
		apk del fonts && \
		find  /usr/share/fonts/truetype/msttcorefonts/ -type l -exec unlink {} \; \
		&& rm -rf /root /tmp/* /var/cache/apk/* && mkdir /root

	ENV NODE_ICU_DATA /usr/local/lib/node_modules/full-icu

	WORKDIR /data

	COPY docker-entrypoint.sh /docker-entrypoint.sh
	ENTRYPOINT ["tini", "--", "/docker-entrypoint.sh"]

	EXPOSE 5678/tcp
	```

2. 编译你的自定义节点代码（如果你用的是 nodes starter，就是运行 `npm run build`）。把 **dist** 文件夹里的 **node** 和 **credential** 文件夹复制到你容器的 `~/.n8n/custom/` 目录中。这样它们就对 Docker 可用了。

3. 下载 [docker-entrypoint.sh](https://github.com/n8n-io/n8n/blob/master/docker/images/n8n/docker-entrypoint.sh) 文件，并把它放在与你的 Dockerfile 相同的目录中。

4. 构建你的 Docker 镜像：

	```Dockerfile
	# Replace <n8n-version-number> with the n8n release version number. 
	# For example, N8N_VERSION=0.177.0
	docker build --build-arg N8N_VERSION=<n8n-version-number> --tag=customizedn8n .
	```

现在你就可以在 Docker 里使用你的节点了。

{% hint style="info" %}
**小白提示：这 4 步在做什么？**

一句话概括：**把官方 n8n 镜像当成底板，把你的节点文件塞进去，再重新打包成一个新镜像**。

- 第 1 步：拿官方 Dockerfile 当模板，它定义了 n8n 运行需要的系统环境和依赖。
- 第 2 步：你本地编译好的节点代码（`dist` 里编译后的 `node` 和 `credential` 文件夹）会被复制进镜像的 `~/.n8n/custom/` 目录——这是 n8n 专门用来加载自定义扩展的固定位置。
- 第 3 步：入口脚本，负责容器启动时初始化 n8n 进程。
- 第 4 步：`docker build` 把这一切打成一个名为 `customizedn8n` 的新镜像。之后你用这个镜像启动容器，你的节点就已经在里面了。

命令里 `N8N_VERSION` 要替换成实际版本号，例如 `0.177.0`（注意：示例里的版本号比较老，请换成你实际在用的 n8n 版本）。
{% endhint %}

## 在全局安装的 n8n 实例中安装你的节点（Install your node in a global n8n instance）

如果你是全局安装（global）的 n8n，请确保把节点安装在 n8n 内部。n8n 会找到这个模块并自动加载它。

{% hint style="info" %}
**小白提示**：所谓「全局安装」就是你直接用 `npm install n8n -g` 装在电脑上、而不是跑在 Docker 容器里的那种方式。这种情况最简单：把编译好的节点文件放进 n8n 能扫描到的目录（默认是 `~/.n8n/custom/`，和 Docker 版一致），重启 n8n 就能自动加载。如果在 `.n8n` 下没有 `custom` 目录，需要先手动创建它，具体可参考「本地运行你的节点」章节的[故障排查](test-your-node/troubleshooting.md)部分。
{% endhint %}
