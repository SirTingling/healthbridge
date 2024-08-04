//------------------------------------------------------------------------------------------------------------------------
// Importing necessary dependencies and components
import FeedbackForm from "./FeedbackForm"; 
import { useState } from "react";
import { formatDate } from "../../utils/formatDate";
import { AiFillStar } from "react-icons/ai";
import placeholderImage from "../../assets/images/feature-img.png";
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
const Feedback = ({ reviews, totalRating }) => {
  // State for managing the visibility of the feedback form
  const [showForm, setShowForm] = useState(false);

  return (
    <div>
      {/* Section for displaying all reviews */}
      <div className="mb-[50px]">
        <h4 className="text-[20px] leading-[30px] text-headingColor font-bold mb-[30px]">
          All Reviews ({totalRating})
        </h4>

        {reviews?.map((review, index) => (
          <div key={index} className="flex justify-between gap-10 mb-[30px]">
            <div className="flex gap-3">
              <figure className="w-10 h-10 rounded-full">
                <img
                  src={review.user?.photo || placeholderImage}
                  alt={review.user?.name || "User"}
                  className="w-full"
                />
              </figure>
              <div>
                <h5 className="text-[16px] leading-6 text-[#31D15E] font-bold">
                  {review.user?.name || "Anonymous"}
                </h5>
                <p className="text-[14px] text-textColor leading-[22px]">
                  {formatDate(review.createdAt)}
                </p>
                <h6 className="text__para mt-3 text-[15px] font-medium">
                  {review.reviewText}
                </h6>
              </div>
            </div>

            <div className="flex gap-1">
              {/* Displaying star ratings */}
              {[...Array(review.rating).keys()].map((_, index) => (
                <AiFillStar key={index} color="#31D15E" />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Button to show feedback form */}
      {!showForm && (
        <div className="text-center">
          <button className="btn" onClick={() => setShowForm(true)}>
            Give Feedback
          </button>
        </div>
      )}

      {/* Feedback form component */}
      {showForm && <FeedbackForm />}
    </div>
  );
};
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default Feedback; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------

