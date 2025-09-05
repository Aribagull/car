import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"   // ✅ Import navigate
import slide1 from "../Assets/Images/Heroslider-1.jpg"
import slide2 from "../Assets/Images/Heroslider-2.jpg"
import Header from "./Header"
import CustomButton from "../CustomComponents/CustomButton"

const images = [slide1, slide2]

export default function HeroSlider() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate() 

  useEffect(() => {
    const duration = 7000
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length)
    }, duration)
    return () => clearInterval(interval)
  }, [])


  const handleViewOffer = () => {
    navigate("/allcars") 
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <motion.img
          key={current}
          src={images[current]}
          alt="slide"
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 7, ease: "easeInOut" }}
        />
      </div>

      <div className="absolute inset-0 bg-black/40"></div>

      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mt-10 text-white px-4">
        <p className="text-sm uppercase tracking-widest">Fueled by Passion</p>
        <h1 className="text-4xl md:text-6xl font-bold max-w-3xl">
          Your Trusted Destination for Premium Quality Cars
        </h1>
    
        <CustomButton onClick={handleViewOffer}>
          View our offer
        </CustomButton>
      </div>

      <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 text-white">
        {images.map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              className={`block h-[1px] w-6 ${
                index === current ? "bg-white" : "bg-gray-500"
              }`}
            ></span>
            <span
              className={`text-sm font-semibold ${
                index === current ? "text-white" : "text-gray-400"
              }`}
            >
              {`0${index + 1}`}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
