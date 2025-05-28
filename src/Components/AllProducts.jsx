import { useParams } from "react-router-dom";
import Productsdata from "../Data/ProductData";
import { toast } from "react-toastify"; // ✅ Import toast
import { FaCheck } from "react-icons/fa"; // ✅ Optional: Tick icon

const AllProductsPage = () => {
  const { categoryName } = useParams();

  const filteredProducts = Productsdata.filter(
    (product) => product.category === categoryName
  );

  const handleAddToCart = (product) => {
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
  };

  return (
    <div className="mt-10 px-6 pb-10">
      <h2 className="text-4xl font-bold mb-8 text-center uppercase text-gray-800">
        {categoryName} Products
      </h2>

      <div className="flex flex-wrap gap-6 justify-center">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md hover:shadow-xl w-full sm:w-[45%] md:w-[30%] lg:w-[22%] p-4 cursor-pointer"
          >
            <img
              src={product.image}
              alt={product.title}
              className="h-48 w-full object-contain mb-4"
            />
            <h3 className="text-lg font-semibold text-gray-800 mb-1 truncate">
              {product.title.split(" ").slice(0, 4).join(" ")}{" "}
            </h3>
            <p className="text-gray-600 text-sm mb-3 overflow-hidden text-ellipsis">
              {product.description.split(" ").slice(0, 4).join(" ")}{" "}
            </p>

            <button
              onClick={() => handleAddToCart(product)}
              className="border border-black text-black py-2 w-full rounded hover:bg-[#1c3481] hover:text-white transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProductsPage;
