// Import necessary models
import Booking from "../models/BookingSchema.js";
import Doctor from "../models/DoctorSchema.js";
import User from "../models/UserSchema.js";

/* ------------------------------------------------------------------------- */
// Function to get checkout session
export const getCheckoutSession = async (req, res) => {
  try {
    // Get the currently booked doctor and user
    const doctor = await Doctor.findById(req.params.doctorId);
    const user = await User.findById(req.userId);

    // Check if doctor or user is not found
    if (!doctor || !user) {
      return res.status(404).json({ message: "Doctor or user not found" });
    }

    // Ensure a default ticket price if not provided
    const ticketPrice = doctor.ticketPrice || 100;

    // Simulate a checkout session response
    const session = {
      id: "dummy_session_id",
      url: `${process.env.CLIENT_SITE_URL}/checkout-success`,
    };

    // Create a booking object with the necessary details
    const booking = new Booking({
      doctor: doctor._id,
      user: user._id,
      ticketPrice: ticketPrice, // Ensure ticketPrice is set
      session: session.id,
    });

    // Save the booking object to the database
    await booking.save();

    // Send the created session as a response
    res.status(200).json({ success: true, message: "Success", session });
  } catch (error) {
    // Log the error details to the console
    console.error("Error creating checkout session:", error.message);
    console.error("Stack trace:", error.stack);

    // Send error response
    res.status(500).json({
      success: false,
      message: "Error creating checkout session",
      error: error.message
    });
  }
};
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
