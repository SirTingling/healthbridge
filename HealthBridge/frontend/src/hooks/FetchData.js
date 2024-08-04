// -----------------------------------------------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import { token } from "../config";
// -----------------------------------------------------------------------------------------------------------------------------------

const useFetchData = apiUrl => {
  // State variables for data, loading state, and error handling
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch data from the provided URL when the component mounts or URL changes
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true); // Set loading state to true while fetching data
      try {
        // Fetch data from the provided URL with authorization header
        const response = await fetch(apiUrl, {
          headers: { Authorization: `Bearer ${token}` },
        });

        // Log the full response for debugging
        console.log("Full response:", response);

        // Parse response as JSON
        const result = await response.json();

        // If response is not successful, throw an error
        if (!response.ok) {
          throw new Error(result.message || "Data could not be fetched");
        }

        // Update state with fetched data
        setData(result.data);
        setLoading(false); // Set loading state to false after successful fetch
      } catch (error) {
        console.error("Fetch error:", error); // Log the error for debugging
        setError(error.message); // Set error state if any error occurs
        setLoading(false); // Set loading state to false in case of error
      }
    };

    fetchData();

    // Cleanup function to cancel any ongoing fetch when the component unmounts or URL changes
    return () => {
    };
  }, [apiUrl]); // Re-run effect when the URL changes

  // Return data, loading state, and error state to be used by the component
  return {
    data,
    loading,
    error,
  };
};
// -----------------------------------------------------------------------------------------------------------------------------------
export default useFetchData; // -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
