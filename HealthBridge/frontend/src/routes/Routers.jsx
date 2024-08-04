//------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// Importing Home component for displaying the main page
import Home from '../pages/Home';
// Importing Services component for listing all available health care services
import Services from '../pages/Services';
// Importing Login component for user authentication in HealthBridge platform
import Login from '../pages/Login';
// Importing Signup component for new user registration on HealthBridge platform
import Signup from '../pages/Signup';
// Importing Contact component for user inquiries and customer service interactions
import Contact from '../pages/Contact';
// Importing Doctors component for listing all doctors associated with HealthBridge
import Doctors from '../pages/Doctors/Doctors';
// Importing DoctorDetails component for displaying detailed information about specific doctors
import DoctorDetails from '../pages/Doctors/DoctorDetails';
// Importing MyAccount component for user account management
import MyAccount from '../Dashboard/user-account/MyAccount';
// Importing Dashboard component for doctor account management
import Dashboard from '../Dashboard/doctor-account/Dashboard';
// Importing ProtectedRoute component for protecting routes based on user roles
import ProtectedRoute from './ProtectedRoute';
// Importing PaymentSuccess component for displaying the payment success page
import PaymentSuccess from '../pages/PaymentSuccess';
// Importing Routes and Route components from react-router-dom for handling routing
import { Routes, Route } from 'react-router-dom';
//------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// Router components of all routes setup:
const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> {/* Route for the landing page */}
      <Route path="/home" element={<Home />} /> {/* Route for the home page, redundant with the landing page */}
      <Route path="/doctors" element={<Doctors />} /> {/* Route for viewing all doctors */}
      <Route path="/doctors/:id" element={<DoctorDetails />} /> {/* Route for viewing details of a specific doctor */}
      <Route path="/login" element={<Login />} /> {/* Route for user login */}
      <Route path="/register" element={<Signup />} /> {/* Route for user registration */}
      <Route path="/services" element={<Services />} /> {/* Route for health care services */}
      <Route path="/contact" element={<Contact />} /> {/* Route for contact and support */}
      <Route path="/users/profile/me" element={ /* Protected route for user account details */
        <ProtectedRoute allowedRoles={['patient']}>
          <MyAccount />
        </ProtectedRoute>
      } />
      <Route path="/doctors/profile/me" element={ /* Protected route for doctor account details */
        <ProtectedRoute allowedRoles={['doctor']}>
          <Dashboard />
        </ProtectedRoute>
      } />
      <Route path="/checkout-success" element={<PaymentSuccess />} /> {/* Route for payment success page */}
    </Routes>
  );
};

//------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
export default Routers; // ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------------------
