import { useState } from "react";
import ProductCard from "./ProductCard";
import { PRODUCTS } from "./data";

const Products = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = PRODUCTS.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <main className="max-w-7xl mx-auto mt-2 px-6 py-10 min-h-[calc(100vh-72px)] bg-(--bg-secondary)">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div>
          <h1 className="text-3xl font-extrabold text-(--text-main)">
            Latest Products
          </h1>
          <p className="text-(--text-muted) mt-2">
            Find the best gear for your setup.
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative w-full md:w-96">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-4 pr-10 py-3 border border-(--border-main) bg-(--bg-primary) text-(--text-main) rounded-xl outline-none focus:ring-2 focus:ring-(--accent-primary) transition-all shadow-sm"
          />
        </div>
      </div>

      {/* Product Grid / Mapping */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-(--bg-primary) rounded-xl border border-(--border-main)">
          <h3 className="text-xl font-medium text-(--text-main)">
            No products found
          </h3>
          <p className="text-(--text-muted) mt-2">
            Try adjusting your search criteria.
          </p>
        </div>
      )}
    </main>
  );
};

export default Products;
