import express from 'express';
import notes from "./data/notes.js"
import dotenv from 'dotenv'
import connectDB from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import noteRoutes from './routes/noteRoute.js'
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
import path from "path";
const app=express();

dotenv.config();

connectDB();
app.use(express.json());

app.use("/api/notes", noteRoutes);
app.use("/api/users", userRoutes);
 
// --------------------------deployment------------------------------
const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running..");
  });
}
// --------------------------deployment------------------------------


app.use(notFound);
app.use(errorHandler);

const port=process.env.PORT || 8000;
app.listen(port,()=>console.log(`server is running on ${port}`));

