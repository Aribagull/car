import { toast } from "react-toastify";
import Productsdata from "../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useCart } from "../Context/CartContext";
import { FaCheck } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";

const Products = ({ selectedCategory }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [displayProducts, setDisplayProducts] = useState([]);

  useEffect(() => {
    if (!selectedCategory) {
      const shuffled = [...Productsdata].sort(() => 0.5 - Math.random());
      setDisplayProducts(shuffled.slice(0, 4));
    } else {
      const filtered = Productsdata.filter(
        (product) => product.category === selectedCategory
      );
      setDisplayProducts(filtered.slice(0, 4));
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
            backgroundColor: "#698927",
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
    <div className="mt-10 p-4 sm:p-6 pb-16">
      <div className="flex flex-row sm:flex-row justify-between items-center mb-6 px-4 sm:px-20 gap-4 sm:gap-0">
        <h3 className="text-2xl sm:text-4xl font-bold uppercase text-center sm:text-left">
          {selectedCategory ? selectedCategory : "Best Selling Products"}
        </h3>

        {selectedCategory && displayProducts.length > 0 && (
          <button
            onClick={handleViewMore}
            className="border py-2 px-6 rounded-full text-black text-sm hover:bg-[#698927] hover:text-white transition duration-300"
          >
            View More Products
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 px-4 sm:px-7">
        {displayProducts.map((product) => (
          <div
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="border border-gray-200 hover:shadow-lg transition cursor-pointer w-full sm:w-72"
          >
            <div className="relative h-60 w-full mb-3 bg-white flex items-center justify-center group">
              <img
                src={product.image}
                alt={product.title}
                className="h-full object-cover"
              />

              <button
                onClick={(e) => handleAddToCart(product, e)}
                className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#698927] hover:text-white"
                title="Add to Cart"
              >
                <HiShoppingBag />
              </button>
            </div>
           <div className="p-3">
            <h3 className="text-base font-inter font-semibold mb-1 truncate">
              {(product.title || "").split(" ").slice(0, 3).join(" ")}
              {(product.title || "").split(" ").length > 3 && " "}
            </h3>
            <p className="text-sm text-gray-500 truncate">{product.category}</p>
            <p className="text-sm mb-3 truncate">
              {(product.description || "").split(" ").slice(0, 4).join(" ")}
              {(product.description || "").split(" ").length > 4 && " "}
            </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
