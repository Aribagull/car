import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF } from "react-icons/fa";
import logo from "../Assets/Logo/logo-2-retina.webp";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,#f7faf6_0%,#f7faf6_30%,black_30%,black_100%)]">
      <div className="bg-[#1a1d1a] w-[90%] mx-auto text-white py-12 px-10 md:px-20 rounded-3xl mt-6">
      
        <div className="flex justify-between gap-12">
       
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-2xl font-bold">DON'T HESITATE AND COME BY</h2>

            <div className="flex items-start gap-3">
              <FaClock className="text-lg mt-1" />
              <p>
                Mon to Fri: 08:15 - 18:00 <br />
                Sat: 09:00 - 17:00 & Sun: Closed
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-lg mt-1" />
              <p>
                +3113 534 1659 <span className="text-gray-400">(General)</span> <br />
                +316 14 28 16 95 <span className="text-gray-400">(Sale - Patrick)</span> <br />
                +316 53 44 58 22 <span className="text-gray-400">(Sales - Ad)</span>
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <p>Dorpsstraat 72, 5051 CL Goirle</p>
            </div>

            <div className="flex items-center gap-3">
              <button className="bg-white text-black px-5 py-2 rounded-md font-medium">
                MAIL US
              </button>
              <button className="bg-transparent border border-white px-5 py-2 rounded-md font-medium">
                SALE
              </button>
              <button className="bg-transparent border border-white p-2 rounded-md">
                <FaFacebookF />
              </button>
            </div>
          </div>

       
          <div className="md:w-1/3 flex text-right flex-col text-lg">
            <a href="#" className="hover:text-gray-400">Home</a>
            <a href="#" className="hover:text-gray-400">Offer</a>
            <a href="#" className="hover:text-gray-400">Services</a>
            <a href="#" className="hover:text-gray-400">Workshop</a>
            <a href="#" className="hover:text-gray-400">About us</a>
            <a href="#" className="hover:text-gray-400">Contact</a>
          </div>
        </div>
      </div>

  
      <div className="mt-10 pt-6 w-[90%] pb-8 mx-auto text-white">

        <div className="flex justify-between items-center">
          <img 
            src={logo}
            alt="Header Logo" 
            className="h-10 object-contain"
          />
          <a href="#" className="text-gray-400 hover:underline">Privacy Policy</a>
        </div>

  
        <p className="text-xs text-gray-400 mt-4 leading-relaxed">
          Please note!: Our advertisements are compiled with great care.
          Nevertheless, it is possible that there are more or fewer options than reported.
          <br />
         Our advice: Check carefully whether all options are available during a viewing or test drive. 
          You cannot derive any rights from our advertisements or specification cards on the car.
        </p>
      </div>
    </footer>
  );
}
