import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    navigate("/");
  };

  return (
    <header className="bg-white shadow px-6 py-4 flex items-center justify-between">
      <h1 className="text-xl font-bold text-blue-600">
        Meeting Room Booking
      </h1>

      <button
        onClick={handleLogout}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
      >
        Logout
      </button>
    </header>
  );
};

export default Navbar;