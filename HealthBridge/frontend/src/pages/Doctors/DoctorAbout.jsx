//------------------------------------------------------------------------------------------------------------------------
import { formatDate } from "../../utils/formatDate";
//------------------------------------------------------------------------------------------------------------------------
/* eslint-disable react/prop-types */
const DoctorAbout = ({ about, name, qualifications, experiences }) => {
  // Default text for the "About" section, using the doctor's name if available
  const defaultAbout = `${name || "Dr. Default"} is an experienced professional committed to providing the best healthcare services. With years of expertise and a compassionate approach, ${name || "Dr. Default"} ensures comprehensive care for all patients.`;

  // Default qualifications data
  const defaultQualifications = [
    {
      startingDate: "2010-01-01",
      endingDate: "2014-01-01",
      degree: "MBBS",
      university: "Harvard Medical School",
    },
    {
      startingDate: "2014-01-01",
      endingDate: "2016-01-01",
      degree: "MD",
      university: "Johns Hopkins University",
    },
  ];

  // Default experiences data
  const defaultExperiences = [
    {
      startingDate: "2016-01-01",
      endingDate: "2018-01-01",
      position: "Junior Doctor",
      hospital: "General Hospital",
    },
    {
      startingDate: "2018-01-01",
      endingDate: "2020-01-01",
      position: "Senior Doctor",
      hospital: "City Medical Center",
    },
  ];

  return (
    <div>
      {/* About Section */}
      <div>
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          About
          <span className="text-purpleColor font-bold text-[24px] leading-9">
            {name || "Dr. Default"}
          </span>
        </h3>
        {/* Display the doctor's "about" text or default text if not available */}
        <p className="text__para">{about || defaultAbout}</p>
      </div>

      {/* Education Section */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Education
        </h3>
        <ul className="pt-4 md:p-5">
          {/* Map over qualifications or use default data if not provided */}
          {(qualifications && qualifications.length > 0 ? qualifications : defaultQualifications).map((item, index) => (
            <li
              key={index}
              className="flex sm:justify-between sm:items-end flex-col sm:flex-row md:gap-5 mb-[30px]"
            >
              <div>
                <span className="text-purpleColor text-[15px] leading-6 font-semibold">
                  {formatDate(item.startingDate, { year: "numeric" })}-
                  {formatDate(item.endingDate, { year: "numeric" })}
                </span>
                <p className="text-[16px] leading-6 font-medium text-textColor">
                  {item.degree}
                </p>
              </div>
              <p className="text-[14px] leading-6 font-medium text-textColor">
                {item.university}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Experience Section */}
      <div className="mt-12">
        <h3 className="text-[20px] leading-[30px] text-headingColor font-semibold flex gap-2 items-center">
          Experience
        </h3>
        <ul className="pt-4 md:p-5 grid sm:grid-cols-2 gap-[30px]">
          {/* Map over experiences or use default data if not provided */}
          {(experiences && experiences.length > 0 ? experiences : defaultExperiences).map((item, index) => (
            <li key={index}>
              <div className="p-4 rounded bg-[#fff9ea]">
                <span className="text-yellowColor text-[15px] leading-6 font-semibold ">
                  {formatDate(item.startingDate, { year: "numeric" })}-
                  {formatDate(item.endingDate, { year: "numeric" })}
                </span>
                <p className="text-[16px] leading-6 font-medium text-headingColor mt-3">
                  {item.position}
                </p>
                <p className="text-[14px] leading-6 font-medium text-textColor">
                  {item.hospital}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------------------
export default DoctorAbout; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
