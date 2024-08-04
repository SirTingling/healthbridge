import { authenticate, patientAuth } from "../auth/verify.js";
import { createReview, getAllReviews } from "../Controllers/reviewController.js";
import express from "express";


/* ------------------------------------------------------------------------- */
const router = express.Router({ mergeParams: true });

/* ------------------------------------------------------------------------- */
// Route to get all reviews and create a new review (restricted to authenticated patients)
router
  .route("/")
  .get(getAllReviews)
  .post(authenticate, patientAuth, createReview);

/* ------------------------------------------------------------------------- */
// Export the router
export default router;
/* ------------------------------------------------------------------------- */
