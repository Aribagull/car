import { FaUserCircle } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

export default function AdminCard({ name, onClick, customIcon }) {
  return (
    <div
      onClick={onClick}
      className="bg-white shadow rounded-sm p-4 w-64 cursor-pointer  transition"
    >
      <div className="flex items-center gap-2 mb-4">
        <FaUserCircle className="text-3xl text-gray-400" />
        <span className="font-semibold text-gray-800">{name}</span>
      </div>

      <button className="flex items-center gap-1 text-sm px-3 py-2 border rounded-md hover:bg-gray-100 transition">
        {customIcon && customIcon}
        <span>View Supervisors</span>
        {!customIcon && <HiOutlineArrowRight className="text-sm" />}
      </button>
    </div>
  );
}
