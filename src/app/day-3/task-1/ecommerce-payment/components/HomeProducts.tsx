import { useQuery } from "@tanstack/react-query";

interface Product {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  description: string;
}

interface HomeProductsProps {
  onAddToCart: (product: any) => void;
  cartCount?: number;
}

export default function HomeProducts({ onAddToCart }: HomeProductsProps) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["dummyProducts"],
    queryFn: async () => {
      const res = await fetch("https://dummyjson.com/products?limit=8");
      if (!res.ok) throw new Error("Network failed to pull products catalog");
      const json = await res.json();
      return json.products as Product[];
    },
  });

  return (
    <div className="bg-(--bg-normal) p-(--space-6) rounded-md border border-(--border-main)">
      <div className="flex justify-between items-center mb-(--space-6) border-b border-(--border-main) pb-(--space-4)">
        <div>
          <h2 className="text-2xl font-bold text-(--text-main)">
            Home Route UI
          </h2>
          <p className="text-xs text-(--text-muted)">
            Live API Storefront entries
          </p>
        </div>
        {/* <button
          type="button"
          onClick={() => navigate("/day-3/task-1/ecommerce-payment/cart")}
          className="bg-(--bg-secondary) hover:bg-(--border-main) text-(--text-main) text-sm font-semibold py-(--space-2) px-(--space-4) rounded-sm flex items-center space-x-(--space-2)"
        >
          <span>🛒 View Cart</span>
          <span className="bg-(--accent-alt) text-(--text-inverse) text-xs px-(--space-2) py-0.5 rounded-full">
            {cartCount}
          </span>
        </button> */}
      </div>

      {isLoading && (
        <div className="text-center py-(--space-8) text-sm text-(--text-muted)">
          Fetching product array from live stream...
        </div>
      )}

      {error && (
        <div className="text-center py-(--space-8) text-sm text-(--accent-warning)">
          Failed to compile network data asset.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-(--space-4)">
        {data?.map((product) => (
          <div
            key={product.id}
            className="border border-(--border-main) rounded-md p-(--space-4) flex flex-col justify-between space-y-(--space-3) bg-(--bg-primary)"
          >
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-(--space-24) object-cover rounded-sm bg-(--bg-secondary)"
            />
            <div>
              <h3 className="font-bold text-sm text-(--text-main)">
                {product.title}
              </h3>
              <p className="text-xs text-(--text-muted) mt-0.5 line-clamp-2">
                {product.description}
              </p>
            </div>
            <div className="flex items-center justify-between pt-(--space-2)">
              <span className="font-bold text-(--accent-alt) text-sm">
                ${product.price}
              </span>
              <button
                type="button"
                onClick={() => onAddToCart(product)}
                className="bg-(--text-main) hover:opacity-90 text-(--text-inverse) text-xs font-medium py-(--space-2) px-(--space-3) rounded-sm"
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
