import { useNavigate } from "react-router-dom";
import { useCart } from "./context/CartContext";

export default function OrderConfirmationPage() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const handleContinue = () => {
    clearCart();

    navigate("/day-3/task-1/ecommerce-payment", {
      replace: true,
    });
  };

  return (
    <div className="min-h-screen bg-(--bg-primary) flex items-center justify-center p-6">
      <div className="max-w-2xl w-full">
        <div className="bg-(--bg-normal) border border-(--border-main) rounded-3xl p-10 text-center">
          <div className="w-24 h-24 rounded-full bg-green-500/15 border border-green-500/20 flex items-center justify-center mx-auto mb-8">
            <span className="text-5xl">✓</span>
          </div>

          <h1 className="text-4xl font-bold text-(--text-main)">
            Payment Successful
          </h1>

          <p className="text-(--text-muted) mt-4 max-w-lg mx-auto">
            Your order has been placed successfully and is now being processed.
          </p>

          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <div className="border border-(--border-main) rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-(--text-muted)">
                Order ID
              </p>

              <p className="font-semibold mt-2">ORD-2026-001</p>
            </div>

            <div className="border border-(--border-main) rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-(--text-muted)">
                Status
              </p>

              <p className="font-semibold text-green-400 mt-2">Confirmed</p>
            </div>

            <div className="border border-(--border-main) rounded-xl p-4">
              <p className="text-xs uppercase tracking-wider text-(--text-muted)">
                Delivery
              </p>

              <p className="font-semibold mt-2">2-4 Days</p>
            </div>
          </div>

          <div className="mt-8 border border-(--border-main) rounded-2xl p-6 text-left">
            <h2 className="font-semibold mb-4">Order Timeline</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />

                <span className="text-sm">Order placed successfully</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-green-500" />

                <span className="text-sm">Payment verified</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-(--border-main)" />

                <span className="text-sm text-(--text-muted)">
                  Preparing shipment
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-(--border-main)" />

                <span className="text-sm text-(--text-muted)">
                  Out for delivery
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button
              type="button"
              onClick={handleContinue}
              className="flex-1 bg-white text-black py-4 rounded-xl font-semibold hover:opacity-90 transition-opacity"
            >
              Continue Shopping
            </button>

            <button
              type="button"
              className="flex-1 border border-(--border-main) py-4 rounded-xl font-semibold hover:bg-(--bg-secondary)"
            >
              Download Invoice
            </button>
          </div>

          <p className="text-xs text-(--text-muted) mt-8">
            A confirmation email has been sent to your registered email address.
          </p>
        </div>
      </div>
    </div>
  );
}
