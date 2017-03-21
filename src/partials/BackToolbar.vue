<template>
  <v-ons-toolbar>
    <div class="left">
      <v-ons-back-button v-if="backLabel">
        {{ backLabel }}
      </v-ons-back-button>
    </div>
    <div class="center"><slot>{{ title }}</slot></div>
  </v-ons-toolbar>
</template>

<script>
export default {
  props: ['title', 'backLabel']
};
</script>
