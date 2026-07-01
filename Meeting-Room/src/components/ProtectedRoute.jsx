import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const authUser = JSON.parse(localStorage.getItem("authUser"));

  return authUser ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;