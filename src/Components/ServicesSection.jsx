import { useState, useEffect } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay } from "swiper/modules"
import { MdOutlineChevronLeft } from "react-icons/md"
import { HiChevronRight } from "react-icons/hi"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Link } from "react-router-dom"
import services from "../Data/ServiceData.js"

import "swiper/css"
import "swiper/css/autoplay"

export default function Services() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 })
  const [insideSlider, setInsideSlider] = useState(false)

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 })

  useEffect(() => {
    const move = (e) => setCursorPos({ x: e.clientX, y: e.clientY })
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [])

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="w-full bg-black text-white py-16 px-6 md:px-32 relative"
    >
      {insideSlider && (
        <div
          className="fixed z-50 w-16 h-16 rounded-full bg-black text-white flex items-center justify-center pointer-events-none transition-transform duration-150"
          style={{ left: cursorPos.x - 32, top: cursorPos.y - 32 }}
        >
          <span className="flex items-center gap-2 text-lg">
            <MdOutlineChevronLeft />
            <HiChevronRight />
          </span>
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex justify-between items-start mb-10 flex-col md:flex-row gap-6 md:gap-0"
      >
        <div>
          <h2 className="text-4xl font-bold">Our services</h2>
          <p className="mt-2 text-gray-400">
            We provide more than just car sales – from financing and trade-ins to after-sales support, everything is designed for your convenience. Our goal is to make your car ownership journey smooth, enjoyable, and worry-free.
          </p>
        </div>
      </motion.div>

      <div
        onMouseEnter={() => setInsideSlider(true)}
        onMouseLeave={() => setInsideSlider(false)}
        className="relative cursor-none"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          speed={1000}
          spaceBetween={24}
          loop={true}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {services.map((item) => (
            <SwiperSlide key={item.id}>
              <Link to={`/services/${item.id}`}>
                <motion.div className="relative rounded-xl overflow-hidden group h-[450px]">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-60 transition-opacity duration-500"></div>
                  <div className="absolute bottom-6 left-6">
                    <h3 className="text-xl font-bold">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </motion.div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </motion.section>
  )
}
