import "server-only";

import { api } from "@/lib/http";
import { ProductsResponse } from "@/types/products.types";

export async function getProducts() {

  const res = await api.get<ProductsResponse>("/products?limit=10");

  return res.data;
}
