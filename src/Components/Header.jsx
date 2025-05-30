import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { HiShoppingBag } from "react-icons/hi2";
import { FaSearch, FaBars, FaTimes } from "react-icons/fa";
import { useCart } from "../Context/CartContext";

export default function Header() {
  const { cartItems } = useCart();
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const navigate = useNavigate();

  // Scroll hide/show header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
  }, [menuOpen]);

  // Search handler
  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput.trim() !== "") {
      navigate(`/shop?category=${encodeURIComponent(searchInput.trim())}`);
      setSearchInput(""); // optional: clear after search
    }
  };

  return (
    <>
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <header
        className={`fixed top-0 left-0 w-full px-6 lg:px-10 py-4 z-50 bg-[#698927] shadow-sm transition-transform duration-500 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}
      >
        <div className="flex items-center justify-between">

         
          <Link to="/" className="text-xl font-heading text-white flex items-center gap-2">
            <div className="bg-white w-8 h-8 rounded-lg flex items-center justify-center text-[#698927] text-lg font-semibold">
              N
            </div>
            NationWide
          </Link>

          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart" className="relative text-white hover:text-blue-300">
              <HiShoppingBag className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <button className="text-white text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

         
          <nav className="hidden md:flex gap-8 text-sm font-inter pl-40 text-white">
            <Link to="/" className="hover:text-green-200">Home</Link>
            <Link to="/shop" className="hover:text-green-200">Shop</Link>
            <Link to="/aboutUs" className="hover:text-green-200">About</Link>
            <Link to="/contactUs" className="hover:text-green-200">Contact</Link>
          </nav>

        
          <form onSubmit={handleSearch} className="hidden sm:flex items-center justify-end gap-4 w-80">
            <div className="bg-gray-100 rounded-full px-4 py-2 w-72 flex items-center">
              <input
                type="text"
                placeholder="Search for products"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="bg-transparent outline-none text-sm w-full"
              />
              <button type="submit">
                <FaSearch className="text-gray-500 text-sm" />
              </button>
            </div>

            <Link to="/cart" className="relative flex items-center text-white hover:text-[#b9d482]">
              <HiShoppingBag className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </form>
        </div>

       
        <div className={`sm:hidden transition-all duration-500 ease-in-out overflow-hidden ${menuOpen ? 'max-h-[500px] opacity-100 mt-4' : 'max-h-0 opacity-0'} bg-[#698927] text-white flex flex-col items-center gap-3`}>
          <div className="flex justify-center items-center gap-4 py-4">
            <Link to="/" className="hover:text-green-200" onClick={() => setMenuOpen(false)}>Home</Link>
            <Link to="/shop" className="hover:text-green-200" onClick={() => setMenuOpen(false)}>Shop</Link>
            <Link to="/aboutUs" className="hover:text-green-200" onClick={() => setMenuOpen(false)}>About</Link>
            <Link to="/contactUs" className="hover:text-green-200" onClick={() => setMenuOpen(false)}>Contact</Link>
          </div>
          <form onSubmit={handleSearch} className="flex items-center bg-gray-100 rounded-full px-4 py-2 w-[90%] mb-4">
            <input
              type="text"
              placeholder="Search for products"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="bg-transparent outline-none text-sm w-full text-black"
            />
            <button type="submit">
              <FaSearch className="text-gray-500 text-sm" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
}
