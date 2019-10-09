<template>
  <div>
      <input placeholder="请输入用户名" v-model="name"/>
      <input placeholder="请输入密码" v-model="pwd"/>
      <button @click="goToLogin">登录</button>
  </div>
</template>

<script>
import '@/mock/index'
export default {
  data(){
    return{
      name:'',
      pwd:''
    }
  },
  methods:{
    changeInput(e){
      console.log(31231231);
      this.name = e.target.value;
    },
    goToLogin(){
      this.$http.post('/api/login',{name:this.name,pwd:this.pwd}).then((res)=>{
        console.log(res);
        if(res.data.code == 1){
          window.localStorage.user = this.name;
          this.$router.push({path:this.$route.query.redirect});
        }
      });
      console.log(this.name,this.pwd);
    }
  }
}
</script>

<style>

</style>>