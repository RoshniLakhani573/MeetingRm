import { Link } from "react-router-dom";
import BookMeeting from "../pages/BookMeeting";

const BookingCard = ({ booking, onDelete }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold">
            {booking.title}
          </h2>

          <p className="text-gray-600">
            Room: {booking.room}
          </p>

          <p className="text-gray-600">
            Date: {booking.date}
          </p>

          <p className="text-gray-600">
            Time: {booking.startTime} - {booking.endTime}
          </p>
        </div>

        <p className="text-gray-600 mt-2">
            Organizer: {booking.organizer}
          </p>

        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
          {booking.status}
        </span>
      </div>


      <div className="flex gap-3 mt-5">
        <Link
  to={`/booking/${booking.id}`}
  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
>
  View
</Link>
<Link
  to={`/book-meeting/${booking.id}`}
  className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg"
>
  Edit
</Link>

        <button
          onClick={() => onDelete(booking.id)}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default BookingCard;