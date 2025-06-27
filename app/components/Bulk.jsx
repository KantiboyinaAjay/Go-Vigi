export default function Bulk() {
  return (
    <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 py-10">
      <div className="max-w-xl">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Bulk Vegetables<br />at Wholesale Prices
        </h1>
        <p className="text-gray-700 mb-6">
          Delivering fresh vegetables in quantity to PGs, hostels, hotels, and canteens.
        </p>
        <button className="bg-green-600 text-white px-6 py-3 rounded text-lg cursor-pointer">
          PLACE BULK ORDER
        </button>
      </div>
      <img src="/basket.png" alt="Vegetable Basket" className="w-80 h-auto mb-6 md:mb-0" />
    </section>
  );
}
