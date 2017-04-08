import R from 'ramda'

export default R.where({
  user: R.is(Object),
  id_str: R.is(String),
  text: R.is(String),
})
