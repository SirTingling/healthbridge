// Importing necessary modules and schemas
import Doctor from '../models/DoctorSchema.js';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../models/UserSchema.js';
import { randomBytes } from 'crypto';
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* Crypto JWT Token Generator (env)
const randomBytesString = randomBytes(256).toString('base64');
console.log(randomBytesString);
*/

/* ------------------------------------------------------------------------- */
// Function to generate a new token
const generateToken = user => {
    return jwt.sign(
        {
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET_KEY, 
        {
            // Token expiry time set to 6 months
            expiresIn: '6M' 
        }
    );
};

/* ------------------------------------------------------------------------- */
// Register a new user
export const register = async (req, res) => {
    const {
        email,
        password,
        name,
        role,
        photo,
        gender
    } = req.body;

    try {
        let user = null;

        // Check if the user already exists based on role
        if (role === 'patient') {
            user = await User.findOne({ email });
        } else if (role === 'doctor') {
            user = await Doctor.findOne({ email });
        }

        // User liveness check
        if (user) {
            return res.status(400).json({
                message: "This User already exists"
            });
        }

        // Hashing the password using bcrypt
        const salt = await bcrypt.genSalt(8);
        const hashPassword = await bcrypt.hash(password, salt);

        // If a patient is selected
        if (role === 'patient') {
            // Defining the attributes of the new user to be created
            user = new User({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role
            });
        }

        // If a doctor is selected
        if (role === 'doctor') {
            // Defining the attributes of the new Doctor to be created
            user = new Doctor({
                name,
                email,
                password: hashPassword,
                photo,
                gender,
                role,
                isApproved: 'approved' // Set isApproved to 'approved'
            });
        }

        // Save the data provided
        await user.save();

        // Successfully user created response message from server
        res.status(200).json({
            success: true,
            message: "User was successfully created in the DB"
        });

    } catch (err) {
        // Unsuccessful user creation response message from the server
        res.status(500).json({
            success: false,
            message: "Server Error occurred, user not created successfully."
        });
    }
};

/* ------------------------------------------------------------------------- */
// Login user
export const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        let user = null;

        // Find user by email based on role
        const patient = await User.findOne({ email });
        const doctor = await Doctor.findOne({ email });

        if (patient) {
            user = patient;
        }
        if (doctor) {
            user = doctor;
        }

        // Check if the user exists
        if (!user) {
            // Return 404 response if user not found
            return res.status(404).json({
                message: "Unable to find user"
            });
        }

        // Compare passwords from DB with user password (if they match)
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        // Return error if password does not match
        if (!isPasswordMatch) {
            return res.status(400).json({
                status: false,
                message: "Authorized Access: Invalid Credentials"
            });
        }

        // Generate JWT token
        const token = generateToken(user);

        const { password: userPassword, role, appointments, ...rest } = user._doc;

        // Response upon successful login attempt
        res.status(200).json({
            status: true,
            message: "Successfully login",
            token,
            data: { ...rest },
            role
        });

    } catch (err) {
        // Unsuccessful login attempt, please try again
        res.status(500).json({
            status: false,
            message: "Failed to login"
        });
    }
};

/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
