// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
import {
    updateUser,
    deleteUser,
    getAllUser,
    getSingleUser,
    getUserProfile,
    getMyAppointments
  } from "../Controllers/userController.js";
  import Express from "express";
  import { authenticate, restrict } from "../auth/verify.js";
  
  /* ------------------------------------------------------------------------- */
  const router = Express.Router();
  
  /* ------------------------------------------------------------------------- */
  // Route to get a single user (restricted to authenticated patients)
  router.get('/:id', authenticate, restrict(['patient']), getSingleUser); 
  /* ------------------------------------------------------------------------- */
  // Route to get all users (restricted to authenticated admins)
  router.get('/', authenticate, restrict(['admin']), getAllUser);
  /* ------------------------------------------------------------------------- */
  // Route to update a user (restricted to authenticated patients)
  router.put('/:id', authenticate, restrict(['patient']), updateUser);
  /* ------------------------------------------------------------------------- */
  // Route to delete a user (restricted to authenticated patients)
  router.delete('/:id', authenticate, restrict(['patient']), deleteUser);
  /* ------------------------------------------------------------------------- */
  // Route to get the profile of the authenticated user (restricted to authenticated patients)
  router.get('/profile/me', authenticate, restrict(['patient']), getUserProfile);
  /* ------------------------------------------------------------------------- */
  // Route to get the appointments of the authenticated user (restricted to authenticated patients)
  router.get('appointments/my-appointments', authenticate, restrict(['patient']), getMyAppointments);
  
  /* ------------------------------------------------------------------------- */

  export default router;
  /* ------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------- */
  /* ------------------------------------------------------------------------- */
  