<template>
  <v-ons-page>
    <custom-toolbar>
      {{ title }}
      <v-ons-toolbar-button slot="right" @click="toggleMenu()">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-tabbar position="auto"
      :tabs="tabs"
      :index.sync="index"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from './pages/Home.vue';
import Forms from './pages/Forms.vue';
import Animations from './pages/Animations.vue';

export default {
  props: ['pageStack', 'setOptions', 'toggleMenu', 'setIndex'],

  data () {
    return {
      tabs: [
        {
          label: 'Home',
          icon: this.md() ? null : 'ion-home',
          page: Home,
          props: { pageStack: this.pageStack }
        },
        {
          label: 'Forms',
          icon: this.md() ? null : 'ion-edit',
          page: Forms
        },
        {
          label: 'Anim',
          icon: this.md() ? null : 'ion-film-marker',
          page: Animations,
          props: {
            pageStack: this.pageStack,
            setOptions: this.setOptions
          }
        }
      ]
    };
  },

  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  },

  computed: {
    title() {
      return this.md() ? 'Kitchen Sink' : this.tabs[this.index].label;
    },
    index: {
      get() {
        return this.setIndex(); // Without args returns the current index
      },
      set(index) {
        this.setIndex(index);
      }
    }
  }
};
</script>
