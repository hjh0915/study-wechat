手动构建
=======
参考网站    https://www.seoxiehui.cn/article-210990-1.html

创建app.js文件
==============
在目录中创建一个app.js文件，该文件作为项目的入口文件，通过App() 函数来注册一个小程序的应用。 该函数接受一个object参数(function 和 data)，比如小程序的生命周期函数。这里我们先不管那些生命周期函数，只要定义个空参数的App({})函数即可注册小程序。

创建一个hello页面
=====================
我们需要显示“Hello Word”内容，所以这里我们需要创建一个页面。在目录中创建一个hello.wxml文件，这里我用个试图容器view标签来显示“Hello Word”内容。

注册hello页面
=================
小程序中的每个页面都需要在页面对应的 js 文件中进行注册，所以这里我们需要在目录中创建一个hello.js文件并通过Page() 函数用来注册一个页面。该函数同样接受一个 object参数，可以是该页面的初始数据、生命周期函数、事件处理函数等。这里我们还是先不管那些生命周期函数，只要定义个空参数的Page({})函数即可注册页面。

创建app.json文件
================
页面注册好了我们就需要来配置页面路径了，告诉小程序要加载的页面在哪里。这就需要我们在根目录下创建一个app.json文件，通过该文件来对小程序进行全局配置。而其中的pages对象就是用来指定小程序由哪些页面组成，每一项都对应一个页面的 路径（含文件名） 信息。

*打开“微信开发者工具”并切换到“导入项目”页面，在目录栏中选择我们的项目文件夹。AppID没有的可以选择游客模式，点击“导入”按钮即可。程序会自动生成project.config.json配置文件和sitemap.json站点地图配置文件（可以暂时忽略），在左侧的模拟器中我们可以看到在小程序中显示了我们的“Hello Word”内容。*

hello页面添加样式
======================
想美化页面显示样式。我们可以继续创建一个hello.wxss文件，在这里我们可以WXML 的组件样式进行控制。WXSS的写法和CSS相似，很容易上手的！