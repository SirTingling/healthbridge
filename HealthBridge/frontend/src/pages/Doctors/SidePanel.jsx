//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
// Importing necessary dependencies and utilities
import convertTime from "../../utils/convertTime";
import { toast } from "react-toastify"; 
import { BASE_URL, token } from "../../config";
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
const SidePanel = ({ doctorId, ticketPrice, timeSlots }) => {
    //------------------------------------------------------------------------------------------------------------------------
  // Set default values if none are provided from the database
  const defaultTicketPrice = 100;
  const defaultTimeSlots = [
    { day: "Monday", startingTime: "09:00", endingTime: "11:00" },
    { day: "Wednesday", startingTime: "14:00", endingTime: "16:00" },
    { day: "Friday", startingTime: "10:00", endingTime: "12:00" },
  ];
  //------------------------------------------------------------------------------------------------------------------------
  // Use default values if props are undefined or empty
  const finalTicketPrice = ticketPrice || defaultTicketPrice;
  const finalTimeSlots = (timeSlots && timeSlots.length > 0) ? timeSlots : defaultTimeSlots;

  //--------------------------------------------------------------------------------------------------------------------
  // Function to handle booking
  const bookingHandler = async () => {
    try {
      const res = await fetch(`${BASE_URL}/bookings/checkout-session/${doctorId}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}` // Add the token here
        }
      });

      const data = await res.json();

      // If the response from the booking session isn't okay/valid, then throw an error
      if (!res.ok) {
        throw new Error(data.message || 'Internal Server Error');
      }

      // Redirect to the session URL if available
      if (data.session && data.session.url) {
        window.location.href = data.session.url;
      } else {
        throw new Error('Session URL not found');
      }
    } catch (err) {
      console.error("Booking error:", err);
      toast.error(err.message); // Display error notification
    }
  };
  //--------------------------------------------------------------------------------------------------------------------
  //------------------------------------------------------------------------------------------------------------------------
  return (
    <div className='shadow-panelShadow p-3 lg:p-5 rounded-md'>
      {/* Displaying booking price */}
      <div className='flex items-center justify-between'>
        <p className='text_para mt-0 font-semibold'>
          Booking Price
        </p>
        <span className='text-[16px] leading-7 lg:text-[22px] lg:leading-8 text-headingColor font-bold'>
          {finalTicketPrice} USD
        </span>
      </div>

      {/* Displaying available time slots */}
      <div className='mt-[30px]'>
        <p className='text_para mt-0 font-semibold text-headingColor'>
          Available Time Slots:
        </p>

        <ul className='mt-3'>
          {finalTimeSlots.map((item, index) => (
            <li key={index} className='flex items-center justify-between mb-2'>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                {item.day.charAt(0).toUpperCase() + item.day.slice(1)}
              </p>
              <p className='text-[15px] leading-6 text-textColor font-semibold'>
                {convertTime(item.startingTime)} - {convertTime(item.endingTime)}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Button to trigger booking handler */}
      <button onClick={bookingHandler} className='btn px-2 w-full rounded-md'>
        Book Appointment
      </button>
    </div>
  );
};
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
export default SidePanel; //------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------------------
