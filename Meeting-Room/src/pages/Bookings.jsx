import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BookingCard from "../components/BookingCard";
import localStorageService from "../services/localStorageService";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [search, setSearch] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [sortBy, setSortBy] = useState("");
  const [bookings, setBookings] = useState([]);
const [rooms, setRooms] = useState([]);

const [search, setSearch] = useState("");
const [roomFilter, setRoomFilter] = useState("");
const [sortBy, setSortBy] = useState("");

// ADD HERE
const [dateFilter, setDateFilter] = useState("");
const [statusFilter, setStatusFilter] = useState("");
const [currentPage, setCurrentPage] = useState(1);

const bookingsPerPage = 10;

  useEffect(() => {
    setBookings(localStorageService.getBookings());
    setRooms(localStorageService.getRooms());
  }, []);

  const handleDelete = (id) => {
    const updatedBookings = bookings.filter(
      (booking) => booking.id !== id
    );

    localStorageService.saveBookings(updatedBookings);
    setBookings(updatedBookings);
  };

  const filteredBookings = [...bookings]
    .filter((booking) => {
      const searchValue = search.toLowerCase();

      const matchesSearch =
        booking.title.toLowerCase().includes(searchValue) ||
        booking.organizer.toLowerCase().includes(searchValue) ||
        booking.room.toLowerCase().includes(searchValue);

      const matchesRoom =
        roomFilter === "" || booking.room === roomFilter;

      return matchesSearch && matchesRoom;
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(a.date) - new Date(b.date);
      }

      if (sortBy === "room") {
        return a.room.localeCompare(b.room);
      }

      return 0;
    });
    const totalPages = Math.ceil(
  filteredBookings.length / bookingsPerPage
);

const indexOfLastBooking =
  currentPage * bookingsPerPage;

const indexOfFirstBooking =
  indexOfLastBooking - bookingsPerPage;

const currentBookings =
  filteredBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Bookings</h1>

        <p className="text-gray-500">
          Total Bookings: {filteredBookings.length}
        </p>
      </div>

      {/* Search, Filter & Sort */}
      <div className="grid md:grid-cols-3 gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by title, organizer or room..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <select
          value={roomFilter}
          onChange={(e) => setRoomFilter(e.target.value)}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">All Rooms</option>

          {rooms.map((room) => (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="room">Room</option>
        </select>
      </div>
      <input
  type="date"
  value={dateFilter}
  onChange={(e) => {
    setDateFilter(e.target.value);
    setCurrentPage(1);
  }}
  className="border rounded-lg px-4 py-3"
/>

<select
  value={statusFilter}
  onChange={(e) => {
    setStatusFilter(e.target.value);
    setCurrentPage(1);
  }}
  className="border rounded-lg px-4 py-3"
>
  <option value="">All Status</option>
  <option value="Upcoming">Upcoming</option>
  <option value="Completed">Completed</option>
</select>

      {/* Booking List */}
      {filteredBookings.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-semibold">No Bookings Found</h2>

          <p className="text-gray-500 mt-2">
            Try changing your search/filter or create a new booking.
          </p>
        </div>
      ) : (
        <div className="grid gap-5">
          {currentBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              booking={booking}
              onDelete={handleDelete}
            />
          ))}

          
          
        </div>
      )}
      
    </Layout>
  );
};

export default Bookings;