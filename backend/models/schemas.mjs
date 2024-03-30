import mongoose from "mongoose";
const { Schema } = mongoose;

const signUpSchema = new Schema({
  name: String,
  email: String,
  password: String,
});
const myProfileSchema = new Schema({
  name: String,
  phoneNumber: Number,
  email: String,
  street: String,
  zipCode: String,
  area: String,
  state: String,
  country: String,
  age: String,
  gender: String,
  work: String,
  photo: String,
});
const WorkSchema = new Schema({
  email: String,
  rating: String,
  work: String,
});
function init() {
  const SignUp = mongoose.model("SignUp", signUpSchema);
  const Profile = mongoose.model("myprofile", myProfileSchema);
  const WorkHistory = mongoose.model("WorkHistory", WorkSchema);
  return {
    SignUp,
    Profile,
    WorkHistory,
  };
}

export default {
  init,
};
