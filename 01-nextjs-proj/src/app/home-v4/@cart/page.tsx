// src/app/home-v4/@cart/page.tsx

import { getCart } from "@/data-access/cart";
import { ShoppingCart as ShoppingCartIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default async function Page() {

  const data = await getCart();
  const count = data.reduce((sum, item) => sum + item.quantity, 0);

  // test
  console.log(`@cart page.tsx`, count);

  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white">
      <ShoppingCartIcon
        className={cn("h-4 transition-all ease-in-out hover:scale-110", "")}
      />
      {count > 0 && (
        <div className="absolute top-0 right-0 -mt-2 -mr-2 h-4 w-4 rounded-sm bg-blue-600 text-[11px] font-medium text-white">
          {count}
        </div>
      )}
    </div>
  );
}