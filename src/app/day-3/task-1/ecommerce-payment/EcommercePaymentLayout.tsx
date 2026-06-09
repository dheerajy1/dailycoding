import { Outlet } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import { CartProvider } from "./context/CartContext";
import { AuthProvider } from "./middleware/auth";
import Navbar from "./components/Navbar";
import { useCart } from "./context/CartContext";

const queryClient = new QueryClient();

function EcommercePaymentShell() {
  const { cartCount } = useCart();

  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet />
    </>
  );
}

export default function EcommercePaymentLayout() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <CartProvider>
          <EcommercePaymentShell />
          <Toaster />
        </CartProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
