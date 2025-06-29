import { Router } from "express";
import {
  login,
  logout,
  profile,
  signUp,
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";


const authRouter = Router();

authRouter.post("/sign-up", signUp), authRouter.post("/login", login);
authRouter.post("/logout", logout);
authRouter.get("/profile", authMiddleware, profile);

export default authRouter
