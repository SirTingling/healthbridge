//------------------------------------------------------------------------------------------------------------------------
// Importing necessary dependencies and components
import { useEffect, useState } from "react"; // Importing useEffect and useState hooks from React
import DoctorCard from "../../components/Doctors/DoctorCard"; // Importing DoctorCard component
import Testimonial from "../../components/Testimonial/Testimonial"; // Importing Testimonial component
import { BASE_URL } from "../../config";
import useFetchData from "../../hooks/FetchData";
import HashLoader from "react-spinners/HashLoader";
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
const Doctors = () => {
  // State for managing search query and debounced query
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");

  // Fetching doctor data using custom hook
  const {
    data: doctors,
    loading,
    error,
  } = useFetchData(`${BASE_URL}/doctors?query=${debouncedQuery}`);

  // Function to handle search button click
  const handleSearch = () => {
    setQuery(query.trim());
  };

  // useEffect for debouncing the search query
  useEffect(() => {
    // Debounce the query value after 700ms of inactivity
    const timeoutId = setTimeout(() => {
      setDebouncedQuery(query);
    }, 700);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <>
      {/* Section for search input */}
      <section className="bg-[#fff9ea]">
        <div className="container text-center">
          <h2 className="heading">Find a Doctor</h2>
          <div className="max-w-[570px] mx-auto mt-[30px] bg-[#0066ff2c] rounded-md flex items-center justify-between ">
            <input
              className="py-4 pl-4 pr-2 focus:outline-none cursor-pointer w-full bg-transparent placeholder:text-textColor"
              type="search"
              placeholder="Search by doctor name"
              value={query}
              onChange={e => setQuery(e.target.value)}
            />
            <button
              className="btn mt-0 rounded-[0px] rounded-r-md"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
      </section>

      {/* Section for displaying doctor cards */}
      <section>
        <div className="container">
          {loading && (
            <div className="flex items-center justify-center w-full h-full">
              <HashLoader color="#31D15E" />
            </div>
          )}

          {error && (
            <div className="flex items-center justify-center w-full h-full">
              <h3 className="text-headingColor text-[20px] font-semibold leading-[30px]">
                {error}
              </h3>
            </div>
          )}

          {!loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
              {doctors?.map((doctor, index) => (
                <DoctorCard
                  doctor={doctor}
                  key={doctor.id || index} // Fallback to index if id is undefined
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Section for displaying testimonials */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
    </>
  );
};
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default Doctors; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
