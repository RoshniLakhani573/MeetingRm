import { useEffect, useState } from "react";
import { useSearchParams, useParams } from "react-router-dom";

import Layout from "../components/Layout";
import BookingForm from "../components/BookingForm";
import localStorageService from "../services/localStorageService";
import { useNavigate} from "react-router-dom";
import {validateEmail,isPastDate,isTimeValid,} from "../utils/validation";

const BookMeeting = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { id } = useParams();

  const [error, setError] = useState("");

  const [rooms, setRooms] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    organizer: "",
    email: "",
    room: "",
    date: "",
    startTime: "",
    endTime: "",
    purpose: "",
    participants: [],
  });

  useEffect(() => {
    const roomList = localStorageService.getRooms();

    setRooms(roomList);

    const roomId = searchParams.get("room");

    if (roomId) {
      const selectedRoom = roomList.find(
        (room) => room.id === Number(roomId)
      );

      if (selectedRoom) {
        setFormData((prev) => ({
          ...prev,
          room: selectedRoom.name,
        }));
      }
    }
    if (id) {
  const bookings = localStorageService.getBookings();

  const selectedBooking = bookings.find(
    (booking) => booking.id === Number(id)
  );

  if (selectedBooking) {
    setFormData(selectedBooking);
  }
}
  }, [id,searchParams]);

  const handleSubmit = (e) => {
  e.preventDefault();

  setError("");

  const {
    title,
    organizer,
    email,
    room,
    date,
    startTime,
    endTime,
    purpose,
  } = formData;

  if (
    !title ||
    !organizer ||
    !email ||
    !room ||
    !date ||
    !startTime ||
    !endTime ||
    !purpose
  ) {
    setError("Please fill all required fields.");
    return;
  }

  if (!validateEmail(email)) {
    setError("Please enter a valid email.");
    return;
  }

  if (isPastDate(date)) {
    setError("Past dates are not allowed.");
    return;
  }

  if (!isTimeValid(startTime, endTime)) {
    setError("End time must be greater than start time.");
    return;
  }

  const bookings = localStorageService.getBookings();
  const overlap = bookings.some((booking) => {
  // Ignore the current booking while editing
  if (id && booking.id === Number(id)) {
    return false;
  }

  return (
    booking.room === room &&
    booking.date === date &&
    startTime < booking.endTime &&
    endTime > booking.startTime
  );
});

if (overlap) {
  setError("This room is already booked for the selected time.");
  return;
}

if (id) {
  const updatedBookings = bookings.map((booking) =>
    booking.id === Number(id)
      ? {
          ...booking,
          ...formData,
        }
      : booking
  );

  localStorageService.saveBookings(updatedBookings);
} else {
  const newBooking = {
    id: Date.now(),
    ...formData,
    status: "Upcoming",
    createdAt: new Date().toISOString(),
  };

  bookings.push(newBooking);
  localStorageService.saveBookings(bookings);
}

navigate("/bookings");

};
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-6">
  {id ? "Edit Booking" : "Book Meeting"}
</h1>
        {error && (
  <div className="mb-4 rounded-lg bg-red-100 border border-red-300 p-3 text-red-700">
    {error}
  </div>
)}
      <BookingForm
        rooms={rooms}
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
      />
    </Layout>
  );
};

export default BookMeeting;