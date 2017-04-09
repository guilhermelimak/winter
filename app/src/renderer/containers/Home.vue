<template>
<div class="content__wrapper">
  <navbar />
  <tweets-list list-name="Home" :tweets="tweets.home" />
  <tweets-list list-name="Mentions":tweets="tweets.mentions" />
  <new-tweet-modal />
</div>
</template>

<script>
import TweetsList from '~/components/TweetsList'
import NewTweetModal from '~/components/NewTweetModal'
import Navbar from '~/components/Navbar'
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'tweets',
    ]),
  },
  methods: {
    ...mapActions([
      'listenStream',
    ]),
  },
  created() {
    this.listenStream()
  },
  components: {
    Navbar,
    TweetsList,
    NewTweetModal,
  },
}
</script>

<style lang="scss">
.content__wrapper {
  height: 100% !important;
  width: 100% !important;
}
</style>
