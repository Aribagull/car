import React from "react";
import { Link, useParams } from "react-router-dom";
import servicesData from "../Data/ServiceData";

export default function ServicesDetails() {
  const { id } = useParams();
  const service = servicesData[id?.toLowerCase()]; 

  if (!service) {
    return (
      <div className="bg-black min-h-screen text-white flex items-center justify-center">
        <h2 className="text-2xl">Service not found</h2>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white px-6 md:px-16 mt-32 py-10">
      <Link
        to="/services"
        className="text-sm font-medium text-gray-300 hover:text-white inline-flex items-center mb-6"
      >
        <span className="mr-2">←</span> BACK TO SERVICES
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {service.title}
          </h1>
          <p className="text-gray-300 leading-relaxed mb-4">{service.desc1}</p>
          <p className="text-gray-300 leading-relaxed">{service.desc2}</p>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt={service.title}
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
