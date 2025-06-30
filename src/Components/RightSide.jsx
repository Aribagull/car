import { Bell } from "lucide-react";
import { LuUserRound } from "react-icons/lu";

function WeekSummaryCard({ color, icon, label, count }) {
  return (
    <div className="bg-white rounded-md p-4 flex items-center shadow-custom-deep mb-4">
      <div
        className={`w-10 h-10 flex items-center justify-center rounded-full border-4 ${color.border}`}
      >
        <span className={`${color.text} text-xl`}>{icon}</span>
      </div>
      <div className="ml-4">
        <p className="text-gray-500 text-sm">{label}</p>
        <p className="font-semibold text-gray-800">{count} Projects</p>
      </div>
    </div>
  );
}

export default function RightSide() {
  return (
    <div className="w-[350px] bg-[#f5f8fa] p-4 h-screen flex flex-col">
     
      <div className="flex justify-end items-center gap-8 mb-6 mt-5">
        <Bell className="w-6 h-6 cursor-pointer" />
        <LuUserRound className="w-6 h-6 pb-[2px] cursor-pointer" />
      </div>

    
      <div className="flex items-center space-x-4 mt-8 mb-6">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="User"
          className="w-14 h-14 rounded-full object-cover"
        />
        <div>
          <p className="text-gray-800 font-semibold">John D.</p>
          <p className="text-sm text-gray-500">Joined 2 months ago</p>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-md font-semibold text-gray-800 mb-4">Week Summary</h2>

        <WeekSummaryCard
          color={{ border: "border-blue-500", text: "text-blue-500" }}
          icon="↙"
          label="Completed"
          count={23}
        />
        <WeekSummaryCard
          color={{ border: "border-yellow-400", text: "text-yellow-500" }}
          icon="↗"
          label="In Progress"
          count={15}
        />
        <WeekSummaryCard
          color={{ border: "border-red-500", text: "text-red-500" }}
          icon="↙"
          label="Pending"
          count={23}
        />
      </div>
    </div>
  );
}