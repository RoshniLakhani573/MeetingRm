// import {
//   FaDoorOpen,
//   FaCalendarCheck,
//   FaCheckCircle,
//   FaClock,
// } from "react-icons/fa";

// const DashboardCard = ({ title, value }) => {
//   const dataCard = {
//     "Total Rooms": {
//       icon: <FaDoorOpen size={44} />,
//       color: "from-blue-500 to-blue-800",
//     },
//     "Today's Bookings": {
//       icon: <FaCalendarCheck size={44} />,
//       color: "from-purple-500 to-purple-800",
//     },
//     "Available Rooms": {
//       icon: <FaCheckCircle size={44} />,
//       color: "from-green-500 to-green-800",
//     },
//     "Upcoming Meetings": {
//       icon: <FaClock size={44} />,
//       color: "from-red-500 to-red-800",
//     },
//   };

//   return (
//     <div className="bg-white border border-gray-100 rounded-2xl shadow-md p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl flex justify-between items-center">
//       <div>
//         <p className="text-gray-500 text-sm font-medium uppercase tracking-wide">
//           {title}
//         </p>

//         <h2 className="text-4xl font-bold text-gray-800 mt-4">
//           {value}
//         </h2>
//       </div>

//       <div
//         className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${dataCard[title].color} flex items-center justify-center text-white shadow-lg`}
//       >
//         {dataCard[title].icon}
//       </div>
//     </div>
//   );
// };

// export default DashboardCard;
import {
  FaDoorOpen,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
} from "react-icons/fa";
const DashboardCard = ({title, value})=>{
  const dataCard = {
    "Total Rooms": {
      icon: < FaDoorOpen size ={44}/>,
      color: "from-blue-500 to-blue-800"
    },
    "Total's Bookings": {
      icon: <FaCalendarCheck size ={44}/>,
      color: "from-purple-500 to-purple-800"
    },
    "Available Rooms": {
      icon: <FaCheckCircle size ={44}/>,
      color: "from-green-500 to-green-800"
    },
    "Upcoming Meetings":{
       icon: <FaClock size ={44}/>,
      color: "from-red-500 to-red-800" 
    }
  }

  return (
    <div className="bg-slate border border-grey-100 rounded-2xl shadow-md p-6 transition-all duration hover:-translate-y-2 hover:shadow-2xl flex justify-between item-center">
      <div>
        <p className="text-blue-300 text-sm font-medium uppercase tracking-wide">{title}</p>
        <h2 className="text-4xl font-bold text-gray-800 mt-4">{value}</h2>
      </div>
      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${dataCard[title].color} flex items-center justify-center text-white shadow-lg`}>
        {dataCard[title].icon}
      </div>
    </div>

  );
};
export default DashboardCard;
