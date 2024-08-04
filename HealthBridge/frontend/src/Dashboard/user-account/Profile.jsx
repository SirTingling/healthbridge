// -----------------------------------------------------------------------------------------------------------------------------------
import { useEffect, useState } from "react"; 
import { BASE_URL, token } from "../../config"; // Import BASE_URL and token from config
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import doctorImg02 from "../../assets/images/doctor-img02.png";
// -----------------------------------------------------------------------------------------------------------------------------------
import { toast } from "react-toastify"; // Import toast for notifications
// -----------------------------------------------------------------------------------------------------------------------------------

// Profile component
const Profile = ({ userData }) => {
  // State to handle selected file for upload
  const [selectedFile, setSelectedFile] = useState(null);

  // Default photo URL
  const defaultPhoto = doctorImg02;

  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    bloodType: "",
    photo: null,
  });

  // -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------

  useEffect(() => {
    setFormData({
      name: userData.name,
      email: userData.email,
      bloodType: userData.bloodType,
      gender: userData.gender,
      photo: userData.photo || defaultPhoto,
    });
  }, [userData]);

  // Handle input changes for form fields
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle file input changes and upload to Cloudinary
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    const data = await uploadImageToCloudinary(file);
    setSelectedFile(data.url);
    setFormData({ ...formData, photo: data.url });
  };
  // -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------
  // Handle form submission to update user profile
  const updateUserHandler = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${BASE_URL}/users/${userData._id}`, {
        method: "put",
        headers: {
          "content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) {
        return toast.error(result.message);
      }

      toast.success("Profile successfully updated");
    } catch (err) {
      console.log(err);
    }
  };
  // -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------
  return (
    <div>
      <form onSubmit={updateUserHandler}>
        {/* Name input field */}
        <div className="mb-5">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Full Name"
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        {/* Email input field */}
        <div className="mb-5">
          <input
            type="email"
            readOnly
            value={formData.email}
            onChange={handleInputChange}
            name="email"
            placeholder="Enter Your Email"
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
            aria-readonly
          />
        </div>

        {/* Password input field */}
        <div className="mb-5">
          <input
            type="password"
            value={formData.password}
            onChange={handleInputChange}
            name="password"
            placeholder="Password"
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        {/* Blood Type input field */}
        <div className="mb-5">
          <input
            type="text"
            value={formData.bloodType}
            onChange={handleInputChange}
            name="bloodType"
            placeholder="Blood Group"
            className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none focus:border-b-[#0067FF] text-[16px] leading-7 text-headingColor placeholder:text-textColor"
          />
        </div>

        {/* Gender input field */}
        <div className="mb-5 flex items-center justify-between">
          <label className="text-headingColor font-bold text-[16px] leading-7">
            Gender:
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none"
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        {/* Photo upload section */}
        <div className="mb-5 flex items-center gap-3">
          {formData.photo && (
            <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-[#0067FF] flex items-center justify-center">
              <img
                src={formData.photo}
                alt="Preview"
                className="w-full rounded-full"
              />
            </figure>
          )}
          <div className="relative inline-block w-[130px] h-[50px]">
            <input
              className="custom-file-input absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              id="customFile"
              name="photo"
              type="file"
              accept=".jpg,.png"
              placeholder="Upload Profile"
              onChange={handleFileInputChange}
            />

            <label
              className="custom-file-label absolute top-0 left-0 w-full h-full flex items-center px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor font-semibold rounded-lg truncate cursor-pointer"
              htmlFor="customFile"
            >
              {selectedFile ? selectedFile.name : "Upload Photo"}
            </label>
          </div>
        </div>

        {/* Update profile button */}
        <div className="mt-7">
          <button
            type="submit"
            className="w-full bg-[#0067FF] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  );
};
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
export default Profile; // -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
