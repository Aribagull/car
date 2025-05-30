import { FaCreditCard, FaTruck, FaCube, FaHeart } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// Features Data
const features = [
  {
    icon: <FaCreditCard className="text-2xl" />,
    title: "Secure Payment",
    description: "Elementum feugiat diam",
  },
  {
    icon: <FaTruck className="text-2xl" />,
    title: "Free Shipping",
    description: "For $50 order",
  },
  {
    icon: <FaCube className="text-2xl" />,
    title: "Delivered with Care",
    description: "Lacinia pellentesque leo",
  },
  {
    icon: <FaHeart className="text-2xl" />,
    title: "Excellent Service",
    description: "Blandit gravida viverra",
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Features() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 sm:px-10 md:px-16 py-12"
    >
      {features.map((feature, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center text-center"
          custom={index}
          initial="hidden"
          animate={controls}
          variants={itemVariants}
        >
          <div className="bg-lime-100 rounded-full p-4 mb-4 text-lime-700">
            {feature.icon}
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-black mb-1">
            {feature.title}
          </h3>
          <p className="text-xs sm:text-sm text-gray-600">
            {feature.description}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
