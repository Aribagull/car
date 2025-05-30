import React from "react";
import heroimg from "../Assets/images/last-section.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const LastSection = () => {
  
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroimg})`,
        backgroundAttachment: "fixed",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10" />

      <motion.div
        className="relative z-20 font-inter text-center px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <h1 className="text-3xl md:text-[45px] font-bold text-white mb-4">
          Ready to Find your Perfect Product?
        </h1>
        <p className="text-white text-sm md:text-base mb-6">
         Explore our online store to discover nature-inspired products, all just a click <br/> away for convenient shopping from the comfort of your home.
        </p>
        <Link to="/shop" className="bg-[#698927] hover:bg-lime-600 text-white font-semibold px-6 py-3 rounded-full transition duration-300">
          Shop Now
        </Link>
      </motion.div>
    </div>
  );
};

export default LastSection;
