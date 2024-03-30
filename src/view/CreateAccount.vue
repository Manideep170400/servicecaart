<template>
  <div class="account_wrapper flex-column">
    <v-sheet :elevation="20" color="green-lighten-3">
      <div class="pa-3">
        <v-alert :text="errorText" type="error" v-if="errorText"></v-alert>
        <v-text-field
          label="Email address"
          v-model="profileStore.signup.email"
          placeholder="johndoe@gmail.com"
          type="email"
        ></v-text-field>
        <v-text-field
          label="Password"
          type="input"
          v-model="profileStore.signup.password"
        ></v-text-field>
        <v-text-field
          label=" confirm Password"
          type="input"
          v-model="profileStore.signup.confirmPassword"
        ></v-text-field>
      </div>
    </v-sheet>
    <div class="d-flex justify-space-between">
      <v-btn class="cancel_wrapper" @click="handlecancel">cancel</v-btn>
      <v-btn class="singUp_wrapper" @click="handleSignUp">signUp </v-btn>
    </div>
  </div>
</template>
<script setup>
import router from "@/router/routes";
import { useProfileStore } from "@/store/store";
import { ref } from "vue";

const errorText = ref("");
const profileStore = useProfileStore();
function handlecancel() {
  router.push({
    path: "/",
  });
}
function handleSignUp() {
  errorText.value = "";
  if (profileStore.signup.password === profileStore.signup.confirmPassword) {
    profileStore.createAccountApi();
  } else {
    errorText.value = "password does not Match";
  }
}
</script>
<style>
.account_wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
.account_wrapper > div {
  width: 40%;
  margin: 0 0 20px 0;
}
.singUp_wrapper {
  background-color: rgb(133, 219, 133);
}
.cancel_wrapper {
  background-color: rgb(135, 221, 221);
}
</style>@/store/store