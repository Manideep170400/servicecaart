import express from "express";
import cors from "cors";
import mongoose from "./backend/mongoose.mjs";

const app = express();
const port = 2000;

app.use(cors());
app.use(express.json());

// Init mongoose
await mongoose.init(app);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
