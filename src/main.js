import Vue from 'vue';
import Vuex from 'vuex';
import VueOnsen from 'vue-onsenui';
import BackToolbar from './partials/BackToolbar.vue';
import storeLike from './NavigatorStore.js';
import AppNavigator from './AppNavigator.vue';
// Onsen UI basic CSS
import 'onsenui/css/onsenui.css';
// Onsen UI CSS components source (requires cssnext)
import 'onsenui/css-components-src/src/onsen-css-components.css';

Vue.use(Vuex);
Vue.use(VueOnsen);
Vue.component('back-toolbar', BackToolbar); // Common toolbar

new Vue({
  el: '#app',
  render: h => h(AppNavigator),
  store: new Vuex.Store(storeLike)
});
