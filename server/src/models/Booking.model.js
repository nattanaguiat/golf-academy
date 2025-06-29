import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Coach",
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    timeSlot: {
      start: String,
      end: String,
    },
  },
  { timestamps: true }
);

export const Booking = mongoose.model("Booking", bookingSchema);

