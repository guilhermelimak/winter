<template>
<div class="col-xs-12 col-sm-4 col-md-4">
  <div class="row">
    <div class="col-xs-12">
        <h2>{{ listName }}</h2>
    </div>
    <div class="col-xs-12">
      <tweet v-for="(tweet, i) in tweets" :tweet="tweet" />
    </div>
  </div>
</div>
</template>

<script>
import Tweet from '~/components/Tweet'

export default {
  props: {
    tweets: {
      required: true,
      type: Array,
    },
    listName: {
      required: true,
      type: String,
    },
  },
  components: {
    Tweet,
  },
}
</script>

<style lang="scss">
</style>
