import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useProfileStore = defineStore("profile", () => {
  const API_URL = "http://localhost:2000";

  const loggedInUser = ref();

  const updateProfile = ref({
    email: "",
    password: "",
    Age: "",
    Gender: "",
    AddressLine: "",
    state: "",
    zipCode: "",
  });

  const registration = ref({
    email: "",
    password: "",
    Age: "",
    Gender: "",
    AddressLine: "",
    state: "",
    zipCode: "",
    phoneNumber: "",
    img: "",
  });

  const login = ref({
    email: "",
    password: "",
  });

  const signup = ref({
    email: "",
    password: "",
    confirmPassword: "",
  });
  async function createAccountApi() {
    const payload = {
      email: signup.value.email,
      password: signup.value.password,
    };
    const response = await axios.post(API_URL + "/createAccount", payload);
    console.log(response.config.data);
    return response;
  }
  async function loginApi() {
    const payload = {
      email: login.value.email,
      password: login.value.password,
    };
    const response = await axios.post(API_URL + "/login", payload);
    console.log(response.data);

    if (!response.data.error) {
      loggedInUser.value = response.data;
    }
    return response.data;
  }
  async function userprofile() {
    const response = await axios.get(API_URL + "/myProfile");
    console.log(response);
    return response.data;
  }
  return {
    updateProfile,
    registration,
    login,
    signup,
    createAccountApi,
    loginApi,
    userprofile,
  };
});
