<template>
<div id="app" v-shortkey="['ctrl', 'n']" @shortkey="toggleNewTweetModal">
  <router-view></router-view>
</div>
</template>

<script>
import { mapActions } from 'vuex'
import store from '~/vuex/store'

export default {
  store,
  methods: {
    ...mapActions([
      'toggleNewTweetModal',
    ]),
  },
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
  @media(min-width: $screen-md-min) {
    padding-top: $navbar-height;
  }
}
</style>
