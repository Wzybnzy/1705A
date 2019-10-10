<template>
  <div>
    <input placeholder="请输入手机号" v-model="phone" />
    <input placeholder="请输入密码" v-model="pwd" />
    <div class="login" @click="goToLogin">登录</div>
    <!-- <Item> -->
  </div>
</template>

<script>
import { login } from "@/api/api";
export default {
  data() {
    return {
      phone: "",
      pwd: ""
    };
  },
  created() {},
  methods: {
    async goToLogin() {
      try {
        let res = await login({ phone: this.phone, password: this.pwd }); //await后边跟的是一个promise对象。await必须是在async里面使用
        console.log(res);
        if (res.data.code == 1) {
          window.localStorage.token = res.data.data.token;
        }
        this.$router.push({ path: this.$route.query.redirect });
      } catch (e) {
        if (e.response.data.code === 0) {
          //当前没有这个手机号，1、错误提示 2、 去注册
          // this.$toast(e.response.data.data.mes,1500);
          this.$router.push({ path: "/register" }); //去注册
        }
      }

      // axios
      //   .post("/api/user/login", { phone: this.phone, password: this.pwd })
      //   .then(res => {
      //     console.log(res);
      //     //登录成功
      //     // 1、存token  2、跳转路由
      //     if(res.data.code == 1){
      //       window.localStorage.token = res.data.data.token;
      //     }
      //     this.$router.push({path:this.$route.query.redirect});
      //   }).catch((e)=>{
      //     if(e.response.data.code === 0){ //当前没有这个手机号，1、错误提示 2、 去注册
      //         this.$router.push({path:'/register'}); //去注册
      //     }
      //     console.log(e.response.data);
      //   })
    }
  }
};
</script>

<style scoped>
input {
  height: 40px;
  width: 80%;
  margin: 0 auto;
  border-radius: 10px;
}
div.login {
  height: 44px;
  width: 80%;
  margin: 0 auto;
  background: red;
  color: #fff;
  border-radius: 10px;
  text-align: center;
  line-height: 44px;
}
</style>