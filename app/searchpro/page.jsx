"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import products from "../data/products";

// Optional: import your MobX cart store if you have one
// import { useCartStore } from "../store/cart"; // Example path

export default function SearchProPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  // const cartStore = useCartStore(); // if you're using MobX
  const addToCart = (item) => {
    console.log("Add to cart:", item.name);
    // cartStore.addItem(item); // Uncomment this if using MobX or similar
  };

  const results = query
    ? products.filter((product) =>
        product.name.toLowerCase().includes(query)
      )
    : products;

  return (
    <section className="px-6 md:px-20 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        {query ? `Search results for: "${query}"`: "All Vegetables"}
      </h2>

      {results.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {results.map((item) => (
            <div
              key={item.name}
              className="p-4 border border-neutral-50 rounded-xl text-center shadow-md hover:scale-105 hover:border-green-500 transition-transform duration-300 flex flex-col justify-between"
            >
              <img
                src={item.image}
                alt={item.name}
                className="mx-auto h-28 w-28 object-contain mb-4"
              />
              <h3 className="font-semibold text-lg">{item.name}</h3>
              <p className="text-sm text-gray-600 mb-3">{item.price}</p>
              <button
                className="mt-auto bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
                onClick={() => addToCart(item)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No products found.</p>
      )}
    </section>
  );
}