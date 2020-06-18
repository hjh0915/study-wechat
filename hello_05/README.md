学习wx.request
==============
https://www.cnblogs.com/rmty/p/10905859.html

知乎日报api参考 https://github.com/iKrelve/KuaiHu/blob/master/知乎日报API.md

先要在微信小程序页面登录后，设置 request 域名    
其中在开发一栏中服务器域名中设置    request合法域名 https://news-at.zhihu.com

index.js
--------
```js
onLoad: function (options) {
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/latest',
      success: (res) => {
        console.log(res)
        this.setData({
          date: res.data.date,
          stories: res.data.stories
        })
      }
    })
  }
```