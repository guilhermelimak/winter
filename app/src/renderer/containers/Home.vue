<template>
<div class="content__wrapper">
  <tweets-list :tweets="tweets"></tweets-list>
  <tweets-list :tweets="mentions"></tweets-list>
</div>
</template>

<script>
import initTwitter from '~/services/twitter'
import TweetsList from '~/components/TweetsList'
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      tweets: [],
      mentions: [],
    }
  },
  computed: {
    ...mapGetters([
      'tokens',
    ]),
  },
  created() {
    const client = initTwitter({
      ...this.tokens,
    })
    client.stream('user',
      (stream) => {
        stream.on('data', event => {
          console.log(event)
          this.tweets.unshift(event)
        })
        stream.on('error', error => console.error(error))
      }
    )
  },
  components: {
    TweetsList,
  },
}
</script>

<style lang="scss">
.content__wrapper {
  height: 100% !important;
  width: 100% !important;
}
</style>
