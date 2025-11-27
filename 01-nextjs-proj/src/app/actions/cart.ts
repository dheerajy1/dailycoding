// src/app/actions/cart.ts
"use server";

import { revalidatePath, revalidateTag, updateTag } from "next/cache";
import { getCart, setCart } from "@/data-access/cart";
import { Cart } from "@/types";

interface PostCartParams {
  productId: number;
}

export async function postCart({ productId }: PostCartParams): Promise<{
  success: boolean;
  cart?: Cart;
  error?: string;
}> {
  // test
  // if (productId) return { success: true, cart: [] }

  try {
    // Get the existing cart from Redis
    const existingCart = await getCart();

    // Add the new product (if already in cart, increase quantity)
    const productIndex = existingCart.findIndex((p) => p.id === productId);

    if (productIndex !== -1) {
      // product exists, increase quantity
      existingCart[productIndex].quantity += 1;
    } else {
      // new product, push to cart
      existingCart.push({ id: productId, quantity: 1 });
    }

    // Save updated cart to Redis
    await setCart(existingCart);

    // Immediate update: Patch the 'cart' tag and trigger fresh fetch/stream
    // Immediate expire—no background delay
    // Bust Data Cache for 'cart' tag: Fresh getCart() on next render
    updateTag('cart')


    // Return the updated cart
    return { success: true, cart: existingCart };
  } catch (error: unknown) {
    console.error("postCart error:", error);
    const msg = error instanceof Error ? error.message : "Failed to add to cart";
    return { success: false, error: msg };
  }
}