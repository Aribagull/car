import { useState } from "react";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";
import { motion } from "framer-motion";
import cars from "../Data/index.js";
import CustomButton from "../CustomComponents/CustomButton.jsx";
import { MdArrowOutward } from "react-icons/md";
import { IoSearch } from "react-icons/io5";

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
      className="bg-black text-white px-6 md:px-32"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-[35%] mt-20">
          <span className="bg-[#171817] text-sm px-3 py-2 rounded-full">
            Aanbod
          </span>
          <h2 className="text-4xl font-bold mt-6 uppercase">nieuw binnen</h2>
          <p className="mt-4 text-gray-400 max-w-xs text-sm">
            Hiernaast een impressie van ons recente aanbod. Gebruik onderstaande filters of ga naar de aanbod pagina om in onze voorraad te zoeken.
          </p>

          <div className="mt-8 space-y-4">
            <select
              value={make}
              onChange={(e) => setMake(e.target.value)}
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md text-white focus:outline-none"
            >
              <option value="" className="bg-black text-gray-400">MERK</option>
              <option value="Audi" className="bg-black text-white">Audi</option>
              <option value="BMW" className="bg-black text-white">BMW</option>
              <option value="Citroen" className="bg-black text-white">Citroen</option>
              <option value="Cupra" className="bg-black text-white">Cupra</option>
              <option value="Fiat" className="bg-black text-white">Fiat</option>
              <option value="Ford" className="bg-black text-white">Ford</option>
              <option value="Hyundai" className="bg-black text-white">Hyundai</option>
              <option value="Jeep" className="bg-black text-white">Jeep</option>
              <option value="Kia" className="bg-black text-white">Kia</option>
              <option value="Land Rover" className="bg-black text-white">Land Rover</option>
              <option value="Lynk & Co" className="bg-black text-white">Lynk & Co</option>
              <option value="Mazda" className="bg-black text-white">Mazda</option>
              <option value="MINI" className="bg-black text-white">MINI</option>
              <option value="Mercedes-Benz" className="bg-black text-white">Mercedes-Benz</option>
              <option value="Nissan" className="bg-black text-white">Nissan</option>
              <option value="Opel" className="bg-black text-white">Opel</option>
              <option value="Peugeot" className="bg-black text-white">Peugeot</option>
              <option value="Porsche" className="bg-black text-white">Porsche</option>
              <option value="Renault" className="bg-black text-white">Renault</option>
              <option value="SEAT" className="bg-black text-white">SEAT</option>
              <option value="Škoda" className="bg-black text-white">Škoda</option>
              <option value="Suzuki" className="bg-black text-white">Suzuki</option>
              <option value="Toyota" className="bg-black text-white">Toyota</option>
              <option value="Volkswagen" className="bg-black text-white">Volkswagen</option>
              <option value="Volvo" className="bg-black text-white">Volvo</option>
            </select>


            <select
              value={model}
              onChange={(e) => setModel(e.target.value)}
              className="w-full bg-black border border-gray-700 px-4 py-3 rounded-md text-white focus:outline-none"
            >
              <option value="" className="bg-black text-gray-400">MODEL</option>
              <option value="Golf" className="bg-black text-white">Golf</option>
              <option value="Q2" className="bg-black text-white">Q2</option>
              <option value="3 Series" className="bg-black text-white">3 Series</option>
              <option value="C-Class" className="bg-black text-white">C-Class</option>
            </select>


            <div className="flex justify-between items-center gap-4 text-xs">
              <Link to="/allcars">
                <CustomButton className="flex items-center gap-2"><IoSearch size={18} />Zoeken</CustomButton>
              </Link>

              <Link to="/allcars">
                <CustomButton className="flex items-center gap-2 border-none group">
                  Bekijk alle auto’s
                  <motion.span
                    whileTap={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <MdArrowOutward className="text-lg group-hover:text-green-400 transition" />
                  </motion.span>
                </CustomButton>
              </Link>
            </div>

          </div>
        </div>

        <div className="relative md:w-[65%] overflow-hidden h-[650px]">
          <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/100 to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/100 to-transparent z-20 pointer-events-none" />

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
