// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes:'1705A',
    arr:[
      {
        name:'小花',
        age:18
      },
      {
        name: '小兰',
        age: 19
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  changeTap({ currentTarget}){
    console.log(currentTarget);
    let { ind } = currentTarget.dataset;
    let {name,age} = this.data.arr[ind];
    wx.navigateTo({
      url: '/pages/detail/detail?name='+name+'&age='+age
    })
  },
  goToLogs(){
    wx.switchTab({
      url: '/pages/logs/logs',
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})