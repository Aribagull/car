import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import cars from "../Data/index.js";
import { Share2 } from "lucide-react"
import CarTabs from "./CarTabs.jsx";
import CustomButton from "../CustomComponents/CustomButton.jsx";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id.toString() === id);

  const images = car
    ? [
        car.img,
        "https://images.unsplash.com/photo-1672266713063-a957c9b14f67?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1672587664755-a4d7b3c581f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1606152502304-f44daffeec98?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://images.unsplash.com/photo-1691795680292-50c576c02382?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fHw%3D",
      ]
    : [];

  const [mainImage, setMainImage] = useState(images[0] || "");

  if (!car) {
    return (
      <div className="text-center text-red-500 py-20 text-xl font-semibold">
        Car not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 pt-32">
      <div className="max-w-5xl mx-auto mb-8 flex justify-between items-center ">
        <div>
          <h1 className="text-3xl font-bold text-white">{car.title}</h1>
          <p className="text-sm text-gray-300 mt-2">
            <Link to="/" className="hover:text-[#001f08]">Home</Link> /{" "}
            <Link to="/allcars" className="hover:text-[#001f08]">All Cars</Link> /{" "}
            <span className="text-gray-300">{car.title}</span>
          </p>
        </div>

        <button
          onClick={() => navigate(-1)}
          className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md"
        >
          ← Back
        </button>
      </div>

      <div className="w-full max-w-5xl mx-auto">
        <img
          src={mainImage}
          alt={car.title}
          className="w-full h-[400px] object-cover rounded-lg"
        />

        <div className="flex gap-3 mt-4">
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt={`Car ${i}`}
              onClick={() => setMainImage(img)}
              className={`w-24 h-16 object-cover rounded-md cursor-pointer border-2 ${
                mainImage === img ? "border-white" : "border-transparent"
              }`}
            />
          ))}
        </div>
      </div>

   <div className="w-full mt-8  text-white p-6 px-40">
  <div className="flex justify-between items-center text-center divide-x divide-gray-400">
    <div className="px-6">
      <p className="text-2xl">{car.km}</p>
      <p className="text-sm text-gray-300 uppercase">Mileage</p>
    </div>
    <div className="px-6">
      <p className="text-2xl">June 2, 2023</p>
      <p className="text-sm text-gray-300 uppercase">Year of Construction</p>
    </div>
    <div className="px-6">
      <p className="text-2xl">{car.fuel}</p>
      <p className="text-sm text-gray-300 uppercase">Fuel</p>
    </div>
    <div className="px-6">
      <p className="text-2xl">{car.transmission}</p>
      <p className="text-sm text-gray-300 uppercase">Transmission</p>
    </div>
    <div className="px-6">
      <p className="text-3xl font-bold">€44,950</p>
      <p className="text-sm text-gray-300">€644 / month</p>
    </div>
  </div>

  <div className="flex items-center justify-between mt-16 px-7">
    <div className="flex gap-4">
        <CustomButton>Trade-in Proposal</CustomButton>
        <CustomButton>Interest</CustomButton>
    </div>

    <div className="flex items-center gap-2">
      <span className="text-sm">Car sharing:</span>
      <button className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-[#001f08]">
        <Share2 className="w-4 h-4" />
      </button>
    </div>
  </div>
</div>
<div className="w-full max-w-5xl mx-auto">
  <CarTabs car={car} />
</div>
    </div>
  );
}
