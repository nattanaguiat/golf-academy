import { Coach } from "../models/Coach.model.js";

export const getAllCoaches = async (req, res) => {
  try {
    const coaches = await Coach.find().select("name email bio photoUrl");
    res.sendStatus(201).json(coaches);
  } catch (error) {
    console.error("Error fetching coaches:", error);
    res.status(500).json({ msg: "Server error fetching coaches" });
  }
};

export const getCoachById = async (req, res) => {
  const { id } = req.params;

  try {
    const coach = await Coach.findById(id).select("name email bio photoUrl");

    if (!coach) {
      return res.status(404).json({ msg: "Coach not found" });
    }

    res.json(coach);
  } catch (error) {
    console.error("Error fetching coach:", error);
    res.status(500).json({ msg: "Server error fetching coach" });
  }
};
