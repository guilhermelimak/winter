import Twitter from 'twitter'
import creds from '~/twitter-credentials'

export default new Twitter({
  consumer_key: creds.CONSUMER_KEY,
  consumer_secret: creds.CONSUMER_SECRET,
  access_token_key: creds.ACCESS_TOKEN,
  access_token_secret: creds.ACCESS_TOKEN_SECRET,
})
