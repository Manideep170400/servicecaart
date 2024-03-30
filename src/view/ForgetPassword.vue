<template>
  <div class="text">
    <v-text-field
      label="Email address"
      placeholder="johndoe@gmail.com"
      type="email"
      class="text text_width"
    ></v-text-field>
  </div>
  <div>
    <p>we have a sent a request a email to the above devices</p>
  </div>
</template>
<script setup>
</script>
<style scoped>
.text_width {
  width: 50%;
}
.text {
  height: 50px;
  left: 35%;
  right: 0%;
  position: absolute;
  top: 40%;
  width: 200px;
}
p {
  height: 50px;
  left: 40%;
  right: 0%;
  position: absolute;
  top: 60%;
  width: 200px;
}
</style>