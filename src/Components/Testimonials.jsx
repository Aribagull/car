import { useState, useEffect } from "react";
import { FaQuoteLeft } from "react-icons/fa";
import { motion } from "framer-motion"; // 👈 import

const testimonials = [
  {
    text: "Sed ut perspiciatis unde omnis iste natus. Sed ut perspiciatis unde omnis iste natus.",
    name: "Jason Lewis",
    location: "Detroit, MI",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    text: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam.",
    name: "Ben Walker",
    location: "Westfield, OH",
    img: "https://randomuser.me/api/portraits/men/44.jpg",
  },
  {
    text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
    name: "Sarah Johnson",
    location: "Austin, TX",
    img: "https://randomuser.me/api/portraits/women/45.jpg",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const visibleComments = [
    testimonials[activeIndex],
    testimonials[(activeIndex + 1) % testimonials.length],
  ];

  return (
    <motion.section
      className="bg-black text-white py-16 px-6 md:px-20 overflow-hidden"
      initial={{ opacity: 0, y: 100 }}      // 👈 start from bottom
      whileInView={{ opacity: 1, y: 0 }}   // 👈 animate upwards
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div
        className="text-center w-full px-6 md:px-36 mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-widest text-white">
          Who We Are
        </p>
        <h2 className="text-2xl md:text-5xl font-bold mt-2">
          Expert auto detailers dedicated to excellence, innovation, and quality
          service for{" "}
          <span className="text-[#009225]">every car, everywhere</span>
        </h2>
      </motion.div>

      <motion.div
        className="max-w-5xl mx-auto"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-700 ease-in-out">
          {visibleComments.map((item, idx) => {
            const isActive = idx === 0;
            return (
              <motion.div
                key={idx}
                className="bg-neutral-900 rounded-lg p-6 shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <FaQuoteLeft
                  className={`text-2xl mb-4 ${
                    isActive ? "text-[#009225]" : "text-white"
                  }`}
                />
                <p className="text-gray-300 mb-6">{item.text}</p>
                <div className="flex items-center space-x-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <h4 className="font-semibold">{item.name}</h4>
                    <p className="text-sm text-gray-400">{item.location}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center mt-10 space-x-2"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {testimonials.map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx === activeIndex ? "bg-[#009225]" : "bg-gray-600"
            }`}
          ></span>
        ))}
      </motion.div>
    </motion.section>
  );
}
