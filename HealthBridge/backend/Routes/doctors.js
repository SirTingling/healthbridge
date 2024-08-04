import { updateDoctor, deleteDoctor, getAllDoctor, getSingleDoctor, getDoctorProfile } from "../Controllers/doctorController.js"
import Express from "express";
import { authenticate, restrict } from "../auth/verify.js";
import reviewRouter from './review.js';

/* ------------------------------------------------------------------------- */
const router = Express.Router();

// Doctor Routes ( Current Routes )

/* ------------------------------------------------------------------------- */
// Nested router for handling reviews related to a specific doctor
router.use('/:doctorId/reviews', reviewRouter);
/* ------------------------------------------------------------------------- */
// Route to get a single doctor by ID
router.get('/:id', getSingleDoctor);
/* ------------------------------------------------------------------------- */
// Route to get all doctors
router.get('/', getAllDoctor);
/* ------------------------------------------------------------------------- */
// Route to update doctor details (restricted to authenticated doctors)
router.put('/:id', authenticate, restrict(['doctor']), updateDoctor);
/* ------------------------------------------------------------------------- */
// Route to delete doctor details (restricted to authenticated doctors)
router.delete('/:id', authenticate, restrict(['doctor']), deleteDoctor);
/* ------------------------------------------------------------------------- */
// Route to get the profile of the authenticated doctor
router.get('/profile/me', authenticate, restrict(['doctor']), getDoctorProfile);
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
