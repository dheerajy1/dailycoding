import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function CheckoutPage() {
  const navigate = useNavigate();
  const { items } = useCart();

  const subtotal = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );

  const shipping = 15;
  const tax = subtotal * 0.18;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-(--text-main)">Checkout</h1>

          <p className="text-(--text-muted) mt-2">
            Review your order before payment
          </p>
        </div>

        <div className="flex items-center justify-center mb-10">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                ✓
              </div>
              <span>Cart</span>
            </div>

            <div className="w-16 h-px bg-green-500" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                2
              </div>
              <span>Checkout</span>
            </div>

            <div className="w-16 h-px bg-(--border-main)" />

            <div className="flex items-center gap-2 opacity-50">
              <div className="w-8 h-8 rounded-full border border-(--border-main) flex items-center justify-center">
                3
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="space-y-6">
            <div className="bg-(--bg-normal) border border-(--border-main) rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">
                Shipping Information
              </h2>

              <div className="space-y-2 text-sm">
                <p className="font-medium">John Doe</p>
                <p className="text-(--text-muted)">221B Baker Street</p>
                <p className="text-(--text-muted)">London, United Kingdom</p>
                <p className="text-(--text-muted)">+44 123 456 7890</p>
              </div>
            </div>

            <div className="bg-(--bg-normal) border border-(--border-main) rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Payment Method</h2>

              <div className="border border-(--border-main) rounded-lg p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium">Visa Ending in 4242</p>

                  <p className="text-sm text-(--text-muted)">
                    Default payment method
                  </p>
                </div>

                <span className="text-green-400 text-sm">Active</span>
              </div>
            </div>

            <div className="bg-(--bg-normal) border border-(--border-main) rounded-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Order Items</h2>

              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center gap-4">
                    <img
                      src={item.thumbnail}
                      alt={item.title}
                      className="w-16 h-16 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <p className="font-medium">{item.title}</p>

                      <p className="text-sm text-(--text-muted)">
                        Qty {item.quantity}
                      </p>
                    </div>

                    <p className="font-semibold">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="sticky top-6 bg-(--bg-normal) border border-(--border-main) rounded-xl p-6">
              <h2 className="text-xl font-bold mb-6">Order Summary</h2>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between">
                  <span className="text-(--text-muted)">Subtotal</span>

                  <span>${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-(--text-muted)">Shipping</span>

                  <span>${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-(--text-muted)">Tax</span>

                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-(--border-main) pt-4 flex justify-between text-lg font-bold">
                  <span>Total</span>

                  <span>${total.toFixed(2)}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  navigate("/day-3/task-1/ecommerce-payment/payment")
                }
                className="w-full mt-6 bg-white text-black py-3 rounded-md font-semibold hover:opacity-90"
              >
                Continue To Payment
              </button>

              <p className="text-xs text-center text-(--text-muted) mt-4">
                Secure checkout protected with SSL encryption
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
