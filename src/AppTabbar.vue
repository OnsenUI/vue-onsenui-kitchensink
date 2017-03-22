<template>
  <v-ons-page>
    <back-toolbar>{{ title }}</back-toolbar>

    <v-ons-tabbar
      position="auto"
      :tabs="tabs"
      :index="index"
      @update="index = $event"
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
      index: 0,
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
    title() {
      return this.md() ? 'Kitchen Sink' : this.tabs[this.index].label;
    }
  }
}
</script>
