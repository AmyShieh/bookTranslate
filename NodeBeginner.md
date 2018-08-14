# Node入门

### 提示

该书原地址为 https://www.nodebeginner.org/
中文翻译地址为 https://www.nodebeginner.org/index-zh-cn.html

之所以自己重新翻译是因为， 英文原版 node版本已经更新到 8.0.0，包括新特性的介绍也都是8.0.0版本， 但是中文翻译版的还停留在0.6.11。所以决定自己边学边翻译。顺便也锻炼英语翻译能力，仅供自己学习，如果看到的同学发现翻译有严重缺陷，可以指正，进行pull request或者issue。感谢。

### About

The aim of this document is to get you started with developing applications with Node.js, teaching you everything you need to know about "advanced" JavaScript along the way. It goes way beyond your typical "Hello World" tutorial.

### 关于

本书旨在通过node.js来开发应用，与此同时教会你一些javascript中的'高级'特性。这绝不是一个只教你写'Hello World'的教程。

### Status

You are reading the final version of this book, i.e., updates are only done to correct errors or to reflect changes in new versions of Node.js. It was last updated on June 5, 2017.

The code samples in this book are tested to work with both the Long Term Support version 6.10.3 as well as the most current 8.0.0 version of Node.js.

This site allows you to read the first 19 pages of this book for free. The complete text is available as a DRM-free eBook (PDF, ePub and Kindle format). More info is available at the end of the free part.

### 状态

你正在阅读的是最终版本， 因为只有在修正错误或者在Node版本进行更新的时候，该书本才会进行更新，上次更新时间为2017-7-5。

书中给出的code样式都经过测试， 并且支持 6.10.3,以及绝大多数当前8.0.0的node.js版本。

### Intended audience

This document will probably fit best for readers that have a background similar to my own: experienced with at least one object-oriented language like Ruby, Python, PHP or Java, only little experience with JavaScript, and completely new to Node.js.

Aiming at developers that already have experience with other programming languages means that this document won't cover really basic stuff like data types, variables, control structures and the likes. You already need to know about these to understand this document.

However, because functions and objects in JavaScript are different from their counterparts in most other languages, these will be explained in more detail.


### 受众

这本书最适合的读者也许是那些和我一样拥有这些知识背景的人： 至少在一门面向对象编程语言中有经验，诸如 Ruby, Python, PHP或者Java, 了解javaScript, Nodejs方面完全是个新手。

已经有其他编程语言经验指的是这本书不会再涉及一些基础的东西， 诸如 数据类型， 变量， 控制结构等， 本书假设你已经知道这些基础知识。

然而， 由于functions和Objects在javaScript中是不同于其他同类的编程语言， 所以这本书会解释更多的js细节。

### Structure of this document

Upon finishing this document, you will have created a complete web application which allows the users of this application to view web pages and upload files.

Which, of course, is not exactly world-changing, but we will go some extra miles and not only create the code that is "just enough" to make these use cases possible, but create a simple, yet complete framework to cleanly separate the different aspects of our application. You will see what I mean in a minute.

We will start with looking at how JavaScript development in Node.js is different from JavaScript development in a browser.

Next, we will stay with the good old tradition of writing a "Hello World" application, which is a most basic Node.js application that "does" something.

Then, we will discuss what kind of "real" application we want to build, dissect the different parts which need to be implemented to assemble this application, and start working on each of these parts step-by-step.

As promised, along the way we will learn about some of the more advanced concepts of JavaScript, how to make use of them, and look at why it makes sense to use these concepts instead of those we know from other programming languages.

The source code of the finished application is available through the NodeBeginnerBook Github repository.

### 本书结构

当你学完这本书以后， 你可以创建一个完成的web应用，该应用允许用户查看web页面，并且上传文件。

当然了，这个功能并不能'改变世界'，我们该更注重去完成一个，简单但模块分离的简洁应用， 待会你就会明白我在说什么。

我们会看到javascript在Node.js中的发展与javascript在浏览器中的发展是不同的。

接着，我们我们会用Node.js来完成传统的最基础Node.js程序——'hello world'。

然后， 我们将会讨论，我们想要建立什么样的'真实'应用。剖析该应用中需要被实施组装的不同模块，并且一步一步的完成。

依照这样的学习方式，我们会如期学到javascript中更多的高级概念、它们的使用，以及为什么使用这些概念来替换其他那些我们已知的语言就说得通。

这个完结的应用源码可以通过[the NodeBeginnerBook Github repository](https://github.com/manuelkiessling/nodebeginner.org/tree/master/code/application)获取。

## 目录

[关于](#关于)
- [状态](#状态)
- [受众](#受众)
- [本书结构](#本书结构)

[javascript 和 Node.js](#javascript和Node.js)
- [javascript与你之间](#javascript与你之间)
- [注意事项](#注意事项)
- [服务器端javascript](#服务器端javascript)
- [Hello World](#HelloWorld)

[一个成熟的Node.js的应用](#一个成熟的Node.js的应用)
- [用例](#用例)
- [应用栈](#应用栈)

[构建应用栈](#构建应用栈)
- [一个基础的http服务器](#一个基础的http服务器)
- [分析http服务器](#分析http服务器)
- [传递函数](#传递函数)
- [函数传递如何使http服务器运作](#函数传递如何使http服务器运作)

## javascript和Node.js
### javascript与你之间
### 注意事项
### 服务器端javascript
### HelloWorld

## 一个成熟的Node.js的应用
### 用例
### 应用栈

## 构建应用栈
### 一个基础的http服务器
### 分析http服务器
### 传递函数
### 函数传递如何使http服务器运作