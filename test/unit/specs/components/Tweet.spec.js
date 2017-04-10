import mountComponent from '../../../util/mount-component'
import sinon from 'sinon'

const fechaMock = {
  format: sinon.spy(),
}

describe('MyComponent', () => {
  let component

  beforeEach(() => {
    const tweetInjector = require('!!vue-loader?inject!~/components/Tweet')
    const Tweet = tweetInjector({
      fecha: fechaMock,
    })

    console.log(Tweet)

    component = mountComponent(Tweet, {
      tweet: {
        text: 'test-text',
        user: 'test-user',
        created_at: 'test-date',
      },
      listName: 'test',
    })
  })

  it('should set the right computed properties based on tweet', () => {
    expect(component.author).to.be.equal('test-user')
  })

  it('should call fecha.format with the tweet.created_at', () => {
    console.log(component.date)
    expect(fechaMock.format.called).to.be.true()
  })
})
