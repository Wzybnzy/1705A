<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
  list-style: none;
}
html,body,#app{
  height: 100%;
  width: 100%;
  overflow: hidden;
}
#app>div{
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
