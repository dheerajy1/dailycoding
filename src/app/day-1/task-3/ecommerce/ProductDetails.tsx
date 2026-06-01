import { PRODUCTS } from "./data";

interface ProductDetailsProps {
  productId: number;
  onBack: () => void;
  onAddToCart: () => void;
}

const ProductDetails = ({
  productId,
  onBack,
  onAddToCart,
}: ProductDetailsProps) => {
  const product = PRODUCTS.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center bg-(--shop-bg-main) min-h-[50vh]">
        <h2 className="text-2xl font-black tracking-tight text-(--shop-text-main)">
          Product not found
        </h2>
        <button
          onClick={onBack}
          className="text-sm font-semibold text-(--shop-accent-brand) hover:opacity-80 transition mt-4 inline-block"
        >
          &larr; Back to Products
        </button>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 min-h-screen bg-(--shop-bg-main)">
      {/* Back Navigation Bar */}
      <button
        onClick={onBack}
        className="text-(--shop-text-muted) hover:text-(--shop-text-main) mb-8 inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        &larr; Back to Catalog
      </button>

      <div className="bg-(--shop-bg-surface) rounded-2xl border border-(--shop-border-main) overflow-hidden shadow-xs flex flex-col md:flex-row">
        {/* Left Aspect-Locked Image Frame */}
        <div className="md:w-1/2 bg-(--shop-bg-muted) flex items-center justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover min-h-100 md:min-h-150"
          />
        </div>

        {/* Right Product Layout Details Panel */}
        <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
          <span className="text-xs font-bold text-(--shop-accent-brand) uppercase tracking-widest mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-black tracking-tight text-(--shop-text-main) mb-4">
            {product.name}
          </h1>
          <p className="text-2xl font-light text-(--shop-text-main) mb-8">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-(--shop-text-muted) text-base leading-relaxed mb-10 border-t border-(--shop-border-main) pt-8">
            {product.description}
          </p>

          <button
            onClick={onAddToCart}
            className="w-full md:w-auto px-10 py-4 bg-(--shop-accent-brand) text-(--shop-text-inverse) rounded-xl font-bold text-sm tracking-wide hover:opacity-90 transition active:scale-[0.98] duration-150 shadow-xs"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
