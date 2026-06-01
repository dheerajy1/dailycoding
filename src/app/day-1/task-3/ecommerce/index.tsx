import { useState } from "react";
import { PRODUCTS } from "./data";
import Products from "./Products";
import ProductDetails from "./ProductDetails";

const EcommerceIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(null);
  const [cartCount, setCartCount] = useState(0);

  // Derive unique categories dynamically from metadata source
  const categories = ["All", ...Array.from(new Set(PRODUCTS.map((p) => p.category)))];

  const handleProductSelect = (id: number) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-(--shop-bg-main) text-(--shop-text-main) font-sans antialiased">
      
      {/* Premium Minimal Global Navigation Header */}
      <header className="sticky top-0 z-40 bg-(--shop-bg-surface) border-b border-(--shop-border-main) backdrop-blur-md bg-opacity-95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-4">
            
            {/* Branding Anchor */}
            <button 
              onClick={() => { setSelectedProductId(null); setSearchQuery(""); setSelectedCategory("All"); }}
              className="text-xl font-black tracking-tight text-(--shop-text-main) hover:opacity-80 transition"
            >
              STUDIO&bull;MARKET
            </button>

            {/* Centered Category Quick-Links Bar (Desktop Only) */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setSelectedCategory(cat); setSelectedProductId(null); }}
                  className={`transition-colors relative py-1 ${
                    selectedCategory === cat 
                      ? "text-(--shop-text-main) font-semibold" 
                      : "text-(--shop-text-muted) hover:text-(--shop-text-main)"
                  }`}
                >
                  {cat}
                  {selectedCategory === cat && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-(--shop-accent-brand)" />
                  )}
                </button>
              ))}
            </nav>

            {/* Shopping Cart Pill Utility */}
            <div className="flex items-center gap-4">
              <button className="relative p-2 text-(--shop-text-main) hover:bg-(--shop-bg-muted) rounded-full transition">
                <span className="text-xl">👜</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-(--shop-accent-sale) text-(--shop-text-inverse) text-[10px] font-bold w-4 h-4 rounded-(--shop-radius-badge) flex items-center justify-center shadow-xs">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Main Dynamic Viewport Frame */}
      {selectedProductId !== null ? (
        <ProductDetails 
          productId={selectedProductId} 
          onBack={() => setSelectedProductId(null)} 
          onAddToCart={handleAddToCart}
        />
      ) : (
        <Products 
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={categories}
          onProductClick={handleProductSelect}
        />
      )}

      {/* High-End Minimalist Footer */}
      <footer className="bg-(--shop-bg-surface) border-t border-(--shop-border-main) mt-20 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-xs text-(--shop-text-muted)">
          &copy; {new Date().getFullYear()} STUDIO&bull;MARKET Inc. All architectural rights reserved.
        </div>
      </footer>

    </div>
  );
};

export default EcommerceIndex;