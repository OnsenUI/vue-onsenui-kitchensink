<template>
  <v-ons-page>
    <custom-toolbar>
      {{ title }}
      <v-ons-toolbar-button slot="right" @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-tabbar
      swipeable
      position="auto"
      modifier="autogrow"
      :tabs="tabs"
      :index.sync="index"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Camera from './pages/Camera.vue';
import Home from './pages/Home.vue';
import Forms from './pages/Forms.vue';
import Animations from './pages/Animations.vue';

export default {
  data () {
    return {
      tabs: [
        {
          title: 'Camera',
          icon: 'md-camera',
          page: Camera,
          style: 'max-width: 60px'
        },
        {
          label: 'Home',
          icon: this.md() ? null : 'ion-home',
          page: Home
        },
        {
          label: 'Forms',
          icon: this.md() ? null : 'ion-edit',
          page: Forms
        },
        {
          label: 'Anim',
          icon: this.md() ? null : 'ion-film-marker',
          page: Animations
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
    index: {
      get() {
        return this.$store.state.tabbar.index;
      },
      set(newValue) {
        this.$store.commit('tabbar/set', newValue)
      }
    },
    title() {
      return this.md() ? 'Onsen UI' : this.tabs[this.index].title || this.tabs[this.index].label;
    }
  }
};
</script>
