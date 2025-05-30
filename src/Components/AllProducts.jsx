import { useParams } from "react-router-dom";
import Productsdata from "../Data/ProductData";
import { toast } from "react-toastify"; 
import { FaCheck } from "react-icons/fa"; 
import heroimg from "../Assets/images/hero-section.jpg";
import { motion } from "framer-motion";
import { HiShoppingBag } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";

const AllProductsPage = () => {
  const { categoryName } = useParams();
 const navigate = useNavigate();
  const filteredProducts = Productsdata.filter(
    (product) => product.category === categoryName
  );

  const handleAddToCart = (product) => {
    toast.success(`${product.title} added to cart!`, {
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
    <>
    <div
      className="relative w-full h-[500px] bg-fixed bg-center bg-cover"
      style={{ backgroundImage: `url(${heroimg})` }}
    >
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      <div className="relative z-10 flex flex-col justify-center items-center text-center h-[500px] px-4 font-inter tracking-[2px]">
        
       
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-white text-4xl uppercase mt-28 mb-8"
        >
         Category Product
        </motion.h2>
      </div>
     
    </div>
    <div className="mt-10 px-6 py-10">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase text-gray-800">
        {categoryName} Products
      </h2>

     <div className="flex gap-4 justify-center flex-wrap px-7">
  {filteredProducts.map((product) => (
    <div
      key={product.id}
      className="p-4 border border-gray-200 hover:shadow-lg transition w-72 cursor-pointer"
      onClick={() => navigate(`/product/${product.id}`)}
    >
      <div className="relative h-60 w-full mb-3 bg-white flex items-center justify-center group">
        <img
          src={product.image}
          alt={product.title}
          className="h-full object-contain"
        />

        <button
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product);
          }}
          className="absolute top-2 right-2 bg-gray-200 rounded-full p-2 opacity-0 group-hover:opacity-100 transition duration-300 hover:bg-[#698927] hover:text-white"
          title="Add to Cart"
        >
          <HiShoppingBag />
        </button>
      </div>

      <h3 className="text-base font-inter font-semibold mb-1">
        {(product.title || "").split(" ").slice(0, 3).join(" ")}
        {(product.title || "").split(" ").length > 3 && " "}
      </h3>
      <p className="text-sm text-gray-500">{product.category}</p>
      <p className="text-base mb-3">
        {(product.description || "").split(" ").slice(0, 4).join(" ")}
        {(product.description || "").split(" ").length > 4 && " "}
      </p>
    </div>
  ))}
</div>

    </div>
    </>
  );
};

export default AllProductsPage;
