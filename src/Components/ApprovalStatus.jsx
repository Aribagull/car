import React from "react";

const applications = [
  {
    name: "Ahmed Ali Khan",
    id: "WSA-2024-001",
    type: "New Connection",
    date: "2024-01-15",
    status: "Pending",
  },
  {
    name: "Fatima Sheikh",
    id: "WSA-2024-002",
    type: "Reconnection",
    date: "2024-01-10",
    status: "Approved",
  },
  {
    name: "Mohammad Hassan",
    id: "WSA-2024-003",
    type: "New Connection",
    date: "2024-01-12",
    status: "Rejected",
  },
];

export default function ApprovalStatus() {
  return (
    <div className="min-h-screen px-4 py-6 bg-gray-100">
      <div>
        <h1 className="text-3xl font-bold text-gray-800 mb-12">Approval Status</h1>

        <div className="">
          {applications.map((app, index) => (
            <div key={index} className="bg-white p-4 rounded shadow mb-5">
              <div className="flex justify-between items-center mb-1">
                <h2 className="font-semibold text-lg">{app.name}</h2>
              </div>
              <p className="text-sm text-gray-600 border-b pb-2 border-b-gray-100">{app.id}</p>
              {app.type && (
                <>
                  <p className="text-sm mt-1 text-gray-700">{app.type}</p>
                  <p className="text-xs text-gray-500">Submitted: {app.date}</p>
                </>
              )}

            
              <div className="mt-4 flex justify-between gap-2">
                <button  className="px-3 py-2 border rounded-lg text-xs bg-gray-50 hover:bg-gray-100 text-gray-700">
                  Details
                </button>
                <button className="px-3 py-2 bg-black text-white text-xs rounded hover:bg-gray-800">
                  Approve
                </button>
                
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
