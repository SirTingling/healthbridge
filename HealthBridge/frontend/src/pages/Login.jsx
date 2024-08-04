//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
import { useState, useContext } from "react"; // Importing useState and useContext hooks from React
import { Link, useNavigate } from "react-router-dom"; // Importing Link and useNavigate from react-router-dom for navigation
import { BASE_URL } from "../config";
import { AuthContext } from "../context/AuthContext.jsx";
import { toast } from "react-toastify"; 
import HashLoader from "react-spinners/HashLoader.js"; 
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
const Login = () => {
  // State for managing form data (email and password)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  //------------------------------------------------------------------------------------------------------------------------

  // State for managing loading state
  const [loading, setLoading] = useState(false);
  //------------------------------------------------------------------------------------------------------------------------
  // Use navigate hook for navigation
  const navigate = useNavigate();
  //------------------------------------------------------------------------------------------------------------------------
  // Use context to dispatch authentication actions
  const { dispatch } = useContext(AuthContext);
  //------------------------------------------------------------------------------------------------------------------------
  // Handle input change for form fields
  const handleInputChange = (e) => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };

  // Handle form submission
  const submitHandler = async (event) => {
    event.preventDefault();
    // Set loading to true when submission begins
    setLoading(true);

    try {
      // Make API call to login endpoint
      const res = await fetch(`${BASE_URL}/auth/login`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const result = await res.json();

      // Check for unsuccessful response
      if (!res.ok) {
        throw new Error(result.message);
      }

      // Dispatch login success action
      dispatch({
        type: 'LOGIN_SUCCESS',
        payload: {
          user: result.data,
          token: result.token,
          role: result.role
        },
      });

      console.log(result, "login data");

      // Set loading to false and show success message
      setLoading(false);
      toast.success(result.message);
      // Navigate to home page
      navigate('/home');
    } catch (err) {
      // Show error message and set loading to false
      toast.error(err.message);
      setLoading(false);
    }
  };

  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------


  return (
    <section className="px-5 lg:px-0">
      <div className="w-full max-w-[570px] mx-auto rounded-lg shadow-md md:p-10">
        <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
          {/* Welcome screen with party emoji */}
          Hello! <span className="text-primaryColor">Welcome</span> Back 🎉
        </h3>

        <form className="py-4 md:py-0" onSubmit={submitHandler}>
          {/* Email Input Field */}
          <div className="mb-5">
            <input 
              type="email" 
              placeholder="Email" 
              name="email" 
              value={formData.email}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor cursor-pointer"
              required 
            />
          </div>

          {/* Password Input Field */}
          <div className="mb-5">
            <input 
              type="password" 
              placeholder="Password" 
              name="password" 
              value={formData.password}
              onChange={handleInputChange}
              className="w-full py-3 border-b border-solid border-[#0066ff61] focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder:text-textColor rounded-md cursor-pointer"
              required 
            />
          </div>

          {/* Submit Button */}
          <div className="mt-7">
            <button type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px]
            rounded-lg px-4 py-3">
              { loading ? <HashLoader size={25} color="#fff"/> : "Login"}
            </button>
          </div>

          {/* Link to Register Page */}
          <p className="mt-5 text-textColor text-center">
            Don&apos;t have an account? 
            <Link to='/register' className="text-primaryColor font-medium ml-1">
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default Login; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------