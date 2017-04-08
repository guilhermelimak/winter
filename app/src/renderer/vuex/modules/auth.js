import creds from '~/twitter-credentials'
import * as types from '~/vuex/mutation-types'
import util from '~/util'

const TwitterApi = require('node-twitter-api')

const twitter = new TwitterApi({
  consumerKey: creds.CONSUMER_KEY,
  consumerSecret: creds.CONSUMER_SECRET,
  callback: 'oob',
})

export default {
  state: {
    tokens: {},
  },
  getters: {
    tokens: state => state.tokens,
  },
  actions: {
    getRequestToken({ commit }) {
      twitter.getRequestToken((error, requestToken, requestTokenSecret) => {
        if (error) {
          console.error(error)
          return
        }

        util.openWindow(twitter.getAuthUrl(requestToken))

        commit(types.SAVE_REQUEST_TOKENS, { requestToken, requestTokenSecret })
      })
    },
    getAccessToken({ commit }, { requestToken, requestTokenSecret, pin }) {
      return new Promise((resolve, reject) => {
        const callback = (error, accessToken, accessTokenSecret) => {
          if (error) {
            reject(error)
            return
          }

          commit(types.SAVE_ACCESS_TOKENS, { accessToken, accessTokenSecret })
          resolve()
        }

        twitter.getAccessToken(requestToken, requestTokenSecret, pin, callback)
      })
    },
  },
  mutations: {
    [types.SAVE_REQUEST_TOKENS](state, payload) {
      state.tokens = { ...state.tokens, ...payload }
    },
    [types.SAVE_ACCESS_TOKENS](state, payload) {
      state.tokens = { ...state.tokens, ...payload }
    },
  },
}
