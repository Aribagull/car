import React from 'react';
import { motion } from "framer-motion";
import heroimg from "../Assets/images/hero-section.jpg"; 
import { CubeIcon } from "@heroicons/react/24/solid";
import { FaCheckCircle } from 'react-icons/fa';

const coreValues = [
  {
    title: "Passionate About Work",
    desc: "Passion for work is a enthusiasm and excitement for what you do.",
  },
  {
    title: "Creative team members",
    desc: "A creative team is to design and execute campaigns & encourage",
  },
  {
    title: "Innovation solutions",
    desc: "Using either completely concepts finding new ways of using existing",
  },
  {
    title: "Qualitiful products",
    desc: "Product quality refers to how well a product satisfies our customer",
  },
  {
    title: "Customer satisfaction",
    desc: "Happy customers are delighted because of the customer service",
  },
  {
    title: "Simplicity interface",
    desc: "Simplicity is used loosely to refer to the need to minimize a process",
  },
];

const AboutUs = () => {
  const features = [
    "Quality and Variety",
    "Expert Guidance",
    "Sustainable Practices",
    "Experienced Team"
  ];

  return (
    <>
      <div
        className="relative w-full h-[500px] sm:h-[600px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>
        <div className="relative z-10 flex flex-col justify-center items-center text-center min-h-full px-4 font-inter tracking-wide">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-white text-sm sm:text-base uppercase mt-16 mb-4"
          >
            ABOUT
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-white text-3xl sm:text-6xl font-semibold leading-tight"
          >
            We are Passionate <br className="hidden sm:block" /> About Our Work
          </motion.h1>
        </div>
      </div>

      <section className="py-12 px-9 sm:px-6 md:px-12 max-w-4xl mx-auto text-gray-800">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold leading-snug mb-4 sm:mb-6">
          We strive to provide our <br className="hidden md:block" />
          customers with the highest quality
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8">
          We are committed to delivering top-quality products and excellent customer service to meet your expectations every time.
Our goal is to offer premium products and a seamless shopping experience to all our valued customers.
        </p>

        <hr className="my-6 sm:my-8" />

        <blockquote className="italic text-gray-700 text-sm sm:text-lg mb-6">
          “We love what we do & create partnerships with our clients to ensure their digital transformation is positioned for long-term success.”
        </blockquote>

      </section>

      <section className="bg-[#f8ffd9] py-12 sm:py-16 px-4 sm:px-6 md:px-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 sm:mb-12">
          Our Core Values that Drive <br className="hidden md:block" /> Everything We Do
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-left max-w-6xl mx-auto">
          {coreValues.map((item, idx) => (
            <div key={idx} className="flex items-start gap-3 sm:gap-4">
              <div className="bg-black text-white p-2 sm:p-3 rounded-full shrink-0">
                <CubeIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-semibold">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-700">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-12 sm:py-16 px-8 md:px-20 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">Our Mission</h2>
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-10">
           Our mission is to deliver exceptional products and services that enhance our customers’ lives while maintaining integrity, quality, and innovation.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-2 gap-6 sm:gap-8 md:text-left max-w-2xl pl-0 sm:pl-24 mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2 sm:gap-3">
                <FaCheckCircle className="text-green-600 mt-1 text-base sm:text-lg" />
                <span className="text-gray-800 text-sm sm:text-base font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
