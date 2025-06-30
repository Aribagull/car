import React, { useState } from "react";
import DataTable from "react-data-table-component";
import PendingApprovalModal from "./Actions"; 

export default function UserData() {
  const [data, setData] = useState([
    {
      id: "usr-1",
      picture: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/a2db1fb8-7aba-4a3b-9851-d44caa87ce9a/2022-05-01-Will-0649.jpg",
      name: "Ayesha",
      email: "ayesha@example.com",
      location: "Lahore",
      status: "",
      reason: "",
    },
    {
      id: "usr-2",
      picture: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/a2db1fb8-7aba-4a3b-9851-d44caa87ce9a/2022-05-01-Will-0649.jpg",
      name: "Ali",
      email: "ali@example.com",
      location: "Karachi",
      status: "",
      reason: "",
    },
    {
      id: "usr-3",
      picture: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/a2db1fb8-7aba-4a3b-9851-d44caa87ce9a/2022-05-01-Will-0649.jpg",
      name: "Hina",
      email: "hina@example.com",
      location: "Islamabad",
      status: "",
      reason: "",
    },
    {
      id: "usr-4",
      picture: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/a2db1fb8-7aba-4a3b-9851-d44caa87ce9a/2022-05-01-Will-0649.jpg",
      name: "Faisal",
      email: "hina@example.com",
      location: "Islamabad",
      status: "",
      reason: "",
    },
    {
      id: "usr-5",
      picture: "https://images.squarespace-cdn.com/content/v1/631ba8eed2196a6795698665/a2db1fb8-7aba-4a3b-9851-d44caa87ce9a/2022-05-01-Will-0649.jpg",
      name: "Umair",
      email: "hina@example.com",
      location: "Islamabad",
      status: "",
      reason: "",
    },
  ]);

  const [selectedRow, setSelectedRow] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  
  const handleStatusUpdate = (id, status, reason = "") => {
    const updated = data.map((item) =>
      item.id === id ? { ...item, status, reason } : item
    );
    setData(updated);
    setIsModalOpen(false); 
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Name",
      cell: (row) => (
        <div className="flex items-center gap-2">
          <img
            src={row.picture}
            alt={row.name}
            className="w-8 h-8 rounded-full object-cover"
          />
          <span>{row.name}</span>
        </div>
      ),
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
    {
      name: "Status",
      cell: (row) => (
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            row.status === "Accepted"
              ? "bg-green-100 text-green-800"
              : row.status === "Rejected"
              ? "bg-red-100 text-red-800"
              : "bg-gray-100 text-gray-600"
          }`}
        >
          {row.status || "-"}
        </span>
      ),
    },
    {
      name: "Reject Reason",
      selector: (row) => (row.status === "Rejected" ? row.reason : "-"),
    },
    {
      name: "Action",
      cell: (row) => (
        <button
          onClick={() => {
            setSelectedRow(row);
            setIsModalOpen(true);
          }}
          className="text-blue-600 underline text-xs"
        >
          Review
        </button>
      ),
    },
  ];

  const customStyles = {
    headRow: {
      style: {
        backgroundColor: "#f3f4f6",
      },
    },
    headCells: {
      style: {
        color: "#111827",
        fontWeight: "600",
        fontSize: "14px",
      },
    },
  };

  return (
    <div className="p-6 rounded">
      <h1 className="text-3xl font-bold text-gray-800 mb-12">User List</h1>
      <DataTable
      className="bg-white shadow-custom-deep"
        columns={columns}
        data={data}
        customStyles={customStyles}
        pagination
        highlightOnHover
      />

    
      <PendingApprovalModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        row={selectedRow}
        onUpdateStatus={handleStatusUpdate} 
      />
    </div>
  );
}
