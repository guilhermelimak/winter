import * as types from '~/vuex/mutation-types'

export default {
  state: {
    newTweetModal: {
      isOpen: true,
      tweetDraft: '',
    },
  },
  actions: {
    updateTweetDraft({ commit }, { content }) {
      commit(types.UPDATE_TWEET_DRAFT, { content })
    },
    submitTweet({ dispatch, state, commit }) {
      dispatch('postTweet', state.newTweetModal.tweetDraft)
      commit(types.TOGGLE_NEW_TWEET_MODAL)
    },
    toggleNewTweetModal({ commit }) {
      commit(types.TOGGLE_NEW_TWEET_MODAL)
    },
  },
  getters: {
    tweetDraft: state => state.tweetDraft,
    isNewTweetModalOpen: state => state.newTweetModal.isOpen,
  },
  mutations: {
    [types.TOGGLE_NEW_TWEET_MODAL](state) {
      state.newTweetModal.isOpen = !state.newTweetModal.isOpen
    },
    [types.UPDATE_TWEET_DRAFT](state, { content }) {
      state.newTweetModal.tweetDraft = content
    },
  },
}
