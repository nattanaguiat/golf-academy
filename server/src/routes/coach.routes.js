import { Router } from "express";
import { getAllCoaches, getCoachById } from "../controllers/coach.controller.js";

const coachRouter = Router();

coachRouter.get("/coaches", getAllCoaches);
coachRouter.get("/coaches/:id", getCoachById);

export default coachRouter;
