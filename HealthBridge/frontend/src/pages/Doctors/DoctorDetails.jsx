//------------------------------------------------------------------------------------------------------------------------
import { useState } from "react"; // Importing useState hook from React
import starIcon from "../../assets/images/Star.png";
import DoctorAbout from "./DoctorAbout";
import Feedback from "./Feedback"; 
import SidePanel from "./SidePanel";
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/FetchData";
import { useParams } from "react-router-dom"; // Importing useParams hook from react-router-dom
import HashLoader from "react-spinners/HashLoader"; // Importing HashLoader spinner for loading state
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// DoctorDetails component
const DoctorDetails = () => {
  // State for managing the selected tab (about or feedback)
  const [tab, setTab] = useState("about");
  
  // Getting the doctor ID from the URL parameters
  const { id } = useParams();

  // Fetching doctor details using custom hook
  const {
    data: doctor,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors/${id}`);

  // Destructuring the doctor object to extract required properties
  const {
    name,
    qualifications,
    experiences,
    timeSlots,
    reviews,
    bio,
    about,
    averageRating,
    totalRating,
    specialization,
    ticketPrice,
    photo,
  } = doctor;

  // Format the ratings to one decimal place
  const formattedAverageRating = parseFloat(averageRating).toFixed(1);
  const formattedTotalRating = parseFloat(totalRating).toFixed(1);

  return (
    <section>
      <div className="max-w-[1170px] px-[20px] mx-auto">
        {/* Display loading spinner while data is being fetched */}
        {loading && (
          <div className="flex items-center justify-center w-full h-full">
            <HashLoader color="#31D15E" />
          </div>
        )}

        {/* Display error message if there's an error during data fetching */}
        {error && (
          <div className="flex items-center justify-center w-full h-full">
            <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
              {error}
            </h3>
          </div>
        )}

        {/* Display doctor details if data is fetched successfully */}
        {!loading && !error && (
          <div className="grid md:grid-cols-3 gap-[50px]">
            <div className="md:col-span-2">
              <div className="flex gap-5 items-center">
                <div>
                  <span className="bg-[#CCF0F3] text-purpleColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-[600]">
                    {specialization}
                  </span>
                  <h3 className="text-headingColor text-[22px] leading-[36px] mt-3 font-bold">
                    {name}
                  </h3>
                  <div className="flex items-center gap-[6px]">
                    <span className="flex items-center gap-[6px] text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor">
                      <img src={starIcon} alt="Star Icon" /> {formattedAverageRating}
                    </span>
                    <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
                      ({formattedTotalRating})
                    </span>
                  </div>
                  <p className="text__para text-[14px] md:text-[15px] leading-6 lg:max-w-[390px]">
                    {bio}
                  </p>
                </div>
              </div>

              {/* Tab navigation for switching between about and feedback sections */}
              <div className="mt-[50px] border-b border-solid border-[#0066ff34]">
                <div>
                  <button
                    onClick={() => setTab("about")}
                    className={`${
                      tab === "about" && "border-b border-solid border-[#31D15E]"
                    }  p-2 mr-5 px-5  text-headingColor font-semibold text-[16px] leading-7`}
                  >
                    About
                  </button>
                  <button
                    onClick={() => setTab("feedback")}
                    className={`${
                      tab === "feedback" && "border-b border-solid border-[#31D15E]"
                    } py-2 px-5  font-semibold text-headingColor text-[16px] leading-7`}
                  >
                    Feedback
                  </button>
                </div>
              </div>

              {/* Content section for displaying selected tab content */}
              <div className="mt-[50px]">
                {tab === "about" && (
                  <div>
                    <DoctorAbout
                      name={name}
                      about={about}
                      qualifications={qualifications}
                      experiences={experiences}
                    />
                  </div>
                )}
                {tab === "feedback" && (
                  <div>
                    <Feedback reviews={reviews} totalRating={formattedTotalRating} />
                  </div>
                )}
              </div>
            </div>

            {/* Side panel section for displaying additional doctor details */}
            <div>
              <SidePanel
                doctorId={doctor._id}
                ticketPrice={ticketPrice}
                timeSlots={timeSlots}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default DoctorDetails; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
