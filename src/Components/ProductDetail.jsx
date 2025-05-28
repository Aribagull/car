import { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import Productsdata from "../Data/ProductData";
import { useCart } from "../Context/CartContext";
import { ShoppingCart } from "lucide-react";
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
    <div className="flex items-center justify-center px-4 py-10 mt-14">
      <div className="bg-white p-8 flex flex-col md:flex-row gap-10 max-w-5xl w-full">
   
        <div className="flex-1 flex items-center justify-center">
          <div
            ref={imgRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="w-full  h-[400px] shadow bg-no-repeat bg-center bg-contain overflow-hidden"
            style={{
              backgroundImage: zoomStyle.backgroundImage || `url(${product.image})`,
              backgroundPosition: zoomStyle.backgroundPosition || "center",
              backgroundSize: zoomStyle.backgroundSize || "contain",
              transition: "background-size 0.3s ease",
              cursor: "zoom-in",
            }}
          />
        </div>

      
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-600 text-lg mt-2">
            {product.description || "Night Vision Dome Camera for 24/7 security"}
          </p>

          <h2 className="mt-6 font-semibold text-lg text-gray-900">
            Product Details
          </h2>
          <p className="mt-2 text-gray-700 text-sm leading-relaxed">
            {product.details ||
              `The Night Vision Dome Camera is a high-performance security solution designed for 24/7 surveillance. Equipped with advanced infrared technology, it captures clear and detailed footage even in complete darkness. The camera features a durable, weather-resistant dome housing, making it suitable for both indoor and outdoor installations. With its compact design, it blends seamlessly into any environment while providing wide-angle coverage.`}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
  onClick={() => setShowForm(true)}
  className="bg-[#1c3481] text-white px-6 py-3 rounded-md hover:bg-[#2a3b73]"
>
  Get a Quote
</button>
{showForm && <QuoteRequestForm onClose={() => setShowForm(false)} />}

            <button
              onClick={() => addToCart(product)}
              className="bg-[#00baf2] hover:bg-[#4ccaf0] text-white font-semibold py-3 px-6 rounded-md flex items-center gap-2 transition"
            >
              <ShoppingCart /> Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
