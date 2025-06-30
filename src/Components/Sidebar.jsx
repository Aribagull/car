import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Home, Users, BarChart, ClipboardList, Plus, Shield } from 'lucide-react';

export default function Sidebar() {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const navigate = useNavigate();

  const navItems = [
    { icon: <Home className="w-5 h-5" />, text: 'Dashboard', path: '/' },
    { icon: <Shield className="w-5 h-5" />, text: 'Admin Panel', path: '/admin' },
    { icon: <Users className="w-5 h-5" />, text: 'User Data', path: '/userdata' },
    { icon: <BarChart className="w-5 h-5" />, text: 'Approvals', path: '/approvals' },
  ];

  return (
    <div className="w-56 h-screen bg-[#f5f8fa] flex flex-col border-r border-gray-200">
      <div className="flex-col gap-2 my-10 m-2 ml-5">
        <div className="bg-blue-500 w-10 rounded-md p-2 text-white font-bold text-xl">
          W
        </div>
        <span className="font-semibold text-md">Wasa</span>
      </div>

      <nav className="flex flex-col gap-4 text-gray-400">
        {navItems.map((item) => (
          <SidebarItem
            key={item.text}
            icon={item.icon}
            text={item.text}
            active={activeItem === item.text}
            onClick={() => {
              setActiveItem(item.text);
              navigate(item.path);
            }}
          />
        ))}
      </nav>

      <div className="mt-auto mx-6 mb-5">
        <button className="w-full bg-blue-50 text-sm text-start text-black font-semibold py-3 px-4 rounded-2xl flex items-center justify-between">
          Create New Admin
          <div className="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center">
            <Plus size={16} />
          </div>
        </button>
      </div>
    </div>
  );
}


function SidebarItem({ icon, text, active, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 text-sm py-3 pl-0 pr-4 cursor-pointer
        transition-all duration-200 ease-in-out
        ${active
          ? 'text-blue-600 font-semibold border-l-4 border-blue-600'
          : 'text-gray-400 border-l-4 border-transparent hover:border-blue-300 hover:text-gray-500'
        }
      `}
    >
      <div className="ml-4 flex items-center gap-3">
        {icon}
        <span>{text}</span>
      </div>
    </div>
  );
}

