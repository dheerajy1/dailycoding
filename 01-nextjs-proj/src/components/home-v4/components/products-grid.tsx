"use client";

import useSWR from "swr";
import { cn } from "@/lib/utils";
import React, { FC, useState, useTransition } from "react";
import { ShoppingCart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { postCart } from "@/app/actions/cart";
import { ProductsResponse } from "@/types";
import { api } from "@/lib/http";
import { toast } from "sonner";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const ProductsGrid: FC<Props> = ({ className, ...props }) => {
  // ---------------------------
  // 1. Setup Transition and State
  // ---------------------------
  const [isPending, startTransition] = useTransition();
  const [addingId, setAddingId] = useState<number | null>(null);

  // ---------------------------
  // SWR Data fetch
  // ---------------------------
  const { data, error, isLoading } = useSWR(
    ["products"],
    async () => (await api.get<ProductsResponse>("/products?limit=10")).data,
    {
      revalidateOnFocus: false,
    },
  );

  if (isLoading) return <div className="p-10">Loading products...</div>;
  if (error || !data)
    return <div className="p-10 text-red-500">Error loading products</div>;

  const { products } = data;

  const handleAddToCart = ({
    productId,
    title,
  }: {
    productId: number;
    title: string;
  }) => {
    // Set the specific ID we are working on to show the loading spinner on just that card
    setAddingId(productId);

    // Wrap the server action in startTransition
    startTransition(async () => {
      try {
        const { success, cart, error } = await postCart({ productId });

        if (error || !success) {
          throw new Error(error || "Failed to add to cart");
        }

        toast.success(
          `Product ${truncateWords({ text: title, limit: 3 })} added to cart!`,
        );
        // test
        console.log("Cart updated:", cart);
      } catch (err: unknown) {
        const msg = err instanceof Error ? err.message : "Something went wrong";
        console.error(msg);
        toast.error(msg);
      }
      // Note: We don't need to manually setAddingId(null) because
      // we check (isPending && addingId === id) in the render.
      // Once isPending becomes false, the loader stops automatically.
    });
  };

  return (
    <div
      className={cn(`overflow-clip rounded-lg border border-black`, className)}
      {...props}
    >
      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 bg-green-100 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => {
          // Check if THIS specific card is the one loading
          // Both conditions must be true: the transition is active AND this is the matching ID
          const isThisItemLoading = isPending && addingId === product.id;

          return (
            <div
              key={product.id}
              className="rounded-lg border bg-white p-3 shadow-sm transition hover:shadow-md"
            >
              <img
                src={product.thumbnail}
                alt={product.title}
                className="aspect-square w-full rounded object-cover"
              />
              <h3 className="mt-2 font-semibold">{product.title}</h3>
              <p className="line-clamp-2 text-sm text-gray-600">
                {product.description}
              </p>

              <div className="mt-2 flex items-center justify-between">
                <span className="font-bold">${product.price}</span>
                <span className="text-xs text-gray-500">
                  ⭐ {product.rating.toFixed(1)}
                </span>
              </div>

              {/* Add to Cart Button */}
              <Button
                variant="default"
                className="mt-3 flex w-full items-center justify-center gap-2 rounded-md bg-blue-600 px-3 py-1 text-white transition hover:bg-blue-700 disabled:opacity-70"
                onClick={() =>
                  handleAddToCart({
                    productId: product.id,
                    title: product.title,
                  })
                }
                disabled={isThisItemLoading} // Only disable if this specific item is loading
              >
                {isThisItemLoading ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Adding...
                  </>
                ) : (
                  <>
                    <ShoppingCart className="h-4 w-4" />
                    Add to Cart
                  </>
                )}
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

interface TruncateWordsProps {
  text: string;
  limit: number;
}

function truncateWords({ text, limit }: TruncateWordsProps) {
  const words = text.split(" ");
  return words.length > limit ? words.slice(0, limit).join(" ") + "..." : text;
}

export { ProductsGrid };
