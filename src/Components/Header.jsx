import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import logo from "../Assets/Logo/logo.png"
import { X } from "lucide-react"
import { FaWhatsapp } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";

import leftBg from "../Assets/Images/Heroslider-3.png"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
  
      <header
        className={`w-full fixed top-0 left-0 z-30 transition-colors duration-500 font-montserrat uppercase 
        ${scrolled 
          ? "bg-black" 
          : "bg-gradient-to-b from-black/50 to-transparent"} 
        text-white px-6 sm:px-10 lg:px-20 py-4`}
      >
        <div className="flex justify-between items-center">
      
          <Link to="/">
            <img src={logo} alt="Logo" className="w-28 sm:w-32 cursor-pointer" />
          </Link>

          <div className="flex items-center gap-6">
        
            <nav className="hidden md:flex gap-10 text-sm">
              <Link to="/allcars" className="hover:text-gray-300">Aanbod</Link>
              <Link to="/contactus" className="hover:text-gray-300">Contact</Link>
            </nav>

        
            <button
              onClick={() => setMenuOpen(true)}
              className="flex items-center gap-2 px-4 py-2 text-sm sm:text-base font-light uppercase bg-transparent text-white border border-white rounded transition group"
            >
              Menu
              <div className="relative w-5 h-2">
                <span className="absolute top-0 left-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:top-1/2 group-hover:-translate-y-1/2"></span>
                <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2"></span>
              </div>
            </button>
          </div>
        </div>
      </header>

  
      <div
        className={`fixed top-0 left-0 h-full w-full z-50 transform transition-transform duration-500 text-white ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 h-full uppercase">
          <div
            className="relative flex flex-col justify-center items-center text-3xl md:text-4xl font-semibold text-white"
            style={{
              backgroundImage: `url(${leftBg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10 flex flex-col gap-6">
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
              <Link to="/allcars" onClick={() => setMenuOpen(false)}>Aanbod</Link>
              <Link to="/services" onClick={() => setMenuOpen(false)}>Diensten</Link>
              <Link to="/about" onClick={() => setMenuOpen(false)}>Over ons</Link>
              <Link to="/contactus" onClick={() => setMenuOpen(false)}>Contact</Link>
            </div>
          </div>

      
          <div className="hidden md:flex justify-center items-center h-full bg-black relative">
            <div className="absolute top-4 right-4">
              <button onClick={() => setMenuOpen(false)} className="text-white">
                <X size={28} />
              </button>
            </div>

            <div className="flex flex-col justify-center items-start gap-4 px-10 py-20 text-left w-[70%]">
              <h2 className="text-xl font-bold">SFAS AUTO BEDRIJF COMPANY</h2>
              <p className="text-gray-200">Patrimoniumstraat 8,2181 GG Hillegom</p>
              <p className="text-gray-200">+3113 534 1659 (General)</p>
              <p className="text-gray-200">+316 14 28 16 95 (Sales - Patrick)</p>
              <p className="text-gray-200">+316 53 44 58 22 (Sales - Ad)</p>
              <p className="text-gray-200 normal-case">Info@sfas-autobedrijf.nl</p>

              <div className="flex gap-3 mt-4">
                <button className="border border-white px-3 py-1 rounded flex items-center gap-2">
                  <FaWhatsapp size={20}/> WhatsApp
                </button>
                <button className="border border-white px-3 py-1 rounded">
                  <FaFacebookF />
                </button>
              </div>
            </div>
          </div>
        </div>

     
        <div className="absolute top-4 right-4 md:hidden">
          <button onClick={() => setMenuOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>
      </div>
    </>
  )
}
