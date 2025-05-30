import React from "react";
import { Link } from "react-router-dom";
import heroimg from "../Assets/images/hero-section.jpg";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <div
      className="relative h-[75vh] sm:min-h-screen bg-fixed bg-center bg-cover w-full"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="absolute inset-0 bg-black/60 z-0"></div>
      <div className="relative z-10 flex flex-col justify-center items-center text-center h-[75vh] sm:min-h-screen px-4 sm:px-6 font-inter tracking-[1px] w-full">

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-white text-sm sm:text-base uppercase mt-16 mb-6 sm:mb-8"
        >
          Welcome to NationWide.
        </motion.h2>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
          className="text-white tracking-wider text-3xl sm:text-5xl md:text-6xl font-semibold leading-snug sm:leading-tight mb-4 sm:mb-6"
        >
          Experience the Power of <br className="hidden sm:block" /> technology  delivered <br className="hidden sm:block" /> to Your Door
        </motion.h1>


       <Link to="/shop">
  <motion.button
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
    className="mt-4 sm:mt-6 px-6 sm:px-8 py-2.5 sm:py-3 bg-[#698927] text-white text-sm sm:text-lg font-medium rounded-full shadow hover:bg-lime-600 transition"
  >
    Shop Now
  </motion.button>
</Link>
        

      </div>
    </div>
  );
}
