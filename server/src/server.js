import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from 'cors'
import { connectDB } from "./config/connection.js";
import authRouter from "./routes/auth.routes.js";
import bookingRouter from "./routes/booking.routes.js";
import coachRouter from "./routes/coach.routes.js";

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5001;

app.use(cors())
app.use(express.json());
app.use(cookieParser());

app.use("/api", authRouter);
app.use("/api", bookingRouter);
app.use("/api", coachRouter);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server listening on PORT: ${PORT}`);
});
