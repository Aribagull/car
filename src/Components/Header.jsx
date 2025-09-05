import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { Link as ScrollLink } from "react-scroll"
import logo from "../Assets/Logo/logo-2-retina.webp"
import { Search, X } from "lucide-react"

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleSearchToggle = () => {
    setShowSearch((prev) => !prev)
    setSearchTerm("")
  }

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter" && searchTerm.trim() !== "") {
      navigate(`/allcars?search=${encodeURIComponent(searchTerm)}`)
      setShowSearch(false)
      setSearchTerm("")
    }
  }

  return (
    <header
      className={`w-full fixed top-0 left-0 z-30 transition-colors duration-500 ${
        scrolled ? "bg-black" : "bg-transparent"
      } text-white px-10 py-4`}
    >
      <div className="grid grid-cols-3 items-center">
        <nav className="flex gap-6 text-sm font-medium">
  <Link
    to="/"
    className="hover:text-gray-300 relative after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
  >
    Home
  </Link>

  <Link
    to="/allcars"
    className="hover:text-gray-300 relative after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
  >
    Offer
  </Link>

  <Link
    to="/about"
    className="hover:text-gray-300 relative after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
  >
    About us
  </Link>

  <ScrollLink
    to="contact-section"
    smooth={true}
    duration={600}
    offset={-80}
    className="cursor-pointer hover:text-gray-300 relative after:block after:h-[2px] after:bg-white after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:origin-left"
  >
    Contact
  </ScrollLink>
</nav>

        <div className="flex justify-center">
          <Link to="/">
            <img src={logo} alt="Logo" className="w-32 cursor-pointer" />
          </Link>
        </div>

        <div className="flex items-center justify-end gap-5 relative">
          {showSearch ? (
            <div className="relative transition-all duration-300">
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={handleSearchSubmit}
                className="pl-2 pr-8 py-1 text-sm rounded-lg text-black w-40 md:w-56 focus:outline-none transition-all duration-300"
              />
              <X
                className="absolute right-2 top-1/2 -translate-y-1/2 w-5 h-5 cursor-pointer text-gray-500 hover:text-gray-700"
                onClick={handleSearchToggle}
              />
            </div>
          ) : (
            <Search
              className="w-5 h-5 cursor-pointer hover:text-gray-300"
              onClick={handleSearchToggle}
            />
          )}
        </div>
      </div>
    </header>
  )
}
