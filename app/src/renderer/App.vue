<template>
<div id="app">
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
@import './styles/variables';

#app,
html,
body {
  height: 100% !important;
  width: 100% !important;
  font-family: Lato, Helvetica, sans-serif;
}


#app {
  padding-top: $navbar-height;
}
</style>
