import mongoose from "mongoose";

/* ------------------------------------------------------------------------- */
// Booking schema
const bookingSchema = new mongoose.Schema(
  {
    // Reference to the doctor associated with the booking
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },
    // Reference to the user associated with the booking
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: true,
    },
    // Ticket price for the booking
    ticketPrice: { type: String, required: true },
    // Status of the booking
    status: {
      type: String,
      enum: ["pending", "approved", "cancelled"],
      default: "pending",
    },
    // Payment status of the booking
    isPaid: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true } // Automatically manage createdAt and updatedAt fields
);
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Pre-find hook to populate booking data with related user and doctor information
bookingSchema.pre(/^find/, function (next) {
  // Populate the user data
  this.populate("user").populate({
    path: "doctor",
    select: "name",
  });
  // Continue to the next middleware
  next();
});
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Export the Booking model
export default mongoose.model("Booking", bookingSchema);
/* ------------------------------------------------------------------------- */
