"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import { useCart } from "../context/CartContext";
import Image from "next/image";
import { Button, Card } from "react-bootstrap";

export default function Home() {
  const [products, setProducts] = useState([]);
  const { cartItems, addItem, removeItem } = useCart();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get("https://fakestoreapi.com/products");
      setProducts(response.data);
    };
    fetchProducts();
  }, []);

  const truncateTitle = (title, maxLength = 20) => {
    return title.length > maxLength ? `${title.slice(0, maxLength)}...` : title;
  };

  return (
    <div className="flex mx-20">
      <div className="w-3/4 pr-4">
        <div>
          <div className="flex justify-between">
            <h1>Our All Products</h1>
            <div className="flex gap-2">
              <span>Grid</span>
              <span>List</span>
            </div>
          </div>
          <div>
            <input
              type="text"
              placeholder="Search An Item"
              className="border-2 w-full rounded-xl h-10"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-16">
          {products.map((product) => (
            <Card
              key={product.id}
              style={
                ({ width: "18rem" }, { height: "30rem" }, { border: "none" })
              }
            >
              <Card.Img
                variant="top"
                src={product.image}
                className="h-50 w-15"
              />
              <Card.Body>
                <div className="mb-4">
                  <Card.Title>{truncateTitle(product.title)}</Card.Title>
                </div>
                <p>{product.rating.rate}</p>
                <p className="text-gray-400">
                  ({product.rating.count} Reviews)
                </p>
                <div className="flex justify-between items-center relative bottom-1">
                  <p className="text-lg text-red-600 font-bold">
                    ${product.price}
                  </p>
                  <Button onClick={() => addItem(product)} variant="dark">
                    Add To Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <div className="w-1/4 pl-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty</p>
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
    </div>
  );
}
