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

在我们讨论技术相关的东西之前，我们先花点时间来谈谈你和javascript之间的关系，这主要是为了确保之后的章节阅读对你而言是有意义的。

如果你和我一样， 在很久以前就使用html'开发'HTML文档，你遇到了javascript这个有趣的东西， 但是你仅仅只是用它来进行简单的操作，为你的网站添加交互性。

而你真正想要的是'干货'，你想知道如何构建一个复杂的网站， 你学习了诸如PHP,Ruby,Java的编程语言，开始写起了后端代码。

虽然， 你关注着javascript, 你看到了jquery的介绍， Prototype等，很多在javascript领域中的东西似乎越来越高级，而javascript这门语言也不仅仅只是window.open()这么简单了。

尽管用jquery来随心加强你的web页面的时候， 你会觉得很棒， 但那最终都是前端的东西，到最后，充其量你只是javascript的使用者， 而非开发者。

接着， 出现了Node.js, 服务器端的javascript, so cool~

你决定， 是时候好好审视下过去与现在的jacascript了， 但是，别着急， 写Node.js应用是一件事，明白它为什么需要这样写， 以及这样写的意义——了解Javascript,这次来真的了。

问题来了： 由于javascript是以两种形态存在的，甚至也许是三种，发现一种学习javascript的正确方式并不简单。为了让你在写Node.js应用的时候感受你不仅仅只是在使用JavaScript，而是在开发它，并非是一件易事。

我的目标就是为你提供方向。

### 注意事项

业界真的有很多杰出的javascript程序员， 但是我并不是其中一员。

我仅仅只是我在前一章节提到的那个我。对于后端开发web应用我倒是略知一二，但是对于Node.js，我完全是一个新手。最近我学习了一些javascript的高级特性的概念，但没有实战。

所以这不是一本"从初学到精通"的书籍， 这更像是一本"从初级到高级"的书。

如果我成功的话， 这本书将会是像在我学Node.js的时候最希望拥有的教程。

### 服务器端javascript

最早javascript是运行在浏览器中。但它仅仅只是上下问。它定义了你可以使用这个语言做什么，但是它没有过多解释这门语言本身可以用来做什么。 javascript是一门完全性语言，相较于其他"完整性"语言， 它们能做的事，你完全可以使用javaScript来实现。

Node.js实际上就是另外一种上下文，它允许你在除了浏览器平台之外的后端运行javascript。

为了执行你打算运行在后端的javascript, 它需要编译，以及执行。这就是Node.js所做的，通过使用Google的VM虚拟器，是javascript拥有和Google Chrome一样的运行环境。

因此，Node.js实际上就即是一个运行环境，又是一个库。


### HelloWorld

好了，我们赶紧来写我们的第一个Node.js应用'Hello world'吧。

打开你最喜欢的编辑器，并且创建一个helloworld.js的文件，我们想让'hello world'输出到 STDOUT,下面是你要写的代码

`console.log('hello world');`

保存该文件， 并且通过Node.js执行它

`node helloworld.js`

此时应该在你的终端输出hello world。

好吧， 这个东西是有点无聊， 我们来写点真正的干货吧。

## 一个成熟的Node.js的应用
### 用例

我们让它简单点， 但是足够实用：

- 用户可以用过浏览器使用我们的应用。
- 当用户请求http://domain/start网站暂时文件上传表单的时候，用户应该看到欢迎页。
- 通过选择图片文件来上传并提交这个表单，接着这个图片应该被提交至http://domain/upload， 一旦图片提交完成，就可以在此处展示上传的图片。

更进一步的说， 我们并不想只是为了完成功能而写一些基础代码，而是尽可能的让代码看起来更优雅， 准确性更高，我们刻意对代码进行抽象，以此来达成更适合构建复杂Node.js应用的方式。

### 应用栈

我们来分析下我们的应用。为了能实现上述用例中的功能， 我们都需要做什么呢？

- 我们需要提供web页面， 因此我们需要一个http服务器。
- 我们的服务需要响应不同的请求，这要依赖于请求的URL，因此，我们需要不同类型的Router来匹配相对应的请求。
- 当请求被服务器接收并用过路由传递之后， 需要对其进行处理，因为我们需要最终的请求处理程序。
- 因为有存在post请求的可能， 所有需要请求数据处理功能。
- 我们不进要处理请求的URL，我们还想要展示url请求后的内容， 这意味着我们需要一些视图逻辑方面的处理以发送内容到用户浏览器。
- 最后，用户要能上传图片， 所以我们还需要上传处理功能来处理这方面的细节。

我们可以考虑下， 如何使用PHP来构建这样一个功能。

假如用node的话， 就会有点不一样了， 因为用node,我们不仅需要实现我们的应用，我们也在实在整个http服务。实际上， 我们的web应用以及对应的web服务器基本上是一样的。

这听起来也似乎有很多工作，但是慢慢的， 你就会发现， 对于node而言， 并非如此。

我们来开始实现我们的第一栈——Http服务器吧。

## 构建应用栈
### 一个基础的http服务器

当我到达我想要开始我的第一个'真正的'node.js应用的时候 ，我好奇的不仅仅是如何着手去code,还有如何去组织我的code。

我需要在一个文件中包含所有吗？ 大多数网上的教程教你如何用node.js写一个基础的HTTP服务器,会将所有的逻辑卸载一个地方，那假设我想保证我的代码可读性，并且实现更多功能该怎么办呢？

实际上，保持不同模块分离，把它们放在模块中相对简单。

这会对你拥有一个简洁的主文件，你可以用Node.js来执行它，并且，一个简洁的模块也可以被主文件和其他模块调用。

接下来， 我们创建一个启动应用的主文件和一个我们的http服务代码运行的模块文件吧。

在我的印象中，将主文件命名为index.js或多或少是一个标准，把我们的server模块放到server.js中则很好理解。

我们开始写server模块把~  新建一个server.js在你项目的根目录下， 该文件的内容如下：

```
    var http = require("http");
    http.createServer(function(req, res) {
        res.writeHead(200, {"content-Type": 'text/plain'});
        res.write("hello world");
        response.end();
    }).listen(8888);
```

你刚才写了一个可运行的http服务器，我们来运行一下来证明，测试它。首先，用node.js执行你的文件
`node server.js`

现在，打开你的浏览器， 并且到http://localhost:8888/。在该页面上将会展示"hello world"

这看起来十分有趣， 不是吗，接下来我们先谈谈在该服务器中发生了什么，把该如何组织我们的项目先放到一边如何？我保证之后会解决那个问题~~~

### 分析http服务器

接下来，我们来分析这里实际发生了什么。

在代码的第一行引入了Node.js自带的`http`module,并赋值给http变量。

我们可以调用http模块提供的函数：createServer。这个函数返回一个对象，这个对象有一个listen方法，该方法有一个数值参数， 指定这个http服务器监听的端口号。

我们暂时先忽略http.createServer()括号里面的函数的定义。

我们可以像下面这样写代码，并且在8888端口监听：

```
    var http = require('http');
    var server = http.createServer();
    server.listen(8888);
```
以上代码将会启动一个HTTP服务器，监听8888端口并不做任何操作(甚至对请求都不会响应)。

最有趣的部分是createServer()中的第一个参数——函数的定义。

实际上， 在createServer()中的第一个参数也是唯一一个参数。因为在javaScript中，函数可以像其他值一样被传递。

### 传递函数

你可以做这些事情， 如下所示：

```
    function say(word) {
        console.log(word);
    }

    function execute(fun, value) {
        fun(value);
    }

    execute(say, 'Hello');
```

仔细阅读上面的代码，我们为execute传递了一个say方法作为第一个参数，而不是say的返回值。

因此, say就变成了execute中的本地变量——fun, execute可以通过fun()的方式来使用say函数。

当然了， 因为say带了一个参数， 所以execute在调用fun的时候也可以传递该参数。

正如我们刚才做的，我们可以将一个函数的名字作为参数传递给其他的函数，但我们并不是说非要走先定义，再传递这条路，我们可以定义并且以参数的形式将函数传递给另外一个函数。

```
    function execute(fun, value) {
        fun(value);
    }
    execute(function(world){
        console.log(world);
    }, "hello");
```

我们在execute接受第一个参数的地方直接定义了我们准备传递给execute的函数。

使用这种方式，我们甚至不用给出方法名，这种方式就叫做匿名函数。

这是我第一感受到被称为"高阶"的javascript。不过我们还是循序渐进吧。现在，我们先接收这点： 我们在调用另一个函数的时候可以传递一个函数作为参数。我们可以先声明函数， 再传递，或者说在传递参数的时候去传递。

### 函数传递如何使http服务器运作

了解了以上的知识以后， 我们来看看我们的极简版Http服务器：

```
    var http = require("http");
    http.createServer(function(req, res){
        res.writeHead(200, {"Content-Type": "text/plain"});
        res.write("hello world");
        res.end();
    }).listen(8888);
```

现在再来看这段代码， 它做了什么就很清晰明了了： 我们给createServer传递了一个匿名函数。

我们也可以根据以下代码来实现上述功能：

```
    var http = require("http");
    function onRequest(request, response) {
        response.writeHead(200, {"Content-Type": "text/plain"});
        response.write("Hello World");
        response.end();
    }

    http.createServer(onRequest).listen(8888);
```

现在， 也许是问： 为什么我们要这样做的？ 的绝佳时刻~~~

Node是事件驱动的。

#### tips: 英文版免费章节就到处结束了，，，，可以看官网上的中文版，更新到本书完，我就不做搬运工了，附上链接：

https://www.nodebeginner.org/index-zh-cn.html