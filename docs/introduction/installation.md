---
title: 安装
---

## 安装

```shell
pip install wechaty
```

## 获取token

如果已有token，请跳过这一步。否则请阅读[介绍](/docs/introduction/puppet#4-更多)

## 编写聊天机器人

```python
from wechaty import Wechaty

import asyncio
async def main():
    bot = Wechaty()
    bot.on('scan', lambda status, qrcode, data: print('Scan QR Code to login: {}\nhttps://wechaty.js.org/qrcode/{}'.format(status, qrcode)))
    bot.on('login', lambda user: print('User {} logged in'.format(user)))
    bot.on('message', lambda message: print('Message: {}'.format(message)))
    await bot.start()

asyncio.run(main())
```
