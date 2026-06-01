import ProductCard from "./ProductCard";
import { PRODUCTS } from "./data";

type ProductsProps = {
  searchQuery: string;
  setSearchQuery: (value: string) => void;
  selectedCategory: string;
  setSelectedCategory: (value: string) => void;
  categories: string[];
  onProductClick: (id: number) => void;
};

const Products = ({
  searchQuery,
  setSearchQuery,
  selectedCategory,
  setSelectedCategory,
  categories,
  onProductClick,
}: ProductsProps) => {
  // Combine multi-axis matching criteria (Category pill filter + Search text input)
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Dynamic Filter Layout Block */}
      <div className="flex flex-col gap-6 mb-12 pb-8 border-b border-(--shop-border-main)">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-2xl font-black uppercase tracking-wider text-(--shop-text-main)">
              The Collection
            </h1>
            <p className="text-sm text-(--shop-text-muted) mt-1">
              Curated minimal items engineered for modern workspaces.
            </p>
          </div>

          {/* Clean Search Input Container */}
          <div className="relative w-full md:w-80">
            <span className="absolute inset-y-0 left-3 flex items-center text-xs pointer-events-none opacity-60">
              🔍
            </span>
            <input
              type="text"
              placeholder="Filter collection..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-sm bg-(--shop-bg-surface) border border-(--shop-border-main) rounded-(--shop-radius-card) outline-none focus:border-(--shop-border-focus) transition-all shadow-xs placeholder:text-(--shop-text-muted)"
            />
          </div>
        </div>

        {/* Mobile/Tablet Inline Quick-Category Horizontal Scroll Tabs */}
        <div className="flex md:hidden items-center gap-2 overflow-x-auto no-scrollbar pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-1.5 whitespace-nowrap text-xs font-medium rounded-(--shop-radius-badge) border transition-all ${
                selectedCategory === cat
                  ? "bg-(--shop-accent-brand) text-(--shop-text-inverse) border-transparent"
                  : "bg-(--shop-bg-surface) text-(--shop-text-muted) border-(--shop-border-main) hover:text-(--shop-text-main)"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid Canvas Execution Frame */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-10">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClick={() => onProductClick(product.id)}
            />
          ))}
        </div>
      ) : (
        /* Empty State */
        <div className="text-center py-24 bg-(--shop-bg-surface) rounded-(--shop-radius-card) border border-(--shop-border-main)">
          <span className="text-3xl mb-3 block opacity-40">📁</span>
          <h3 className="text-base font-bold text-(--shop-text-main) uppercase tracking-wide">
            No items match selection
          </h3>
          <p className="text-xs text-(--shop-text-muted) mt-1 max-w-xs mx-auto">
            Try resetting your active category or typing alternate lookup words.
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-4 px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-(--shop-accent-brand) text-(--shop-text-inverse) rounded-(--shop-radius-card) hover:bg-(--shop-accent-hover) transition"
          >
            Clear Filters
          </button>
        </div>
      )}
    </main>
  );
};

export default Products;
