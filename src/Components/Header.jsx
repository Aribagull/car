import { Link } from 'react-router-dom';
import { Search, ShoppingCart } from 'lucide-react';
import { useState } from 'react';
import { useCart } from "../Context/CartContext";

export default function Header() {
  const [isFocused, setIsFocused] = useState(false);
  const { cartItems } = useCart();

  return (
    <header className="bg-[#1c3481] sticky top-0 z-50">
      <div className="container mx-auto px-4 py-5">
        <div className="flex justify-between items-center">

{/* 
          <div
            className={`relative group transition-all duration-300 w-72 ${isFocused ? 'w-64' : 'w-10'
              }`}
            onMouseEnter={() => setIsFocused(true)}
            onMouseLeave={() => {
              if (!document.activeElement.classList.contains('search-input')) {
                setIsFocused(false);
              }
            }}
          >
            <input
              type="text"
              placeholder="Search products..."
              className={`search-input absolute left-0 top-[-18px] h-9 pl-10 pr-3 transition-all duration-300 ease-in-out bg-transparent text-white placeholder-gray-300 ${isFocused
                  ? 'w-64 border focus:outline-none focus:ring-gray-50'
                  : 'w-10 border-transparent'
                }`}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
            />
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-300 cursor-pointer pointer-events-none"
            />
          </div> */}



          <div className=" text-center">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-gray-300 transition-colors"
            >
              NationWide
            </Link>
          </div>


          <div className="flex justify-end items-center gap-14">
            <Link to="/" className="text-white hover:text-gray-300">
              Home
            </Link>
            <Link to="/shop" className="text-white hover:text-gray-300">
              Shop
            </Link>
            <Link to="/accessories" className="text-white hover:text-gray-300">
              Accessories
            </Link>
            <Link to="/contactUs" className="text-white hover:text-gray-300">
              Contact us
            </Link>
            <Link to="/cart" className="text-white relative">
              <ShoppingCart className="w-6 h-6" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                  {cartItems.length}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
