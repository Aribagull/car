import RightSide from "./RightSide"; 
import {
    CheckCircle,
    ClipboardList,
    Search,
    UserCheck,
    X,
    UserX,
} from "lucide-react";
import React, { useState, useEffect, useRef } from "react";

export default function DashboardPage() {
    const [showSearch, setShowSearch] = useState(false);
    const [searchVisible, setSearchVisible] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (showSearch && inputRef.current) {
            inputRef.current.focus();
            setTimeout(() => {
                setSearchVisible(true);
            }, 500);
        } else {
            setSearchVisible(false);
        }
    }, [showSearch]);

    const stats = [
        {
            title: "Monthly Survey",
            count: 24,
            change: "-9%",
            icon: <CheckCircle className="w-5 h-5" />,
            color: "bg-purple-100 text-purple-600",
            changeColor: "text-red-500",
        },
        {
            title: "Total Users",
            count: 40,
            change: "+17%",
            icon: <ClipboardList className="w-5 h-5" />,
            color: "bg-green-100 text-green-600",
            changeColor: "text-green-500",
        },
        {
            title: "Legal Users",
            count: 28,
            change: "+23%",
            icon: <UserCheck className="w-5 h-5" />,
            color: "bg-yellow-100 text-yellow-600",
            changeColor: "text-green-500",
        },
        {
            title: "Illegal Users",
            count: 28,
            change: "-12%",
            icon: <UserX className="w-5 h-5" />,
            color: "bg-blue-100 text-blue-600",
            changeColor: "text-red-500",
        },
    ];

    return (
        <div className="flex bg-[#fefefe]  w-full min-h-screen">
         
            <div className="flex-1 p-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-gray-800">Admin Dashboard</h1>

                    <div className="relative flex items-center">
                        <div
                            className={`transition-all duration-500 ease-in-out flex items-center rounded-full border
              ${showSearch ? "w-72 border-gray-300" : "w-10 border-transparent"}`}
                            style={{ backgroundColor: "white" }}
                        >
                            <input
                                ref={inputRef}
                                type="text"
                                placeholder="Search..."
                                className={`transition-opacity duration-300 ease-in-out pl-4 pr-10 py-2 rounded-full focus:outline-none focus:ring focus:ring-gray-100 focus:border-gray-100 shadow-custom-deep w-full
                            ${showSearch ? "opacity-100" : "opacity-0"}`}
                                style={{ backgroundColor: "white" }}
                            />
                            <div
                                className="absolute right-0 flex items-center justify-center rounded-full p-2 cursor-pointer hover:bg-white hover:shadow transition"
                                onClick={() => {
                                    setShowSearch(!showSearch);
                                }}
                            >
                                {searchVisible && showSearch ? (
                                    <X className="w-6 h-6 text-gray-500 transition" />
                                ) : (
                                    <Search className="w-6 h-6 text-gray-500 transition" />
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-base text-gray-500 font-semibold mt-2 ml-[2px]">MONTHLY UPDATES</p>

                <div className="flex gap-6 mt-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="shadow-custom-deep rounded p-6 w-52 bg-white hover:shadow-2xl transition-shadow duration-300"
                        >
                            <div
                                className={`w-12 h-12 flex items-center justify-center rounded-full ${stat.color}`}
                            >
                                {stat.icon}
                            </div>
                            <p className="text-gray-400 mt-4 ml-2">{stat.title}</p>
                            <p className="text-3xl font-bold text-gray-800 ml-2 mt-2">{stat.count}</p>
                            <p className={`mt-1 ml-2 ${stat.changeColor}`}>{stat.change}</p>
                        </div>
                    ))}
                </div>
            </div>

           
            <RightSide />
        </div>
    );
}
