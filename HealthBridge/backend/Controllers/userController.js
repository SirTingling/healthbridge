// Import necessary models
import User from "../models/UserSchema.js";
import Doctor from "../models/DoctorSchema.js";
import Booking from "../models/BookingSchema.js";

/* ------------------------------------------------------------------------- */
// Update an existing user details and respond with the appropriate response
export const updateUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Find and update the user by ID
    const updateUser = await User.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );

    // Respond with success message and updated user details
    res.status(200).json({
      success: true,
      message: "Successfully updated user details",
      data: updateUser,
    });
  } catch (err) {
    // If an error occurs, respond with error message
    res.status(500).json({
      success: false,
      message: "Error while trying to update user details",
    });
  }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Delete an existing user by ID and respond with the appropriate response
export const deleteUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Find and delete the user by ID
    await User.findByIdAndDelete(id);

    // Respond with success message
    res.status(200).json({
      success: true,
      message: "Successfully deleted user details",
    });
  } catch (err) {
    // If an error occurs, respond with error message
    res.status(500).json({
      success: false,
      message: "Error while trying to delete user details",
    });
  }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get a single user by ID and respond with the appropriate response
export const getSingleUser = async (req, res) => {
  const id = req.params.id;

  try {
    // Find the user by ID and exclude the password field
    const user = await User.findById(id).select("-password");

    // Respond with success message and user details
    res.status(200).json({
      success: true,
      message: "Successfully found user",
      data: user,
    });
  } catch (err) {
    // If an error occurs, respond with error message
    res.status(404).json({
      success: false,
      message: "No user found",
    });
  }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get all users and respond with the appropriate response
export const getAllUser = async (req, res) => {
  try {
    // Find all users and exclude the password field
    const users = await User.find({}).select("-password");

    // Respond with success message and user details
    res.status(200).json({
      success: true,
      message: "Successfully found all users",
      data: users,
    });
  } catch (err) {
    // If an error occurs, respond with error message
    res.status(404).json({
      success: false,
      message: "No users found",
    });
  }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get the profile of the currently authenticated user
export const getUserProfile = async (req, res) => {
  const userId = req.userId;

  try {
    // Find the user by ID
    const user = await User.findById(userId);

    if (!user) {
      // If user is not found, respond with error message
      return res.status(404).json({
        success: false,
        message: "The user was not found",
      });
    }

    // Exclude the password field from the user data
    const { password, ...rest } = user._doc;

    // Respond with success message and user profile details
    res.status(200).json({
      success: true,
      message: "Getting user profile info in progress...",
      data: { ...rest },
    });
  } catch (err) {
    // If an error occurs, respond with error message
    res.status(500).json({
      success: false,
      message: "Unable to retrieve user profile info, try again.",
    });
  }
};
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// Get all appointments for the currently authenticated user
export const getMyAppointments = async (req, res) => {
  try {
    // Find all bookings for the user
    const bookings = await Booking.find({ user: req.userId });
    const doctorIds = bookings.map((el) => el.doctor.id);

    // Find all doctors associated with the bookings and exclude the password field
    const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select(
      "-password"
    );

    // Respond with success message and doctor details
    res.status(200).json({ success: true, message: "Success", data: doctors });
  } catch (error) {
    // If an error occurs, respond with error message
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Unable to retrieve appointment details, try again",
    });
  }
};
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */