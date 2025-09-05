import { useState, useMemo } from "react";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { useNavigate, useLocation } from "react-router-dom";
import cars from "../Data/index.js";

export default function CarList() {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedFuel, setSelectedFuel] = useState("");
  const [sortBy, setSortBy] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ URL query se search value nikalna
  const queryParams = new URLSearchParams(location.search);
  const search = queryParams.get("search")?.toLowerCase() || "";

  const filteredCars = useMemo(() => {
    let filtered = [...cars];

    // search filter
    if (search) {
      filtered = filtered.filter(
        (car) =>
          car.title.toLowerCase().includes(search) ||
          car.subtitle.toLowerCase().includes(search)
      );
    }

    if (selectedBrand) {
      filtered = filtered.filter((car) =>
        car.title.toLowerCase().includes(selectedBrand.toLowerCase())
      );
    }

    if (selectedModel) {
      filtered = filtered.filter((car) =>
        car.subtitle.toLowerCase().includes(selectedModel.toLowerCase())
      );
    }

    if (selectedTransmission) {
      filtered = filtered.filter(
        (car) =>
          car.transmission &&
          car.transmission.toLowerCase() === selectedTransmission.toLowerCase()
      );
    }

    if (selectedFuel) {
      filtered = filtered.filter(
        (car) => car.fuel.toLowerCase() === selectedFuel.toLowerCase()
      );
    }

    if (sortBy) {
      filtered.sort((a, b) => {
        const priceA =
          a.price !== "—" ? parseInt(a.price.replace(/[^0-9]/g, "")) : 0;
        const priceB =
          b.price !== "—" ? parseInt(b.price.replace(/[^0-9]/g, "")) : 0;

        if (sortBy === "priceLowHigh") return priceA - priceB;
        if (sortBy === "priceHighLow") return priceB - priceA;
        if (sortBy === "yearNewOld") return b.year - a.year;
        if (sortBy === "yearOldNew") return a.year - b.year;
        return 0;
      });
    }

    return filtered;
  }, [search, selectedBrand, selectedModel, selectedTransmission, selectedFuel, sortBy]);

  return (
    <div className="bg-black min-h-screen px-6 py-10 pt-32">
      <h2 className="text-center text-white font-semibold text-4xl py-10 uppercase">
        All Cars
      </h2>

      {search && (
        <p className="text-center text-gray-400 mb-6">
          Search results for: <span className="font-semibold">{search}</span>
        </p>
      )}

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto mb-10">
        {/* Brand Filter */}
        <select
          className="bg-black border border-gray-600 text-white rounded-lg px-4 py-2"
          value={selectedBrand}
          onChange={(e) => setSelectedBrand(e.target.value)}
        >
          <option value="">BRAND</option>
          <option value="Audi">Audi</option>
          <option value="BMW">BMW</option>
          <option value="Volkswagen">Volkswagen</option>
          <option value="Mercedes">Mercedes</option>
          <option value="Tesla">Tesla</option>
          <option value="Hyundai">Hyundai</option>
        </select>

        {/* Model Filter */}
        <select
          className="bg-black border border-gray-600 text-white rounded-lg px-4 py-2"
          value={selectedModel}
          onChange={(e) => setSelectedModel(e.target.value)}
        >
          <option value="">MODEL</option>
          <option value="Golf">Golf</option>
          <option value="Q2">Q2</option>
          <option value="3 Series">3 Series</option>
          <option value="C-Class">C-Class</option>
          <option value="Model 3">Model 3</option>
          <option value="Tucson">Tucson</option>
        </select>

        {/* Transmission */}
        <select
          className="bg-black border border-gray-600 text-white rounded-lg px-4 py-2"
          value={selectedTransmission}
          onChange={(e) => setSelectedTransmission(e.target.value)}
        >
          <option value="">TRANSMISSION</option>
          <option value="Automatic">Automatic</option>
          <option value="Manual">Manual</option>
        </select>

        {/* Fuel */}
        <select
          className="bg-black border border-gray-600 text-white rounded-lg px-4 py-2"
          value={selectedFuel}
          onChange={(e) => setSelectedFuel(e.target.value)}
        >
          <option value="">FUEL</option>
          <option value="Petrol">Petrol</option>
          <option value="Diesel">Diesel</option>
          <option value="Hybrid">Hybrid</option>
          <option value="Electric">Electric</option>
        </select>

        {/* Sort */}
        <select
          className="bg-black border border-gray-600 text-white rounded-lg px-4 py-2"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="">SORT BY</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="yearNewOld">Year: New → Old</option>
          <option value="yearOldNew">Year: Old → New</option>
        </select>
      </div>

      {/* Cars */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div
              key={car.id}
              onClick={() => navigate(`/car/${car.id}`)}
              className="bg-neutral-900 rounded-lg overflow-hidden shadow-lg flex flex-col cursor-pointer hover:scale-[1.02] transition"
            >
              <div className="relative">
                <img
                  src={car.img}
                  alt={car.title}
                  className="w-full h-56 object-cover"
                />
                {car.price !== "—" && (
                  <div className="absolute bottom-3 left-3 flex gap-2">
                    <span className="bg-green-600 text-white text-sm px-2 py-1 rounded">
                      {car.price}
                    </span>
                    <span className="bg-neutral-800 text-gray-200 text-sm px-2 py-1 rounded">
                      {car.monthly}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold text-white">{car.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{car.subtitle}</p>
                <div className="mt-auto flex items-center justify-between text-gray-400 text-sm">
                  <div className="flex space-x-4">
                    <span>{car.km}</span>
                    <span>{car.year}</span>
                    <span>{car.fuel}</span>
                  </div>
                  <FaArrowUpRightFromSquare className="text-white" />
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-white text-center col-span-3">
             No cars found matching your Search.
          </p>
        )}
      </div>
    </div>
  );
}
