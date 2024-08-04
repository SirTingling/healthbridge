// Import express for creating the router
import express from "express";
// Import the register and login controller functions
import { register, login } from "../Controllers/authController.js";

/* ------------------------------------------------------------------------- */
const router = express.Router();

/* ------------------------------------------------------------------------- */
// Route for user registration
router.post("/register", register);

// Route for user login
router.post("/login", login);

/* ------------------------------------------------------------------------- */
// Export the router
export default router;
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
