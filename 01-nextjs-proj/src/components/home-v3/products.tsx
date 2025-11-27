// src\components\home-v2\products.tsx

"use client";

import useSWR from "swr";

import { cn } from "@/lib/utils";
import { FC } from "react";
import { api } from "@/lib/http";
import { ProductsResponse } from "@/types/products.types";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

const Products: FC<Props> = ({ className, ...props }) => {
  // ---------------------------
  // SWR Data fetch
  // ---------------------------

  // data
  const { data, error, isLoading } = useSWR(
    ["products"],
    async () => (await api.get<ProductsResponse>("/products?limit=10")).data,
  );

  if (isLoading) return <div>Loading...</div>;
  if (error || !data) return <div>Error</div>;

  const { products: products } = data;

  return (
    <div
      className={cn(`overflow-clip rounded-lg border border-black`, className)}
      {...props}
    >
      <div className="w-fit p-2">
        <p>Client component using SWR</p>
      </div>
      {/* Products Grid */}
      <div className="grid grid-cols-1 gap-4 bg-green-100 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
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
          </div>
        ))}
      </div>
    </div>
  );
};

export { Products };
