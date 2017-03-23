<template>
  <v-ons-page>
    <custom-toolbar>
      <v-ons-toolbar-button slot="left" @click="$store.commit('splitter/toggle')">
        <v-ons-icon icon="ion-navicon, material:md-menu"></v-ons-icon>
      </v-ons-toolbar-button>
      {{ title }}
    </custom-toolbar>

    <v-ons-tabbar
      position="auto"
      :tabs="tabs"
      :index="index"
      @update="$store.commit('tabbar/set', $event)"
    ></v-ons-tabbar>
  </v-ons-page>
</template>

<script>
import Home from './pages/Home.vue';
import Forms from './pages/Forms.vue';
import Animations from './pages/Animations.vue';

export default {
  data () {
    return {
      tabs: [
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
          label: 'Animations',
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
    index() {
      return this.$store.state.tabbar.index;
    },
    title() {
      return this.md() ? 'Kitchen Sink' : this.tabs[this.index].label;
    }
  }
}
</script>
