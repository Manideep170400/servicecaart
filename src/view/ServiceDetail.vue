<template>
  <div>
    <v-text-field
      label="Full Name"
      v-model="profileStore.registration.email"
      placeholder="John Doe"
      required
    ></v-text-field>
    <v-text-field
      label="Address Line"
      v-model="profileStore.registration.AddressLine"
      placeholder="place"
      required
    ></v-text-field>
    <v-text-field
      label="Phone Number"
      v-model="profileStore.registration.phoneNumber"
      placeholder="+911000010000"
      required
    ></v-text-field>
    <v-text-field
      label="State/Province/Region"
      v-model="profileStore.registration.state"
      placeholder="AP"
      required
    ></v-text-field>
    <v-text-field
      label="ZIP / Postal Code"
      v-model="profileStore.registration.zipCode"
      placeholder="515465"
      required
    ></v-text-field>
    <v-autocomplete
      label="Country"
      v-model="profileStore.registration.country"
      placeholder="Select..."
      required
    ></v-autocomplete
    ><label> Image Photo</label><br />
    <input type="file" accept="image/jpeg" />
    <div>
      <v-btn color="primary" variant="text" @click="submit"> Submit </v-btn>
      <v-btn variant="text" @click="cancel"> Cancel </v-btn>
    </div>
  </div>
</template>
<script setup>
import router from "@/router/routes";
import { useProfileStore } from "@/store/store";

const profileStore = useProfileStore();
function cancel() {
  router.push({
    path: "/",
  });
}
function submit() {
  profileStore.userprofile();
  // router.push({
  //   path: "/myprofile",
  // });
}
</script>
  
<style>
</style>