// Import necessary models
import Review from '../models/ReviewSchema.js';
import Doctor from '../models/DoctorSchema.js';

/* ------------------------------------------------------------------------- */
// Get all reviews
export const getAllReviews = async (req, res) => {
    try {
        // Retrieve all reviews from the database
        const reviews = await Review.find({});

        // Respond with success message and retrieved reviews
        res.status(200).json({
            success: true,
            message: "Successfully got all reviews",
            data: reviews
        });
    } catch (err) {
        // If an error occurs, respond with error message
        res.status(404).json({
            success: false,
            message: "Unable to find reviews"
        });
    }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Create a new review
export const createReview = async (req, res) => {
    // Ensure the doctor ID is included in the request body
    if (!req.body.doctor) {
        req.body.doctor = req.params.doctorId;
    }

    // Ensure the user ID is included in the request body
    if (!req.body.user) {
        req.body.user = req.userId;
    }

    // Create a new review document
    const newReview = new Review(req.body);

    try {
        // Save the new review to the database
        const savedReview = await newReview.save();

        // Update the doctor's reviews array with the new review's ID
        await Doctor.findByIdAndUpdate(
            req.body.doctor,
            { $push: { reviews: savedReview._id } }
        );

        // Respond with success message and the new review
        res.status(200).json({
            success: true,
            message: "Successfully created review",
            data: savedReview
        });
    } catch (err) {
        // If an error occurs, respond with error message
        res.status(500).json({
            success: false,
            message: err.message
        });
    }
};
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
