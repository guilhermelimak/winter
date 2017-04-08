import initTwitter from '~/services/twitter'

import * as types from '~/vuex/mutation-types'

export default {
  state: {
    home: [],
    mentions: [],
    // ...Custom lists should also be here
  },
  actions: {
    listenStream({ commit, rootState }) {
      const client = initTwitter(rootState.auth.tokens)
      client.stream('user',
        (stream) => {
          stream.on('data', event => {
            console.log(event)
            commit(types.UPDATE_TWEETS_LIST, { listName: 'home', tweets: [event] })
          })

          stream.on('error', error => console.error(error))
        }
      )
    },
    // postTweet({}) {}
    updateTweetsList({ commit }, payload) {
      commit(types.UPDATE_TWEETS_LIST, payload)
    },
  },
  getters: {
    tweets: state => state,
  },
  mutations: {
    [types.UPDATE_TWEETS_LIST](state, { listName, tweets }) {
      state[listName] = [...tweets, ...state[listName]]
    },
  },
}
