import camelize from 'camelize'

const files = require.context('.', false, /\.js$/)
const modules = {}

files.keys().forEach((key) => {
  if (key === './index.js') return
  modules[camelize(key.replace(/(\.\/|\.js)/g, ''))] = files(key).default
})

export default modules
