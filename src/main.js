import Vue from 'vue';

// Onsen UI basic CSS
import 'onsenui/css/onsenui.css';
// Onsen UI CSS components source (requires cssnext)
import 'onsenui/css-components-src/src/onsen-css-components.css';
// Onsen UI bindings for Vue (this already imports onsenui package)
import VueOnsen from 'vue-onsenui';

Vue.use(VueOnsen);

import App from './App.vue';

new Vue({
  el: '#app',
  render: h => h(App)
});
