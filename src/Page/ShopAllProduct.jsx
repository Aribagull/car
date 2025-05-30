import Productsdata from "../Data/ProductData";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";
import heroimg from "../Assets/images/hero-section.jpg";
import { motion } from "framer-motion";
import { HiShoppingBag } from "react-icons/hi2";

const ShopAllProducts = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  const searchCategory = queryParams.get("category")?.toLowerCase();

  const filteredProducts = searchCategory
    ? Productsdata.filter(product =>
        product.category.toLowerCase().includes(searchCategory)
      )
    : Productsdata;

  return (
    <>
      <div
        className="relative w-full min-h-[550px] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${heroimg})` }}
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="relative z-10 flex flex-col justify-center items-center  text-center min-h-[550px] py-20 px-4 font-inter tracking-[2px]">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
            className="text-white text-3xl sm:text-5xl font-bold mt-20 uppercase mb-8"
          >
            Shop Products
          </motion.h1>
        </div>
      </div>

      <div className="mt-10 px-12 sm:px-6 pb-10 ">
        <h3 className="text-2xl sm:text-4xl font-bold text-center uppercase mb-6">
  {searchCategory ? `${searchCategory}` : "Products"}
</h3>

        <div className="flex flex-wrap justify-center gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="w-full sm:w-[320px] border border-gray-200 hover:shadow-lg transition cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative h-60 w-full mb-3 bg-white flex items-center justify-center group">
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-full object-cover"
                />
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    addToCart(product);
                    toast.success(`${product.title} added to cart!`, {
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
                  }}
                  className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#698927] hover:text-white"
                  title="Add to Cart"
                >
                  <HiShoppingBag />
                </button>
              </div>

              <div className="px-3">
                <h3 className="text-base font-semibold mb-1">
                  {(product.title || "").split(" ").slice(0, 3).join(" ")}
                  {(product.title || "").split(" ").length > 3 && " "}
                </h3>
                <p className="text-sm text-gray-500">{product.category}</p>
                <p className="text-sm text-gray-700 mb-3">
                  {(product.description || "").split(" ").slice(0, 4).join(" ")}
                  {(product.description || "").split(" ").length > 4 && " "}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ShopAllProducts;
