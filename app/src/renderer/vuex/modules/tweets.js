import initTwitter from '~/services/twitter'

import * as types from '~/vuex/mutation-types'

export default {
  state: {
    home: [],
    mentions: [],
    client: {},
    // ...Custom lists should also be here
  },
  actions: {
    listenStream({ commit, rootState }) {
      const client = initTwitter(rootState.auth.tokens)

      return new Promise((resolve, reject) => {
        client.stream('user',
          (stream) => {
            stream.on('data', event => {
              commit(types.UPDATE_TWEETS_LIST, { listName: 'home', tweets: [event] })
            })

            stream.on('error', error => {
              localStorage.removeItem('accessToken')
              localStorage.removeItem('accessTokenSecret')

              reject(error)
              console.error(error)
            })
          }
        )

        commit(types.UPDATE_TWITTER_CLIENT, { client })
      })
    },
    postTweet({ rootState, state }) {
      const status = rootState.ui.newTweetModal.tweetDraft

      state.client.post('statuses/update', { status }, (err, tweet) => {
        if (err) console.error(err)
        console.log(tweet)  // Tweet body.
      })
    },
    updateTweetsList({ commit }, payload) {
      commit(types.UPDATE_TWEETS_LIST, payload)
    },
    getReplies({ dispatch, state }) {
      state.client.get('statuses/mentions_timeline', (err, tweets) => {
        dispatch('updateTweetsList', { listName: 'mentions', tweets })
      })
    },
    getHomeTimeline({ dispatch, state }) {
      state.client.get('statuses/home_timeline', (err, tweets) => {
        dispatch('updateTweetsList', { listName: 'home', tweets })
      })
    },
  },
  getters: {
    tweets: state => state,
  },
  mutations: {
    [types.UPDATE_TWITTER_CLIENT](state, { client }) {
      state.client = client
    },
    [types.UPDATE_TWEETS_LIST](state, { listName, tweets }) {
      state[listName] = [...tweets, ...state[listName]]
    },
  },
}
