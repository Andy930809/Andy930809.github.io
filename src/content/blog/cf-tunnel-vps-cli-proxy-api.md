---
title: '通过CF-Tunnel在VPS部署Cli-Proxy-Api'
description: '管理域名： https://managementcpa.example.com/management.html'
pubDate: '2026-04-25'
featured: false
---
## 1. 整体架构

```text
API 域名：
https://cpa.example.com/v1/*

管理域名：
https://management-cpa.example.com/management.html
```

两者都通过 Cloudflare Tunnel 转发到 VPS 本机：

```text
http://localhost:8317
```

但 Cloudflare 上层规则不同：

```text
cpa.example.com
只允许 /v1/* API 路径

management-cpa.example.com
整个域名受 Cloudflare Access 保护
```

整体链路：

```text
Client
  ↓
Cloudflare
  ↓
Cloudflare Tunnel
  ↓
VPS cloudflared
  ↓
localhost:8317
  ↓
CPA Docker Container
```

---

## 2. Cloudflared / Tunnel 状态

安装并运行 `cloudflared` 后，建议作为 systemd 服务运行：

```text
cloudflared.service
Loaded: loaded
Active: active (running)
Enabled: yes
```

日志中应能看到类似：

```text
Registered tunnel connection
```

说明 VPS 已成功连接到 Cloudflare Tunnel。

---

## 3. 域名状态

示例域名：

```text
example.com
```

前提：

```text
域名已托管到 Cloudflare
```

建议规划两个子域名：

| 域名 | 用途 |
|---|---|
| `cpa.example.com` | 纯 API 域名 |
| `management-cpa.example.com` | 管理面板域名 |

不要把 API 和管理面板混在一个入口里。

---

## 4. CPA 结构

核心文件：

```text
~/cpa/config.yaml
~/cpa/docker-compose.yml
~/cpa/auths/
~/cpa/logs/
```

用途：

```text
config.yaml          CPA 配置
docker-compose.yml   Docker 启动配置
auths/               保存认证数据
logs/                保存日志
```

---

## 5. CPA 配置示例

`config.yaml` 核心配置：

```yaml
host: "127.0.0.1"
port: 8317
auth-dir: "~/.cli-proxy-api"
request-retry: 3

quota-exceeded:
  switch-project: true
  switch-preview-model: true

api-keys:
  - "sk-cpa-..."

remote-management:
  allow-remote: true
  secret-key: "mgt-cpa-..."
  disable-control-panel: false

logging-to-file: true
usage-statistics-enabled: true
logs-max-total-size-mb: 100
```

---

## 6. Docker Compose 配置

`docker-compose.yml` 示例：

```yaml
services:
  cli-proxy-api:
    image: eceasy/cli-proxy-api:latest
    pull_policy: always
    container_name: cli-proxy-api
    network_mode: host
    volumes:
      - ./config.yaml:/CLIProxyAPI/config.yaml
      - ./auths:/root/.cli-proxy-api
      - ./logs:/CLIProxyAPI/logs
    restart: unless-stopped
```

---

## 7. Cloudflare Tunnel 路由设计

在 Cloudflare Tunnel 中添加两个 Published application routes：

```text
cpa.example.com            -> http://localhost:8317
management-cpa.example.com -> http://localhost:8317
```

虽然两个域名都转发到同一个 CPA 服务，但 Cloudflare 规则不同：

```text
cpa.example.com：
只允许 /v1/*

management-cpa.example.com：
整个域名受 Cloudflare Access 保护
```

这样可以把 API 调用和管理入口隔离开。

---

## 8. Cloudflare WAF 规则

给 API 域名添加 WAF Custom Rule。

规则目标：

```text
阻止 cpa.example.com 上所有非 /v1/ 路径
```

表达式：

```text
(http.host eq "cpa.example.com" and not starts_with(http.request.uri.path, "/v1/"))
```

Action：

```text
Block
```

---

## 9. Cloudflare Access 配置

给管理域名配置 Cloudflare Access。

应用类型：

```text
Self-hosted
```

保护范围：

```text
https://management-cpa.example.com/*
```

访问策略：

```text
Allow 指定邮箱
```

不要设置成：

```text
Everyone
```

最终管理面板访问流程：

```text
访问 management-cpa.example.com/management.html
-> Cloudflare Access 验证邮箱/身份
-> 通过后进入 CPA 管理面板
-> 再输入 mgt-cpa-... 登录
```

这样管理面板有两层保护：

```text
第一层：Cloudflare Access
第二层：CPA secret-key
```

---

## 10. 最终访问方式

### 10.1 API 调用地址

统一使用：

```text
https://cpa.example.com/v1
```

OpenAI SDK 示例：

```python
from openai import OpenAI

client = OpenAI(
    api_key="sk-cpa-...",
    base_url="https://cpa.example.com/v1"
)

resp = client.chat.completions.create(
    model="你的模型名",
    messages=[
        {"role": "user", "content": "Reply with exactly: CPA OK"}
    ],
)

print(resp.choices[0].message.content)
```

### 10.2 管理面板地址

统一使用：

```text
https://management-cpa.example.com/management.html
```

访问时需要：

```text
Cloudflare Access 验证
+
CPA 管理密钥 mgt-cpa-...
```

---
## 11. 安全性总结

这种部署方式的安全点：

```text
1. VPS 不开放 CPA 业务端口
2. CPA 只监听 127.0.0.1
3. Cloudflare Tunnel 负责入站转发
4. API 与管理面板分域名
5. API 域名只允许 /v1/
6. 管理域名加 Cloudflare Access
7. CPA 自身仍保留 secret-key 登录
```
