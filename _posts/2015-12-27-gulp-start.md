---
layout: post
title:  "gulp简单使用"
date:  2015-12-24
categories: HTMLCSS
---

gulp简单使用方法

---

* content
{:toc}

###Gulp？

[Gulp](http://gulpjs.com/)是一个构建系统，开发者可以使用它在网站开发过程中自动执行常见任务。Gulp是基于Node.js构建的，因此Gulp源文件和你用来定义任务的Gulp文件都被写进了JavaScript里。前端开发者可以使用它来处理常见任务：

* 搭建web服务器
* 文件保存时自动重载浏览器
* 使用预处理器如Sass、LESS
* 优化资源，比如压缩CSS、JavaScript、压缩图片

###Node.js

[Node.js](http://nodejs.cn/)就是运行在服务端的 JavaScript。Node.js 是一个基于Chrome JavaScript 运行时建立的一个平台。Node.js是一个事件驱动I/O服务端JavaScript环境，基于Google的V8引擎，V8引擎执行Javascript的速度非常快，性能非常好。Gulp和所有插件都通过JavaScript编写并依托Node.js平台。作为前端工程师你最好了解简单的Node.js。

下面提供一些Node.js的入门教程，当然你暂时不用去看，等你有足够的时间和精力的时候建议你去学习下：

[Node初学者入门，一本全面的NodeJS教程](https://cnodejs.org/getstart)

[Node.js 入门](http://ourjs.com/detail/529ca5950cb6498814000005)

[Node.js入门By Welefen Lee](http://www.welefen.com/ppt/Node-Primer.htm#0)

[Node.js v4.2.2 手册 & 文档](http://nodeapi.ucdok.com/#/api/)

有精力最好看英文的API。

下面回到我们的重点gulp

###全局安装Gulp

首先我们需要安装Node.js的环境这个就不介绍了。推荐[教程](http://www.runoob.com/nodejs/nodejs-install-setup.html)自己安装配置好。

然后在命令行输入

	npm install -g gulp

就这么简单，安装好在继续后面的。

###使用Gulp

首先，我们新建一个project文件夹，并在该目录下执行`npm init`命令：

	npm init

npm init命令会为你创建一个package.json文件，这个文件保存着这个项目相关信息。

	.
	├── app
	│   ├── css/
	│   ├── scss/
	│   ├── js/
	│   ├── index.html
	├── gulp
	│   └── tasks
	├── gulpfile.js
	├── node_modules
	│   └── 
	└── package.json


未完。。。。。


