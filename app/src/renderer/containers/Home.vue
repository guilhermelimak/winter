<template>
<div class="content__wrapper">
  <tweets-list :tweets="tweets.home"></tweets-list>
  <tweets-list :tweets="tweets.mentions"></tweets-list>
</div>
</template>

<script>
import TweetsList from '~/components/TweetsList'
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
