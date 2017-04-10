# winter

> A cool twitter client


## Dev guidelines
- All imports using '@' are relative to the app/src/renderer folder. Use it everywhere to avoid relative imports.

- All the styles inside components should be scoped (If a style needs to be used in more than one component it should be in the ~/styles folder).

- Avoid using numbers and colors directly in css, always prefer variables.

#### Documentations useful for development
[Node twitter api](https://github.com/desmondmorris/node-twitter/)
[Vuejs 2](https://vuejs.org/v2/guide/)
[Vuex 2](https://vuex.vuejs.org/en/)
[Vue router 2](https://router.vuejs.org/en/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron app for production
npm run build

# lint all JS/Vue component files in `app/src`
npm run lint

# run webpack in production
npm run pack
```
More information can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/docs/npm_scripts.html).

---

This project was generated from [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about this project can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).
