//index.js

Page({
  data: {
    date: '',
    stories: null
  },
  bindViewTap: function(e) {
    var that = this
    var id = e.currentTarget.dataset.id

    wx.navigateTo({
      url: '../story/story?id=' + id
    })
  },
  onLoad: function () {

  },
  onReady: function() {

  },
  onShow: function(options) {
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
  },
  onHide: function() {

  },
  onUnload: function() {

  }
})
