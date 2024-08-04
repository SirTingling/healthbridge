import { formatDate } from "../../utils/formatDate"; // Utility for formatting date strings in a consistent manner.

{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* -------------------------- The Appointments Component of the Doctor Account --------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}

/**
 * Represents a table displaying a list of appointments.
 * Each row in the table shows details about an individual appointment.
 * 
 * @param {Array} appointments Array of appointment objects to display.
 */
const Appointments = ({ appointments }) => {
  return (
    // Table layout for displaying appointment details
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">Name</th>
          <th scope="col" className="px-6 py-3">Gender</th>
          <th scope="col" className="px-6 py-3">Payment</th>
          <th scope="col" className="px-6 py-3">Price</th>
          <th scope="col" className="px-6 py-3">Booked on</th>
        </tr>
      </thead>
      <tbody>
        {/* Mapping through each appointment and rendering a table row */}
        {appointments.map(item => (
          <tr key={item._id} className="bg-white border-b hover:bg-gray-50">
            <th
              scope="row"
              className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
            >
              {/* Displaying the user's photo and name with email below it */}
              <img
                className="w-10 h-10 rounded-full"
                src={item.user.photo}
                alt={`${item.user.name}'s profile picture`}
              />
              <div className="pl-3">
                <div className="text-base font-semibold">{item.user.name}</div>
                <div className="font-normal text-gray-500">{item.user.email}</div>
              </div>
            </th>
            <td className="px-6 py-4">{item.user.gender}</td>
            <td className="px-6 py-4">
              {/* Visual indicator for payment status, green for paid and red for unpaid */}
              {item.isPaid ? (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>
                  Paid
                </div>
              ) : (
                <div className="flex items-center">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2"></div>
                  Unpaid
                </div>
              )}
            </td>
            <td className="px-6 py-4">{item.ticketPrice}</td>
            <td className="px-6 py-4">{formatDate(item.createdAt)} {/* Formatting the creation date of the appointment */}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
export default Appointments;
{/* ---------------------------------------------------------------------------------------------------- */}
{/* ---------------------------------------------------------------------------------------------------- */}
