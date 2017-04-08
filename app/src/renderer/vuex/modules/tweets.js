import * as types from '~/vuex/mutation-types'

export default {
  state: {
    home: [],
    mentions: [],
    // ...Custom lists should also be here
  },
  actions: {
    // getTweetsList({}) {}
    // postTweet({}) {}
    updateTweetsList({ commit }, payload) {
      commit(types.UPDATE_TWEETS_LIST, payload)
    },
  },
  mutations: {
    [this.UPDATE_TWEETS_LIST](state, { listName, tweets }) {
      state[listName] = [...state[listName], ...tweets]
    },
  },
}
