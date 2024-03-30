import schemas from "../models/schemas.mjs";

const { SignUp } = schemas.init();

function init(app) {
  app.get("/myProfile", async (req, res) => {
    try {
      res.send("successsfully to get data");
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
  app.post("/login", async (req, res) => {
    try {
      console.log("login", req.body);
      const loginData = await SignUp.findOne({ email: req.body.email });
      console.log(loginData);
      if (!loginData) {
        res.send({
          error: "Invalid Email.",
        });
      } else if (req.body.password === loginData.password) {
        res.send({ _id: loginData._id, email: loginData.email });
      } else {
        res.send({
          error: "Incorrect Password.",
        });
      }
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
  app.post("/createAccount", async (req, res) => {
    try {
      console.log("createAccount", req.body);
      const newData = await SignUp.create(req.body);
      console.log(newData);
      res.send(newData);
    } catch (error) {
      res.send(error);
      console.error(JSON.stringify(error));
    }
  });
}
export default {
  init,
};
