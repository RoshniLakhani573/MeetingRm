import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../components/Layout";
import localStorageService from "../services/localStorageService";

const BookingDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [booking, setBooking] = useState(null);

  useEffect(() => {
    const bookings = localStorageService.getBookings();

    const selectedBooking = bookings.find(
      (item) => item.id === Number(id)
    );

    setBooking(selectedBooking);
  }, [id]);

  if (!booking) {
    return (
      <Layout>
        <div className="bg-white rounded-xl shadow-md p-8 text-center">
          <h2 className="text-2xl font-semibold">
            Booking Not Found
          </h2>

          <button
            onClick={() => navigate("/bookings")}
            className="mt-5 bg-blue-600 text-white px-5 py-2 rounded-lg"
          >
            Back to Bookings
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-white rounded-xl shadow-md p-8 max-w-3xl">

        <h1 className="text-3xl font-bold mb-8">
          Booking Details
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-500">Meeting Title</p>
            <h3 className="font-semibold">{booking.title}</h3>
          </div>

          <div>
            <p className="text-gray-500">Organizer</p>
            <h3 className="font-semibold">{booking.organizer}</h3>
          </div>

          <div>
            <p className="text-gray-500">Email</p>
            <h3 className="font-semibold">{booking.email}</h3>
          </div>

          <div>
            <p className="text-gray-500">Room</p>
            <h3 className="font-semibold">{booking.room}</h3>
          </div>

          <div>
            <p className="text-gray-500">Meeting Date</p>
            <h3 className="font-semibold">{booking.date}</h3>
          </div>

          <div>
            <p className="text-gray-500">Time</p>
            <h3 className="font-semibold">
              {booking.startTime} - {booking.endTime}
            </h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500">Purpose</p>
            <h3 className="font-semibold">{booking.purpose}</h3>
          </div>

          <div className="md:col-span-2">
            <p className="text-gray-500">Participants</p>

            <div className="flex flex-wrap gap-2 mt-2">
              {booking.participants.map((person, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full"
                >
                  {person}
                </span>
              ))}
            </div>
          </div>

        </div>

        <button
          onClick={() => navigate("/bookings")}
          className="mt-8 bg-gray-800 text-white px-6 py-3 rounded-lg"
        >
          Back
        </button>

      </div>
    </Layout>
  );
};

export default BookingDetails;