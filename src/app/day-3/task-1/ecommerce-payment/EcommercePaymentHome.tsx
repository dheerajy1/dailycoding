import { Navigate } from "react-router-dom";

import { useAuth } from "./middleware/auth";
import HomeProducts from "./components/HomeProducts";
import { useCart } from "./context/CartContext";

const signInEndpoint = "/day-3/task-1/ecommerce-payment/signin";

export default function EcommercePaymentHome() {
  const { isAuthenticated } = useAuth();
  const { cartCount, addToCart } = useCart();

  if (!isAuthenticated) {
    const currentPath = window.location.pathname;

    return (
      <Navigate
        to={`${signInEndpoint}?redirect_to=${encodeURIComponent(currentPath)}`}
        replace
      />
    );
  }

  return (
    <div className="min-h-screen bg-(--bg-primary)">

      <main className="py-(--space-8) px-(--space-4)">
        <div className="max-w-4xl mx-auto">
          <HomeProducts onAddToCart={addToCart} cartCount={cartCount} />
        </div>
      </main>
    </div>
  );
}
