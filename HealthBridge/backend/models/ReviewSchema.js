import mongoose from "mongoose";
import Doctor from "./DoctorSchema.js";

/* ------------------------------------------------------------------------- */
// Define the Review schema
const reviewSchema = new mongoose.Schema(
  {
    // Reference to the doctor being reviewed
    doctor: {
      type: mongoose.Types.ObjectId,
      ref: "Doctor",
    },

    // Reference to the user providing the review
    user: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },

    // The text content of the review
    reviewText: {
      type: String,
      required: true,
    },

    // Rating provided by the user
    rating: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
      default: 0,
    },
  },
  { timestamps: true }
);
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Pre hook to populate user data before executing find queries
reviewSchema.pre(/^find/, function (next) {
  this.populate({
    path: "user",
    select: "name photo",
  });
  next();
});
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Static method to calculate average ratings for a doctor
reviewSchema.statics.calcAverageRatings = async function (doctorId) {
  const stats = await this.aggregate([
    {
      $match: { doctor: doctorId },
    },
    {
      $group: {
        _id: "$doctor",
        numOfRating: { $sum: 1 },
        avgRating: { $avg: "$rating" },
      },
    },
  ]);

  // Update the doctor's average rating and total rating
  await Doctor.findByIdAndUpdate(doctorId, {
    totalRating: stats[0].numOfRating,
    averageRating: stats[0].avgRating,
  });
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Post hook to calculate average ratings after saving a review
reviewSchema.post("save", function () {
  this.constructor.calcAverageRatings(this.doctor);
});
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Export the Review model
export default mongoose.model("Review", reviewSchema);
/* ------------------------------------------------------------------------- */
