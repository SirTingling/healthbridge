import { useState } from "react";
import starIcon from "../../assets/images/Star.png"; // Importing star icon for ratings.
import DoctorAbout from "../../pages/Doctors/DoctorAbout.jsx"; // Component showing detailed information about the doctor.
import useGetProfile from "../../hooks/FetchData.js"; // Custom hook to fetch profile data.
import { BASE_URL } from "../../config"; // Base URL for API requests.
import Profile from "./Profile"; // Profile editor component.
import Tabs from "./Tabs"; // Component for navigation tabs.
import HashLoader from "react-spinners/HashLoader"; // Spinner for loading state.
import Appointments from "./Appointments.jsx"; // Component for displaying appointments.
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* -------------------------- The Dashboard Component of the Doctor Account --------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
const Dashboard = () => {
  // State for controlling the active tab in the dashboard.
  const [tab, setTab] = useState("overview");
   // Fetching doctor profile data using a custom hook.
  const {
    data: doctorData,
    loading,
    error,
  } = useGetProfile(`${BASE_URL}/doctors/profile/me`);
  // Render function of the Dashboard component.
  return (
    <section>
      <div className="max-w-[1170px] px-5 mx-auto">
      {/* Render spinner while data is loading */}
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#31D15E" /> 
          </div>
        )}
        {/* Green color spinner indicating loading state above */}

        {/* Display error message if data fetch fails */}
        {error && (
          <div>
            <h3>{error.message}</h3> 
          </div>
        )}
        {/* Error message shown directly from the error state */}

         {/* Main content area rendered only when data is successfully fetched and there is no loading or error */}
        {!loading && !error && (
          <div className="grid lg:grid-cols-3 gap-[30px] lg:gap-[50px] ">
            <Tabs tab={tab} setTab={setTab} /> {/* Tabs component to navigate different sections of the dashboard */}

            {/* Content area that changes based on the selected tab */}
            <div className="lg:col-span-2">
              {/* Alert message if the doctor's profile approval is pending */}
              {doctorData.isApproved === "pending" && (
                <div
                  id="alert-4"
                  className="flex p-4 mb-4 text-yellow-800 rounded-lg bg-yellow-50 "
                  role="alert"
                >
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only">Info</span>
                  <div className="ml-3 text-sm font-medium">
                    To get approval please complete your profile. We&apos;ll
                    review manually and approve within 3days.
                  </div>
                </div>
              )}
              {/* Dynamically rendered content based on the selected tab */}
              <div className="mt-8">
                {tab === "overview" && (
                  <div>
                    {/* Overview section with image, basic details, and about information */}
                    <div className="flex gap-5 items-center mb-10">
                      <figure className="max-w-[200px] max-h-[200px]">
                        <img src={doctorData.photo} alt="Doctor's profile photo" className="w-full" />
                      </figure>
                      <div>
                        <span className="bg-[#CCF0F3] text-purpleColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-[600]">
                          {doctorData.specialization}
                        </span>
                        <h3 className="text-headingColor text-[22px] leading-[36px] mt-3 font-bold">
                          {doctorData.name}
                        </h3>
                        <div className="flex items-center gap-[6px]">
                          <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor">
                            <img src={starIcon} alt="Rating star icon" />{" "} {/* Display star icon next to the rating */}
                            {doctorData.averageRating}
                          </span>
                          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                            ({doctorData.totalRating}) {/* Total number of reviews */}
                          </span>
                        </div>
                        <p className="text__para text-[15px] leading-6 lg:max-w-[390px]">
                          {doctorData.bio} {/* Brief biography of the doctor */}
                        </p>
                      </div>
                    </div>
                    {/* Component to display detailed about information */}
                    <DoctorAbout
                      name={doctorData.name}
                      about={doctorData.about}
                      qualifications={doctorData.qualifications}
                      experiences={doctorData.experiences}
                    />
                  </div>
                )}
                {/* Conditional rendering of Profile and Appointments based on the selected tab */}
                {tab === "settings" && <Profile doctorData={doctorData} />}
                {tab === "appointments" && (
                  <Appointments appointments={doctorData.appointments} />
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
export default Dashboard;
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}