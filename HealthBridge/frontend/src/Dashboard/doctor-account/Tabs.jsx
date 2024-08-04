import { useContext, useRef } from "react"; // Importing React hooks for context and DOM references.
import { AuthContext } from '../../context/AuthContext'; // Importing authentication context for accessing user auth state.
import { useNavigate } from "react-router-dom"; // Hook from React Router for programmatically navigating between routes.
import { BiMenu } from "react-icons/bi"; // Import icon for mobile menu toggle.

{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* -------------------------- The Tabs Component of the Doctor Account --------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}

// eslint-disable-next-line react/prop-types
const Tabs = ({ tab, setTab }) => {
  // Utilizing the dispatch function from the authentication context to manage login states.
  const { dispatch } = useContext(AuthContext);
  // Using useRef to create a mutable ref object where we can store the tabs container reference.
  const tabsRef = useRef(null);
  // useNavigate hook to handle redirections, particularly for logging out and redirecting to the login page.
  const navigate = useNavigate();

  // Function to handle user logout, triggering a logout action and redirecting to the login page.
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" }); // Dispatch the logout action to update the global auth state.
    navigate("/login"); // Navigate to login page post-logout.
  };

  // Toggle function for showing or hiding the tabs on mobile devices using a ref to the DOM element.
  const toggleTabs = () => tabsRef.current.classList.toggle("hidden");

  return (
    <div>
      {/* Mobile menu button visible on small screens, toggles the display of navigation tabs. */}
      <span className="lg:hidden" onClick={toggleTabs}>
        <BiMenu className="w-6 h-6 cursor-pointer" /> {/* Icon acts as a clickable menu toggler. */}
      </span>
      {/* Container for tabs, hidden on mobile by default and shown in a column on larger screens. */}
      <div
        ref={tabsRef}
        className="hidden lg:flex items-center shadow-panelShadow h-max p-[30px] bg-white flex-col rounded-md"
      >
        {/* Navigation buttons for switching between different dashboard views. */}
        <button
          onClick={() => setTab("overview")}
          className={`${
            tab === "overview"
              ? "bg-indigo-100 text-[#31D15E]"
              : "bg-transparent text-headingColor"
          } w-full btn rounded-md mt-0`}
        >
          Overview  {/* Button to select the Overview tab. */}
        </button>
        <button
          onClick={() => setTab("appointments")}
          className={`${
            tab === "appointments"
              ? "bg-indigo-100 text-[#31D15E]"
              : "bg-transparent text-headingColor"
          } w-full btn rounded-md mt-0`}
        >
          Appointments  {/* Button to select the Appointments tab. */}
        </button>
        <button
          onClick={() => setTab("settings")}
          className={`${
            tab === "settings"
              ? "bg-indigo-100 text-[#31D15E]"
              : "bg-transparent text-headingColor"
          } w-full btn rounded-md mt-0`}
        >
          Profile  {/* Button to select the Profile settings tab. */}
        </button>

        {/* Lower section for account management options. */}
        <div className="mt-[100px] w-full">
          <button
            onClick={handleLogout}
            className="w-full bg-[#181A1E] p-3 rounded-md text-white text-[16px] leading-7"
          >
            Logout  {/* Logout button to terminate the session. */}
          </button>
          <button className="w-full bg-red-600 mt-4 p-3 rounded-md text-white text-[16px] leading-7">
            Delete Account  {/* Button to initiate account deletion process. */}
          </button>
        </div>
      </div>
    </div>
  );
};

{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}

export default Tabs;

{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}