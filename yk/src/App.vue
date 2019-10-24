<template>
  <div id="app">
    <keep-alive include="Address">
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app {
  height: 100%;
  width: 100%
}
#app>div{
  height: 100%;
  width: 100%
}
</style>
