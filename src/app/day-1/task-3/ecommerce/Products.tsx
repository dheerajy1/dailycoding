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
  const filteredProducts = PRODUCTS.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full bg-(--shop-bg-main)">
      {/* --- BILLBOARD HERO SLIDER BANNER SECTION --- */}
      <section className="bg-(--shop-bg-muted) py-20 px-4 border-b border-(--shop-border-main) text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl tracking-wide text-(--shop-text-main) uppercase mb-4">
            New Collections
          </h1>
          <p className="text-(--shop-text-muted) font-light text-sm md:text-base leading-relaxed max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe
            voluptas ut dolorum consequuntur, adipisci repellat! Eveniet commodi
            voluptatem voluptate, eum minima, in suscipit explicabo.
          </p>
        </div>
      </section>

      {/* --- KAIRA FEATURE UTILITIES CORE MATRIX --- */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center border-b border-(--shop-border-main)">
        <div className="flex flex-col items-center p-4">
          <span className="text-2xl text-(--shop-text-main) mb-3">📅</span>
          <h4 className="font-serif text-lg text-(--shop-text-main) uppercase tracking-wider mb-2">
            Book An Appointment
          </h4>
          <p className="text-xs text-(--shop-text-muted) leading-relaxed max-w-xs">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <span className="text-2xl text-(--shop-text-main) mb-3">🛍️</span>
          <h4 className="font-serif text-lg text-(--shop-text-main) uppercase tracking-wider mb-2">
            Pick up in store
          </h4>
          <p className="text-xs text-(--shop-text-muted) leading-relaxed max-w-xs">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <span className="text-2xl text-(--shop-text-main) mb-3">🎁</span>
          <h4 className="font-serif text-lg text-(--shop-text-main) uppercase tracking-wider mb-2">
            Special packaging
          </h4>
          <p className="text-xs text-(--shop-text-muted) leading-relaxed max-w-xs">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
        <div className="flex flex-col items-center p-4">
          <span className="text-2xl text-(--shop-text-main) mb-3">🔄</span>
          <h4 className="font-serif text-lg text-(--shop-text-main) uppercase tracking-wider mb-2">
            free global returns
          </h4>
          <p className="text-xs text-(--shop-text-muted) leading-relaxed max-w-xs">
            At imperdiet dui accumsan sit amet nulla risus est ultricies quis.
          </p>
        </div>
      </section>

      {/* --- CATALOG VIEWPORT CANVAS --- */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Header Filters Anchor Grid */}
        <div className="flex flex-col gap-6 mb-12 border-b border-(--shop-border-main) pb-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl tracking-wider text-(--shop-text-main) uppercase">
                Our New Arrivals
              </h2>
            </div>

            {/* Editorial Style Inline Search */}
            <div className="relative w-full sm:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-transparent border-b border-(--shop-border-main) py-1.5 pr-8 text-sm text-(--shop-text-main) placeholder:text-(--shop-text-muted) focus:outline-none focus:border-(--shop-border-focus) rounded-none transition-colors"
              />
              <span className="absolute right-2 top-2 text-sm pointer-events-none opacity-60">
                🔍
              </span>
            </div>
          </div>

          {/* Desktop & Mobile Responsive Category Layout Filter Bar */}
          <div className="flex items-center gap-6 overflow-x-auto no-scrollbar pb-2 text-xs font-medium uppercase tracking-widest border-t border-(--shop-bg-main) pt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`whitespace-nowrap transition-colors relative pb-1 ${
                  selectedCategory === cat
                    ? "text-(--shop-text-main) font-bold"
                    : "text-(--shop-text-muted) hover:text-(--shop-text-main)"
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-(--shop-accent-brand)" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Multi-Grid Viewports Frame */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-6 gap-y-12">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onClick={() => onProductClick(product.id)}
              />
            ))}
          </div>
        ) : (
          /* Premium Empty Layout State Frame */
          <div className="text-center py-24 bg-(--shop-bg-surface) border border-(--shop-border-main) rounded-(--shop-radius-card) max-w-xl mx-auto px-6">
            <span className="text-4xl mb-4 block opacity-30">📂</span>
            <h3 className="font-serif text-lg text-(--shop-text-main) uppercase tracking-wider">
              No items match selection
            </h3>
            <p className="text-xs text-(--shop-text-muted) mt-2 max-w-xs mx-auto leading-relaxed">
              Try resetting your active item category filter criteria or typing
              alternate structural terms.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All");
              }}
              className="mt-6 px-6 py-2.5 text-xs font-medium uppercase tracking-widest bg-(--shop-accent-brand) text-(--shop-text-inverse) hover:bg-(--shop-accent-hover) transition-colors"
            >
              Clear Filters
            </button>
          </div>
        )}
      </main>

      {/* --- CLASSIC WINTER COLLECTION LOOKBOOK BANNER HERO --- */}
      <section className="bg-(--shop-bg-muted) py-16 border-t border-b border-(--shop-border-main)">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-stretch bg-(--shop-bg-surface) border border-(--shop-border-main) overflow-hidden rounded-(--shop-radius-card) shadow-xs">
            <div className="lg:w-1/2 min-h-87.5 bg-(--shop-bg-muted) flex items-center justify-center relative">
              <div className="absolute inset-0 bg-linear-to-tr from-(--shop-border-main) to-(--shop-bg-surface) flex items-center justify-center font-serif text-(--shop-text-muted) uppercase tracking-widest text-sm">
                Editorial Lookbook Frame
              </div>
            </div>
            <div className="lg:w-1/2 p-8 md:p-16 flex flex-col justify-center">
              <span className="text-[11px] font-bold text-(--shop-text-muted) uppercase tracking-widest mb-2">
                Winter Edition
              </span>
              <h3 className="font-serif text-3xl text-(--shop-text-main) uppercase tracking-wide mb-4">
                Classic winter collection
              </h3>
              <p className="text-(--shop-text-muted) font-light text-sm leading-relaxed mb-6">
                Dignissim lacus, turpis ut suspendisse vel tellus. Turpis purus,
                gravida orci, fringilla a. Ac sed eu fringilla odio mi.
                Consequat pharetra at magna imperdiet cursus ac faucibus sit
                libero. Ultricies quam nunc, lorem sit lorem urna.
              </p>
              <div>
                <button className="border-b-2 border-(--shop-accent-brand) pb-1 text-xs font-bold text-(--shop-text-main) uppercase tracking-widest hover:text-(--shop-text-muted) hover:border-(--shop-text-muted) transition-colors">
                  Shop Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
