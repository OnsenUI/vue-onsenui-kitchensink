<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo">
      <v-ons-toolbar-button slot="right" id="info-button" @click="popoverVisible = true">
        <v-ons-icon v-if="$ons.platform.isAndroid()" icon="md-more-vert"></v-ons-icon>
        <span v-else>More</span>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-list>
      <v-ons-list-header>Notifications</v-ons-list-header>
      <v-ons-list-item
        tappable
        @click="$ons.notification.alert('Hello, world!')"
        >
        <div class="center">
          Alert
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable
        @click="$ons.notification.confirm('Are you ready?')"
        >
        <div class="center">
          Simple Confirmation
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable
        @click="$ons.notification.prompt('What is your name?')"
        >
        <div class="center">
          Prompt
        </div>
      </v-ons-list-item>

      <v-ons-list-header>Components</v-ons-list-header>
      <v-ons-list-item tappable
        @click="dialogVisible = true"
      >
        <div class="center">
          Simple Dialog
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable
        @click="alertDialogVisible = true"
      >
        <div class="center">
          Alert Dialog
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable
        @click="showModal"
      >
        <div class="center">
          Modal
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable
        @click="popoverVisible = true"
      >
        <div class="center">
          Popover - MD Menu
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <!-- Components -->

    <v-ons-dialog cancelable
      class="lorem-dialog"
      :visible="dialogVisible"
      @update="dialogVisible = $event"
    >
      <!-- Optional page. This could contain a Navigator as well. -->
      <v-ons-page>
        <v-ons-toolbar>
          <div class="center">Simple Dialog</div>
        </v-ons-toolbar>
        <p style="text-align: center">Lorem ipsum dolor</p>
        <p style="text-align: center">
          <v-ons-button modifier="light" @click="dialogVisible = false">Close</v-ons-button>
        </p>
      </v-ons-page>
    </v-ons-dialog>

    <v-ons-alert-dialog modifier="rowfooter"
      :title="'Hey!!'"
      :footer="{
        'Wat': () => alertDialogVisible = false,
        'Hmm': () => alertDialogVisible = false,
        'Sure': () => alertDialogVisible = false
      }"
      :visible="alertDialogVisible"
      @update="alertDialogVisible = $event"
    >
      Lorem ipsum <v-ons-icon icon="fa-commenting-o"></v-ons-icon>
    </v-ons-alert-dialog>

    <v-ons-modal
      :visible="modalVisible"
      @click="modalVisible = false"
    >
      <p style="text-align: center">
        Loading <v-ons-icon icon="fa-spinner" spin></v-ons-icon>
        <br><br>
        Click or wait
      </p>
    </v-ons-modal>

    <v-ons-popover cancelable direction="down" cover-target
      target="#info-button"
      :visible="popoverVisible"
      @update="popoverVisible = $event"
    >
      <v-ons-list>
        <v-ons-list-item tappable
          v-for="label in ['Call history', 'Import/export', 'New contact', 'Settings']"
          @click="popoverVisible = false"
          :key="label"
          :modifier="$ons.platform.isAndroid() ? 'nodivider' : 'longdivider'"
        >
          <div class="center">{{ label }}</div>
        </v-ons-list-item>
      </v-ons-list>
    </v-ons-popover>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      alertDialogVisible: false,
      modalVisible: false,
      popoverVisible: false,
      timeoutID: 0
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
      clearTimeout(this.timeoutID);
      this.timeoutID = setTimeout(() => this.modalVisible = false, 2000);
    }
  }
}
</script>

<style>
.lorem-dialog .dialog-container {
  height: 200px;
}
</style>
