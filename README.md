# Vue Onsen UI Kitchen Sink

This is a sample app featuring **Onsen UI 2 + Vue**. This is a version *without Vuex**. This branch might be outdated sometimes.

> A version **with Vuex** is provided in [`master` branch](https://github.com/OnsenUI/vue-onsenui-kitchensink/tree/master).

**Check out the [preview here](https://onsenui.github.io/vue-onsenui-kitchensink/)**.

This project has been created with [vue-cli](https://github.com/vuejs/vue-cli) and [webpack-simple](https://github.com/vuejs-templates/webpack-simple) template. Webpack configuration has been modified to work with Onsen UI +2.2.0.

## About CSS

Onsen UI bundles `css/onsen-css-components.css` wich can be directly included in an app. However, this example uses the source `css-components-src/src/onsen-css-components.css` where colors can be easily modified. In order to support this, [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext) must be used in Webpack.


## Build Setup

``` bash
# install dependencies
yarn install

# serve with hot reload at localhost:8080
yarn run dev

# build for production with minification
yarn run build
```
