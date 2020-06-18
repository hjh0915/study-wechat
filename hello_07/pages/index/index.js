//index.js

Page({
  data: {
    content: ''
  },
  onLoad: function (options) {
    wx.request({
      url: 'https://news-at.zhihu.com/api/4/news/9724713',
      success: (res) => {
        console.log(res)
        this.setData({
          content: res.data.body
        })
      }
    })

  },
  onReady: function() {

  },
  onShow: function() {
  
  },
  onHide: function() {

  },
  onUnload: function() {

  }
})
