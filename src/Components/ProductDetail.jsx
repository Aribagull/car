import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Productsdata from "../Data/ProductData";
import { useCart } from "../Context/CartContext";
import { ShoppingCart } from "lucide-react";
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaCcDiscover } from "react-icons/fa";
import QuoteRequestForm from "./QoutePage";


export default function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const imgRef = useRef(null);

  const [zoomStyle, setZoomStyle] = useState({});
  const [showForm, setShowForm] = useState(false);

  const product = Productsdata.find((item) => item.id.toString() === id);

  if (!product) {
    return (
      <div className="p-10 text-center text-gray-600">Product not found</div>
    );
  }

  const handleMouseMove = (e) => {
    const { left, top, width, height } = imgRef.current.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomStyle({
      backgroundImage: `url(${product.image})`,
      backgroundPosition: `${x}% ${y}%`,
      backgroundSize: "200%",
    });
  };

  const handleMouseLeave = () => {
    setZoomStyle({});
  };

  return (
    <>
    <div className="max-w-7xl mx-auto p-6 mt-32">
      <div className="grid md:grid-cols-2 gap-10 items-start mb-20">
        
      
        <div className="relative group overflow-hidden">
          <div
            ref={imgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full h-[500px] bg-no-repeat bg-center bg-contain transition duration-300"
            style={{
              backgroundImage: zoomStyle.backgroundImage || `url(${product.image})`,
              backgroundPosition: zoomStyle.backgroundPosition || "center",
              backgroundSize: zoomStyle.backgroundSize || "contain",
              cursor: "zoom-in",
            }}
          />
          
        </div>

       
        <div>
          <p className="text-sm text-gray-500 mb-1">
            Home / {product.category} / <span className="text-green-600"> {product.title}</span>
          </p>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.title}</h1>
          <p className="text-2xl font-semibold text-green-700 mb-1"> <span className="text-sm font-normal text-gray-600">Free Shipping</span></p>

          <p className="text-gray-700 my-4 leading-relaxed">
            {product.description ||
              "Faucibus lacus tincidunt molestie accumsan nibh non odio aenean molestie purus."}
          </p>

          <h3 className="text-lg font-semibold text-gray-800 mt-6">Product Details</h3>
          <p className="text-sm text-gray-600 mt-2">
            {product.details ||
              `The Night Vision Dome Camera is a high-performance security solution designed for 24/7 surveillance.`}
          </p>

     
          <div className="mt-6 flex items-center gap-4 flex-wrap">
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#698927] hover:bg-[#567021] text-white px-6 py-3 rounded-md"
            >
              Get a Quote
            </button>
            {showForm && <QuoteRequestForm onClose={() => setShowForm(false)} />}

            <button
              onClick={() => addToCart(product)}
              className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-md flex items-center gap-2"
            >
              <ShoppingCart size={18} /> Add to Cart
            </button>
          </div>

          <div className="mt-4 text-sm text-gray-500">
            Category: <span className="text-green-600">{product.category}</span>
          </div>

        
          <div className="mt-6 border-t pt-4">
            <h4 className="text-gray-800 font-semibold mb-2">Guaranteed Safe Checkout</h4>
            <div className="flex gap-4 text-3xl text-gray-600">
              <FaCcVisa />
              <FaCcMastercard />
              <FaCcAmex />
              <FaCcDiscover />
            </div>
          </div>
        </div>
      </div>
      
    </div>
    
    </>
  );
}
