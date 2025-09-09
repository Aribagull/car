import { Link } from "react-router-dom";
import financingImg from "../Assets/Images/Heroslider-2.jpg";
import insuranceImg from "../Assets/Images/Heroslider-2.jpg";
import { MdArrowOutward } from "react-icons/md";

export default function Services() {
  return (
    <section className="bg-black text-white py-16 px-6 md:px-20">
      <div className="text-center mb-12">
        <span className="bg-[#171817] px-3 py-2 rounded-full text-sm">
          Services
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          FULL-SERVICE MOBILITY PARTNER
        </h2>
        <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
          You can come to us for the purchase of your car and for all your
          maintenance and repairs. In addition, we offer a number of extra
          services.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
     
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src={financingImg}
            alt="Financing / Leasing"
            className="w-full h-[550px] object-cover transform duration-500 group-hover:scale-105"
          />

       
          <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition duration-500" />

       
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="text-xl font-bold">FINANCING / LEASING</h3>
            <Link
              to="/financing"
              className="block text-sm text-white mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500"
            >
              LEES MEER <MdArrowOutward/>
            </Link>
          </div>
        </div>

      
        <div className="relative rounded-lg overflow-hidden group">
          <img
            src={insuranceImg}
            alt="Insurance"
            className="w-full h-[550px] object-cover transform duration-500 group-hover:scale-105"
          />

        
          <div className="absolute inset-0 bg-black/70 translate-y-full group-hover:translate-y-0 transition duration-500" />

       
          <div className="absolute bottom-6 left-6 z-10">
            <h3 className="text-xl font-bold">INSURANCE</h3>
            <Link
              to="/insurance"
              className="block text-sm text-white mt-1 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500"
            >
              LEES MEER <MdArrowOutward/>
            </Link>
          </div>
        </div>

      
        <div className="flex flex-col gap-6">
       
          <div className="bg-[#3d7235] p-6 py-10 rounded-lg flex flex-col justify-between">
            <h3 className="text-2xl font-bold">SERVICES</h3>
            <p className="my-4 text-lg text-gray-200">
              Explore our comprehensive services for a seamless car experience.
            </p>
            <Link
              to="/services"
              className="mt-4 bg-white text-black px-4 py-3 rounded text-sm font-semibold w-fit"
            >
              VIEW ALL SERVICES
            </Link>
          </div>

      
          <div className="bg-[#242824] p-6 py-10 rounded-lg flex flex-col justify-between">
            <h3 className="text-2xl font-bold">ASK?</h3>
            <p className="my-4 text-lg text-gray-200">
              Feel free to contact us for more information.
            </p>
            <Link
              to="/contact"
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
