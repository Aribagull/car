import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFax } from "react-icons/fa";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcAmex,
  FaCcDiscover,
} from "react-icons/fa";
import { Link } from "react-router-dom";


const Footer = () => {
  return (
    <footer className="bg-[#d3ecf3] text-gray-700 px-10 py-12 flex justify-around gap-10 mt-10 mx-auto">
     
      <div>
        <h2 className="text-3xl font-bold text-blue-600">Nation<span className="text-gray-800">Wide</span></h2>
        <p className="mt-4 text-sm w-80">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="flex gap-3 mt-5 text-2xl text-gray-600">
          <FaCcVisa />
          <FaCcMastercard />
          <FaCcPaypal />
          <FaCcAmex />
          <FaCcDiscover />
        </div>
      </div>

 
      <div>
        <h3 className="text-xl font-semibold mb-4">MY ACCOUNT</h3>
        <ul className="space-y-2 text-sm">
           <li><Link to="/aboutUs" className="hover:text-gray-300">About Us</Link></li>
    <li><Link to="/contactUs" className="hover:text-gray-300">Contact Us</Link></li>
    <li>
  <Link to="/termsOfService" className="hover:text-gray-300">
    Terms & Conditions
  </Link>
</li>
    <li><a href="#" className="hover:text-gray-300">Returns & Exchanges</a></li>
    <li><a href="#" className="hover:text-gray-300">Shipping & Delivery</a></li>
        </ul>
      </div>

    
      <div>
        <h3 className="text-xl font-semibold mb-4">CONTACT US</h3>
        <ul className="space-y-3 text-sm">
          <li className="flex items-start gap-2"><FaMapMarkerAlt className="mt-1" /> NationWide Demo Store <br /> Pak-3654123</li>
          <li className="flex items-center gap-2"><FaPhoneAlt /> Call Us: 123-456-7898</li>
          <li className="flex items-center gap-2"><FaEnvelope /> Email Us: Support@NationWide.Com</li>
          <li className="flex items-center gap-2"><FaFax /> Fax 123456</li>
        </ul>
      </div>

     
      {/* <div>
        <h3 className="text-xl font-semibold mb-4">NEWSLETTER</h3>
        <form className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Enter Full Name"
            className="px-4 py-2 border rounded focus:outline-none"
          />
          <input
            type="email"
            placeholder="Enter Email Address"
            className="px-4 py-2 border rounded focus:outline-none"
          />
          <button className="bg-sky-500 text-white px-4 py-2 rounded hover:bg-sky-600 transition-all">
            Submit Now
          </button>
        </form>
      </div> */}
    </footer>
  );
};

export default Footer;