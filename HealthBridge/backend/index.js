import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import mongoose from "mongoose";
import authRoute from "./Routes/auth.js";
import dotenv from "dotenv";
import userRoute from "./Routes/user.js";
import doctorRoute from "./Routes/doctors.js";
import reviewRoute from "./Routes/review.js";
import bookingRoute from './Routes/booking.js';
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */

// Load environment variables from .env file
dotenv.config();

/* ------------------------------------------------------------------------- */
// Initialize the Express application
const app = express();
const port = process.env.PORT || 8000;

// Set CORS options
const corsOptions = {
    origin: true,
};

/* ------------------------------------------------------------------------- */
// Define a simple route to test if the API is working
app.get('/', (req, res) => {
    res.send("The API is working as intended");
});

/* ------------------------------------------------------------------------- */
// Connect to MongoDB (open to all)
mongoose.set('strictQuery', false);
const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
        // Log the successful connection to the Atlas MongoDB database
        console.log("🚀 Successfully connected to HealthBridge Database");
    } catch (err) {
        // Log the error connection to the Atlas MongoDB database
        console.error("❌ Error: Failed to connect to the HealthBridge Database", err);
    }
};

/* ------------------------------------------------------------------------- */
// Middleware setup
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOptions));

/* ------------------------------------------------------------------------- */
// Define the API routes
/* ------------------------------------------------------------------------- */

// Authentication pathway
app.use('/api/v1/auth', authRoute);
// Users pathway API route
app.use('/api/v1/users', userRoute);
// Doctors pathway API route
app.use('/api/v1/doctors', doctorRoute);
// Reviews pathway API route
app.use('/api/v1/reviews', reviewRoute);
// Booking route (feature prototype)
app.use('/api/v1/bookings', bookingRoute);

/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
// Start the server and connect to the database
app.listen(port, () => {
    connectDB();
    console.log(`🌐 Server is running on port ${port}. Visit http://localhost:${port} to access the API`);
});

/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
