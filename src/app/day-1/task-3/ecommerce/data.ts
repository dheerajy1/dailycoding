// src/app/day-1/task-3/data.ts
export type Product = {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
  description: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Wireless Noise-Canceling Headphones",
    price: 299.99,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=1170&auto=format&fit=crop",
    description:
      "Premium wireless headphones with active noise cancellation and 30-hour battery life.",
  },
  {
    id: 2,
    name: "Minimalist Mechanical Keyboard",
    price: 129.5,
    category: "Electronics",
    image:
      "https://images.unsplash.com/photo-1595225476474-87563907a212?q=80&w=1171&auto=format&fit=crop",
    description:
      "Sleek mechanical keyboard with tactile switches and customizable RGB backlighting.",
  },
  {
    id: 3,
    name: "Classic Denim Jacket",
    price: 89.99,
    category: "Apparel",
    image:
      "https://images.unsplash.com/photo-1576995853123-5a10305d93c0?q=80&w=1170&auto=format&fit=crop",
    description:
      "Vintage-inspired denim jacket. Perfect for layering in any season.",
  },
  {
    id: 4,
    name: "Smart Fitness Watch",
    price: 199.0,
    category: "Wearables",
    image:
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1099&auto=format&fit=crop",
    description:
      "Track your heart rate, sleep, and workouts with this water-resistant smartwatch.",
  },
];
