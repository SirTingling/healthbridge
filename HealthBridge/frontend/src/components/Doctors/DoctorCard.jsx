import starIcon from "../../assets/images/Star.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import placeholderImage1 from "../../assets/images/doctor-img01.png";
import placeholderImage2 from "../../assets/images/doctor-img02.png";
import placeholderImage3 from "../../assets/images/feature-img.png";

/* ---------------------------------------------------- ----------------------------- */
/* ----------------------------- DoctorCard Component ----------------------------- */
const DoctorCard = ({ doctor }) => {

  // Set PlaceHolders (randomized doctor list)
  const placeholderDoctors = [
    {
      name: "Dr. Placeholder One",
      averageRating: 4.5,
      totalRating: 120,
      specialization: "General Practitioner",
      photo: placeholderImage1,
      hospital: "HealthBridge Central Clinic",
    },
    {
      name: "Dr. Placeholder Two",
      averageRating: 4.7,
      totalRating: 150,
      specialization: "Cardiologist",
      photo: placeholderImage2,
      hospital: "HealthBridge Heart Center",
    },
    {
      name: "Dr. Placeholder Three",
      averageRating: 4.6,
      totalRating: 110,
      specialization: "Dermatologist",
      photo: placeholderImage3,
      hospital: "HealthBridge Skin Care",
    },
  ];

  // Select the placeholder if no doctor is provided
  const placeholder = placeholderDoctors[Math.floor(Math.random() * placeholderDoctors.length)];

  // Use provided doctor data or fallback to default
  const {
    name = placeholder.name,
    averageRating = placeholder.averageRating,
    totalRating = placeholder.totalRating,
    specialization = placeholder.specialization,
    photo = placeholder.photo,
    experiences = [],
  } = doctor || {};

  // Format the ratings to one decimal place
  const formattedAverageRating = parseFloat(averageRating).toFixed(1);
  const formattedTotalRating = parseFloat(totalRating).toFixed(1);

  // Use provided hospital info or fallback to default
  const hospitalInfo = experiences.length > 0 ? experiences[0].hospital : placeholder.hospital;

  return (
    <div className="p-3 lg:p-5">
      {/* -------------------------- Doctor Image -------------------------- */}
      <div>
        <img className="w-full" src={photo} alt={`Photo of Dr. ${name}`} onError={(e) => { e.target.src = placeholder.photo; }} />
      </div>
      {/* -------------------------- Doctor Name --------------------------- */}
      <h2 className="text-[18px] leading-[30px] lg:text-[26px] lg:leading-9 font-[700] text-headingColor mt-3 lg:mt-5">
        {name}
      </h2>
      {/* ---------------------- Specialization and Ratings ---------------------- */}
      <div className="mt-2 lg:mt-4 flex items-center justify-between">
        <span className="bg-[#CCF0F3] text-irisBlueColor py-1 px-4 lg:py-2 lg:px-6 rounded text-[12px] leading-4 lg:text-[16px] lg:leading-7 font-[600]">
          {specialization}
        </span>
        <div className="flex items-center gap-[6px]">
          <img src={starIcon} alt="Star icon" className="text-headingColor" />
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[600] text-headingColor">
            {formattedAverageRating}
          </span>
          <span className="text-[14px] leading-6 lg:text-[16px] lg:leading-7 font-[400] text-textColor">
            ({formattedTotalRating})
          </span>
        </div>
      </div>
      {/* ------------------------ Hospital Information ------------------------- */}
      <div className="mt-[18px] lg:mt-5 flex items-center justify-between">
        <p className="text-[14px] leading-[24px] font-[400] text-textColor">
          At {hospitalInfo}
        </p>
        <Link
          to={`/doctors/${doctor?._id || "#"}`}
          className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-[#0067FF] hover:border-none"
        >
          <BsArrowRight className="group-hover:text-white w-6 h-5" />
        </Link>
      </div>
    </div>
  );
};

/* ---------------------------------------------------- ----------------------------- */
/* ---------------------------------------------------- ----------------------------- */
export default DoctorCard;
/* ---------------------------------------------------- ----------------------------- */
/* ---------------------------------------------------- ----------------------------- */