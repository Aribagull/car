import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import cars from "../Data/index.js";
import CustomButton from "../CustomComponents/CustomButton.jsx";

export default function CarListing() {
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");

  const [hasStarted, setHasStarted] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const handleMouseEnter = () => {
    if (!hasStarted) {
      setHasStarted(true);
    }
    setIsPaused(true);
  };

  const handleMouseLeave = () => {
    setIsPaused(false);
  };

  return (
    <motion.section
      className="bg-black text-white py-16 px-6 md:px-32"
      initial={{ opacity: 0, y: 100 }} 
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }} 
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-[40%]">
          <span className="bg-gray-800 text-sm px-3 py-1 rounded-full">
            Offer
          </span>
          <h2 className="text-4xl font-bold mt-6">NEW IN</h2>
          <p className="mt-4 text-gray-400 max-w-md">
            Here's a glimpse of our latest offerings. Use the filters below or
            visit the offers page to browse our inventory.
          </p>

          <div className="mt-8 space-y-4">
            <select
  value={make}
  onChange={(e) => setMake(e.target.value)}
  className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md text-white focus:outline-none"
>
  <option value="" className="bg-black text-white">MERK</option>
  <option value="VW" className="bg-black text-white">Volkswagen</option>
  <option value="Audi" className="bg-black text-white">Audi</option>
  <option value="BMW" className="bg-black text-white">BMW</option>
  <option value="Mercedes" className="bg-black text-white">Mercedes</option>
</select>


            <select
  value={model}
  onChange={(e) => setModel(e.target.value)}
  className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md text-white focus:outline-none"
>
  <option value="" className="bg-black text-white">MODEL</option>
  <option value="Golf" className="bg-black text-white">Golf</option>
  <option value="Q2" className="bg-black text-white">Q2</option>
  <option value="3 Series" className="bg-black text-white">3 Series</option>
  <option value="C-Class" className="bg-black text-white">C-Class</option>
</select>


            <div className="flex items-center gap-4">
              <Link to="/allcars">
                <CustomButton>VIEW ALL CARS</CustomButton>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative md:w-[60%] overflow-hidden h-[450px]">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/80 to-transparent z-20 pointer-events-none" />

          <div
            className={`absolute inset-0 ${hasStarted ? "animate-moveUp" : ""}`}
            style={{
              animationPlayState: isPaused ? "paused" : "running",
            }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {cars.concat(cars).map((car, index) => (
  <Link 
    to={`/car/${car.id}`} 
    key={index}
    className={`bg-[#111] rounded-xl overflow-hidden shadow-lg 
      ${index % 2 === 0 ? "md:-mt-6" : "md:mt-6"} 
      hover:animate-bounceUp block`}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <div className="relative">
      <img
        src={car.img}
        alt={car.title}
        className="w-full h-56 object-cover"
      />

    </div>

    <div className="p-4">
      <h3 className="font-bold">{car.title}</h3>
      <p className="text-gray-400 text-sm">{car.subtitle}</p>

      <div className="flex items-center gap-2 mt-2">
        {car.price !== "—" && (
          <span className="bg-green-700 px-3 py-1 text-sm rounded-md">
            {car.price}
          </span>
        )}
        {car.monthly !== "—" && (
          <span className="bg-gray-700 px-3 py-1 text-sm rounded-md">
            {car.monthly}
          </span>
        )}
      </div>

      <div className="flex items-center gap-6 text-sm text-gray-400 mt-4">
        <span>{car.km}</span>
        <span>{car.year}</span>
        <span>{car.fuel}</span>
        <button className="ml-auto bg-gray-800 p-2 rounded-full hover:bg-white hover:text-black transition">
          <MdOutlineArrowOutward />
        </button>
      </div>
    </div>
  </Link>
))}

            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
