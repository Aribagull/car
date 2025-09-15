import { useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Share2 } from "lucide-react";
import { FaCheckCircle } from "react-icons/fa";
import cars from "../Data/index.js";
import CarTabs from "./CarTabs.jsx";
import CustomButton from "../CustomComponents/CustomButton.jsx";

export default function CarDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const car = cars.find((c) => c.id.toString() === id);

  const images = car
    ? [
        car.img,
        "https://images.unsplash.com/photo-1672266713063-a957c9b14f67?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1672587664755-a4d7b3c581f4?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1606152502304-f44daffeec98?q=80&w=874&auto=format&fit=crop&ixlib=rb-4.1.0",
        "https://images.unsplash.com/photo-1691795680292-50c576c02382?w=600&auto=format&fit=crop&q=60",
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
<div className="min-h-screen py-10 pt-32 px-5">
<div className="max-w-5xl mx-auto mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
  <button
    onClick={() => navigate(-1)}
    className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md mb-4 md:hidden"
  >
    ← Back
  </button>

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
    className="bg-gray-800 hover:bg-gray-700 text-white text-sm px-4 py-2 rounded-md hidden md:block"
  >
    ← Back
  </button>
</div>


<div className="w-full max-w-5xl mx-auto">
  <img
    src={mainImage}
    alt={car.title}
    className="w-full h-[200px] md:h-[400px] object-cover rounded-lg"
  />

  <div className="flex gap-3 mt-4 overflow-x-auto md:overflow-x-visible pb-2">
    {images.map((img, i) => (
      <img
        key={i}
        src={img}
        alt={`Car ${i}`}
        onClick={() => setMainImage(img)}
        className={`flex-shrink-0 w-24 h-16 object-cover rounded-md cursor-pointer border-2 ${
          mainImage === img ? "border-white" : "border-transparent"
        }`}
      />
    ))}
  </div>
</div>



      <div className="w-full mt-8 text-white p-6 px-4 md:px-40">
        <div className="flex flex-col md:flex-row justify-between text-center md:divide-x divide-gray-400 gap-6 md:gap-0">
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

        <div className="flex flex-col md:flex-row items-center md:justify-between mt-16 px-2 md:px-7 gap-4 md:gap-0">
          <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
            <CustomButton className="w-full sm:w-auto">Trade-in Proposal</CustomButton>
            <CustomButton className="w-full sm:w-auto">Interest</CustomButton>
          </div>

          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="text-sm">Car sharing:</span>
            <button className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-[#001f08]">
              <Share2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="w-full max-w-5xl mx-auto mt-8">
        <CarTabs car={car} />
      </div>
    </div>
  );
}
