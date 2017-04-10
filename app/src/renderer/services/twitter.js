import Twitter from 'twitter'
import creds from '@/twitter-credentials'

export default ({ accessToken, accessTokenSecret }) => new Twitter({
  consumer_key: creds.CONSUMER_KEY,
  consumer_secret: creds.CONSUMER_SECRET,
  access_token_key: accessToken,
  access_token_secret: accessTokenSecret,
})
