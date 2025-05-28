import { toast } from "react-toastify";
import Productsdata from "../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaCheck } from 'react-icons/fa';


const Products = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    if (!selectedCategory) {
      const shuffled = [...Productsdata].sort(() => 0.5 - Math.random());
      setDisplayProducts(shuffled.slice(0, 8));
    } else {
      const filtered = Productsdata.filter(
        (product) => product.category === selectedCategory
      );
      setDisplayProducts(filtered.slice(0, 8));
    }
  }, [selectedCategory]);

  const handleViewMore = () => {
    navigate(`/category/${selectedCategory}`);
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();
    addToCart(product);
    toast.success("Item added to cart!", {
      icon: (
        <div
          style={{
            backgroundColor: "#1c3481",
            color: "#fff",
            borderRadius: "50%",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <FaCheck size={10} /> 
        </div>
      ),
      className: "custom-toast",
    });
  };


  return (
    <div className="mt-10 p-6 pb-10">
      <h3 className="text-4xl py-3 mx-12 font-bold mb-4 text-center uppercase ">
        {selectedCategory
          ? ` ${selectedCategory} Products`
          : "Best Selling Products"}
      </h3>

      <div className="flex gap-4 justify-center flex-wrap px-7 ">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            className="p-4 shadow hover:shadow-lg transition w-72  cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-3"
            />
            <h3 className="text-md font-semibold mb-1">
              {(product.title || "").split(" ").slice(0, 3).join(" ")}
              {(product.title || "").split(" ").length > 3 && " "}
            </h3>
            <p className="text-md mb-3">
              {(product.description || "").split(" ").slice(0, 4).join(" ")}
              {(product.description || "").split(" ").length > 4 && " "}
            </p>

            <button
              onClick={(e) => handleAddToCart(product, e)}
              className="border border-black text-black py-2 w-full rounded hover:bg-[#1c3481] hover:text-white transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {selectedCategory && displayProducts.length > 0 && (
        <div className="flex justify-center w-full mt-14">
          <button
            onClick={handleViewMore}
            className="border py-2 px-8 rounded bg-[#1c3481] text-white transition duration-300"
          >
            View More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
