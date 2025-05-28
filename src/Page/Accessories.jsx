import Productsdata from "../Data/ProductData";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import { toast } from "react-toastify";
import { FaCheck } from "react-icons/fa";

const Accessories = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const accessories = Productsdata.filter(
    (product) => product.subcategory?.trim().toLowerCase() === "accessory"
  );

  return (
    <div className="mt-10 p-6 pb-10">
      <h3 className="text-4xl py-3 mx-12 font-bold mb-4 text-center uppercase ">
        Accessory Products
      </h3>

      <div className="flex gap-4 justify-center flex-wrap px-7">
        {accessories.length > 0 ? (
          accessories.map((product) => (
            <div
              key={product.id}
              className="p-4 shadow hover:shadow-lg transition w-72 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain mb-3"
              />
              <h3 className="text-md font-semibold mb-1">
                {(product.title || product.name || "").split(" ").slice(0, 3).join(" ")}
              </h3>
              <p className="text-md mb-3">
                {(product.description || "").split(" ").slice(0, 4).join(" ")}
              </p>

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
                className="border border-black text-black py-2 w-full rounded hover:bg-[#1c3481] hover:text-white transition duration-300"
              >
                Add to Cart
              </button>
            </div>
          ))
        ) : (
          <p className="text-center text-lg text-gray-500 mt-10">No accessories found.</p>
        )}
      </div>
    </div>
  );
};

export default Accessories;
