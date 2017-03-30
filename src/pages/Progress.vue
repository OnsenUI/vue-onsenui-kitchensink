<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo"></custom-toolbar>

    <v-ons-progress-bar :modifier="!md() && 'ios' || ''" :value="progress"></v-ons-progress-bar>

    <section style="margin: 40px 16px">
      <p>
        Progress: {{ progress }}%
      </p>

      <p>
        <v-ons-progress-bar value="20" :modifier="!md() && 'ios' || ''"></v-ons-progress-bar>
      </p>

      <p>
        <v-ons-progress-bar value="40" secondary-value="80" :modifier="!md() && 'ios' || ''"></v-ons-progress-bar>
      </p>

      <p>
        <v-ons-progress-bar indeterminate :modifier="!md() && 'ios' || ''"></v-ons-progress-bar>
      </p>

      <div style="text-align: center; margin: 40px; color: #666">
        <p>
          <v-ons-progress-circular value="20" :modifier="!md() && 'ios' || ''"></v-ons-progress-circular>
          <v-ons-progress-circular value="40" secondary-value="80" :modifier="!md() && 'ios' || ''"></v-ons-progress-circular>
          <v-ons-progress-circular indeterminate :modifier="!md() && 'ios' || ''"></v-ons-progress-circular>
        </p>

        <p>
          <v-ons-icon icon="ion-load-a" spin size="30px"></v-ons-icon>
          <v-ons-icon icon="ion-load-b" spin size="30px"></v-ons-icon>
          <v-ons-icon icon="ion-load-c" spin size="30px"></v-ons-icon>
          <v-ons-icon icon="ion-load-d" spin size="30px"></v-ons-icon>
        </p>

        <p>
          <v-ons-icon icon="fa-spinner" spin size="26px"></v-ons-icon>
          <v-ons-icon icon="circle-o-notch" spin size="26px"></v-ons-icon>
        </p>

        <p>
          <v-ons-icon icon="md-spinner" spin size="30px"></v-ons-icon>
        </p>
      </div>

      <p>
        <v-ons-button modifier="large">
          <v-ons-icon icon="ion-load-c" spin size="26px"></v-ons-icon>
        </v-ons-button>
        <br><br>
        <v-ons-button modifier="large" disabled>
          <v-ons-icon icon="ion-load-c" spin size="26px"></v-ons-icon>
        </v-ons-button>
      </p>
    </section>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      progress: 0,
      intervalID: 0
    };
  },
  mounted() {
    this.intervalID = setInterval(() => {
      if (this.progress === 100) {
        clearInterval(this.intervalID);
        return;
      }

      this.progress++;
    }, 40);
  },
  methods: {
    md() {
      return this.$ons.platform.isAndroid();
    }
  }
};
</script>

<style>
/* 'ios' modifier */
.progress-bar--ios__primary,
.progress-bar--ios.progress-bar--indeterminate::before,
.progress-bar--ios.progress-bar--indeterminate::after {
  background-color: #4282cc
}

.progress-bar--ios__secondary {
  background-color: #87b6eb;
}

.progress-circular--ios__primary {
  stroke: #4282cc
}

.progress-circular--ios__secondary {
  stroke: #87b6eb;
}
</style>
