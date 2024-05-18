"use client";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cartItems, addItem, removeItem } = useCart();

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="border rounded-lg p-4 shadow-md mb-4">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-gray-600">${item.price}</p>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => removeItem(item.id)}
            >
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}
