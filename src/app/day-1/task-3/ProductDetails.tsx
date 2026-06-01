import { useParams, Link } from "react-router-dom";
import { PRODUCTS } from "./data";

const ProductDetails = () => {
  const { id } = useParams();
  const product = PRODUCTS.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center bg-(--bg-secondary) min-h-screen">
        <h2 className="text-2xl font-bold text-(--text-main)">
          Product not found
        </h2>
        <Link
          to="/day-1/task-3/products"
          className="text-(--accent-primary) hover:underline mt-4 inline-block"
        >
          &larr; Back to Products
        </Link>
      </div>
    );
  }

  return (
    <main className="max-w-7xl mx-auto px-6 py-10 min-h-screen bg-(--bg-secondary)">
      <Link
        to="/day-1/task-3/products"
        className="text-(--text-muted) hover:text-(--text-main) mb-8 inline-flex items-center gap-2 transition-colors"
      >
        &larr; Back to Catalog
      </Link>

      <div className="bg-(--bg-primary) rounded-2xl border border-(--border-main) overflow-hidden shadow-sm flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover min-h-100"
          />
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <span className="text-sm font-bold text-(--accent-primary) uppercase tracking-wider mb-3">
            {product.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold text-(--text-main) mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-light text-(--text-main) mb-6">
            ${product.price.toFixed(2)}
          </p>
          <p className="text-(--text-muted) text-lg leading-relaxed mb-8 border-t border-(--border-main) pt-6">
            {product.description}
          </p>

          <button className="w-full md:w-auto px-8 py-4 bg-(--accent-primary) text-(--text-inverse) rounded-xl font-bold text-lg hover:bg-(--accent-hover) transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200">
            Add to Cart
          </button>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
