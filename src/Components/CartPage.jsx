import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import QuoteRequestForm from "./QoutePage";
import { HiShoppingBag } from "react-icons/hi2";

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-4 mt-28 sm:pt-6 sm:pb-16 sm:px-16">
      <Link to="/shop" className="text-sm text-gray-600 flex items-center mb-4">
        ← Back to products
      </Link>

      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center my-32 text-center space-y-2">
          <HiShoppingBag className="w-16 h-16 text-[#698927]" />
          <p className="text-lg text-gray-600">Your cart is empty</p>
          <Link
            to="/shop"
            className="inline-block bg-[#698927] hover:bg-lime-600 text-white font-semibold px-6 py-2 rounded-full transition duration-300"
          >
            Continue Shopping
          </Link>
        </div>
      )  : (
        <div className="bg-white  overflow-hidden p-4 sm:p-5">
          <h2 className="text-xl sm:text-3xl font-bold mb-6">Your Cart</h2>

    
          <div className="hidden sm:grid grid-cols-12 p-2 border-b font-semibold bg-gray-50 text-gray-600">
            <div className="col-span-6">PRODUCT</div>
            <div className="col-span-2 text-center">QUANTITY</div>
            <div className="col-span-4 text-right">ACTIONS</div>
          </div>

          
          {cartItems.map((item, index) => (
            <div
              key={index}
              className="flex flex-col sm:grid sm:grid-cols-12 items-start sm:items-center p-4 border-b gap-4"
            >
              <div className="sm:col-span-6 flex gap-4 items-start">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800 text-sm sm:text-base">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-500">
                    {item.description}
                  </p>
                </div>
              </div>

              <div className="sm:col-span-2 text-sm sm:text-center">1</div>

              <div className="sm:col-span-4 flex sm:justify-end">
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 border border-red-300 hover:bg-red-50 px-3 py-1 rounded-md text-sm"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

       
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4">
            <Link
              to="/shop"
              className="text-sm border px-4 py-2 rounded-md hover:bg-gray-100"
            >
              ← Continue Shopping
            </Link>

            <button
              onClick={() => setShowForm(true)}
              className="bg-[#698927] text-white px-6 py-2 rounded-md hover:bg-[#587222] text-sm"
            >
              Request Quote for All Items
            </button>
          </div>

          {showForm && <QuoteRequestForm onClose={() => setShowForm(false)} />}
        </div>
      )}
    </div>
  );
};

export default CartPage;
