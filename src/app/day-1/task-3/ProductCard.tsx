import { Link } from "react-router-dom";
import { type Product } from "./data";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-(--bg-primary) border border-(--border-main) rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-5 flex flex-col flex-1">
        <span className="text-xs font-bold text-(--accent-primary) uppercase tracking-wider mb-2">
          {product.category}
        </span>
        <h2 className="text-lg font-semibold text-(--text-main) mb-2 line-clamp-2">
          {product.name}
        </h2>
        <div className="mt-auto flex items-center justify-between">
          <span className="text-xl font-bold text-(--text-main)">
            ${product.price.toFixed(2)}
          </span>
          <Link
            to={`/day-1/task-3/product/${product.id}`}
            className="bg-(--accent-primary) text-(--text-inverse) px-4 py-2 rounded-lg text-sm font-medium hover:bg-(--accent-hover) transition-colors"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;