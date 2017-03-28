<template>
  <v-ons-page>
    <v-ons-splitter>
      <v-ons-splitter-side swipeable collapse="" width="300px"
        :open="isOpen"
        @update="isOpen = $event"
      >
        <menu-page :set-index="setIndex" :toggle-menu="toggleMenu"></menu-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <app-tabbar
          :page-stack="pageStack"
          :set-options="setOptions"
          :toggle-menu="toggleMenu"
          :set-index="setIndex"
        ></app-tabbar>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import AppTabbar from './AppTabbar.vue';
import MenuPage from './pages/Menu.vue';

export default {
  props: ['pageStack', 'setOptions'],
  data() {
    return {
      isOpen: false,
      tabbarIndex: 0
    };
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    },
    setIndex(newValue) {
      if (newValue !== undefined) {
        this.tabbarIndex = newValue;
      }
      return this.tabbarIndex;
    }
  },
  components: { AppTabbar, MenuPage }
};
</script>
