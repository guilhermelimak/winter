<template>
<modal title="New tweet" :is-open="isNewTweetModalOpen">
  <div slot="modal-body">
    <textarea
      class="form-control tweet-draft"
      @input="updateTweetDraft"
      rows="3">
    </textarea>
  </div>
  <div slot="modal-footer">
    <button
      class="btn btn-secondary"
      @click="toggleNewTweetModal">
      Cancel
    </button>
    <button
      class="btn btn-primary"
      @click="submitTweet">
      Tweet
    </button>
  </div>
</modal>
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
    submit() {
    },
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
