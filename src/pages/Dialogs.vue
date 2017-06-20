<template>
  <v-ons-page>
    <custom-toolbar v-bind="toolbarInfo">
      <v-ons-toolbar-button slot="right" id="info-button" @click="popoverVisible = true">
        <v-ons-icon v-if="$ons.platform.isAndroid()" icon="md-more-vert"></v-ons-icon>
        <span v-else>More</span>
      </v-ons-toolbar-button>
    </custom-toolbar>

    <v-ons-fab v-if="$ons.platform.isAndroid()" position="bottom right">
      <v-ons-icon icon="md-face"></v-ons-icon>
    </v-ons-fab>

    <v-ons-list-title>Notifications</v-ons-list-title>
    <v-ons-list modifier="inset">
      <v-ons-list-item
        tappable modifier="longdivider"
        @click="$ons.notification.alert('Hello, world!')"
      >
        <div class="center">
          Alert
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable modifier="longdivider"
        @click="$ons.notification.confirm('Are you ready?')"
      >
        <div class="center">
          Simple Confirmation
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable modifier="longdivider"
        @click="$ons.notification.prompt('What is your name?')"
      >
        <div class="center">
          Prompt
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable modifier="longdivider"
        @click="$ons.notification.toast('Hi there!', { buttonLabel: 'Dismiss', timeout: 1500 })"
      >
        <div class="center">
          Toast
        </div>
      </v-ons-list-item>
      <v-ons-list-item
        tappable modifier="longdivider"
        @click="$ons.openActionSheet({ buttons: ['Label 1', 'Label 2', 'Label 3', 'Cancel'], destructive: 2, cancelable: true })"
      >
        <div class="center">
          Action/Bottom Sheet
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <v-ons-list-title>Components</v-ons-list-title>
    <v-ons-list modifier="inset">
      <v-ons-list-item tappable modifier="longdivider"
        @click="dialogVisible = true"
      >
        <div class="center">
          Simple Dialog
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable modifier="longdivider"
        @click="alertDialogVisible = true"
      >
        <div class="center">
          Alert Dialog
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable modifier="longdivider"
        @click="toastVisible = true"
      >
        <div class="center">
          Toast (top)
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable modifier="longdivider"
        @click="showModal"
      >
        <div class="center">
          Modal
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable modifier="longdivider"
        @click="popoverVisible = true"
      >
        <div class="center">
          Popover - MD Menu
        </div>
      </v-ons-list-item>

      <v-ons-list-item tappable modifier="longdivider"
        @click="actionSheetVisible = true"
      >
        <div class="center">
          Action/Bottom Sheet
        </div>
      </v-ons-list-item>
    </v-ons-list>

    <!-- Components -->

    <v-ons-dialog cancelable
      class="lorem-dialog"
      :visible.sync="dialogVisible"
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

    <v-ons-alert-dialog cancelable
      :modifier="$ons.platform.isAndroid() ? '' : 'rowfooter'"
      :title="'Hey!!'"
      :footer="{
        'Wat': () => alertDialogVisible = false,
        'Hmm': () => alertDialogVisible = false,
        'Sure': () => alertDialogVisible = false
      }"
      :visible.sync="alertDialogVisible"
    >
      Lorem ipsum <v-ons-icon icon="fa-commenting-o"></v-ons-icon>
    </v-ons-alert-dialog>

    <v-ons-toast :visible="toastVisible" animation="fall">Supercalifragilisticexpialidocious<button @click="toastVisible = false">No way</button></v-ons-toast>

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
      :visible.sync="popoverVisible"
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

    <v-ons-action-sheet :visible.sync="actionSheetVisible" cancelable>
      <v-ons-action-sheet-button @click="actionSheetVisible = false" icon="md-square-o">Action 1</v-ons-action-sheet-button>
      <v-ons-action-sheet-button @click="actionSheetVisible = false" icon="md-square-o">Action 2</v-ons-action-sheet-button>
      <v-ons-action-sheet-button @click="actionSheetVisible = false" modifier="destructive" icon="md-square-o">Action 3</v-ons-action-sheet-button>
      <v-ons-action-sheet-button @click="actionSheetVisible = false" icon="md-square-o">Cancel</v-ons-action-sheet-button>
    </v-ons-action-sheet>
  </v-ons-page>
</template>

<script>
export default {
  data() {
    return {
      dialogVisible: false,
      alertDialogVisible: false,
      toastVisible: false,
      modalVisible: false,
      popoverVisible: false,
      actionSheetVisible: false,
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
};
</script>

<style>
.lorem-dialog .dialog-container {
  height: 200px;
}
</style>
<style scoped>
ons-list-title {
  margin-top: 20px;
}
</style>
