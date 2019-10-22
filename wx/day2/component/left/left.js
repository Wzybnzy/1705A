// component/left/left.js
Component({
  /**
   * 组件的属性列表
   */
  properties: { //接受父组件传递过来的参数
    list:{ // type 属性类型   value 是默认值
      type:Array,
      value:[]
    },
    ind:{
      type:Number,
      value:0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    changetap({target}){ //点击子组件
      let {ind} = target.dataset;
      this.triggerEvent('changeind',{ind});
      // this.$emit('changeind',ind);
      // <div onchangeind="change"></div>
    }
  }
})
