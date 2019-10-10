<template>
  <div>
    <input placeholder="请输入手机号" v-model="phone" />
    <input placeholder="请输入密码" v-model="pwd" />
    <div class="login" @click="goToLogin">登录</div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      phone: "",
      pwd: ""
    };
  },
  created() {},
  methods: {
    goToLogin() {
      axios
        .post("/api/user/login", { phone: this.phone, password: this.pwd })
        .then(res => {
          console.log(res);
        });
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