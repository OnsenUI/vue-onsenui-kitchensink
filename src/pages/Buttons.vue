<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <section style="margin: 16px">
      <v-ons-button class="button-margin">Normal</v-ons-button>
      <v-ons-button modifier="quiet" class="button-margin">Quiet</v-ons-button>
      <v-ons-button modifier="outline" class="button-margin">Outline</v-ons-button>
      <v-ons-button modifier="cta" class="button-margin">Call to action</v-ons-button>
      <v-ons-button modifier="light" class="button-margin">Light</v-ons-button>
      <v-ons-button modifier="large" class="button-margin">Large</v-ons-button>
    </section>

    <section style="margin: 16px">
      <v-ons-button class="button-margin" disabled>Normal</v-ons-button>
      <v-ons-button modifier="quiet" class="button-margin" disabled>Quiet</v-ons-button>
      <v-ons-button modifier="outline" class="button-margin" disabled>Outline</v-ons-button>
      <v-ons-button modifier="cta" class="button-margin" disabled>Call to action</v-ons-button>
      <v-ons-button modifier="light" class="button-margin" disabled>Light</v-ons-button>
      <v-ons-button modifier="large" class="button-margin" disabled>Large</v-ons-button>
    </section>

    <v-ons-fab position="top right" :style="spdStyle">
      <v-ons-icon icon="md-face"></v-ons-icon>
    </v-ons-fab>

    <v-ons-fab position="bottom left" :style="spdStyle" disabled>
      <v-ons-icon icon="md-car"></v-ons-icon>
    </v-ons-fab>

    <v-ons-speed-dial position="bottom right" direction="up"
      :open.sync="spdOpen"
    >
      <v-ons-fab :style="spdStyle">
        <v-ons-icon icon="md-share"></v-ons-icon>
      </v-ons-fab>

      <v-ons-speed-dial-item v-for="(icon, name) in shareItems" :key="name"
        :style="spdStyle"
        @click="$ons.notification.confirm(`Share on ${name}?`)"
      >
        <v-ons-icon :icon="icon"></v-ons-icon>
      </v-ons-speed-dial-item>

    </v-ons-speed-dial>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      spdOpen: false,
      spdStyle: {
        backgroundColor: this.$ons.platform.isAndroid() ? null : '#4282cc'
      },
      shareItems: {
        'Twitter': 'md-twitter',
        'Facebook': 'md-facebook',
        'Google+': 'md-google-plus'
      }
    };
  }
};
</script>

<style scoped>
.button-margin {
  margin: 6px 0;
}
</style>
