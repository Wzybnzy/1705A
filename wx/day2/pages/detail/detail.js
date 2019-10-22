// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    name:'',
    age:'',
    val:'',
    imgs:[
      "https://goss4.cfp.cn/creative/vcg/800/new/VCG211178479315.jpg",
      "https://goss2.cfp.cn/creative/vcg/800/new/VCG41N767982461.jpg"
    ],
    items: [
      { name: 'USA', value: '美国' },
      { name: 'CHN', value: '中国', checked: 'true' },
      { name: 'BRA', value: '巴西' },
      { name: 'JPN', value: '日本' },
      { name: 'ENG', value: '英国' },
      { name: 'TUR', value: '法国' },
    ]
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options);
    let {name,age} = options;

    this.setData({
      name,age
    })
  },
  changeInput({detail}){
    // console.log(options);
    this.setData({val:detail.value})
  },
  radioChange(options){
    console.log(options);

  },

  checkboxChange(options){
    console.log(options);
  },

  add(){
    let {val} = this.data;
    console.log(val);
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