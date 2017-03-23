<template>
  <v-ons-page>
    <v-ons-splitter>
      <v-ons-splitter-side
        swipeable collapse="" side="left"
        :open="isOpen"
        @update="$store.commit('splitter/toggle', $event)"
      >
        <v-ons-page>
          hi
        </v-ons-page>
      </v-ons-splitter-side>

      <v-ons-splitter-content>
        <app-tabbar></app-tabbar>
      </v-ons-splitter-content>
    </v-ons-splitter>
  </v-ons-page>
</template>

<script>
import AppTabbar from './AppTabbar.vue';

export default {
  computed: {
    isOpen() {
      return this.$store.state.splitter.open;
    }
  },
  components: { AppTabbar }
};
</script>
