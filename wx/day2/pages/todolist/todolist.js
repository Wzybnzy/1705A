// pages/todolist/todolist.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    val:"",
    count:0,
    list:[],
    newlist:[],
    ind:0,
    arr:[
      {
        name:'全部',
        type:'all'
      },
      {
        name: '待办',
        type: false
      },
      {
        name: '完成',
        type: true
      }
    ]
  },
  changeInput({detail}){
    console.log(detail);
    this.setData({val:detail.value})
  },
  add(){ //添加
    let {val,list} = this.data;
    console.log(val);
    list.push({
      val,
      check:false,
      id:new Date().getTime()
    })
    this.setData({list,newlist:list,count:this.getnum(list)})
  },
  changeTab({target}){ //tab切换
    console.log(target);
    let {ind,type} = target.dataset;
    let {list,newlist} = this.data;
    console.log(type,'type$$$$$$$$$$$$$$')
    if(type == 'all'){
      newlist = list;
    } else { // true  false
      newlist = list.filter(item => item.check == type)
    }
    this.setData({ind,newlist})
  },
  checkboxChange({detail}){
    let {value} = detail;
    console.log(value); 
    let {newlist} = this.data;
    newlist.forEach(item => item.check = value.includes(`${item.id}`))
    this.setData({newlist,count:this.getnum(newlist)})
  },
  getnum(list){
    return list.filter(item => item.check == false).length;
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