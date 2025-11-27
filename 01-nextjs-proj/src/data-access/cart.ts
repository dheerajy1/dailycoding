// src\data-access\cart.ts

import "server-only";

import { cacheTag } from "next/cache";
import type { Cart } from "@/types/carts.types";
import { getRedisClient } from "@/lib/redis";

export async function getCart(): Promise<Cart> {
  "use cache"

  cacheTag('cart'); // Tag: "cart" data is now trackable

  const redis = await getRedisClient();

  const cart = await redis.get("cart"); // string or null
  return cart ? JSON.parse(cart) : []; // convert back to array/object
}

export async function setCart(cart: Cart): Promise<void> {
  const redis = await getRedisClient();
  await redis.set("cart", JSON.stringify(cart));
}
