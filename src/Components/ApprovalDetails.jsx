
export default function ApprovalCard() {
  const user = {
    photo: "https://randomuser.me/api/portraits/men/44.jpg",
    firstName: "Fatima",
    lastName: "Rahman",
    email: "rafiqurrahman51@gmail.com",
    phone: "+09 345 346 46",
    location: "Plot 456, Sector B, DHA Phase2, Karachi",
    city: "Karachi",
    custId: "AS45645756",
  };

  return (
    <div className="max-w-xl mx-auto bg-white p-6 space-y-4 mt-10">
    
      <div className="flex flex-col justify-center items-center gap-4   p-4">
        <img
          src={user.photo}
          alt={user.firstName}
          className="w-16 h-16 rounded-full object-cover"
        />
        
          <h2 className="text-xl font-semibold text-gray-900">
            {user.firstName} {user.lastName}
          </h2>
          <p className="text-gray-500">{user.custId}</p>
       
      </div>

    
      <div className=" p-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4  text-sm text-gray-700">
          <div>
            <p className="text-gray-500">First Name</p>
            <p>{user.firstName}</p>
          </div>
          <div>
            <p className="text-gray-500">Last Name</p>
            <p>{user.lastName}</p>
          </div>
          <div>
            <p className="text-gray-500">Email address</p>
            <p>{user.email}</p>
          </div>
          <div>
            <p className="text-gray-500">Phone</p>
            <p>{user.phone}</p>
          </div>
          <div>
            <p className="text-gray-500">Location</p>
            <p>{user.location}</p>
          </div>
           <div>
            <p className="text-gray-500">City/State</p>
            <p>{user.city}</p>
          </div>
          
        </div>
      </div>


      <div className="flex justify-end gap-3 pt-4">
        <button className="px-5 py-2 text-sm border rounded hover:bg-gray-100">Reject</button>
        <button className="px-5 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
          Approve
        </button>
      </div>
    </div>
  );
}
