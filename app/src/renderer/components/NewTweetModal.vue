<template>
<el-dialog title="New tweet" v-model="isNewTweetModalOpen">
  <div>
    <textarea
      v-shortkey="['ctrl', 'enter']"
      @shortkey="submitTweet"
      class="form-control tweet-draft"
      @input="updateTweetDraft"
      rows="3">
    </textarea>
  </div>
  <div slot="footer">
    <button
      class="btn btn-info"
      @click="toggleNewTweetModal">
      Cancel
    </button>
    <button
      class="btn btn-primary"
      @click="submitTweet">
      Tweet
    </button>
  </div>
</el-dialog>
</template>

<script>
import Modal from '~/components/Modal'
import { mapGetters, mapActions } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'isNewTweetModalOpen',
    ]),
  },
  methods: {
    updateTweetDraft(e) {
      this.$store.dispatch('updateTweetDraft', { content: e.target.value })
    },
    ...mapActions([
      'toggleNewTweetModal',
      'submitTweet',
      'postTweet',
    ]),
  },
  components: {
    Modal,
  },
}
</script>

<style lang="scss">
.tweet-draft {
  max-width: 100%;
}
</style>
