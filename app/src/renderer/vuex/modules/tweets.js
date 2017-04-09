import initTwitter from '~/services/twitter'
import R from 'ramda'
import * as types from '~/vuex/mutation-types'

const logError = (resolve, reject) => (err, tweet) => {
  if (err) {
    console.error(err)
    reject(err)
    return
  }

  resolve(tweet)
}

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
    updateTweet({ commit }, payload) {
      commit(types.UPDATE_TWEET, payload)
    },
    favoriteStatus({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        state.client.post('favorites/create/', { id }, logError(resolve, reject))
      })
    },
    unfavoriteStatus({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        state.client.post('favorites/destroy/', { id }, logError(resolve, reject))
      })
    },
    retweetStatus({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        state.client.post(`statuses/retweet/${id}`, {}, logError(resolve, reject))
      })
    },
    unretweetStatus({ state, commit }, id) {
      return new Promise((resolve, reject) => {
        state.client.post(`statuses/unretweet/${id}`, {}, logError(resolve, reject))
      })
    },
    postStatus({ rootState, state }) {
      const status = rootState.ui.newTweetModal.tweetDraft

      state.client.post('statuses/update', { status }, logError)
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
    [types.UPDATE_TWEET](state, { listName, tweet }) {
      const list = listName.toLowerCase()

      const index = R.findIndex(R.propEq('id_str', tweet.id_str), state[list])
      state[list].splice(index, 1, tweet)
    },
  },
}
