import { useContext, useState } from "react"; // Importing hooks for state management and accessing the context.
import Profile from "./Profile"; // Profile component for displaying and editing user profile settings.
import MyBookings from "./MyBookings"; // MyBookings component to list user's personal bookings.
import { BASE_URL } from "./../../config"; // Configuration import for accessing the API's base URL.
import useGetProfile from "../../hooks/FetchData.js"; // Custom hook to fetch user profile data.
import HashLoader from "react-spinners/HashLoader"; // Component for displaying a loading spinner.
import { useNavigate } from "react-router-dom"; // Hook to programmatically navigate between routes.
import { AuthContext } from "../../context/AuthContext.jsx"; // Context to access and manage authentication state.
import doctorImg02 from "../../assets/images/doctor-img02.png"; // default doctor img
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* -------------------------- My Account Component of the User Account --------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}

// Default photo URL
const defaultPhoto = doctorImg02;

/**
 * Component to manage and display the main user account interface, allowing the user to switch between
 * their bookings and settings, view their profile information, or logout.
 */
const MyAccount = () => {
  // State for controlling which tab (bookings or settings) is currently active.
  const [tab, setTab] = useState("bookings");

  // Fetching user profile data, including handling loading states and errors.
  const {
    data: userData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/users/profile/me`);

  // Accessing the dispatch method from the authContext to handle user actions like logout.
  const { dispatch } = useContext(AuthContext);
  // Navigation hook to redirect the user after actions like logging out.
  const navigate = useNavigate();

  // Function to handle the user logging out, dispatching a logout action and redirecting to the login page.
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
        {/* Display a spinner while the profile data is loading */}
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#31D15E" /> {/* Loader colored to fit the application theme */}
          </div>
        )}
        {/* Show an error message if there's an issue loading the profile data */}
        {error && !loading && (
          <div className="flex items-center justify-center w-full h-full">
            <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
              {error.message || "Failed to load user data"}  {/* More user-friendly error messaging */}
            </h3>
          </div>
        )}

        {/* Render user details and interaction tabs if there's no loading or error */}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-10">
            {/* Section for displaying user profile picture and details */}
            <div className="px-[30px] pb-[50px] rounded-md">
              <div className="flex items-center justify-center">
                <figure className="w-[100px] h-[100px] rounded-full border-2 border-solid border-[#31D15E]">
                  <img
                    src={userData?.photo || defaultPhoto} // Use default photo if user photo is not available
                    alt="User profile picture"
                    className="w-full rounded-full"
                  />
                </figure>
              </div>
              <div className="text-center mt-4">
                <h3 className="text-[18px] leading-[30px] text-headingColor font-bold">
                  {userData?.name}  {/* Displaying the user's name */}
                </h3>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  {userData?.email}  {/* Email for additional contact details */}
                </p>
                <p className="text-textColor text-[15px] leading-6 font-medium">
                  Blood Type:  {/* Additional health-related detail for completeness */}
                  <span className="ml-2 text-headingColor text-[22px] leading-8">
                    {userData?.bloodType || "Not specified"}  {/* Graceful handling when data is missing */}
                  </span>
                </p>
              </div>
              <div className="mt-[50px] md:mt-[100px]">
                <button
                  onClick={handleLogout}
                  className="w-full bg-[#181A1E] p-3 rounded-md text-white text-[16px] leading-7"
                >
                  Logout  {/* Functional button for user logout */}
                </button>
                <button className="w-full bg-red-600 mt-4 p-3 rounded-md text-white text-[16px] leading-7">
                  Delete Account  {/* Additional option for account management */}
                </button>
              </div>
            </div>

            {/* Container for tab navigation and displaying either bookings or settings based on the selected tab */}
            <div className="md:col-span-2 md:px-[30px]">
              <div>
                {/* Navigation buttons to switch between bookings and settings views */}
                <button
                  onClick={() => setTab("bookings")}
                  className={`${
                    tab === "bookings" ? "bg-[#31D15E] text-white font-normal" : "text-headingColor font-semibold"
                  } p-2 mr-5 px-5 rounded-md border border-solid border-[#31D15E]`}
                >
                  My Bookings  {/* Button for switching to the bookings tab */}
                </button>
                <button
                  onClick={() => setTab("settings")}
                  className={`${
                    tab === "settings" ? "bg-[#31D15E] text-white font-normal" : "text-headingColor font-semibold"
                  } py-2 px-5 rounded-md border border-solid border-[#31D15E]`}
                >
                  Settings  {/* Button for switching to the settings tab */}
                </button>
              </div>

              {/* Display area for content related to the selected tab */}
              <div className="mt-[50px]">
                {tab === "bookings" && (
                  <div>
                    <h2 className="heading text-[30px]">My bookings</h2>  {/* Heading for the bookings section */}
                    <MyBookings />  {/* Component that lists all bookings */}
                  </div>
                )}
                {tab === "settings" && (
                  <div>
                    <h2 className="heading text-[30px]">Profile Settings</h2>  {/* Heading for the settings section */}
                    <Profile userData={userData} />  {/* Profile component for managing user settings */}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
export default MyAccount;  
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
