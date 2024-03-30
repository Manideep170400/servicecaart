import mongoose from "mongoose";
import apis from "./api/api.mjs";

const mongo_URL =
  "mongodb+srv://manideepreddy170400:Manideep100@cluster0.tvgnemc.mongodb.net/serviceCart";

async function init(app) {
  try {
    const res = await mongoose.connect(mongo_URL);
    console.log("mongoose connected");

    // Init Apis
    apis.init(app);

    return res;
  } catch (error) {
    console.log("Mongoose Error: ", error);
    return "Mongoose Error";
  }
}

export default {
  init: init,
};
