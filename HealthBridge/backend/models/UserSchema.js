import mongoose from "mongoose";

/* ------------------------------------------------------------------------- */

const UserSchema = new mongoose.Schema({
  // User email, must be unique and required
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  name: { type: String, required: true },
  phone: { type: Number },
  photo: { type: String },
  role: {
    type: String,
    enum: ["patient", "admin"],
    default: "patient",
  },
  // User gender, with possible values "male", "female", or "other"
  gender: { type: String, enum: ["male", "female", "other"] },
  // User blood type, optional
  bloodType: { type: String },
  // Reference to user's appointments
  appointments: [{ type: mongoose.Types.ObjectId, ref: "Appointment" }],
});

/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Export the User model
export default mongoose.model("User", UserSchema);
/* ------------------------------------------------------------------------- */
