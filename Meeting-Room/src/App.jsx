import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

const Login = lazy(()=>import("./pages/Login"))
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Rooms = lazy(() => import("./pages/Rooms"));
const BookMeeting = lazy(()=> import("./pages/BookMeeting"));
const Bookings = lazy(() => import("./pages/Bookings"));
const BookingDetails = lazy(() => import("./pages/BookingDetails"));
const NotFound = lazy(() => import("./pages/NotFound"));

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (

  <BrowserRouter>
  <Suspense
    fallback={
      <div className="flex justify-center items-center h-screen text-xl font-semibold">
        Loading...
      </div>
    }
  >
    <Routes>
      {/* All your routes */}
      {/* Public Route */}
        <Route path="/" element={<Login />} />

        {/* Protected Routes */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/rooms" element={<ProtectedRoute><Rooms /></ProtectedRoute>}/>

        <Route
          path="/book-meeting"
          element={
            <ProtectedRoute>
              <BookMeeting />
            </ProtectedRoute>
          }
        />

        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
  path="/book-meeting/:id"
  element={
    <ProtectedRoute>
      <BookMeeting />
    </ProtectedRoute>
  }
/>

        <Route
          path="/booking/:id"
          element={
            <ProtectedRoute>
              <BookingDetails />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<NotFound />} />
    </Routes>
  </Suspense>
</BrowserRouter>

  )};



 

export default App;