import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import DashboardCard from "../components/DashboardCard";
import defaultRooms from "../data/defaultRooms";
import localStorageService from "../services/localStorageService";

const Dashboard = () => {
  const [rooms, setRooms] = useState([]);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    localStorageService.initializeRooms(defaultRooms);

    setRooms(localStorageService.getRooms());
    setBookings(localStorageService.getBookings());
  }, []);

  const today = new Date().toISOString().split("T")[0];

  const todaysBookings = bookings.filter(
    (booking) => booking.date === today
  );

  const availableRooms = rooms.length - todaysBookings.length;

  const upcomingMeetings = bookings.filter(
    (booking) => booking.date >= today
  );

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-8">
        Dashboard
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <DashboardCard
          title="Total Rooms"
          value={rooms.length}
        />

        <DashboardCard
          title="Today's Bookings"
          value={todaysBookings.length}
        />

        <DashboardCard
          title="Available Rooms"
          value={availableRooms}
        />

        <DashboardCard
          title="Upcoming Meetings"
          value={upcomingMeetings.length}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;