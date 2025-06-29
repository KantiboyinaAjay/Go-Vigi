'use client';

import { useCart } from '../cartpro/CartContext';
import { useRouter } from 'next/navigation';

export default function CartPage() {
  const { cartItems, addToCart, removeFromCart, decreaseQuantity, incrementQuantity} = useCart();
  const router = useRouter();

  const totalPrice = cartItems.reduce(
    (total, item) => total + parseFloat(item.price) * item.quantity,
    0
  );

  const handleCheckout = () => {
    // You can replace this with actual navigation or payment logic
    router.push('/checkout'); // Make sure this route exists
  };

  return (
    <div className="px-6 md:px-20 py-10">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-600">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {cartItems.map((item) => (
            <div
              key={item.name}
              className="flex items-center justify-between border-b pb-4"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 object-contain"
                />
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-500">₹{(item.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <button
                  onClick={() => decreaseQuantity(item)}
                  className="bg-gray-200 px-2 rounded"
                >
                  -
                </button>
                <span>{item.quantity} kg</span>
                <button
                  onClick={() => incrementQuantity(item)}
                  className="bg-gray-200 px-2 rounded"
                >
                  +
                </button>
                <button
                  onClick={() => removeFromCart(item)}
                  className="text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}

          {/* Total and Checkout */}
          <div className="text-right space-y-4 mt-6">
            <div className="text-lg font-semibold">
              Total: ₹{totalPrice.toFixed(2)}
            </div>
            <button
              className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-lg transition-colors"
              onClick={handleCheckout}
            >
              Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
