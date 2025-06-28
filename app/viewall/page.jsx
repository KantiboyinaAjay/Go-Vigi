"use client";

import products from '../data/products';

export default function ViewAll() {
  return (
    <section className="px-6 md:px-20 py-10">
      <h2 className="text-2xl font-bold mb-6 text-center md:text-left">
        All Vegetables
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {products.map((item) => (
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
              className="mt-auto bg-green-600 cursor-pointer text-white px-4 py-2 rounded hover:bg-green-700 transition-colors"
              onClick={() => console.log(`Add ${item.name} to cart`)}
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}