import * as types from '~/vuex/mutation-types'

export default {
  state: {
    home: [],
    mentions: [],
    // ...Custom lists should also be here
  },
  actions: {
    updateTweetsList({ commit }, listName, tweets) {
      commit(types.UPDATE_TWEETS_LIST, listName, tweets)
    },
  },
  mutations: {
    [this.UPDATE_TWEETS_LIST](state, listName, tweets) {
      state[listName] = [...state[listName], ...tweets]
    },
  },
}
