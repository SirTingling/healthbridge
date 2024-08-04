import HashLoader from "react-spinners/HashLoader";

// ---------------------------------------- Loading Component Details ----------------------------------------
const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      {/* HashLoader component from react-spinners for displaying loading animation */}
      <HashLoader color="#9771ff" />
    </div>
  );
};

// ----------------------------------------- Export -----------------------------------------
// --------------------------------------------------------------------------------------------
export default Loading;
// --------------------------------------------------------------------------------------------
