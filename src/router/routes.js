import CreateAccount from "@/view/CreateAccount.vue";
import { createMemoryHistory, createRouter } from "vue-router";
import AppHome from "@/view/AppHome.vue";
import MyProfile from "@/view/MyProfile";
import ServiceDetail from "@/view/ServiceDetail";
import UpdateProfile from "@/view/UpdateProfile";
import ForgetPassword from "@/view/ForgetPassword";

const routes = [
  { path: "/", component: AppHome },
  { path: "/signup", component: CreateAccount },
  { path: "/myprofile", component: MyProfile },
  { path: "/registration", component: ServiceDetail },
  { path: "/updateprofile", component: UpdateProfile },
  { path: "/forgetpassword", component: ForgetPassword },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
