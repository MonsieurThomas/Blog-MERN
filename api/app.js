import express from "express";
import mongoose from "mongoose";
import blogRouter from "./routes/blog-routes.js";
import router from "./routes/user-routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);

const PORT = process.env.PORT || 5000;

mongoose
  .connect(
    "mongodb+srv://admin:admin@rthomas.te4lkrd.mongodb.net/?retryWrites=true&w=majority&appName=Rthomas"
    // "mongodb://localhost:27017/premiereCollection"
  )
  .then(() => app.listen(PORT))
  .then(() =>
    console.log(`Connected TO Database and Listening TO ${PORT}`)
  )
  .catch((err) => console.log(err));
