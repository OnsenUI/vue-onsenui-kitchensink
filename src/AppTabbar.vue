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
import Dialogs from './pages/Dialogs.vue';
import Forms from './pages/Forms.vue';
import Animations from './pages/Animations.vue';

export default {
  data () {
    return {
      index: 0,
      tabs: [
        {
          label: 'Home',
          page: Home,
          icon: 'ion-home'
        },
        {
          label: 'Dialogs',
          page: Dialogs,
          icon: 'ion-ios-albums-outline'
        },
        {
          label: 'Forms',
          page: Forms,
          icon: 'ion-edit'
        },
        {
          label: 'Animations',
          page: Animations,
          icon: 'ion-film-marker'
        }
      ]
    };
  },
  computed: {
    title() {
      return this.tabs[this.index].label;
    }
  }
}
</script>
