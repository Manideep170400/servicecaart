<template>
  <div class="login_wrapper">
    <v-sheet :elevation="20">
      <div class="d-flex">
        <div class="d-flex align-center">
          <img height="250" src="@/assets/logo.jpg" />
        </div>
        <div class="bg-deep-purple pa-12 rounded d-flex flex-column ga-3">
          <v-alert
            :text="correctText"
            type="error"
            v-if="correctText"
          ></v-alert>
          <v-text-field
            label="Email address"
            v-model="profileStore.login.email"
            placeholder="johndoe@gmail.com"
            type="email"
            class="text"
          ></v-text-field>
          <v-text-field
            label="Password"
            type="input"
            v-model="profileStore.login.password"
          ></v-text-field>
          <v-btn @click="signIn" class="singin_wrapper"> login </v-btn>
          <a
            hef="/forgetpassword"
            @click="forgetpassword"
            class="forget_wrapper"
            >Forgetten Password</a
          >
          <v-btn @click="Account" class="newaccount_wrapper">
            create New Account
          </v-btn>
        </div>
      </div>
    </v-sheet>
  </div>
</template>

<script setup>
import router from "@/router/routes";
import { useProfileStore } from "@/store/store";
import { ref } from "vue";

// const errorText = ref("");
const correctText = ref("");
const profileStore = useProfileStore();
function Account() {
  router.push({
    path: "/signup",
  });
}
async function signIn() {
  console.log("profilestore", profileStore.login.email);
  if (profileStore.login.email === "" || profileStore.login.password === "") {
    correctText.value = "enter Email and password";
  } else {
    let store = await profileStore.loginApi();
    if (store.email) {
      correctText.value = "Entered a correct a Email";
    } else {
      correctText.value = "Invalid a Wrong Email";
    }
  }
  router.push({
    path: "/registration",
  });
}
function forgetpassword() {
  router.push({
    path: "/forgetpassword",
  });
}
</script>

<style>
.login_wrapper {
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_wrapper > div {
  display: flex;
}
.newaccount_wrapper {
  background-color: rgb(100, 197, 165);
}
.singin_wrapper {
  background-color: rgb(144, 144, 223);
}
.forget_wrapper {
  padding: 0 0 0 30px;
  border-bottom: 1px solid;
  border-color: rgb(184, 176, 176);
}
</style>