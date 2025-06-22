import mongoose from "mongoose";

const scheduleSchema = new mongoose.Schema(
  {
    coach: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    dayOfWeek: {
      type: Number,
      required: true,
      min: 0,
      max: 6,
    }, // 0 = sunday
    timeSlots: [
      {
        start: { type: String, required: true }, // ex. "10:00"
        end: { type: String, required: true }, // ex. "11:00"
      },
    ],
  },
  {
    timestamps: true,
  }
);

export const Schedule = mongoose.model("Schedule", scheduleSchema);
