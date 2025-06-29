import { Booking } from "../models/Booking.model.js";

export const createBooking = async (req, res) => {
  const { coach, date, timeSlot } = req.body;

  try {
    const existingBooking = await Booking.findOne({
      coach,
      date,
      "timeSlot.start": timeSlot.start,
      "timeSlot.end": timeSlot.end,
    });

    if (existingBooking) {
      return res.status(400).json({ msg: "This time slot is already booked" });
    }

    const newBooking = new Booking({
      user,
      coach,
      date,
      timeSlot,
    });

    await newBooking.save();

    res
      .status(201)
      .json({ msg: "Booking created successfully", booking: newBooking });
  } catch (error) {
    console.error("Error creating booking:", err);
    res.status(500).json({ msg: "Server error creating booking" });
  }
};

export const getUserBookings = async (req, res) => {
  const user = req.user.id;

  try {
    const bookings = await Booking.find({ user }).populate('coach', 'name email bio photoUrl').sort({date: 1})

    res.json(bookings)
  } catch (error) {
    console.error('Error fetching bookings:', err);
    res.status(500).json({ msg: 'Server error fetching bookings' });
  }
};

export const cancelBooking = async (req, res) => {
    const bookingId = req.params.id;
    const user = req.user.id;
  
    try {
      const booking = await Booking.findById(bookingId);
  
      if (!booking) {
        return res.status(404).json({ msg: 'Booking not found' });
      }
  
      if (booking.user.toString() !== user) {
        return res.status(403).json({ msg: 'Not authorized to cancel this booking' });
      }
  
      await Booking.findByIdAndDelete(bookingId);
  
      res.json({ msg: 'Booking cancelled successfully' });
    } catch (err) {
      console.error('Error cancelling booking:', err);
      res.status(500).json({ msg: 'Server error cancelling booking' });
    }
  };
