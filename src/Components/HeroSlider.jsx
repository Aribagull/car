import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"  
import slide1 from "../Assets/Images/Heroslider-1.jpg"
import slide2 from "../Assets/Images/Heroslider-2.jpg"
import slide3 from "../Assets/Images/Heroslider-3.png"   
import Header from "./Header"
import CustomButton from "../CustomComponents/CustomButton"

const images = [slide1, slide2, slide3]   

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
        <h1 className="text-4xl md:text-4xl font-semibold max-w-2xl uppercase">
          Full-service since 1967
        </h1>
    
        <CustomButton onClick={handleViewOffer} className="text-xs"> 
          View our offer
        </CustomButton>
      </div>
    </section>
  )
}
