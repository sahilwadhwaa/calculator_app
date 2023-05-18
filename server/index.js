//importing of all the required modules
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import historyRoute from "./routes/calc.js"

/* CONFIGURATIONS */
dotenv.config();
const app = express();
app.use(express.json());

//body-parser extracts the entire body portion of an incoming request stream and exposes it on req.body.
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
// This allows any cross-origin request to access resources on our web page.
app.use(cors());

//routes
app.use("/api", historyRoute);

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 6001;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => console.log(`${error} did not connect`));