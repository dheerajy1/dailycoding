"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";

import Link from "next/link";
import { Suspense } from "react";

import { Menu as Bars3Icon, X as XMarkIcon } from "lucide-react";
import { Menu } from "@/types/global";

import Search, { SearchSkeleton } from "@/components/layout/navbar/search";

export default function MobileMenu({ menu }: { menu: Menu[] }) {
  return (
    <Sheet>
      <SheetTrigger
        aria-label="Open mobile menu"
        className="flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors md:hidden dark:border-neutral-700 dark:text-white"
      >
        <Bars3Icon className="h-4" />
      </SheetTrigger>
      <SheetContent>
        <div className="p-4">
          <SheetClose
            className="mb-4 flex h-11 w-11 items-center justify-center rounded-md border border-neutral-200 text-black transition-colors dark:border-neutral-700 dark:text-white"
            aria-label="Close mobile menu"
          >
            <XMarkIcon className="h-6" />
          </SheetClose>

          <div className="mb-4 w-full">
            <Suspense fallback={<SearchSkeleton />}>
              <Search />
            </Suspense>
          </div>
          {menu.length ? (
            <ul className="flex w-full flex-col">
              {menu.map((item: Menu) => (
                <li
                  className="py-2 text-xl text-black transition-colors hover:text-neutral-500 dark:text-white"
                  key={item.title}
                >
                  <Link href={item.path} prefetch={true}>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </SheetContent>
    </Sheet>
  );
}
