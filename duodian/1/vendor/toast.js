import ToastComponent from './toast.vue'

const Toast = {
    install(Vue) {
        console.log(Vue);
        //创建一个vue的子类
        let ToastContructor = Vue.extend(ToastComponent);

        //创建子类的实例

        let instance = new ToastContructor();

        //把实例挂载的一个元素上边

        instance.$mount(document.createElement('div'));

        console.log(instance);

        document.body.appendChild(instance.$el);

        Vue.prototype.$toast = (mes,durtion = 3000)=>{
            instance.show = true;
            instance.message = mes;

            setTimeout(()=>{
                instance.show = false;
            },durtion);
        }
    }
}


export default Toast;