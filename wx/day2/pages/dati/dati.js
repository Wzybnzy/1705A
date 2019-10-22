// pages/dati/dati.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cur:0,
    list:[
      {
        title:"今天班长及格了吗？",
        options:[
          {
            value:'及格',
            check:false
          },
          {
            value: '不及格',
            check: false
          }
        ]
      },
      {
        title: "今天班长考了多少分？",
        options: [
          {
            value: '60-70',
            check: false
          },
          {
            value: '70-90',
            check: false
          },
          {
            value: '90以上',
            check: false
          }
        ]
      },
      {
        title: "今天多少人不及格？",
        options: [
          {
            value: '10',
            check: false
          },
          {
            value: '50',
            check: false
          },
          {
            value: '2',
            check: false
          }
        ]
      }
    ]
  },
  change({target}){ //点击下一题
    let {cur} = this.data;
    let {flag} = target.dataset;
    cur = flag ? ++cur : --cur;
    console.log(cur);
    this.setData({cur})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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