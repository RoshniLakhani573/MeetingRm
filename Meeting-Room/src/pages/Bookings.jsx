import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import BookingCard from "../components/BookingCard";
import localStorageService from "../services/localStorageService";

const Bookings = () => {
  const [bookings, setBookings] = useState([]);
  const [rooms, setRooms] = useState([]);

  const [search, setSearch] = useState("");
  const [roomFilter, setRoomFilter] = useState("");
  const [dateFilter, setDateFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [sortBy, setSortBy] = useState("");

  const [currentPage, setCurrentPage] = useState(1);

  const bookingsPerPage = 10;

  useEffect(() => {
    setBookings(localStorageService.getBookings());
    setRooms(localStorageService.getRooms());
  }, []);

  const handleDelete = (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this booking?"
    );

    if (!confirmDelete) return;

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

      const matchesDate =
        dateFilter === "" || booking.date === dateFilter;

      const matchesStatus =
        statusFilter === "" || booking.status === statusFilter;

      return (
        matchesSearch &&
        matchesRoom &&
        matchesDate &&
        matchesStatus
      );
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

  const indexOfLastBooking = currentPage * bookingsPerPage;
  const indexOfFirstBooking =
    indexOfLastBooking - bookingsPerPage;

  const currentBookings = filteredBookings.slice(
    indexOfFirstBooking,
    indexOfLastBooking
  );

  return (
    <Layout>
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Bookings
        </h1>

        <p className="text-gray-500">
          Total: {filteredBookings.length}
        </p>
      </div>

      {/* Search & Filters */}
      <div className="grid md:grid-cols-5 gap-4 mb-8">
        <input
          type="text"
          placeholder="Search..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-3"
        />

        <select
          value={roomFilter}
          onChange={(e) => {
            setRoomFilter(e.target.value);
            setCurrentPage(1);
          }}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">All Rooms</option>

          {rooms.map((room) => (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>

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

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded-lg px-4 py-3"
        >
          <option value="">Sort By</option>
          <option value="date">Date</option>
          <option value="room">Room</option>
        </select>
      </div>

      {/* Booking List */}
      {currentBookings.length === 0 ? (
        <div className="bg-white rounded-xl shadow-md p-10 text-center">
          <h2 className="text-2xl font-semibold">
            No Bookings Found
          </h2>

          <p className="text-gray-500 mt-2">
            Try changing your filters or create a booking.
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

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.max(prev - 1, 1))
            }
            disabled={currentPage === 1}
            className="bg-gray-200 px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((prev) =>
                Math.min(prev + 1, totalPages)
              )
            }
            disabled={currentPage === totalPages}
            className="bg-blue-600 text-white px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </Layout>
  );
};

export default Bookings;