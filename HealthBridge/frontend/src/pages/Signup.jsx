//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// //------------------------------------------------------------------------------------------------------------------------
import { useState } from 'react'; // Importing useState hook from React
import { Link, useNavigate } from 'react-router-dom';
import uploadImageToCloudinary from '../utils/uploadCloudinary'; // Importing utility function for uploading images to Cloudinary
import avatar from '../assets/images/doctor-img01.png';
import signupImg from '../assets/images/signup.svg';
import { BASE_URL } from '../config';
import { toast } from 'react-toastify';
import HashLoader from 'react-spinners/HashLoader';
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
const Signup = () => {
  // State for managing selected file and preview URL
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewURL, setPreviewURL] = useState('');
  //------------------------------------------------------------------------------------------------------------------------
  // State for managing loading state
  const [loading, setLoading] = useState(false);
  //------------------------------------------------------------------------------------------------------------------------
  // State for managing form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    photo: selectedFile,
    gender: '',
    role: 'patient'
  });
  //------------------------------------------------------------------------------------------------------------------------
  // Use navigate hook for navigation
  const navigate = useNavigate();
  //------------------------------------------------------------------------------------------------------------------------
  // Handle input change for form fields
  const handleInputChange = e => {
    setFormData({
      ...formData, [e.target.name]: e.target.value
    });
  };
  //------------------------------------------------------------------------------------------------------------------------
  // Handle file input change for image upload
  const handleFileInputChange = async (event) => {
    const file = event.target.files[0];
    // Uploading the image to Cloudinary for cloud storage
    const data = await uploadImageToCloudinary(file);
    //------------------------------------------------------------------------------------------------------------------------
    // Set preview URL and selected file URL
    setPreviewURL(data.url);
    setSelectedFile(data.url);
    setFormData({
      ...formData,
      photo: data.url
    });
  };

  // Handle form submission
  const submitHandler = async event => {
    event.preventDefault();
    // Set loading to true when submission begins
    setLoading(true);

    try {
      // Make API call to register endpoint
      const res = await fetch(`${BASE_URL}/auth/register`, {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const { message } = await res.json();

      // Check for unsuccessful response
      if (!res.ok) {
        throw new Error(message);
      }

      // Set loading to false and show success message
      setLoading(false);
      toast.success(message);
      // Navigate to login page
      navigate('/login');
    } catch (err) {
      // Show error message and set loading to false
      toast.error(err.message);
      setLoading(false);
    }
  };

  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------

  return (
    <section className='px-5 xl:px-0'>
      <div className='max-w-[1170px] mx-auto'>
        <div className='grid grid-cols-1 lg:grid-cols-2'>
          {/* Image Section */}
          <div className='hidden lg:block bg-primaryColor rounded-l-lg'>
            <figure className='rounded-l-lg'>
              <img src={signupImg} alt="" className='w-full rounded-l-lg' />
            </figure>
          </div>

          {/* Sign Up Form */}
          <div className='rounded-l-lg lg:pl-16 py-10'>
            <h3 className='text-headingColor text-[22px] leading-9 font-bold mb-10'>
                Create an <span className='text-primaryColor'>account</span>
            </h3>

            <form onSubmit={submitHandler}>
              {/* Full Name Input Field */}
              <div className="mb-5">
                <input 
                  type="text" 
                  placeholder="Full Name" 
                  name="name" 
                  value={ formData.name }
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textColor cursor-pointer"
                  required 
                />
              </div>

              {/* Email Input Field */}
              <div className="mb-5">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  name="email" 
                  value={ formData.email }
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textColor cursor-pointer"
                  required 
                />
              </div>

              {/* Password Input Field */}
              <div className="mb-5">
                <input 
                  type="password" 
                  placeholder="Password" 
                  name="password" 
                  value={ formData.password }
                  onChange={handleInputChange}
                  className="w-full pr-4 py-3 border-b border-solid border-[#0066ff61] focus:outline-none
                  focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
                  placeholder:text-textColor cursor-pointer"
                  required 
                />
              </div>

              {/* Role and Gender Selection */}
              <div className='mb-5 flex items-center justify-between'>
                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Are you a:
                  <select
                    name="role"
                    value={ formData.role }
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value="patient">Patient</option>
                    <option value="doctor">Doctor</option>
                  </select>
                </label>

                <label className='text-headingColor font-bold text-[16px] leading-7'>
                  Gender:
                  <select
                    name="gender"
                    value={ formData.gender }
                    onChange={handleInputChange}
                    className="text-textColor font-semibold text-[15px] leading-7 px-4 py-3 focus:outline-none">
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </label>
              </div>

              {/* File Upload and Preview */}
              <div className='mb-5 flex items-center gap-3'>
                { selectedFile && 
                (<figure className='w-[60px] rounded-full border-2 border-solid border-primaryColor flex items-center
                justify-center'>
                  <img src={previewURL} alt='' className='w-full rounded-full' />
                </figure>
                )}

                <div className='relative w-[160px] h-[50px]'>
                  <input 
                    type='file' 
                    name='photo'
                    id='customFile'
                    onChange={handleFileInputChange}
                    accept='.jpg, .png'
                    className='absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer'
                  />
                  <label htmlFor='customFile' className='absolute top-0 left-0 w-full h-full flex items-center
                  px-[0.75rem] py-[0.375rem] text-[15px] leading-6 overflow-hidden bg-[#0066ff46] text-headingColor
                  font-semibold rounded-lg truncate cursor-pointer'>
                    Upload Photo
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-7">
                <button
                  disabled={loading}
                 type="submit" className="w-full bg-primaryColor text-white text-[18px] leading-[30px]
                rounded-lg px-4 py-3">
                  { loading ? <HashLoader size={35} color='#ffffff' /> : 'Sign Up'}
                </button>
              </div>

              {/* Link to Login Page */}
              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to='/login' className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
};

//------------------------------------------------------------------------------------------------------------------------
// Exporting Signup component
export default Signup; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
