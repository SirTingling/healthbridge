import mongoose from "mongoose";

/* ------------------------------------------------------------------------- */
// Doctor schema
const DoctorSchema = new mongoose.Schema({
  // Basic fields
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  ticketPrice: { type: Number },
  role: { type: String },

  /* ------------------------------------------------------------------------- */
  // Fields specific to doctors
  specialization: { type: String },
  qualifications: { type: Array },
  experiences: { type: Array },
  bio: { type: String, maxLength: 50 },
  about: { type: String },
  timeSlots: { type: Array },
  reviews: [{ type: mongoose.Types.ObjectId, ref: "Review" }],
  averageRating: { type: Number, default: 0 },
  totalRating: { type: Number, default: 0 },
  
  /* ------------------------------------------------------------------------- */
  // Approval status of the doctor
  isApproved: {
    type: String,
    enum: ["pending", "approved", "cancelled"],
    default: "pending",
  },

  // Reference to appointments
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Export the Doctor model
export default mongoose.model("Doctor", DoctorSchema);
/* ------------------------------------------------------------------------- */
