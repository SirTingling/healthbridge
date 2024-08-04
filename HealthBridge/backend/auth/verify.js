// Importing necessary modules and schemas
import jwt from "jsonwebtoken";
import DoctorSchema from "../models/DoctorSchema.js";
import UserSchema from "../models/UserSchema.js";

{/* ------------------------------------------------------------------------- */}

// Function to generate a new token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET_KEY,
    { expiresIn: '6h' } // Set token expiry time to 6 hours
  );
};

{/* ------------------------------------------------------------------------- */}

// Middleware to authenticate the user
export const authenticate = async (req, res, next) => {
  // Get token from header
  const authToken = req.headers.authorization;

  // Check if token exists
  if (!authToken || !authToken.startsWith("Bearer ")) {
    return res.status(401).json({ message: "No token, authorization denied" });
  }

  try {
    // Verify token
    const token = authToken.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.userId = decoded.id;
    req.role = decoded.role;
    next();
  } catch (err) {
    if (err.name === "TokenExpiredError") {
      try {
        // Decode the expired token to get user details
        const oldToken = authToken.split(" ")[1];
        const decoded = jwt.decode(oldToken);

        let user;
        // Fetch user details based on role
        if (decoded.role === 'doctor') {
          user = await DoctorSchema.findById(decoded.id);
        } else if (decoded.role === 'patient') {
          user = await UserSchema.findById(decoded.id);
        }

        if (user) {
          // Generate new token and set headers
          const newToken = generateToken(user);
          // Send new token in response headers
          res.setHeader('x-new-token', newToken);
          req.userId = user._id;
          req.role = user.role;
          next();
        } else {
          res.status(401).json({
            message: "Token has expired, please log in again."
          });
        }
      } catch (renewErr) {
        console.error("Error renewing token:", renewErr);
        res.status(401).json({
          message: "Token has expired, please log in again."
        });
      }
    } else {
      res.status(401).json({ success: false, message: "Invalid token" });
    }
  }
};

{/* ------------------------------------------------------------------------- */}

// Middleware to restrict access based on roles
export const restrict = roles => async (req, res, next) => {
  const userId = req.userId;

  let user;
  // Check the user's role and retrieve from the appropriate collection
  const patient = await UserSchema.findById(userId);
  const doctor = await DoctorSchema.findById(userId);

  if (patient) {
    user = patient;
  } else if (doctor) {
    user = doctor;
  } else {
    return res.status(404).json({ message: "User not found" });
  }

  // Check if the user role is authorized
  if (!roles.includes(user.role)) {
    return res
      .status(401)
      .json({ success: false, message: "You're not authorized" });
  }

  next();
};

{/* ------------------------------------------------------------------------- */}

// Middleware to authenticate admin access
export const adminAuth = restrict(["admin"]);

{/* ------------------------------------------------------------------------- */}

// Middleware to restrict doctor access
export const doctorAuth = restrict(["doctor"]);

{/* ------------------------------------------------------------------------- */}

// Middleware to restrict patient access
export const patientAuth = restrict(["patient", "admin"]);
{/* ------------------------------------------------------------------------- */}
