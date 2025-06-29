import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";

const coachRouter = Router();

coachRouter.get("/coaches", authMiddleware);
coachRouter.get("/coaches/:id", authMiddleware);

export default coachRouter;
