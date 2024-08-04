// Import express for creating the router
import express from "express";
// Import authentication and role-based restriction middleware
import { authenticate, restrict } from "./../auth/verify.js";
// Import the getCheckoutSession controller function
import { getCheckoutSession } from "../Controllers/bookingController.js";
/* ------------------------------------------------------------------------- */
const router = express.Router();

/* ------------------------------------------------------------------------- */
// Route for initiating a checkout session
router.post(
  "/checkout-session/:doctorId",  
  authenticate,                   // authenticate the user
  restrict(["patient"]),          // restrict access to patients only
  getCheckoutSession              
);

/* ------------------------------------------------------------------------- */
// Export the router
export default router;
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
/* ------------------------------------------------------------------------- */
