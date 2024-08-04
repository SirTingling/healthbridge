// Import necessary models
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

/* ------------------------------------------------------------------------- */
// Update doctor details
export const updateDoctor = async(req, res) => {
    const id = req.params.id;

    try {
        // Find doctor by ID and update details
        const updateDoctor = await Doctor.findByIdAndUpdate(
            id,
            { $set: req.body },
            { new: true }
        );

        // Successfully updated doctor details response
        res.status(200).json({
            success: true,
            message: "Successfully updated Doctor details",
            data: updateDoctor,
        });
    } catch (err) {
        // Error response for updating doctor details
        res.status(500).json({
            success: false,
            message: "Error while trying to update Doctor details"
        });
    }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Delete doctor details
export const deleteDoctor = async(req, res) => {
    const id = req.params.id;

    try {
        // Find doctor by ID and delete
        await Doctor.findByIdAndDelete(id);

        // Successfully deleted doctor details response
        res.status(200).json({
            success: true,
            message: "Successfully deleted Doctor details",
        });
    } catch (err) {
        // Error response for deleting doctor details
        res.status(500).json({
            success: false,
            message: "Error while trying to delete Doctor details"
        });
    }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get single doctor details
export const getSingleDoctor = async (req, res) => {
    const id = req.params.id;
    console.log("Fetching doctor with ID:", id);

    try {
        // Find doctor by ID and populate reviews
        const doctor = await Doctor.findById(id).populate('reviews').select("-password");
        console.log("Doctor found:", doctor);

        // Check if doctor is not found
        if (!doctor) {
            return res.status(404).json({
                success: false,
                message: "No Doctor found",
            });
        }

        // Successfully found doctor response
        res.status(200).json({
            success: true,
            message: "Successfully Found Doctor",
            data: doctor,
        });
    } catch (err) {
        // Error response for finding doctor
        console.error("Error finding doctor:", err);
        res.status(500).json({
            success: false,
            message: "No Doctor found",
        });
    }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get all doctors
export const getAllDoctor = async(req, res) => {
    try {
        const { query } = req.query;
        let doctors;

        // Search doctors based on query
        if (query) {
            doctors = await Doctor.find({
                isApproved: 'approved',
                $or: [
                    { name: { $regex: query, $options: "i" } },
                    { specialization: { $regex: query, $options: "i" } },
                ],
                // Remove sensitive data like passwords from the server response
            }).select("-password");
        } else {
            // Remove sensitive data like passwords from the server response
            doctors = await Doctor.find({ isApproved: 'approved' }).select("-password");
        }

        // Successfully found all doctors response
        res.status(200).json({
            success: true,
            message: "Successfully Found All Doctors",
            data: doctors,
        });
    } catch (err) {
        // Error response for finding doctors
        res.status(404).json({
            success: false,
            message: "No Doctors found"
        });
    }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get doctor profile details
export const getDoctorProfile = async (req, res) => {
    const doctorId = req.userId;

    try {
        // Find doctor by user ID
        const doctor = await Doctor.findById(doctorId);

        // Check if doctor is not found
        if (!doctor) {
            return res.status(404).json({ message: "Doctor not found" });
        }

        const { password, ...rest } = doctor._doc;

        // Get total appointments for the specific doctor
        const appointments = await Booking.find({ doctor: doctorId });

        // Successfully found doctor profile details response
        res.status(200).json({
            success: true,
            message: "Successfully retrieved doctor's profile details",
            data: { ...rest, appointments },
        });
    } catch (error) {
        // Error response for retrieving doctor profile details
        res.status(500).json({
            success: false,
            message: "Unable to retrieve doctor's profile details"
        });
    }
};
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
