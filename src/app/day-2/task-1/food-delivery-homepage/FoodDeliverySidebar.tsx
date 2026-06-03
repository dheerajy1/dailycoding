import { useCart } from "./context/CartContext";

type FoodDeliverySidebarProps = {
  isSidebarOpen: boolean;
  onClose: () => void;
};

const FoodDeliverySidebar = ({
  isSidebarOpen,
  onClose,
}: FoodDeliverySidebarProps) => {
  const { cart, updateQuantity, cartTotal, clearCart } = useCart();

  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar Layout Panel */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-(--food-sidebar-width) bg-(--food-bg-surface) shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Header Branding Container */}
          <div className="p-6 border-b border-(--food-border-light) flex justify-between items-center lg:block">
            <h2 className="text-2xl font-extrabold text-(--food-accent-brand) tracking-tight">
              FoodieExpress
            </h2>
            <button
              onClick={onClose}
              className="lg:hidden text-(--food-text-muted) text-2xl"
            >
              &times;
            </button>
          </div>

          {/* Primary Sidebar Navigation */}
          <nav className="p-6 flex flex-col gap-3 text-(--food-text-nav) border-b border-(--food-border-light)">
            <a
              href="#"
              className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors"
            >
              🏠 Home
            </a>
            <a
              href="#"
              className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors"
            >
              🔥 Trending
            </a>
          </nav>

          {/* Real-time Integrated Cart Feature */}
          <div className="flex-1 p-6 flex flex-col min-h-0 bg-black/5">
            <div className="flex justify-between items-center mb-3">
              <h3 className="font-bold text-sm text-(--food-text-main) flex items-center gap-2">
                🛒 My Cart <span>({cart.length})</span>
              </h3>
              {cart.length > 0 && (
                <button
                  onClick={clearCart}
                  className="text-xs text-red-500 hover:underline font-medium"
                >
                  Clear All
                </button>
              )}
            </div>

            {/* Cart Items List */}
            <div className="flex-1 overflow-y-auto space-y-3 pr-1">
              {cart.length > 0 ? (
                cart.map((item) => (
                  <div
                    key={item.id}
                    className="bg-(--food-bg-surface) p-3 rounded-xl border border-(--food-border-light) shadow-xs flex flex-col gap-2"
                  >
                    <div className="flex justify-between items-start gap-1">
                      <span className="text-xs font-semibold text-(--food-text-main) line-clamp-2">
                        {item.name}
                      </span>
                      <span className="text-xs font-bold text-(--food-accent-brand) whitespace-nowrap">
                        ₹{item.price * item.quantity}
                      </span>
                    </div>
                    <div className="flex justify-end items-center gap-2">
                      <div className="flex items-center bg-(--food-accent-brand) text-white rounded-md overflow-hidden text-[10px]">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="px-2 py-0.5 font-bold hover:bg-black/10"
                        >
                          -
                        </button>
                        <span className="px-1.5 font-bold">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="px-2 py-0.5 font-bold hover:bg-black/10"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-xs text-(--food-text-muted)">
                  Your cart is empty.
                  <br />
                  Add delicious items to start!
                </div>
              )}
            </div>

            {/* Total Calculations Panel */}
            {cart.length > 0 && (
              <div className="pt-3 border-t border-(--food-border-light) mt-3">
                <div className="flex justify-between items-center text-sm mb-3">
                  <span className="font-medium text-(--food-text-muted)">
                    Total Amount:
                  </span>
                  <span className="font-extrabold text-(--food-accent-brand) text-base">
                    ₹{cartTotal}
                  </span>
                </div>
                <button className="w-full bg-(--food-accent-brand) text-white font-bold py-2 rounded-xl text-xs hover:opacity-90 transition shadow-sm">
                  Checkout Now &rarr;
                </button>
              </div>
            )}
          </div>

          {/* Sidebar Footer Panel */}
          <div className="p-6 border-t border-(--food-border-light)">
            <a
              href="#"
              className="flex items-center gap-3 hover:text-(--food-accent-brand) font-medium transition-colors text-(--food-text-nav)"
            >
              ⚙️ Settings
            </a>
          </div>
        </div>
      </aside>
    </>
  );
};

export default FoodDeliverySidebar;
