<template>
  <div>
    <transition name="fade">
      <div v-if="show" class="toast">{{ mes }}</div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      mes: "",
      show: false
    };
  }
};
</script>

<style scoped>
.toast {
  height: 50px;
  width: 80%;
  position: fixed;
  left: 10%;
  top: 50%;
  margin-top: -25px;
  background: rgba(0, 0, 0, 0.3);
  line-height: 50px;
  text-align: center;
  color: #fff;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>