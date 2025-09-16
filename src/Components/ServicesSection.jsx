import { Link } from "react-router-dom";
import financingImg from "../Assets/Images/Heroslider-2.jpeg";
import serviceimg2 from "../Assets/Images/Serviceimage2.jpg";
import { MdArrowOutward } from "react-icons/md";

export default function Services() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <span className="bg-[#171817] px-3 py-2 rounded-full text-sm">
          Diensten
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          FULL-SERVICE MOBILITEITSPARTNER
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          Bij ons kunt u terecht voor de aankoop van uw auto en voor al uw
          onderhoud en reparaties. Daarnaast bieden wij een aantal extra
          diensten aan.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="relative rounded-lg overflow-hidden group h-64 md:h-[550px]">
          <Link to="/services/finance">
            <img
              src={financingImg}
              alt="Financing / Leasing"
              className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition duration-500" />
          </Link>
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="text-xl font-bold uppercase">Financieren / lease</h3>
            <Link
              to="/services/finance"
              className="block text-sm text-white mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500"
            >
              LEES MEER <MdArrowOutward />
            </Link>
          </div>
        </div>

      
        <div className="relative rounded-lg overflow-hidden group h-64 md:h-[550px]">
          <Link to="/services/insurance">
            <img
              src={serviceimg2}
              alt="Insurance"
              className="w-full h-full object-cover transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition duration-500" />
          </Link>
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="text-xl font-bold uppercase">Verzekering</h3>
            <Link
              to="/services/insurance"
              className="block text-sm text-white mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500"
            >
              LEES MEER <MdArrowOutward />
            </Link>
          </div>
        </div>

  
        <div className="flex flex-col gap-6">
          <div className="bg-[#242824] p-6 py-10 rounded-lg flex flex-col justify-between h-64 md:h-auto">
            <h3 className="text-2xl font-bold uppercase">Diensten</h3>
            <p className="my-4 text-lg text-gray-200">
              Ontdek onze uitgebreide diensten voor een naadloze auto-ervaring.
            </p>
            <Link
              to="/services"
              className="mt-4 bg-white text-black px-4 py-3 rounded text-sm font-semibold w-fit"
            >
              BEKIJK ALLE DIENSTEN
            </Link>
          </div>

          <div className="bg-[#242824] p-6 py-10 rounded-lg flex flex-col justify-between h-64 md:h-auto">
            <h3 className="text-2xl font-bold">Vragen?</h3>
            <p className="my-4 text-lg text-gray-200">
              Neem gerust contact met ons op voor meer informatie.
            </p>
            <Link
              to="/contactus"
              className="mt-4 bg-white text-black px-4 py-3 rounded text-sm font-semibold w-fit"
            >
              DIRECT CONTACT
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
