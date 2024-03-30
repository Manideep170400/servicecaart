<template>
  <div>
    <v-text-field
      label="Full Name"
      v-model="store.Email"
      placeholder="John Doe"
      required
    ></v-text-field>
    <v-text-field
      label="Address Line"
      v-model="store.AddressLine"
      placeholder="place"
      required
    ></v-text-field>
    <v-text-field
      label="Phone Number"
      v-model="store.phoneNumber"
      placeholder="+911000010000"
      required
    ></v-text-field>
    <v-text-field
      label="State/Province/Region"
      v-model="store.state"
      placeholder="AP"
      required
    ></v-text-field>
    <v-text-field
      label="ZIP / Postal Code"
      placeholder="515465"
      required
    ></v-text-field>
    <v-autocomplete
      label="Country"
      placeholder="Select..."
      required
    ></v-autocomplete>
    <input type="file" accept="image/jpeg" />
    <div>
      <v-btn color="primary" variant="text"> Submit </v-btn>
      <v-btn variant="text"> Cancel </v-btn>
    </div>
  </div>
</template>
  
<script setup>
</script>
  
<style>
</style>