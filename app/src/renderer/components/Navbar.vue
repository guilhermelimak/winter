<template>
<nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand" href="#">Winter</a>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li class="active"><router-link to="home">Home</router-link></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <button
            class="btn btn-primary modal-toggle"
            @click="toggleNewTweetModal">
            New tweet
          </button>
        </ul>
      </div><!--/.nav-collapse -->
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  methods: {
    ...mapActions([
      'toggleNewTweetModal',
    ]),
  },
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';

.modal-toggle {
  margin-top: $grid-gutter-width / 4;
}
</style>
