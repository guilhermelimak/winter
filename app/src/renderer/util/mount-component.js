import Vue from 'vue'

export default (Component, propsData) => {
  const Extended = Vue.extend(Component)
  return new Extended({ propsData }).$mount()
}
