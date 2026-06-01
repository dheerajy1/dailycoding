import { type Product } from "./data";

type ProductCardProps = {
  product: Product;
  onClick: () => void;
};

const ProductCard = ({ product, onClick }: ProductCardProps) => {
  return (
    <div
      onClick={onClick}
      className="bg-(--shop-bg-surface) border border-(--shop-border-main) rounded-(--shop-radius-card) overflow-hidden group cursor-pointer flex flex-col transition-all duration-300 hover:shadow-md"
    >
      {/* Editorial Vertical Image Frame */}
      <div className="relative w-full aspect-4/5 bg-(--shop-bg-muted) overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
        />
        {/* Subtle Luxury Overlay Badge */}
        <span className="absolute top-3 left-3 bg-(--shop-bg-surface) text-(--shop-text-main) text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-(--shop-radius-card) shadow-xs border border-(--shop-border-main)">
          {product.category}
        </span>
      </div>

      {/* Description Content Block */}
      <div className="p-4 flex flex-col flex-1">
        <h3 className="text-sm font-bold text-(--shop-text-main) tracking-tight line-clamp-1 mb-1 group-hover:opacity-70 transition-opacity">
          {product.name}
        </h3>

        <p className="text-xs text-(--shop-text-muted) line-clamp-2 leading-relaxed mb-4">
          {product.description}
        </p>

        {/* Action Row */}
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-(--shop-border-main)">
          <span className="text-sm font-black text-(--shop-text-main)">
            ${product.price.toFixed(2)}
          </span>

          <button
            type="button"
            className="text-xs font-bold uppercase tracking-wider text-(--shop-text-main) group-hover:text-(--shop-text-muted) transition-colors flex items-center gap-1"
          >
            View Item{" "}
            <span className="transform group-hover:translate-x-0.5 transition-transform">
              &rarr;
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
