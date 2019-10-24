<template>
  <div>
    <div>
      <div>
        <span>姓名</span>
        <input type="text" v-model="name" />
      </div>
      <div>
        <span>电话</span>
        <input type="text" v-model="phone" />
      </div>
      <div>
        <span>地址</span>
        <input type="text" v-model="address" />
      </div>
      <button @click="sure">完成</button>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  data() {
    return {
      name: "",
      phone: "",
      address: ""
    };
  },
  created() {
    console.log(this.$route);
    let { name, phone, address } = this.$route.query;
    this.name = name;
    this.phone = phone;
    this.address = address;
  },
  methods: {
    ...mapMutations(["addresslist","editlist"]),
    sure() {
      let { name, phone, address } = this;
      let { type,ind } = this.$route.query;
      console.log(ind,'sure@@@@@@@@@@@@@@');
      if (type == "add") {
        if (!name && !phone && !address) {
          alert("请完善信息");
        } else {
          this.addresslist({ name, phone, address });
          this.$router.push({
            path: "/address"
          });
        }
      } else { //编辑
        this.editlist({ind,item:{name,phone,address}});
         this.$router.push({
            path: "/address"
          });
      }
    }
  }
};
</script>

<style>
</style>