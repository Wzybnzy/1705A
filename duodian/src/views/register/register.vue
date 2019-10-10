<template>
  <div>
    <input placeholder="请输入手机号" v-model="phone" />
    <input placeholder="请输入密码" v-model="pwd" />
    <div class="login" @click="goToRegister">注册</div>
  </div>
</template>

<script>
import { registry } from "@/api/api";
export default {
  data() {
    return {
      phone: "",
      pwd: ""
    };
  },
  methods: {
    async goToRegister() {
      let phone = this.phone,
        pwd = this.pwd;
      try {
        let res =await registry({ phone, password: pwd });
        console.log(res);
        this.$router.go(-1);
        // this.$router.push({path:'/login',query:{}});
      } catch (e) {
        console.log(e);
      }

      // axios.post('/api/user/registry',{phone,password:pwd}).then((res)=>{
      //   console.log(res);
      // });
    }
  }
};
</script>

<style>
</style>>