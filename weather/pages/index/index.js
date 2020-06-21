//index.js
//获取应用实例
var app = getApp()
var day = ["今天", "明天", "后天"];

Page({
  data: {
    //初始化数据
    hideNotice: false,
    day: day,
  },

  onLoad: function () {
    var that = this
    that.getLocation();
  },

  //获取经纬度方法
  getLocation: function () {
    var that = this
    wx.getLocation({
      type: 'gcj02',
      success: function (res) {
        var latitude = res.latitude
        var longitude = res.longitude
        that.getCity(latitude, longitude);
      }
    })
  },

  //获取城市信息
  getCity: function (latitude, longitude) {
    var that = this
    var url = "https://api.map.baidu.com/reverse_geocoding/v3/";
    var params = {
      ak: "s4pHpiNQz7Lghmwg46LRkTYUG5t0aIdF",

      output: "json",
      location: latitude + "," + longitude
    }
    wx.request({
      url: url,
      data: params,
      success: function (res) {
        var city = res.data.result.addressComponent.city;
        var district = res.data.result.addressComponent.district;
        var street = res.data.result.addressComponent.street;

        that.setData({
          city: city,
          district: district,
          street: street,
        })

        var descCity = city.substring(0, city.length - 1);
        that.getWeahter(descCity);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //获取常规天气信息
  getWeahter: function (city) {
    var that = this
    var url = "https://free-api.heweather.net/s6/weather"
    var params = {
      location: city,
      key: "5cf9e7a59b8144a1ac702c2a58ec56ab"
    }
    wx.request({
      url: url,
      data: params,
      success: function (res) {
        var tmp = res.data.HeWeather6[0].now.tmp;
        var txt = res.data.HeWeather6[0].now.cond_txt;
        var code = res.data.HeWeather6[0].now.cond_code;
        var vis = res.data.HeWeather6[0].now.vis;
        var dir = res.data.HeWeather6[0].now.wind_dir;
        var sc = res.data.HeWeather6[0].now.wind_sc;
        var hum = res.data.HeWeather6[0].now.hum;
        var fl = res.data.HeWeather6[0].now.fl;
        var notice = res.data.HeWeather6[0].lifestyle[2].txt;
        var daily_forecast = res.data.HeWeather6[0].daily_forecast;
        var update = res.data.HeWeather6[0].update.loc; //更新时间
        that.setData({
          update: update,
          tmp: tmp,
          txt: txt,
          code: code,
          vis: vis,
          dir: dir,
          sc: sc,
          hum: hum,
          fl: fl,
          daily_forecast: daily_forecast,
          notice: notice
        })
        that.getWeahterAir(city);
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //获取空气质量
  getWeahterAir: function (city) {
    var that = this
    var url = "https://free-api.heweather.net/s6/air"
    var params = {
      location: city,
      key: "5cf9e7a59b8144a1ac702c2a58ec56ab"
    }
    wx.request({
      url: url,
      data: params,
      success: function (res) {
        var qlty = res.data.HeWeather6[0].air_now_city.qlty;
        that.setData({
          qlty: qlty,
        })
      },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

   //下拉刷新
  onPullDownRefresh: function () {
    var that = this
    that.getLocation();
    //下拉刷新后回弹
    wx.stopPullDownRefresh();
  }
})