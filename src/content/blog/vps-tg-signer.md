---
title: '在VPS上部署tg自动签到'
description: '通过docker部署tg签到脚本'
pubDate: '2026-04-25'
featured: false
---

## 目录结构

最终建议工作目录：

```bash
~/tg-signer
```

里面主要有：

```text
.signer/
my_account.session
```

含义：

|文件/目录|作用|
|---|---|
|`.signer/`|保存 tg-signer 的任务配置|
|`my_account.session`|保存 Telegram 登录状态|
|`my_sign`|你的实际签到任务名|

---

## 登录 Telegram

推荐使用临时容器登录，让 tg-signer 自己生成 session：

```bash
cd ~/tg-signer

docker rm -f tg-signer-login 2>/dev/null || true
rm -f my_account.session

docker run -it \
  --name tg-signer-login \
  -e TZ=Asia/Shanghai \
  jonnyan404/tg-signer tg-signer login
```

登录完成后，把 session 拷出来：

```bash
docker cp tg-signer-login:/opt/my_account.session "$PWD/my_account.session"
chmod 600 my_account.session
docker rm tg-signer-login
```

---

## 配置任务

```bash
cd ~/tg-signer

docker run -it --rm \
  -e TZ=Asia/Shanghai \
  -v "$PWD/.signer:/opt/.signer" \
  -v "$PWD/my_account.session:/opt/my_account.session" \
  jonnyan404/tg-signer tg-signer run my_sign
```

---

## 手动测试

```bash
cd ~/tg-signer

docker run --rm \
  -e TZ=Asia/Shanghai \
  -v "$PWD/.signer:/opt/.signer" \
  -v "$PWD/my_account.session:/opt/my_account.session" \
  jonnyan404/tg-signer tg-signer run-once my_sign
```

---

## 后台运行

```bash
cd ~/tg-signer

docker rm -f tg-signer 2>/dev/null || true

docker run -d \
  --name tg-signer \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -v "$PWD/.signer:/opt/.signer" \
  -v "$PWD/my_account.session:/opt/my_account.session" \
  jonnyan404/tg-signer tg-signer run my_sign
```

确认容器运行：

```bash
docker ps
```

---
## 查看日志

```bash
docker logs -f tg-signer
```

---

## 重启服务

```bash
docker restart tg-signer
```

---

## 停止服务

```bash
docker stop tg-signer
```

---

## 删除容器但保留配置

```bash
docker rm -f tg-signer
```

---

## 重新启动后台服务

```bash
cd ~/tg-signer

docker run -d \
  --name tg-signer \
  --restart unless-stopped \
  -e TZ=Asia/Shanghai \
  -v "$PWD/.signer:/opt/.signer" \
  -v "$PWD/my_account.session:/opt/my_account.session" \
  jonnyan404/tg-signer tg-signer run my_sign
```

---
## 不要创建空 session 文件

不要执行：

```bash
touch my_account.session
```

session 文件应该由 tg-signer/Pyrogram 登录流程生成。
