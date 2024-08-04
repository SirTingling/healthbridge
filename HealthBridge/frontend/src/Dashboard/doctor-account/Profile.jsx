// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
import { useEffect, useState } from "react";
import { BASE_URL, token } from "../../config";
import uploadImageToCloudinary from "../../utils/uploadCloudinary";
import { AiOutlineDelete } from "react-icons/ai";
import { toast } from "react-toastify";
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------
// Profile component
const Profile = ({ doctorData }) => {
  // State to handle selected file for upload
  const [selectedFile, setSelectedFile] = useState(null);
  // -----------------------------------------------------------------------------------------------------------------------------------
  // State to handle form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    phone: "",
    photo: null,
    bio: "",
    about: "",
    ticketPrice: 0,
    qualifications: [],
    experiences: [],
    specialization: "",
    timeSlots: [],
  });

  // -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------

  // Effect to set form data from doctorData prop
  useEffect(() => {
    setFormData({
      name: doctorData?.name,
      email: doctorData?.email,
      gender: doctorData?.gender,
      photo: doctorData?.photo,
      phone: doctorData?.phone,
      bio: doctorData?.bio,
      qualifications: doctorData?.qualifications,
      experiences: doctorData?.experiences,
      about: doctorData?.about,
      ticketPrice: doctorData?.ticketPrice,
      specialization: doctorData?.specialization,
      timeSlots: doctorData?.timeSlots,
    });
  }, [doctorData]);

  // -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------

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

  // Handle form submission to update doctor profile
  const updateDoctorHandler = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const res = await fetch(`${BASE_URL}/doctors/${doctorData._id}`, {
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

  // Reusable function for adding items to a list field in the
    // form data
    const addItem = (key, item) => {
      setFormData(prevFormData => ({
        ...prevFormData,
        [key]: [...prevFormData[key], item],
      }));
    };
  
    // Reusable function for handling changes in list fields
    const handleReusableInputChangeFunc = (key, index, event) => {
      const { name, value } = event.target;
      setFormData(prevFormData => {
        const updatedItems = [...prevFormData[key]];
        updatedItems[index][name] = value;
        return {
          ...prevFormData,
          [key]: updatedItems,
        };
      });
    };
    // -----------------------------------------------------------------------------------------------------------------------------------  
    // -----------------------------------------------------------------------------------------------------------------------------------
  
    // Reusable function for deleting items from a list field
    const deleteItem = (key, index) => {
      setFormData(prevFormData => ({
        ...prevFormData,
        [key]: prevFormData[key].filter((_, i) => i !== index),
      }));
    };

    // -----------------------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
  
    // Add a new qualification
    const addQualification = e => {
      e.preventDefault();
      addItem("qualifications", {
        startingDate: null,
        endingDate: null,
        degree: "",
        university: "",
      });
    };

    // -----------------------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
  
    // Handle changes in the qualifications list
    const handleQualificationChange = (event, index) => {
      handleReusableInputChangeFunc("qualifications", index, event);
    };
  
    // Delete a qualification
    const deleteQualification = (e, index) => {
      e.preventDefault();
      deleteItem("qualifications", index);
    };
  
    // Add a new experience
    const addExperience = e => {
      e.preventDefault();
      addItem("experiences", {
        startingDate: null,
        endingDate: null,
        position: "",
        hospital: "",
      });
    };
  
    // Handle changes in the experiences list
    const handleExperienceChange = (event, index) => {
      handleReusableInputChangeFunc("experiences", index, event);
    };
  
    // Delete an experience
    const deleteExperience = (e, index) => {
      e.preventDefault();
      deleteItem("experiences", index);
    };
  
    // Add a new time slot
    const addTimeSlot = e => {
      e.preventDefault();
      addItem("timeSlots", { day: "", startingTime: null, endingTime: null });
    };
  
    // Handle changes in the time slots list
    const handleTimeSlotChange = (event, index) => {
      handleReusableInputChangeFunc("timeSlots", index, event);
    };
  
    // Delete a time slot
    const deleteTimeSlot = (e, index) => {
      e.preventDefault();
      deleteItem("timeSlots", index);
    };

    // -----------------------------------------------------------------------------------------------------------------------------------
    // -----------------------------------------------------------------------------------------------------------------------------------
  
    return (
      <div>
        <h2 className="text-headingColor font-bold text-[24px] leading-9 mb-10">
          Profile Information
        </h2>
        <form>
          {/* Name input field */}
          <div className="mb-5">
            <p className="form__label">Name*</p>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Full Name"
              className="form__input"
            />
          </div>
  
          {/* Email input field */}
          <div className="mb-5">
            <p className="form__label">Email*</p>
            <input
              type="email"
              readOnly
              value={formData.email}
              name="email"
              placeholder="Enter Your Email"
              className="form__input"
              aria-readonly
            />
          </div>
  
          {/* Phone input field */}
          <div className="mb-5">
            <p className="form__label">Phone*</p>
            <input
              type="number"
              value={formData.phone}
              onChange={handleInputChange}
              name="phone"
              placeholder="Phone Number"
              className="form__input"
            />
          </div>
  
          {/* Bio input field */}
          <div className="mb-5">
            <p className="form__label">Bio*</p>
            <input
              type="text"
              value={formData.bio}
              onChange={handleInputChange}
              name="bio"
              maxLength={100}
              placeholder="Bio"
              className="form__input"
            />
          </div>
  
          {/* Gender, Specialization, and Ticket Price input fields */}
          <div className="mb-5">
            <div className="grid grid-cols-3 gap-5 mb-[30px]">
              <div>
                <p className="form__label">Gender</p>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleInputChange}
                  className="form__input py-3.5"
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <p className="form__label">Specialization*</p>
                <select
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleInputChange}
                  className="form__input py-3.5"
                >
                  <option value="">Select</option>
                  <option value="surgeon">Surgeon</option>
                  <option value="neurologist">Neurologist</option>
                  <option value="dermatologist">Dermatologist</option>
                </select>
              </div>
  
              <div>
                <p className="form__label">Ticket Price*</p>
                <input
                  type="number"
                  name="ticketPrice"
                  value={formData.ticketPrice}
                  placeholder="100"
                  className="form__input"
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>
  
          {/* Qualifications section */}
          <div className="mb-5">
            <p className="form__label">Qualifications*</p>
            {formData.qualifications?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="form__label">Starting Date*</p>
                      <input
                        type="date"
                        name="startingDate"
                        value={item.startingDate}
                        className="form__input"
                        onChange={e => handleQualificationChange(e, index)}
                      />
                    </div>
  
                    <div>
                      <p className="form__label">Ending Date*</p>
                      <input
                        type="date"
                        name="endingDate"
                        value={item.endingDate}
                        className="form__input"
                        onChange={e => handleQualificationChange(e, index)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                      <p className="form__label">Degree*</p>
                      <input
                        type="text"
                        name="degree"
                        value={item.degree}
                        className="form__input"
                        placeholder="Degree"
                        onChange={e => handleQualificationChange(e, index)}
                      />
                    </div>
  
                    <div>
                      <p className="form__label">University*</p>
                      <input
                        type="text"
                        name="university"
                        value={item.university}
                        className="form__input"
                        placeholder="University"
                        onChange={e => handleQualificationChange(e, index)}
                      />
                    </div>
                  </div>

  
                  {/* Delete qualification button */}
                  <button
                    className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]"
                    onClick={e => deleteQualification(e, index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}

  
            {/* Add qualification button */}
            <button
              onClick={addQualification}
              className="bg-[#000] py-2 px-5 rounded text-white"
            >
              Add Qualification
            </button>
          </div>
  
          {/* Experiences section */}
          <div className="mb-5">
            <p className="form__label">Experiences*</p>
            {formData.experiences?.map((item, index) => (
              <div key={index}>
                <div>
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <p className="form__label">Starting Date*</p>
                      <input
                        type="date"
                        name="startingDate"
                        value={item.startingDate}
                        className="form__input"
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>
  
                    <div>
                      <p className="form__label">Ending Date*</p>
                      <input
                        type="date"
                        name="endingDate"
                        value={item.endingDate}
                        className="form__input"
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-5 mt-5">
                    <div>
                      <p className="form__label">Position*</p>
                      <input
                        type="text"
                        name="position"
                        value={item.position}
                        className="form__input"
                        placeholder="Position"
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>
  
                    <div>
                      <p className="form__label">Hospital*</p>
                      <input
                        type="text"
                        name="hospital"
                        value={item.hospital}
                        className="form__input"
                        placeholder="Hospital"
                        onChange={e => handleExperienceChange(e, index)}
                      />
                    </div>
                  </div>
  
                  {/* Delete experience button */}
                  <button
                    className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-2 mb-[30px]"
                    onClick={e => deleteExperience(e, index)}
                  >
                    <AiOutlineDelete />
                  </button>
                </div>
              </div>
            ))}
  
            {/* Add experience button */}
            <button
              onClick={addExperience}
              className="bg-[#000] py-2 px-5 rounded text-white"
            >
              Add Experience
            </button>
          </div>

          
  
          {/* Time Slots section */}
          <div className="mb-5">
            <p className="form__label">Time Slots*</p>
            {formData.timeSlots?.map((item, index) => (
              <div key={index}>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-[30px]">
                  <div>
                    <p className="form__label">Day*</p>
                    <select
                      onChange={e => handleTimeSlotChange(e, index)}
                      name="day"
                      value={item.day}
                      className="form__input py-3.5"
                    >
                      <option value="">Select</option>
                      <option value="saturday">Saturday</option>
                      <option value="sunday">Sunday</option>
                      <option value="monday">Monday</option>
                      <option value="tuesday">Tuesday</option>
                      <option value="wednesday">Wednesday</option>
                      <option value="thursday">Thursday</option>
                      <option value="friday">Friday</option>
                    </select>
                  </div>
                  <div>
                    <p className="form__label">Starting Time*</p>
                    <input
                      type="time"
                      name="startingTime"
                      value={item.startingTime}
                      className="form__input"
                      onChange={e => handleTimeSlotChange(e, index)}
                    />
                  </div>
  
                  <div>
                    <p className="form__label">Ending Time*</p>
                    <input
                      type="time"
                      name="endingTime"
                      value={item.endingTime}
                      className="form__input"
                      onChange={e => handleTimeSlotChange(e, index)}
                    />
                  </div>
  
                  <div className="flex items-center">
                    <button
                      className="bg-red-600 p-2 rounded-full text-white text-[18px] mt-6"
                      onClick={e => deleteTimeSlot(e, index)}
                    >
                      <AiOutlineDelete />
                    </button>
                  </div>
                </div>
              </div>
            ))}
  
            {/* Add time slot button */}
            <button
              onClick={addTimeSlot}
              className="bg-[#000] py-2 px-5 rounded text-white "
            >
              Add TimeSlot
            </button>
          </div>
  
          {/* About section */}
          <div className="mb-5">
            <p className="form__label">About*</p>
            <textarea
              type="text"
              rows={5}
              value={formData.about}
              onChange={handleInputChange}
              name="about"
              placeholder="Write about you"
              className="form__input"
            />
          </div>
  
          {/* Photo upload section */}
          <div className="mb-5 flex items-center gap-3">
            {formData.photo && (
              <figure className="w-[60px] h-[60px] rounded-full border-2 border-solid border-[#31D15E] flex items-center justify-center">
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
              onClick={updateDoctorHandler}
              className="w-full bg-[#31D15E] text-white py-3 px-4 rounded-lg text-[18px] leading-[30px]"
            >
              Update Profile
            </button>
          </div>
        </form>
      </div>
    );
  };
  // -----------------------------------------------------------------------------------------------------------------------------------
  export default Profile;// -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------
  // -----------------------------------------------------------------------------------------------------------------------------------
  