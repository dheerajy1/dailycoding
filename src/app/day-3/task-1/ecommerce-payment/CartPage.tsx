import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function CartPage() {
  const navigate = useNavigate();

  const { items, removeFromCart } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = items.length > 0 ? 15 : 0;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-(--text-main)">
              Shopping Cart
            </h1>
            <p className="text-sm text-(--text-muted) mt-1">
              Review your items before checkout
            </p>
          </div>

          <button
            type="button"
            onClick={() =>
              navigate("/day-3/task-1/ecommerce-payment")
            }
            className="border border-(--border-main) px-4 py-2 rounded-md text-sm hover:bg-(--bg-secondary)"
          >
            Continue Shopping
          </button>
        </div>

        {items.length === 0 ? (
          <div className="max-w-lg mx-auto text-center border border-(--border-main) rounded-xl p-12 bg-(--bg-normal)">
            <div className="text-6xl mb-4">🛒</div>

            <h2 className="text-2xl font-bold text-(--text-main)">
              Your cart is empty
            </h2>

            <p className="text-(--text-muted) mt-3">
              Browse products and add items to start your order.
            </p>

            <button
              type="button"
              onClick={() =>
                navigate("/day-3/task-1/ecommerce-payment")
              }
              className="mt-6 bg-white text-black px-6 py-3 rounded-md font-medium"
            >
              Explore Products
            </button>
          </div>
        ) : (
          <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
            <div className="space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-(--bg-normal) border border-(--border-main) rounded-xl p-5"
                >
                  <div className="flex gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-24 h-24 rounded-lg object-cover bg-(--bg-secondary)"
                    />

                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold text-lg text-(--text-main)">
                            {item.title}
                          </h3>

                          <p className="text-sm text-(--text-muted) mt-1">
                            Quantity: {item.quantity}
                          </p>

                          <p className="text-sm text-(--text-muted)">
                            Unit Price: ${item.price}
                          </p>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300 text-sm"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="mt-4 pt-4 border-t border-(--border-main)">
                        <p className="font-bold text-lg text-(--text-main)">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div>
              <div className="sticky top-6 bg-(--bg-normal) border border-(--border-main) rounded-xl p-6">
                <h2 className="text-xl font-bold text-(--text-main) mb-6">
                  Order Summary
                </h2>

                <div className="space-y-4 text-sm">
                  <div className="flex justify-between">
                    <span className="text-(--text-muted)">
                      Subtotal
                    </span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-(--text-muted)">
                      Shipping
                    </span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-(--text-muted)">
                      Tax
                    </span>
                    <span>${tax.toFixed(2)}</span>
                  </div>

                  <div className="border-t border-(--border-main) pt-4 flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    navigate(
                      "/day-3/task-1/ecommerce-payment/checkout",
                    )
                  }
                  className="w-full mt-6 bg-white text-black py-3 rounded-md font-semibold hover:opacity-90"
                >
                  Proceed To Checkout
                </button>

                <p className="text-xs text-center text-(--text-muted) mt-4">
                  Secure checkout protected by encryption
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}