/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
import DoctorCard from './DoctorCard';
import useFetchData from '../../hooks/FetchData.js';
import Loader from '../../components/Loaders/Loading';
import { BASE_URL } from '../../config';
import Error from '../../components/Error/Error';
/* ------------------------------------------------------------------------------------------------ */
/* ---------------------------------- DoctorList Component ---------------------------------- */
const DoctorList = () => {

  // Fetch data using custom hook
  const { 
    data: doctors, 
    loading, 
    error 
  } = useFetchData(
    `${BASE_URL}/doctors`
  );

  return (
    <>    
      {/* ---------------------------- Loading State ---------------------------- */}
      {loading && <Loader />}
      
      {/* ---------------------------- Error State ---------------------------- */}
      {error && <Error />}

      {/* --------------------------- Doctors List ---------------------------- */}
      {!loading && !error && (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>
          {doctors.map((doctor, index) => (
            <DoctorCard key={doctor.id || index} doctor={doctor} />
          ))}
        </div>
      )}
    </>
  );
};
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
export default DoctorList;
/* ------------------------------------------------------------------------------------------------ */
/* ------------------------------------------------------------------------------------------------ */
