import { useState } from "react";
import { PRODUCTS } from "./data";
import Products from "./Products";
import ProductDetails from "./ProductDetails";
import Header from "./Header";

const EcommerceIndex = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null,
  );
  const [cartCount, setCartCount] = useState(0);

  const categories = [
    "All",
    ...Array.from(new Set(PRODUCTS.map((p) => p.category))),
  ];

  const handleProductSelect = (id: number) => {
    setSelectedProductId(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleAddToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const handleResetFilters = () => {
    setSelectedProductId(null);
    setSearchQuery("");
    setSelectedCategory("All");
  };

  return (
    <div className="min-h-screen bg-(--shop-bg-main) text-(--shop-text-main) antialiased">
      <Header
        cartCount={cartCount}
        onResetView={handleResetFilters}
        onHomeClick={() => setSelectedProductId(null)}
      />

      {/* --- RECONSTRUCTED HERO BANNER COLLECTION SLIDER --- */}
      {selectedProductId === null && (
        <section className="bg-(--shop-bg-surface) pt-20 pb-16 px-6 relative">
          <div className="max-w-7xl mx-auto text-center relative">
            {/* Header Content Block */}
            <h2 className="font-serif text-5xl md:text-6xl tracking-wide text-(--shop-text-main) mb-6">
              New Collections
            </h2>
            <p className="text-(--shop-text-muted) font-light text-sm md:text-base leading-relaxed max-w-xl mx-auto mb-14 opacity-90">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
              voluptas ut dolorum consequuntur, adipisci repellat! Eveniet
              commodi voluptatem voluptate, eum minima, in suscipit explicabo
              voluptatibus harum, quibusdam ex repellat eaque!
            </p>

            {/* Carousel Slider Mock Row Layout */}
            <div className="relative px-12">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Column Card 1 */}
                <div className="flex flex-col text-left group">
                  <div className="overflow-hidden mb-5 bg-(--shop-bg-muted) rounded-(--shop-radius-card)">
                    <div className="aspect-4/5 w-full bg-neutral-200 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h4 className="font-serif text-lg text-(--shop-text-main) tracking-wider uppercase mb-2">
                    Soft leather jackets
                  </h4>
                  <p className="text-xs text-(--shop-text-muted) leading-relaxed mb-3 max-w-xs font-light">
                    Scelerisque duis aliquam qui lorem ipsum dolor amet,
                    consectetur adipiscing elit.
                  </p>
                  <div>
                    <button className="text-[10px] font-bold tracking-widest uppercase border-b border-(--shop-accent-brand) pb-1 text-(--shop-text-main) hover:text-(--shop-text-muted) hover:border-(--shop-text-muted) transition-colors">
                      Discover Now
                    </button>
                  </div>
                </div>

                {/* Column Card 2 */}
                <div className="flex flex-col text-left group">
                  <div className="overflow-hidden mb-5 bg-(--shop-bg-muted) rounded-(--shop-radius-card)">
                    <div className="aspect-4/5 w-full bg-neutral-300 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h4 className="font-serif text-lg text-(--shop-text-main) tracking-wider uppercase mb-2">
                    Soft leather jackets
                  </h4>
                  <p className="text-xs text-(--shop-text-muted) leading-relaxed mb-3 max-w-xs font-light">
                    Scelerisque duis aliquam qui lorem ipsum dolor amet,
                    consectetur adipiscing elit.
                  </p>
                  <div>
                    <button className="text-[10px] font-bold tracking-widest uppercase border-b border-(--shop-accent-brand) pb-1 text-(--shop-text-main) hover:text-(--shop-text-muted) hover:border-(--shop-text-muted) transition-colors">
                      Discover Now
                    </button>
                  </div>
                </div>

                {/* Column Card 3 */}
                <div className="flex flex-col text-left group">
                  <div className="overflow-hidden mb-5 bg-(--shop-bg-muted) rounded-(--shop-radius-card)">
                    <div className="aspect-4/5 w-full bg-neutral-400 transition-transform duration-700 group-hover:scale-105" />
                  </div>
                  <h4 className="font-serif text-lg text-(--shop-text-main) tracking-wider uppercase mb-2">
                    Soft leather jackets
                  </h4>
                  <p className="text-xs text-(--shop-text-muted) leading-relaxed mb-3 max-w-xs font-light">
                    Scelerisque duis aliquam qui lorem ipsum dolor amet,
                    consectetur adipiscing elit.
                  </p>
                  <div>
                    <button className="text-[10px] font-bold tracking-widest uppercase border-b border-(--shop-accent-brand) pb-1 text-(--shop-text-main) hover:text-(--shop-text-muted) hover:border-(--shop-text-muted) transition-colors">
                      Discover Now
                    </button>
                  </div>
                </div>
              </div>

              {/* Left Arrow Icon */}
              <button className="absolute left-0 top-1/3 transform -translate-y-1/2 w-12 h-12 rounded-(--shop-radius-badge) border border-(--shop-border-main) flex items-center justify-center bg-(--shop-bg-surface) text-(--shop-text-muted) hover:text-(--shop-text-main) transition-colors">
                ←
              </button>

              {/* Right Arrow Icon */}
              <button className="absolute right-0 top-1/3 transform -translate-y-1/2 w-12 h-12 rounded-(--shop-radius-badge) border border-(--shop-border-main) flex items-center justify-center bg-(--shop-bg-surface) text-(--shop-text-muted) hover:text-(--shop-text-main) transition-colors">
                →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* --- MAIN DYNAMIC APPLICATION FRAME VIEWPORT --- */}
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

      {/* --- STANDALONE HIGH-END BOUTIQUE FOOTER --- */}
      <footer className="bg-(--shop-bg-surface) border-t border-(--shop-border-main) mt-20 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center text-xs tracking-widest text-(--shop-text-muted) uppercase">
          &copy; {new Date().getFullYear()} Kaira. All layout rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default EcommerceIndex;
