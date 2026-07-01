import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white shadow min-h-screen p-5">
      <h2 className="text-2xl font-bold text-blue-600 mb-8">
        Dashboard
      </h2>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/dashboard"
          className="p-3 rounded hover:bg-blue-100"
        >
          Dashboard
        </NavLink>

        <NavLink
          to="/rooms"
          className="p-3 rounded hover:bg-blue-100"
        >
          Rooms
        </NavLink>

        <NavLink
          to="/book-meeting"
          className="p-3 rounded hover:bg-blue-100"
        >
          Book Meeting
        </NavLink>

        <NavLink
          to="/bookings"
          className="p-3 rounded hover:bg-blue-100"
        >
          Bookings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;