---
title: Python-Wechaty Puppet
---

<!-- A channel is a connection between communication applications and a bot. A bot, registered with Azure, uses channels to facilitate the communication with users. -->

<!-- WhatsApp is the most popular OTT app in many parts of the world. With the WhatsApp Business API with Twilio, you can reach more than 1.5 billion WhatsApp users. You can send notifications, have two-way conversations, or build chatbots. If you're trying to reach – and better converse with – users in LATAM, EMEA, and APAC, you need to consider using WhatsApp. -->

<!-- :::
The WhatsApp Business API with Twilio is now available in an early-access program, to allow developers to start building and prototyping in a sandbox. To launch apps in production, start by requesting access to enable WhatsApp on your Twilio number. WhatsApp is currently providing this access in a limited availability program, for which WhatsApp approval is required for all customers who wish to create their own profiles.
::: -->

Puppet（木偶）在Python-Wechaty是一个抽象层，用来对所有IM平台的通用原子操作做一定程度上的抽象封装，比如发文本消息，发图片消息，发文件消息，发语音消息等。在定义层，Python-Wechaty是直接依赖于Python-Wechaty-Puppet抽象库，在实际运行时，而是依赖于的具体IM平台的Puppet实现，比如微信平台、微信公众号、钉钉、飞书等平台的Puppet实现。

为了帮助您更容易的理解Wechaty整个生态架构，可以仔细阅读下图内容，同时也欢迎阅读[源码](https://github.com/wechaty/python-wechaty)。

![Puppet Structure](/img/docs/architecture.png)

## 2. Puppet 列表

### 2.1. Puppet 用户

| Protocol | Puppet Provider | Environment Variable |
| --- | --- | --- |
| Web | [PuppetPuppeteer](https://github.com/wechaty/wechaty-puppet-puppeteer) | `export WECHATY_PUPPET=wechaty-puppet-puppeteer` |
| Windows | [PuppetWxwork](https://github.com/juzibot/wxwork-tester) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| Web | [PuppetWechat4u](https://github.com/wechaty/wechaty-puppet-wechat4u) | `export WECHATY_PUPPET=wechaty-puppet-wechat4u` |
| iPad | [PuppetRock](https://github.com/wechaty/puppet-service-providers) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| iPad | [PuppetPadLocal](https://github.com/wechaty/puppet-service-providers) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |
| Windows | [PuppetDonut](https://github.com/wechaty/puppet-service-providers) | `export WECHATY_PUPPET=wechaty-puppet-hostie` |

### 2.2. Puppet 开发者

如果您想要开发一个新的puppet来提供给其他的开发者使用的话，以下两个库是你开始的第一步。

| Wechaty Puppet | Backend Protocol | Npm Name | Npm Version | Stage |
| :--- | :--- | :--- | :--- | :--- |
| [Puppet](https://github.com/wechaty/wechaty-puppet) | Abstract Base Class | wechaty-puppet | ![Puppet](https://badge.fury.io/js/wechaty-puppet.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet/next.svg)](https://www.npmjs.com/package/wechaty-puppet?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |
| [PuppetMock](https://github.com/wechaty/wechaty-puppet-mock) | Mocking | wechaty-puppet-mock | ![PuppetMock](https://badge.fury.io/js/wechaty-puppet-mock.svg)   [![npm \(tag\)](https://img.shields.io/npm/v/wechaty-puppet-mock/next.svg)](https://www.npmjs.com/package/wechaty-puppet-mock?activeTab=versions) | ![Stage:Release](https://img.shields.io/badge/Stage-Release-green.svg) |

## 3. Puppet 功能列表

### 不同Puppet功能对比

Puppet | donut | padplus | wxwork | rock
:---|:---:|:---:| :---:| :---:
支持账号|个人微信|个人微信|企业微信|个人微信
**<消息>**|  |  |  |
收发文本| ✅  | ✅  |✅ |✅
收发个人名片| ✅  |✅   |✅ |✅
收发图文链接| ✅  |✅   |✅ |✅
发送图片、文件| ✅  | ✅（对内容有大小限制，20M以下）  |✅ |✅（较慢）
接收图片、文件| ✅  | ✅（对内容有大小限制，25M以下）  |✅ |✅
发送视频| ✅  | ✅   |✅ |✅（较慢）
接收视频| ✅  | ✅   |✅ |✅
发送小程序| ✅  | ✅   |✅ |✅
接收动图| ❌  | ✅   |✅|❌
发送动图| ✅  | ✅  |✅ |✅（以文件形式发送）
接收语音消息| ✅  | ✅   |✅|❌
发送语音消息| ❌  | ❌  |❌ |❌
转发文本| ✅  | ✅   |✅ |✅
转发图片| ✅  | ✅  |✅ |✅
转发图文链接| ✅  | ✅  |✅|❌
转发音频| ✅ | ❌   |✅ |❌
转发视频| ✅  | ✅   |✅ |✅
转发文件| ✅  | ✅   |✅|✅
转发动图| ❌  | ❌   |✅| ❌
转发小程序| ✅ | ✅   |✅ |✅
**<群组>**|   |    |
创建群聊|✅|✅ |✅|✅
设置群公告|✅|✅|✅|✅
获取群公告|❌|✅|❌|✅
群二维码|❌|✅ |❌|❌
拉人进群|✅|✅ |✅|✅
踢人出群|✅|✅ |✅|✅
退出群聊|✅|✅ |❌|✅
改群名称|✅|✅ |✅|❌
入群事件|✅|✅ |✅|✅
离群事件|✅|✅ |✅|✅
群名称变更事件|✅|✅|✅|❌
@群成员|✅|✅|✅|✅
群列表|✅|✅ |✅|✅
群成员列表|✅|✅|✅|✅
群详情|✅|✅|✅|✅
**<联系人>**|  |   |
修改备注|✅|✅ |✅|❌
添加好友|✅|✅|✅|❌
自动通过好友|✅|✅|✅|✅
好友列表|✅|✅ |✅|✅
好友详情|✅|✅|✅|✅
**<其他>**|  |   |
登录事件|✅|✅|✅|✅
扫码状态|❌|✅|❌|❌
登出事件|✅|✅|✅|❌
主动退出登录|✅|✅|❌|✅
依赖协议|Windows|iPad| Windows|iPad

## 4. 更多

如果想要了解更多的关于Puppet功能，请转到[https://github.com/wechaty/wechaty-puppet/wiki](https://github.com/wechaty/wechaty-puppet/wiki)

* 联系Puppet作者 & 获取Puppet Token: [https://github.com/wechaty/puppet-service-providers](https://github.com/wechaty/puppet-service-providers)
* 仓库: [https://github.com/wechaty/wechaty-puppet](https://github.com/wechaty/wechaty-puppet)
* Puppet 开发指南 Puppet Development Guide: [https://github.com/wechaty/wechaty-puppet/wiki/Development](https://github.com/wechaty/wechaty-puppet/wiki/Development)
* Puppet 相关链接: [https://github.com/wechaty/wechaty-puppet/wiki/Links](https://github.com/wechaty/wechaty-puppet/wiki/Links)
