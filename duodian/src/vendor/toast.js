import ToastComponent from './toast.vue'

const Toast = {
    install(Vue){ //第一个参数是Vue
        console.log(Vue);

        //创建一个vue的子类
        let ToastContructor = Vue.extend(ToastComponent);

        //创建一个子类的实例

        let instace = new ToastContructor();


        //把实例挂载到一个元素上边

        instace.$mount(document.createElement('div'));

        //添加到body里面
        console.log(instace.$el);
        document.body.appendChild(instace.$el);

        Vue.prototype.$toast = (mes,durtion = 1500)=>{ //mes错误信息  durtion是关闭时间
            //1.toast 展示，通过show开关来展示  ，2. mes展示信息

            instace.show = true;
            instace.mes = mes;

            // 关闭
            setTimeout(()=>{
                instace.show = false;
            },durtion);

        }

    }
};


export default Toast;