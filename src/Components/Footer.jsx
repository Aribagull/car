

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaXTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#f1f8da] text-gray-800 py-8 px-6">
   
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">

        <div className="flex items-center gap-2">
         
          <div className="text-xl font-bold text-[#698927] flex items-center gap-2">
        <div className="bg-[#698927] w-8 h-8 rounded-lg flex items-center justify-center text-white text-lg font-semibold">
          N
        </div>
        NationWide
      </div>
        </div>

     
        <nav className="flex space-x-6 font-medium">
          <Link to="/aboutUs" className="hover:text-gray-300">About Us</Link>
    <Link to="/contactUs" className="hover:text-gray-300">Contact Us</Link>
  
  <Link to="/termsOfService" className="hover:text-gray-300">
    Terms & Conditions
  </Link>

        </nav>

        {/* Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaXTwitter /></a>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-300" />

      {/* Copyright */}
      <div className="text-center text-sm text-gray-600">
        Copyright © 2025 Generic eCommerce
      </div>
    </footer>
  );
};

export default Footer;
