import express from "express"
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import { connectDB } from "./config/connection.js";

dotenv.config();

const app = express();

connectDB()

const PORT = process.env.PORT || 5001;

app.use(express.json())
app.use(cookieParser())

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});