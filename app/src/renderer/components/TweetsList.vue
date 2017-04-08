<template>
<div class="col-xs-12 col-md-4">
  <tweet v-for="(tweet, i) in tweets" :tweet="tweet" />
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
  },
  components: {
    Tweet,
  },
}
</script>

<style lang="scss">
</style>
