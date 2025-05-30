import React from "react";
import { motion } from "framer-motion";
import heroimg from "../Assets/images/hero-section.jpg"; 
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <>
      <div
        className="relative w-full h-[500px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center items-center text-center h-[500px] px-4 font-inter tracking-[2px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-white text-sm uppercase mt-20 mb-6"
          >
            Contact Us
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-white text-4xl sm:text-6xl mb-8"
          >
            Let’s Connect
          </motion.h1>
        </div>
      </div>

      <div className="flex flex-col md:flex-row max-w-5xl mx-auto py-20 px-10 sm:px-6 gap-12">
        <div className="w-full md:w-1/2 space-y-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-900">Send us Message</h2>

          <div className="flex items-start space-x-4">
            <div className="bg-lime-100 p-4 rounded-full">
              <FaPhoneAlt className="text-gray-900 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Phone</h4>
              <p className="text-gray-700">9231-1234–678</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-lime-100 p-4 rounded-full">
              <FaEnvelope className="text-gray-900 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Email</h4>
              <p className="text-gray-700">nationwide@gmail.com</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-lime-100 p-4 rounded-full">
              <FaMapMarkerAlt className="text-gray-900 text-xl" />
            </div>
            <div>
              <h4 className="font-semibold text-lg">Address</h4>
              <p className="text-gray-700">
                Lahore, Pakistan
              </p>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 space-y-6">
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name *</label>
              <input
                type="text"
                className="w-full mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#698927]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Email *</label>
              <input
                type="email"
                className="w-full mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#698927]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone *</label>
              <input
                type="tel"
                className="w-full mt-1 p-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-[#698927]"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                rows="5"
                className="w-full mt-1 p-2 border border-gray-300 resize-none focus:outline-none focus:ring-1 focus:ring-[#698927]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#698927] text-white font-semibold py-2 px-6 rounded-full hover:bg-[#5a7a20] transition"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
