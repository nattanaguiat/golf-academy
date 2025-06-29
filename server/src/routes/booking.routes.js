import { Router } from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { cancelBooking, createBooking, getUserBookings } from "../controllers/booking.controller.js";


const bookingRouter = Router();

bookingRouter.get("/bookings", authMiddleware, getUserBookings);
bookingRouter.get("/bookings", authMiddleware, createBooking)
bookingRouter.delete("/bookings/:id", authMiddleware, cancelBooking);


export default bookingRouter;
