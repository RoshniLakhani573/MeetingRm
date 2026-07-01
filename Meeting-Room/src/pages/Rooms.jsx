import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import RoomCard from "../components/RoomCard";
import localStorageService from "../services/localStorageService";

const Rooms = () => {
      const [rooms, setRooms] = useState([]);

  useEffect(() => {
    setRooms(localStorageService.getRooms());
  }, []);

  return (
    <Layout>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">
          Meeting Rooms
        </h1>

        <p className="text-gray-500">
          Total Rooms: {rooms.length}
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </Layout>
  );
};

export default Rooms;