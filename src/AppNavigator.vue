<template>
  <v-ons-navigator id="app"
    :page-stack="pageStack"
    :pop-page="storePop"
  ></v-ons-navigator>
</template>

<script>
import AppSplitter from './AppSplitter.vue';

export default {
  name: 'app',
  beforeCreate() {
    this.$store.commit('navigator/push', AppSplitter);
  },
  computed: {
    pageStack() {
      return this.$store.state.navigator.stack;
    }
  },
  methods: {
    storePop() {
      this.$store.commit('navigator/pop');
    }
  }
};
</script>
