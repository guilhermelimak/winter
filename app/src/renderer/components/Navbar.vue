<template>
<nav class="navbar navbar-inverse navbar-fixed-top">
    <div class="container">
      <div id="navbar" class="navbar-collapse collapse">
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
  margin-top: 8px;
}
</style>
