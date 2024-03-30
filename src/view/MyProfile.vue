<template>
  <div>
    <v-btn @click="handlecancel">cancel</v-btn>
    <h1>{{ profileStore.registration.email }}</h1>
  </div>
</template>
  
  <script setup>
import router from "@/router/routes";
import { useProfileStore } from "@/store/store";

const profileStore = useProfileStore();

function handlecancel() {
  router.push({
    path: "/registration",
  });
}
</script>
  
  <style>
</style> @/store/store