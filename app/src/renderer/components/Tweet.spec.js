import Tweet from './Tweet'
import mountComponent from '../util/mount-component'
import tweet from '../util/fake-tweet'
import fecha from 'fecha'
import linkifyHtml from 'linkifyjs/html'

/* eslint-disable no-native-reassign */
Date = jest.fn()

jest.mock('linkifyjs/html')

describe('Tweet testing', () => {
  let component

  beforeEach(() => (component = mountComponent(Tweet, { tweet, listName: 'test-list' })))

  it('should init computed props', () => {
    expect(fecha.format.mock.calls.length).toBe(1)
    expect(linkifyHtml.mock.calls.length).toBe(1)
    expect(linkifyHtml.mock.calls[0][0]).toBe('test-content')

    expect(Date.mock.calls.length).toBe(1)
    expect(Date.mock.calls[0][0]).toBe('test-date')

    expect(component.author).toEqual(tweet.user)
  })

  it('should show user image', () => {
    const img = component.$el.querySelector('img')
    expect(img.src).toBe('test-img-url')
  })

  it('should show usuer name', () => {
    const name = component.$el.querySelector('.name')
    expect(name.innerHTML.trim()).toBe('test-author-name')
  })
})
