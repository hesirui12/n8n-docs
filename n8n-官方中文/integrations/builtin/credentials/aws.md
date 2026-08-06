---
title: AWS 凭证
description: >-
  AWS 凭证的中文文档。在 n8n 工作流自动化平台中使用这些凭证来验证
  AWS 的身份。
contentType:
  - integration
  - reference
priority: medium
nodeTitle: AWS credentials
originalFilePath: integrations/builtin/credentials/aws.md
originalUrl: 'https://docs.n8n.io/integrations/builtin/credentials/aws'
url: 'https://docs.n8n.io/integrations/builtin/credentials/aws'
layout:
  description:
    visible: false
---

# AWS 凭证

{% hint style="info" %}
**大白话**：AWS 是亚马逊的云计算平台。n8n 提供两种 AWS 凭证：**AWS (IAM)** 是「填一把固定的 Access Key（访问密钥）」的简单方式，适合普通用户；**AWS (Assume Role，角色扮演)** 是「用临时身份去代替身份」的更安全方式，适合公司/服务器部署。如果你是自建 n8n 且跑在 AWS 自己的服务器上，还可以让 n8n 直接借用服务器自带的 AWS 身份，连密钥都不用存（这就是下面的「系统凭证」）。
{% endhint %}

n8n 为 AWS 提供两种凭证类型：

- **AWS（IAM）**：用一对访问密钥（Access Key ID 和 Secret Access Key）验证身份。
- **AWS（Assume Role，角色扮演）**：通过 AWS STS 服务「扮演」一个 IAM 角色来验证身份。n8n 发起 `AssumeRole` 调用时用到的初始凭证，可以手动填写，也可以自动从 n8n 运行所在的环境里读取。

如果你把 n8n 自建（self-host）在 AWS 基础设施上（EKS、ECS 或 EC2），并且不想把静态密钥存在 n8n 里，请看[使用 AWS 系统凭证（联合身份验证）](#使用-aws-系统凭证联合身份验证)。

## AWS（IAM）凭证

这些凭证可以用来验证以下节点的身份：

- [AWS Bedrock Chat Model（聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock.md)
- [AWS Certificate Manager（证书管理器）](../app-nodes/n8n-nodes-base.awscertificatemanager.md)
- [AWS Cognito](../app-nodes/n8n-nodes-base.awscognito.md)
- [AWS Comprehend](../app-nodes/n8n-nodes-base.awscomprehend.md)
- [AWS DynamoDB](../app-nodes/n8n-nodes-base.awsdynamodb.md)
- [AWS Elastic Load Balancing（负载均衡）](../app-nodes/n8n-nodes-base.awselb.md)
- [AWS IAM](../app-nodes/n8n-nodes-base.awsiam.md)
- [AWS Lambda](../app-nodes/n8n-nodes-base.awslambda.md)
- [AWS Rekognition](../app-nodes/n8n-nodes-base.awsrekognition.md)
- [AWS S3](../app-nodes/n8n-nodes-base.awss3.md)
- [AWS SES](../app-nodes/n8n-nodes-base.awsses.md)
- [AWS SNS](../app-nodes/n8n-nodes-base.awssns.md)
- [AWS SNS Trigger（触发器）](../trigger-nodes/n8n-nodes-base.awssnstrigger.md)
- [AWS SQS](../app-nodes/n8n-nodes-base.awssqs.md)
- [AWS Textract](../app-nodes/n8n-nodes-base.awstextract.md)
- [AWS Transcribe](../app-nodes/n8n-nodes-base.awstranscribe.md)
- [Embeddings AWS Bedrock（向量嵌入）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock.md)

### 支持的验证方式

- API access key（API 访问密钥）

### 相关资源

关于该服务的更多信息，请参考 [AWS 的身份与访问管理（IAM）文档](https://docs.aws.amazon.com/IAM/latest/UserGuide/getting-started.html)。

### 使用 API 访问密钥

要配置这个凭证，你需要一个 [AWS](https://aws.amazon.com/) 账号，以及：

- 你的 AWS **Region（区域）**
- **Access Key ID（访问密钥 ID）**：创建访问密钥时生成。
- **Secret Access Key（秘密访问密钥）**：创建访问密钥时生成。

创建访问密钥并配置凭证的步骤：

1. 在 n8n 凭证里，选择你的 AWS **Region（区域）**。
2. 登录 [IAM 控制台](https://console.aws.amazon.com/iam)。
3. 在右上角的导航栏里，点你的用户名，然后选择 **Security credentials（安全凭证）**。
4. 在 **Access keys（访问密钥）** 区域，点 **Create access key（创建访问密钥）**。
5. 在 **Access key best practices & alternatives（访问密钥最佳实践与替代方案）** 页面，选择你的使用场景。如果它没有提示你创建访问密钥，就选 **Other（其他）**。
6. 点 **Next（下一步）**。
7. 为访问密钥设置一个 **description（描述）** 标签值，方便识别，例如 `n8n integration`。
8. 点 **Create access key（创建访问密钥）**。
9. 显示 **Access Key ID** 和 **Secret Access Key** 后，把它们填进 n8n。
10. 如果要使用**临时安全凭证（Temporary security credential）**，打开对应开关并填写 **Session token（会话令牌）**。关于临时安全凭证的更多信息，请参考 [AWS 临时安全凭证文档](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_temp.html)。
11. 如果你用 [Amazon Virtual Private Cloud（VPC）](https://aws.amazon.com/vpc/) 托管 n8n，可以在你的 VPC 和某些应用之间建立内网连接。此时可用 **Custom Endpoints（自定义端点）** 填写相关服务的自定义地址。此配置适用于以下应用：
    - Rekognition
    - Lambda
    - SNS
    - SES
    - SQS
    - S3
    - SSM
    - Bedrock

    Bedrock 有两个端点字段：**Bedrock Endpoint** 用于列出可用模型；**Bedrock Runtime Endpoint** 用于推理（即实际调用模型），由 [AWS Bedrock Chat Model](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock.md) 和 [Embeddings AWS Bedrock](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock.md) 节点使用。如果你通过 [VPC 接口端点（PrivateLink）](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html) 且未开启私有 DNS 的方式路由 Bedrock 流量，两个都要填。

你也可以通过 AWS CLI 和 AWS API 生成访问密钥。相关说明请参考 [AWS 管理访问密钥文档](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_access-keys.html)。

## AWS（Assume Role，角色扮演）凭证

这些凭证可以用来验证以下节点的身份，并通过 IAM 角色扮演获得更强的安全性：

- [AWS Bedrock Chat Model（聊天模型）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.lmchatawsbedrock.md)
- [AWS Certificate Manager（证书管理器）](../app-nodes/n8n-nodes-base.awscertificatemanager.md)
- [AWS Cognito](../app-nodes/n8n-nodes-base.awscognito.md)
- [AWS Comprehend](../app-nodes/n8n-nodes-base.awscomprehend.md)
- [AWS DynamoDB](../app-nodes/n8n-nodes-base.awsdynamodb.md)
- [AWS Elastic Load Balancing（负载均衡）](../app-nodes/n8n-nodes-base.awselb.md)
- [AWS IAM](../app-nodes/n8n-nodes-base.awsiam.md)
- [AWS Lambda](../app-nodes/n8n-nodes-base.awslambda.md)
- [AWS Rekognition](../app-nodes/n8n-nodes-base.awsrekognition.md)
- [AWS S3](../app-nodes/n8n-nodes-base.awss3.md)
- [AWS SES](../app-nodes/n8n-nodes-base.awsses.md)
- [AWS SNS](../app-nodes/n8n-nodes-base.awssns.md)
- [AWS SNS Trigger（触发器）](../trigger-nodes/n8n-nodes-base.awssnstrigger.md)
- [AWS SQS](../app-nodes/n8n-nodes-base.awssqs.md)
- [AWS Textract](../app-nodes/n8n-nodes-base.awstextract.md)
- [AWS Transcribe](../app-nodes/n8n-nodes-base.awstranscribe.md)
- [Embeddings AWS Bedrock（向量嵌入）](../cluster-nodes/sub-nodes/n8n-nodes-langchain.embeddingsawsbedrock.md)

### 支持的验证方式

- 角色扮演（Role Assumption）

### 相关资源

关于角色扮演的更多信息，请参考 [AWS 的 IAM 角色文档](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles.html) 和 [STS AssumeRole 文档](https://docs.aws.amazon.com/STS/latest/APIReference/API_AssumeRole.html)。

### 理解 AWS 角色扮演

AWS 角色扮演（Role Assumption）让你通过「临时扮演一个 IAM 角色」来安全地访问 AWS 资源，而不是使用长期有效的访问密钥。这符合 AWS 的安全最佳实践，并带来以下好处：

- **跨账号访问（Cross-account access）**：访问不同 AWS 账号里的资源。
- **更强的安全性（Enhanced security）**：使用会自动过期的临时凭证。
- **最小权限原则（Principle of least privilege）**：只授予特定任务需要的权限。
- **审计追踪（Audit trail）**：更好地追踪谁访问了哪些资源。

n8n 使用官方 AWS SDK 发起 STS `AssumeRole` 调用。它在给节点请求签名时会自动申请新的临时凭证，所以你不需要操心凭证过期的问题。这和 AWS（IAM）凭证里的「临时安全凭证」选项不同——那个选项里你填的是一成不变的静态 Session token，n8n 无法自动续期，到期后你必须手动换新的。

### 配置 AWS Assume Role 凭证

要配置这个凭证，你需要准备：

#### 必填参数

- **Region（区域）**：调用 STS 服务扮演角色时使用的 AWS 区域。n8n 会调用该区域的 STS 端点。这包括 AWS 中国区（`cn-*`）和 AWS GovCloud 区（`us-gov-*`）（从 n8n 2.29.0 开始支持）。
- **Role ARN（角色 ARN）**：你想扮演的 IAM 角色的 Amazon Resource Name（ARN），格式为 `arn:aws:iam::123456789012:role/MyRole`。这个角色必须配置了信任策略（trust policy），允许你的凭证扮演它。
- **External ID（外部 ID）**：角色的信任策略要求的一个唯一标识符，用于防止「混乱的副手」（confused deputy）攻击。这应该是一个你自己生成并配置的秘密值，需要同时配置在角色的信任策略和这个凭证里。请把它当作敏感信息对待，不要分享给你不信任的其他 n8n 用户。
- **Role Session Name（角色会话名称）**：为这个扮演出来的会话取的名字（用于审计）。默认值是 `n8n-session`。它会出现在 AWS CloudTrail 日志里，方便你识别这个会话。

#### STS 凭证（二选一）

为 `AssumeRole` 调用提供凭证，你有两种选择：

##### 方式一：使用系统凭证（推荐用于服务器部署）

如果你的 n8n 服务器运行环境本身已经有 AWS 身份，就打开 **Use System Credentials（使用系统凭证）**。这样 n8n 会自动发现 `AssumeRole` 调用所需的凭证，无需在 n8n 里存放静态密钥。n8n 会按以下顺序依次尝试这些来源，使用第一个能返回凭证的来源：

1. 环境变量（`AWS_ACCESS_KEY_ID`、`AWS_SECRET_ACCESS_KEY`，可选 `AWS_SESSION_TOKEN`）
2. EKS IAM Roles for Service Accounts（IRSA）
3. EKS Pod Identity
4. ECS 或 Fargate 任务角色
5. EC2 实例配置文件（instance profile）

这种方式需要你的 n8n 管理员开启系统凭证访问权限，具体做法是把环境变量 `N8N_AWS_SYSTEM_CREDENTIALS_ACCESS_ENABLED` 设为 `true`。配置细节和安全注意事项见[使用 AWS 系统凭证（联合身份验证）](#使用-aws-系统凭证联合身份验证)。

##### 方式二：手动填写 STS 凭证

如果系统凭证不可用，就手动填写以下内容：

- **STS Access Key ID**：一个有权限扮演目标角色的 IAM 用户或角色的 Access Key ID。
- **STS Secret Access Key**：与上面 STS Access Key ID 对应的 Secret Access Key。
- **STS Session Token**（可选）：如果 STS 调用用的是临时凭证，就填这个会话令牌。

#### 可选参数

- **Custom Endpoints（自定义端点）**：如果使用 Amazon VPC，你可以为 AWS 服务指定自定义端点：

    - Rekognition Endpoint
    - Lambda Endpoint
    - SNS Endpoint
    - SES Endpoint
    - SQS Endpoint
    - S3 Endpoint
    - SSM Endpoint
    - Bedrock Endpoint（用于列出可用模型）
    - Bedrock Runtime Endpoint（用于 Bedrock 推理，例如通过 [VPC 接口端点（PrivateLink）](https://docs.aws.amazon.com/bedrock/latest/userguide/vpc-interface-endpoints.html)）

### 配置步骤

1. 在目标 AWS 账号里创建 IAM 角色。下面的信任策略适用于**方式二：手动填写 STS 凭证**。如果你用**方式一：使用系统凭证**，`Principal` 应该是 n8n 自身运行所扮演的角色。请参考[系统凭证的信任策略](#系统凭证的信任策略)。

   ```json
   {
     "Version": "2012-10-17",
     "Statement": [
       {
         "Effect": "Allow",
         "Principal": {
           "AWS": "arn:aws:iam::SOURCE-ACCOUNT:root"
         },
         "Action": "sts:AssumeRole",
         "Condition": {
           "StringEquals": {
             "sts:ExternalId": "your-unique-external-id"
           }
         }
       }
     ]
   }
   
   ```
2. 在 n8n 中配置凭证：
   - 选择你的 AWS **Region（区域）**
   - 填写你创建的角色的 **Role ARN**
   - 设置一个唯一的 **External ID**（要和信任策略里的一致）
   - 选择你的 **STS 凭证方式**
   - 填写 **Role Session Name**（或用默认值）
3. 使用内置的测试功能**测试凭证**，确认角色扮演可以正常工作。

### 安全最佳实践

- 每个凭证使用唯一的 External ID，防止未授权访问。
- 定期轮换用于角色扮演的 STS 凭证。
- 对「发起扮演的凭证」和「目标角色」都遵循最小权限原则。
- 在多人共享的实例上，保持系统凭证访问处于关闭状态。参考[使用 AWS 系统凭证（联合身份验证）](#使用-aws-系统凭证联合身份验证)。

## 使用 AWS 系统凭证（联合身份验证）

本小节面向自建（self-hosted）n8n 实例的管理员。

{% hint style="info" %}
系统凭证访问只适用于自建 n8n，n8n Cloud（云版）不提供此功能。
{% endhint %}

当 n8n 运行在 AWS 基础设施上时，基础设施本身就可以提供一个 AWS 身份。不需要创建、存储或轮换任何访问密钥。这是 EKS、ECS 和 EC2 上验证工作负载身份的标准方式，安全团队也常常要求这么做（「零静态密钥」）。

n8n 通过官方 AWS SDK 的凭证提供器读取这些**系统凭证**，并在 **Use System Credentials（使用系统凭证）** 打开时，把它们作为 **AWS (Assume Role)** 凭证的起始凭证。这对所有接受 AWS (Assume Role) 凭证的节点都有效，包括 AWS Bedrock AI 节点。

{% hint style="info" %}
系统凭证永远是「角色扮演的起点」，绝不会是 n8n 直接用来调用 AWS 的身份。你仍然必须填写 **Role ARN**，而且该角色必须信任 n8n 运行时的身份。

如果 n8n 当前运行所扮演的角色已经具备你的工作流需要的权限，那就填同一个角色的 ARN，并允许它扮演自己。参考[系统凭证的信任策略](#系统凭证的信任策略)。
{% endhint %}

### 开启访问权限

系统凭证的访问权限**默认是关闭的**。要开启它，在每个 n8n 实例（主实例和 worker 都要）上设置这个环境变量：

```bash
N8N_AWS_SYSTEM_CREDENTIALS_ACCESS_ENABLED=true
```

{% hint style="warning" %}
开启后，任何能创建 AWS (Assume Role) 凭证的 n8n 用户，都可以把服务器自己的 AWS 身份作为角色扮演的起点。请只在单租户、自建的实例上开启，并且确保所有能创建凭证的人都是你信任的。

为了限制工作流能用服务器身份做什么，请让服务器自己的 IAM 权限保持最小。理想情况下，只授予对工作流要用的特定角色的 `sts:AssumeRole` 权限，并且每个角色都用 External ID 保护。
{% endhint %}

### 支持的凭证来源

n8n 会按以下顺序依次尝试这些来源，使用第一个能返回凭证的来源：

| 顺序 | 来源 | n8n 如何识别它 | 典型平台 |
|---|---|---|---|
| 1 | 环境变量 | `AWS_ACCESS_KEY_ID` 和 `AWS_SECRET_ACCESS_KEY`（可选 `AWS_SESSION_TOKEN`） | 任意 |
| 2 | EKS IAM Roles for Service Accounts（IRSA） | `AWS_ROLE_ARN` 和 `AWS_WEB_IDENTITY_TOKEN_FILE` | Amazon EKS |
| 3 | EKS Pod Identity | `AWS_CONTAINER_CREDENTIALS_FULL_URI` | Amazon EKS |
| 4 | ECS 或 Fargate 任务角色 | `AWS_CONTAINER_CREDENTIALS_RELATIVE_URI` | Amazon ECS / Fargate |
| 5 | EC2 实例配置文件 | EC2 实例元数据服务（IMDSv2） | Amazon EC2 |

需要注意的几点：

- 来源 2 到 4 的识别变量，是 AWS 在你配置对应平台功能时自动注入的，不需要你自己设置。
- 如果你在容器里设置了 `AWS_ACCESS_KEY_ID` 和 `AWS_SECRET_ACCESS_KEY`，它们的优先级高于 IRSA、Pod Identity 和实例角色。想使用联合身份来源的话，请把它们删掉。
- n8n 在需要时才会去解析系统凭证，所以被轮换或短期的来源凭证（比如 Kubernetes 定期轮换的 IRSA 令牌）会自动被识别到。
- 有意不支持读取 `~/.aws` 里的 AWS CLI 配置文件（`AWS_PROFILE`）。

#### Amazon EKS 搭配 IRSA

[IAM Roles for Service Accounts](https://docs.aws.amazon.com/eks/latest/userguide/iam-roles-for-service-accounts.html) 可以把一个 IAM 角色和运行 n8n 的 Kubernetes 服务账号关联起来。在服务账号上标注角色 ARN（`eks.amazonaws.com/role-arn`）即可。EKS 会把 `AWS_ROLE_ARN` 和 `AWS_WEB_IDENTITY_TOKEN_FILE` 注入到 Pod 里，n8n 再用这个令牌去区域的 STS 端点换取临时凭证。

#### Amazon EKS 搭配 Pod Identity

[EKS Pod Identity](https://docs.aws.amazon.com/eks/latest/userguide/pod-identities.html) 是 IRSA 的更新替代方案。安装 Pod Identity Agent 插件，然后在 n8n 服务账号和某个 IAM 角色之间创建 pod identity 关联即可。不需要配置 OIDC 提供方。

#### Amazon ECS 和 Fargate

在 n8n 的任务定义（task definition）上分配一个[任务角色（task role）](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task-iam-roles.html)。

#### Amazon EC2

给运行 n8n 的实例挂载一个[实例配置文件（instance profile）](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_use_switch-role-ec2_instance-profiles.html)。n8n 使用 IMDSv2，所以即使实例禁用了 IMDSv1 也能正常工作。

### 系统凭证的信任策略

你填在 **Role ARN** 里的角色，必须信任 n8n 运行时使用的身份：即 IRSA 角色、Pod Identity 角色、ECS 任务角色或 EC2 实例角色。`Principal` 要填那个角色的 ARN，而不是账号根（account root）。

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::123456789012:role/n8n-service-account-role"
      },
      "Action": "sts:AssumeRole",
      "Condition": {
        "StringEquals": {
          "sts:ExternalId": "your-unique-external-id"
        }
      }
    }
  ]
}
```

要找出该用哪个 ARN 作为 `Principal`，在 n8n 容器或实例内部运行 `aws sts get-caller-identity` 即可。

如果 n8n 运行所扮演的角色已经具备你的工作流需要的权限，那就把同一个角色作为 **Role ARN**，并像上面那样把该角色自己的 ARN 加进它的信任策略。即使角色扮演自己，AWS 也要求这样做。

n8n 运行所扮演的角色还需要对目标角色有 `sts:AssumeRole` 权限。请只对工作流要用的特定角色授权，而不是对 `*` 授权。

### AWS 中国区和 GovCloud

{% hint style="info" %}
**从 n8n 2.29.0 开始支持**。在更早的版本里，IRSA 在 AWS 中国区和 GovCloud 分区会失败，因为 n8n 调用的是全局 STS 端点。
{% endhint %}

系统凭证和角色扮演在所有 AWS 分区都可用。n8n 会调用凭证所属区域的 STS 端点：AWS 中国区（`cn-*`）是 `sts.{region}.amazonaws.com.cn`，AWS GovCloud 区（`us-gov-*`）是 `sts.us-gov-{east,west}-1.amazonaws.com`。

### 代理（Proxy）行为

如果你的实例使用了 HTTP(S) 代理（`HTTPS_PROXY`、`HTTP_PROXY`、`NO_PROXY`），n8n 会把 STS 调用（web identity 令牌交换和 `AssumeRole`）走代理。但是对链路本地元数据服务（EC2 IMDS、ECS 和 Pod Identity 端点）的请求始终直连，绝不走代理，因为这些地址只能从主机本身访问。

### 相关的环境变量

| 变量 | 默认值 | 用途 |
|---|---|---|
| `N8N_AWS_SYSTEM_CREDENTIALS_ACCESS_ENABLED` | `false` | 允许 AWS (Assume Role) 凭证上的 **Use System Credentials** 选项读取服务器的 AWS 身份。 |
| `N8N_AWS_SYSTEM_CREDENTIALS_SDK_SOURCES` | `all` | 过渡性设置，从 n8n 2.29.0 开始可用。控制哪些系统凭证来源通过 AWS SDK 解析，而不是用 n8n 的旧版解析器。可接受 `all`、`none`，或以下值的逗号分隔子集：`environment`、`roleForServiceAccount`、`podIdentity`、`containerMetadata`、`instanceMetadata`。只在升级后 AWS 身份验证出问题时才改它。n8n 会在未来的版本中移除这个开关。 |
| `N8N_AWS_LEGACY_SIGNER` | `false` | 过渡性设置，从 n8n 2.30.0 开始可用。设为 `true` 可以用旧版的 `aws4` 签名器给 AWS 请求签名，而不是用 AWS 的 Signature V4 实现。只在升级后 AWS 请求失败时用作回退。n8n 会在未来的版本中移除这个开关。 |

### 故障排查

- **提示「Access to AWS system credentials disabled, contact your administrator.」（无法访问 AWS 系统凭证，请联系管理员）**：说明 **Use System Credentials** 选项已打开，但服务器上的 `N8N_AWS_SYSTEM_CREDENTIALS_ACCESS_ENABLED` 没有设为 `true`。
- **用的是错误的身份**：环境变量的优先级高于 IRSA，IRSA 又高于 Pod Identity、ECS 和 EC2。最常见的原因是容器里残留了一个 `AWS_ACCESS_KEY_ID`。参考[支持的凭证来源](#支持的凭证来源)。
- **在 EKS 上凭证测试失败**：检查服务账号的标注（IRSA）或 pod identity 关联，并确认 Pod 收到了注入的环境变量（用 `kubectl exec <pod-name> -- env | grep AWS` 查看）。
- **调用 `sts:AssumeRole` 时提示 `AccessDenied`**：说明 n8n 找到了系统凭证，但目标角色拒绝了它们。检查角色的信任策略里是否指名了 n8n 运行时的身份，以及 **External ID** 是否和策略里的条件一致。参考[系统凭证的信任策略](#系统凭证的信任策略)。
