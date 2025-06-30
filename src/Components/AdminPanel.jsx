import { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineSupervisorAccount } from "react-icons/md";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

const supervisors = [
  {
    admin: "Emily Johnson",
    supervisor: {
      name: "Jasin saim",
      email: "amina@domain.com",
      image: "https://onco.com/blog/wp-content/uploads/2021/11/Amits-review-e1636962035240.jpg",
      surveyors: [
        {
          id: "S-001",
          name: "Leslie Alexander",
          email: "leslie@domain.com",
          location: "Philadelphia, PA",
          joined: "May 20, 2015",
          image: "https://s3.amazonaws.com/media.mixrank.com/profilepic/edf739cad92db459ca611a373cb0dc5c",
        },
        {
          id: "S-002",
          name: "Theresa Webb",
          email: "theresa@domain.com",
          location: "Charlotte, NC",
          joined: "Feb 9, 2015",
          image: "https://s3.amazonaws.com/media.mixrank.com/profilepic/edf739cad92db459ca611a373cb0dc5c",
        },
      ],
    },
  },
  {
    admin: "Michael Smith",
    supervisor: {
      name: "Zain Raza",
      email: "zain@domain.com",
      image: "https://s3.amazonaws.com/media.mixrank.com/profilepic/edf739cad92db459ca611a373cb0dc5c",
      surveyors: [
        {
          id: "S-003",
          name: "Wade Warren",
          email: "wade@domain.com",
          location: "Spokane, WA",
          joined: "Dec 29, 2012",
          image: "https://th.bing.com/th/id/OIP.9JAG8joDyW5ZJdrap15FggHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
        },
      ],
    },
  },
  {
    admin: "Sarah Williams",
    supervisor: {
      name: "Nadia Khan",
      email: "nadia@domain.com",
      image: "https://th.bing.com/th/id/OIP.Agv2B3mJ0lkZmi9JH10ByQHaHT?r=0&w=1024&h=1011&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
      surveyors: [
        {
          id: "S-004",
          name: "Devon Lane",
          email: "devon@domain.com",
          location: "Portland, ME",
          joined: "Feb 11, 2014",
          image: "https://th.bing.com/th/id/OIP.9JAG8joDyW5ZJdrap15FggHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
        },
      ],
    },
  },
  {
    admin: "James Brown",
    supervisor: {
      name: "Faisal Ahmed",
      email: "faisal@domain.com",
      image: "https://th.bing.com/th/id/OIP.LR12jSsTCHv5wFlZ90VUWwAAAA?r=0&pid=ImgDet&w=199&h=199&c=7&dpr=1.3&cb=idpwebp2&o=7&rm=3",
      surveyors: [
        {
          id: "S-005",
          name: "Katy Fisher",
          email: "katy@domain.com",
          location: "Norman, OK",
          joined: "Oct 30, 2017",
          image: "https://th.bing.com/th/id/OIP.9JAG8joDyW5ZJdrap15FggHaHa?r=0&rs=1&pid=ImgDetMain&cb=idpwebp2&o=7&rm=3",
        },
      ],
    },
  },
];

export default function AdminPanel() {
  const [activeAdmin, setActiveAdmin] = useState(null);
  const [showSurveyors, setShowSurveyors] = useState(false);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">Admin Panel</h1>

      <div className="flex flex-wrap gap-4 mb-8">
        {supervisors.map((adminData, index) => (
          <div
            key={index}
            onClick={() => {
              setActiveAdmin(adminData);
              setShowSurveyors(false);
            }}
            className="bg-white shadow rounded-lg p-4 w-64 cursor-pointer  transition"
          >
            <div className="flex items-center gap-2 mb-4">
              <FaUserCircle className="text-3xl text-gray-400" />
              <span className="font-semibold text-gray-800">
                {adminData.admin}
              </span>
            </div>
            <button className="flex items-center gap-1 text-sm px-3 py-2 border rounded-md hover:bg-gray-100 transition">
              <MdOutlineSupervisorAccount className="text-lg" />
              <span>View Supervisors</span>
            </button>
          </div>
        ))}
      </div>

  
      {activeAdmin && (
        <div className="bg-white rounded-lg shadow p-6 w-full max-w-[1070px]">
         
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">
              Supervisor
            </h2>
            <button
              onClick={() => setShowSurveyors(!showSurveyors)}
              className="flex items-center text-blue-600 font-medium hover:underline text-sm"
            >
              {showSurveyors ? (
                <>
                  <HiOutlineChevronUp className="mr-1" />
                  Hide Surveyors
                </>
              ) : (
                <>
                  <HiOutlineChevronDown className="mr-1" />
                  Show Surveyors
                </>
              )}
            </button>
          </div>

    
          <div className="flex items-center gap-4 mb-6">
            <img
              src={activeAdmin.supervisor.image}
              alt="Supervisor"
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="text-gray-800 font-semibold">
                {activeAdmin.supervisor.name}
              </p>
              <p className="text-gray-500">{activeAdmin.supervisor.email}</p>
            </div>
          </div>

         
          {showSurveyors && (
            <table className="min-w-full mt-4 border rounded-md">
              <thead className="bg-gray-100 text-left">
                <tr className="text-sm">
                  <th className="py-2 px-4">ID</th>
                  <th className="py-2 px-4">Name</th>
                  <th className="py-2 px-4">Email</th>
                  <th className="py-2 px-4">Location</th>
                  <th className="py-2 px-4">Joined</th>
                  <th className="py-2 px-4">Permission</th>
                </tr>
              </thead>
              <tbody>
                {activeAdmin.supervisor.surveyors.map((s, idx) => (
                  <tr key={idx} className="border-t text-sm">
                    <td className="py-2 px-4">{s.id}</td>
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img
                        src={s.image}
                        alt={s.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span>{s.name}</span>
                    </td>
                    <td className="py-2 px-4">{s.email}</td>
                    <td className="py-2 px-4">{s.location}</td>
                    <td className="py-2 px-4">{s.joined}</td>
                    <td className="py-2 px-4">
                      <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                        Surveyor
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      )}
    </div>
  );
}
