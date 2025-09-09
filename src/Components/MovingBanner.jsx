import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";

export default function MovingBanner() {
  const texts = [
    "Family business",
    "Expert advice",
    "Low mileage",
    "Top condition occasions",
    "Reliable",
  ];

  const controls = useAnimation();
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!isPaused) {
      controls.start({
        x: ["0%", "-100%"],
        transition: {
          repeat: Infinity,
          duration: 20, 
          ease: "linear",
        },
      });
    } else {
      controls.stop();
    }
  }, [isPaused, controls]);

  return (
    <div
      className="w-full overflow-hidden bg-[#3d7235] py-3 "
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <motion.div
        className="flex whitespace-nowrap text-white font-semibold text-sm uppercase"
        animate={controls}
      >
        {[...texts, ...texts].map((text, i) => (
          <span key={i} className="mx-24"> 
            {text}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
