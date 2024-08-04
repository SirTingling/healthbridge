import { BASE_URL } from "./../../config";
// -----------------------------------------------------------------------------------------------------------------------------------
import DoctorCard from "./../../components/Doctors/DoctorCard";
import useFetchData from "./../../hooks/FetchData.js"; // Import custom hook for fetching data
import HashLoader from "react-spinners/HashLoader"; // Import HashLoader spinner for loading state
import defaultDoctorImg1 from "../../assets/images/doctor-img01.png";
import defaultDoctorImg2 from "../../assets/images/doctor-img02.png";
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------ Default bookings data -----------------------------------------
const defaultBookings = [
  {
    id: 1,
    doctor: {
      name: "Dr. John Doe",
      specialty: "Cardiologist",
      photo: defaultDoctorImg1,
    },
  },
  {
    id: 2,
    doctor: {
      name: "Dr. Jane Smith",
      specialty: "Neurologist",
      photo: defaultDoctorImg2,
    },
  },
];
// -------------------------------------------------------------------------------------------------------------------------------------------
// ---------------------------------------------- UserBookings components -----------------------------------------------------------------
const MyBookings = () => {
  // Destructure data, loading, and error from the useFetchData hook
  const {
    data: myAppointments,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/users/appointments/my-appointments`);

  console.log(myAppointments); // Log fetched appointments for debugging

  // -----------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      {/* Display loading spinner while data is being fetched */}
      {loading && (
        <div className="flex items-center justify-center w-full h-full">
          <HashLoader color="#0067FF" />
        </div>
      )}

      {/* Display error message if there's an error during data fetching */}
      {error && (
        <div className="flex items-center justify-center w-full h-full">
          <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
            {error.message}
          </h3>
        </div>
      )}

      {/* Display appointments if data is fetched successfully or default bookings if there's an error */}
      {!loading && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {(myAppointments && myAppointments.length > 0 ? myAppointments : defaultBookings).map((appointment) => (
            <DoctorCard doctor={appointment.doctor} key={appointment.id} />
          ))}
        </div>
      )}
    </div>
  );
};
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
export default MyBookings; // -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
