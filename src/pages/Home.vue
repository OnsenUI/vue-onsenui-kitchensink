<template>
  <v-ons-page>
    <div class="content">
    <img class="img" src="../assets/vue-onsenui.png">

    <p class="p">
      This is a kitchen sink example that shows off the Vue bindings for Onsen UI.<br><br>
      <a href="https://onsen.io/vue/" target="_blank"><strong>Official site with docs</strong></a>
    </p>

    <v-ons-list>
      <v-ons-list-header>
        Components
      </v-ons-list-header>
      <v-ons-list-item v-for="(page, key) of pages" :key="key"
        tappable
        modifier="chevron"
        @click="push(page, key)"
      >
        <div class="center">{{ key }}</div>
      </v-ons-list-item>
    </v-ons-list>
    </div>
  </v-ons-page>
</template>

<script>
import PullHook from './PullHook.vue';

export default {
  data () {
    return {
      pages: {
        PullHook
      }
    };
  },

  methods: {
    push(page, key) {
      this.$store.commit('navigator/push', {
        extends: page,
        data() {
          return {
            toolbarInfo: {
              backLabel: 'Home',
              title: key
            }
          }
        }
      });
    }
  }
}
</script>

<style scoped>
.img {
  display: block;
  max-width: 60%;
  margin: 10px auto;
}

.p {
  text-align: center;
  padding: 0 20px;
  margin-bottom: 30px;
}
</style>
