//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
import { useState } from 'react';
import { AiFillStar } from 'react-icons/ai'; 
import { useParams } from 'react-router-dom';
import { BASE_URL } from '../../config'; 
import { toast } from 'react-toastify'; 
import HashLoader from 'react-spinners/HashLoader'; 
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
const FeedbackForm = () => {
  // State for managing rating, hover effect, review text, and loading state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [loading, setLoading] = useState(false);

  // Getting the doctor ID from the URL parameters
  const { id } = useParams();

  // Function to handle form submission
  const handleSubmitReview = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Check if rating and review text are provided
      if (!rating || !reviewText) {
        setLoading(false);
        return toast.error('Oops, The Rating and Review fields are required.');
      }

      // Making POST request to submit the review
      const res = await fetch(`${BASE_URL}/doctors/${id}/reviews`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify({
          rating, reviewText
        }),
      });

      // Updating token if a new one is provided
      if (res.headers.get('x-new-token')) {
        localStorage.setItem('token', res.headers.get('x-new-token'));
      }

      const result = await res.json();

      // Check if response is not OK
      if (!res.ok) {
        throw new Error(result.message);
      }

      setLoading(false);
      toast.success(result.message);

    } catch (err) {
      setLoading(false);
      toast.error(err.message);
    }
  }
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------

  return (
    <form action=''>
      {/* Rating section */}
      <div>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          How would you rate the overall experience?
        </h3>

        <div>
          {[...Array(5).keys()].map((_, index) => {
            index += 1;

            return (
              <button
                key={index}
                type='button'
                className={`${
                  index <= (hover || rating)
                    ? "text-yellowColor"
                    : "text-gray-400"
                } bg-transparent border-none outline-none text-[22px] cursor-pointer`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                onDoubleClick={() => {
                  setHover(0);
                  setRating(0);
                }}
              >
                <span>
                  <AiFillStar />
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Feedback section */}
      <div className='mt-[30px]'>
        <h3 className='text-headingColor text-[16px] leading-6 font-semibold mb-4 mt-0'>
          Share your feedback or suggestions
        </h3>

        <textarea
          className='border border-solid border-[#0066ff34] focus:outline outline-primaryColor w-full px-4
          py-3 rounded-md'
          rows="5"
          placeholder='Write your message'
          onChange={(e) => setReviewText(e.target.value)}
        >
        </textarea>
      </div>

      {/* Submit button */}
      <button type='submit' onClick={handleSubmitReview} className='btn'>
        {loading ? <HashLoader size={26} color='#fff' /> : "Submit Feedback"}
      </button>
    </form>
  );
}
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default FeedbackForm; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
