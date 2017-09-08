<template>
  <v-ons-page>
    <div class="camera">
      <div class="focus"></div>
    </div>
  </v-ons-page>
</template>

<script>

export default {
};
</script>

<style scoped>
.camera {
  width: 100%;
  height: 100%;
  background-color: lightgrey;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.focus {
  width: 100px;
  height: 100px;
  border: 12px solid whitesmoke;
  border-radius: 100%;
}
</style>
