<template>
  <v-ons-navigator swipeable
    :page-stack="pageStack"
    :pop-page="storePop"
    :options="options"
  ></v-ons-navigator>
</template>

<script>
import AppSplitter from './AppSplitter.vue';

export default {
  beforeCreate() {
    this.$store.commit('navigator/push', AppSplitter);
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    },
    options() {
      return this.$store.state.navigator.options;
    }
  },
  methods: {
    storePop() {
      this.$store.commit('navigator/pop');
    }
  }
};
</script>
