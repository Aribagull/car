import { useCart } from "../Context/CartContext";
import { Link } from "react-router-dom";
import { Trash2 } from "lucide-react";
import React, { useState } from "react";
import QuoteRequestForm from "./QoutePage"; 

const CartPage = () => {
  const { cartItems, removeFromCart } = useCart();
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="p-6">
      <Link to="/shop" className="text-sm text-gray-600 flex items-center mb-4">
        ← Back to products
      </Link>

      {cartItems.length === 0 ? (
        <p className="text-center my-32">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow rounded-lg overflow-hidden p-5">
          <h2 className="text-3xl font-bold mb-6">Your Cart</h2>

          <div className="grid grid-cols-12 p-2 border-b font-semibold bg-gray-50 text-gray-600">
            <div className="col-span-6">PRODUCT</div>
            <div className="col-span-2 text-center">QUANTITY</div>
            <div className="col-span-4 text-right">ACTIONS</div>
          </div>

          {cartItems.map((item, index) => (
            <div key={index} className="grid grid-cols-12 items-center p-4 border-b">
              <div className="col-span-6 flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h3 className="font-semibold text-gray-800">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.description}</p>
                </div>
              </div>

              <div className="col-span-2 text-center">1</div>

              <div className="col-span-4 flex justify-end gap-2">
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-600 border border-red-300 hover:bg-red-50 px-3 py-1 rounded-md"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center p-4">
            <Link
              to="/shop"
              className="flex items-center text-sm border px-4 py-2 rounded-md hover:bg-gray-100"
            >
              ← Continue Shopping
            </Link>
            <button
              onClick={() => setShowForm(true)}
              className="bg-[#1c3481] text-white px-6 py-2 rounded-md hover:bg-[#2a3b73]"
            >
              Request Quote for All Items
            </button>

            {showForm && <QuoteRequestForm onClose={() => setShowForm(false)} />}
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
