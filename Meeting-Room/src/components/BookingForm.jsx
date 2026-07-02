import { useEffect, useState } from "react";

const BookingForm = ({ rooms, formData, setFormData, handleSubmit }) => {
  const [participants, setParticipants] = useState("");

  useEffect(() => {
    setParticipants(formData.participants.join(", "));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleParticipants = (e) => {
    const value = e.target.value;

    setParticipants(value);

    setFormData((prev) => ({
      ...prev,
      participants: value
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean),
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-xl shadow-md p-6 space-y-5"
    >
      {/* Meeting Title */}
      <div>
        <label className="block mb-2 font-medium">Meeting Title</label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
          placeholder="Sprint Planning"
        />
      </div>

      {/* Organizer */}
      <div>
        <label className="block mb-2 font-medium">Organizer</label>

        <input
          type="text"
          name="organizer"
          value={formData.organizer}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Organizer Email */}
      <div>
        <label className="block mb-2 font-medium">Organizer Email</label>

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Room */}
      <div>
        <label className="block mb-2 font-medium">Meeting Room</label>

        <select
          name="room"
          value={formData.room}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        >
          <option value="">Select Room</option>

          {rooms.map((room) => (
            <option key={room.id} value={room.name}>
              {room.name}
            </option>
          ))}
        </select>
      </div>

      {/* Date */}
      <div>
        <label className="block mb-2 font-medium">Meeting Date</label>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Time */}
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block mb-2 font-medium">Start Time</label>

          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium">End Time</label>

          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full border rounded-lg p-3"
          />
        </div>
      </div>

      {/* Purpose */}
      <div>
        <label className="block mb-2 font-medium">Purpose</label>

        <textarea
          rows="4"
          name="purpose"
          value={formData.purpose}
          onChange={handleChange}
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Participants */}
      <div>
        <label className="block mb-2 font-medium">
          Participants
        </label>

        <input
          type="text"
          value={participants}
          onChange={handleParticipants}
          className="w-full border rounded-lg p-3"
          placeholder="John, Alex, Sara"
        />
      </div>

        <button
        type="submit"
        className="bg-blue-600 text-white px-6 py-3 rounded-lg">
        {formData.id ? "Update Booking" : "Book Meeting"}
        </button>
    </form>
  );
};

export default BookingForm;