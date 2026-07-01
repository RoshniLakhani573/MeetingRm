import { useNavigate } from "react-router-dom";

const RoomCard = ({ room }) => {
  const navigate = useNavigate();

  const handleBookNow = () => {
    navigate(`/book-meeting?room=${room.id}`);
  };

  return (
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition">
      <h2 className="text-2xl font-semibold text-gray-800">
        {room.name}
      </h2>

      <div className="mt-4 space-y-2 text-gray-600">
        <p>
          <span className="font-medium">Capacity:</span> {room.capacity}
        </p>

        <p>
          <span className="font-medium">Floor:</span> {room.floor}
        </p>
      </div>

      <button
        onClick={handleBookNow}
        className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Book Now
      </button>
    </div>
  );
};

export default RoomCard;