import { FaClock, FaPhoneAlt, FaMapMarkerAlt, FaFacebookF, } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import logo from "../Assets/Logo/logo.png";
import { IoIosMail } from "react-icons/io";

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(to_bottom,black_0%,black_30%,black_30%,black_100%)]">
      <div className="bg-[#1a1d1a] w-[90%] mx-auto text-white py-12 px-6 md:px-20 rounded-3xl mt-20">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-2xl font-bold">TWijfel niet en kom langs</h2>

            <div className="flex items-start gap-3">
              <FaClock className="text-lg mt-1" />
              <p>
                Ma t/m vr: 08:00 - 18:00 <br />
                Za: 09:00 - 17:00 & Zo: Gesloten
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaPhoneAlt className="text-lg mt-1" />
              <p>
                +31 6 84658725 <span className="text-gray-400">(General)</span> <br />
              </p>
            </div>

            <div className="flex items-start gap-3">
              <FaMapMarkerAlt className="text-lg mt-1" />
              <p>Patrimoniumstraat 8, 2181 GG Hillegom</p>
            </div>
            <div className="flex items-start gap-3">
              <IoIosMail className="text-lg mt-1" size={22} />
              <p>Info@sfas-autobedrijf.nl</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="bg-white text-black px-5 py-2 rounded-md font-medium w-full sm:w-auto flex items-center gap-2 justify-center">
                <FaWhatsapp size={20} /> SALE
              </button>
            
              <button className="bg-transparent border border-white p-2 rounded-md w-full sm:w-auto flex items-center justify-center ">
                <FaFacebookF size={22} />
              </button>
            </div>
          </div>


<div className="md:w-1/3 flex flex-col text-left md:text-right text-lg mt-10 md:mt-0">
  <a href="#" className="hover:text-gray-400">Startpagina</a>
  <a href="#" className="hover:text-gray-400">Aanbieding</a>
  <a href="#" className="hover:text-gray-400">Diensten</a>
  <a href="#" className="hover:text-gray-400">Over ons</a>
  <a href="#" className="hover:text-gray-400">Contact</a>
</div>

        </div>
      </div>

      <div className="mt-10 pt-6 w-[90%] pb-6 mx-auto text-white flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
        <img 
          src={logo}
          alt="Header Logo" 
          className="h-14 object-contain"
        />
        <a href="#" className="text-gray-400 hover:underline self-start md:self-end">
          Privacybeleid
        </a>
      </div>

      <p className="text-xs text-gray-400 mb-4 leading-relaxed px-6 pb-5 md:px-20">
        Let op!: Hoewel onze advertenties met zorg zijn opgesteld, kunnen er enkele verschillen in kenmerken of opties voorkomen. De verstrekte informatie dient uitsluitend ter oriëntatie en is juridisch niet bindend.
        <br />
        Ons advies: Controleer en bevestig altijd alle beschikbare opties tijdens een bezichtiging of proefrit om misverstanden te voorkomen.
      </p>
    </footer>
  );
}
