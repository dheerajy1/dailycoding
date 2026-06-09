import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function PaymentPage() {
  const navigate = useNavigate();
  const { items } = useCart();
  const [selectedMethod, setSelectedMethod] = useState("visa");
  const handlePayment = () => {
    const total = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0,
    );

    const existingOrders = JSON.parse(localStorage.getItem("orders") || "[]");

    const newOrder = {
      id: `ORD-${Date.now()}`,
      createdAt: new Date().toISOString(),
      total,
      status: "Confirmed",
    };

    localStorage.setItem(
      "orders",
      JSON.stringify([newOrder, ...existingOrders]),
    );

    navigate("/day-3/task-1/ecommerce-payment/order-confirmation");
  };
  return (
    <div className="min-h-screen bg-(--bg-primary) p-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-(--text-main)">Payment</h1>

          <p className="text-(--text-muted) mt-2">
            Complete your purchase securely
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
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center">
                ✓
              </div>
              <span>Checkout</span>
            </div>

            <div className="w-16 h-px bg-green-500" />

            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center font-bold">
                3
              </div>
              <span>Payment</span>
            </div>
          </div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-(--bg-normal) border border-(--border-main) rounded-2xl p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-semibold">Choose Payment Method</h2>

              <div className="text-sm text-green-400">🔒 Secure Payment</div>
            </div>

            <div className="space-y-4">
              <button
                type="button"
                onClick={() => setSelectedMethod("visa")}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  selectedMethod === "visa"
                    ? "border-white bg-(--bg-secondary)"
                    : "border-(--border-main)"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Visa •••• 4242</p>

                    <p className="text-sm text-(--text-muted) mt-1">
                      Expires 08/29
                    </p>
                  </div>

                  {selectedMethod === "visa" && (
                    <div className="text-green-400">✓</div>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("mastercard")}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  selectedMethod === "mastercard"
                    ? "border-white bg-(--bg-secondary)"
                    : "border-(--border-main)"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">Mastercard •••• 8888</p>

                    <p className="text-sm text-(--text-muted) mt-1">
                      Expires 11/28
                    </p>
                  </div>

                  {selectedMethod === "mastercard" && (
                    <div className="text-green-400">✓</div>
                  )}
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod("upi")}
                className={`w-full text-left p-5 rounded-xl border transition-all ${
                  selectedMethod === "upi"
                    ? "border-white bg-(--bg-secondary)"
                    : "border-(--border-main)"
                }`}
              >
                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-semibold">UPI Payment</p>

                    <p className="text-sm text-(--text-muted) mt-1">
                      Pay using any UPI application
                    </p>
                  </div>

                  {selectedMethod === "upi" && (
                    <div className="text-green-400">✓</div>
                  )}
                </div>
              </button>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-(--bg-secondary)">
              <div className="flex items-center justify-between">
                <span className="text-sm text-(--text-muted)">
                  Payment Security
                </span>

                <span className="text-sm text-green-400">
                  256-bit SSL Encryption
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={handlePayment}
              className="w-full mt-8 bg-white text-black py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity"
            >
              Complete Payment
            </button>

            <p className="text-center text-xs text-(--text-muted) mt-4">
              By completing this payment you agree to the terms and conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
