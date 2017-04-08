<template>
<div id="#app">
  <router-view></router-view>
</div>
</template>

<script>
import store from '~/vuex/store'

export default {
  store,
}
</script>

<style lang="scss">
@import url(https://fonts.googleapis.com/css?family=Lato:300);
@import './styles/app';

#app,
html,
body {
  height: 100%;
  width: 100%;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  font-family: Lato, Helvetica, sans-serif;
}
</style>
