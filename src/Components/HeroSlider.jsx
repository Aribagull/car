import { useNavigate } from "react-router-dom"
import slide1 from "../Assets/Images/Heroslider-1.png"
import Header from "./Header"
import CustomButton from "../CustomComponents/CustomButton"

export default function HeroSlider() {
  const navigate = useNavigate()

  const handleViewOffer = () => {
    navigate("/allcars")
  }

  return (
    <section className="relative w-full h-screen overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={slide1}
          alt="slide"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

  
      <div className="absolute inset-0 bg-black/10"></div>
      <div className="absolute top-0 left-0 w-full z-20">
        <Header />
      </div>


      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mt-6 sm:mt-10 text-white px-4">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold max-w-md sm:max-w-xl md:max-w-2xl uppercase leading-snug">
          Full-Service
        </h1>

        <CustomButton
          onClick={handleViewOffer}
          className="text-[10px] sm:text-xs mb-3 mt-4 bg-black px-3 py-2 sm:px-4 sm:py-3"
        >
          Bekijk ons aanbod
        </CustomButton>
      </div>
    </section>
  )
}
