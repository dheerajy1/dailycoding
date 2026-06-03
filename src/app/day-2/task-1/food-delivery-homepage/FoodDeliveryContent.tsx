import { useState } from "react";
import { DATA } from "./data";
import { useCart } from "./context/CartContext";

type FoodDeliveryContentProps = {
  search: string;
  setSearch: (value: string) => void;
};

const FoodDeliveryContent = ({
  search,
  setSearch,
}: FoodDeliveryContentProps) => {
  const { addToCart, cart, updateQuantity } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");

  // 1. Extract Unique Categories dynamically
  const categories = ["All", ...new Set(DATA.map((item) => item.category))];

  // 2. Filter data by search query AND selected category pill
  const filteredRestaurants = DATA.filter((restaurant) => {
    const matchesSearch =
      restaurant.name.toLowerCase().includes(search.toLowerCase()) ||
      restaurant.menu.some((dish) =>
        dish.name.toLowerCase().includes(search.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === "All" || restaurant.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="p-6 lg:p-8 flex-1 overflow-y-auto max-w-7xl mx-auto w-full">
      {/* Hero Banner Section */}
      <div className="relative bg-linear-to-r from-(--food-accent-gradient-start) to-(--food-accent-gradient-end) rounded-(--food-radius-main) p-8 lg:p-12 text-white shadow-lg mb-10 overflow-hidden">
        <div className="relative z-10 md:w-2/3">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
            Craving something delicious?
          </h1>
          <p className="text-(--food-text-hero-muted) text-lg mb-6 max-w-md">
            Get your favorite meals delivered fast straight to your door. Fresh,
            hot, and right on time.
          </p>
        </div>
      </div>

      {/* Dynamic Food Categories Section */}
      <div className="mb-8">
        <h3 className="text-lg font-bold text-(--food-text-main) mb-3">
          Food Categories
        </h3>
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === cat
                  ? "bg-(--food-accent-brand) text-white shadow-sm"
                  : "bg-(--food-bg-surface) text-(--food-text-muted) border border-(--food-border-light) hover:bg-(--food-border-light)"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Synchronized Search Input Field */}
      <div className="relative mb-8 max-w-xl">
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-(--food-text-muted)">
          🔍
        </span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="text"
          placeholder="Search for restaurants or specific dishes..."
          className="w-full pl-10 pr-4 py-3 border border-(--food-border-main) rounded-(--food-radius-input) outline-none focus:ring-2 focus:ring-(--food-accent-brand) focus:border-transparent shadow-sm transition"
        />
      </div>

      {/* Restaurant & Menus Grid Display */}
      {filteredRestaurants.length > 0 ? (
        <div className="space-y-12">
          {filteredRestaurants.map((restaurant) => (
            <div
              key={restaurant.id}
              className="border-b border-(--food-border-light) pb-8 last:border-0"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-16 h-16 object-cover rounded-xl"
                />
                <div>
                  <h2 className="text-xl font-bold text-(--food-text-main)">
                    {restaurant.name}
                  </h2>
                  <p className="text-xs text-(--food-text-muted)">
                    {restaurant.category} • ⭐ 4.5 • 20-30 min
                  </p>
                </div>
              </div>

              {/* Dish Items inside Restaurant */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {restaurant.menu.map((dish) => {
                  const cartItem = cart.find((item) => item.id === dish.id);
                  return (
                    <div
                      key={dish.id}
                      className="bg-(--food-bg-surface) p-4 border border-(--food-border-light) rounded-(--food-radius-main) flex justify-between items-center gap-4 shadow-xs"
                    >
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-(--food-text-main)">
                          {dish.name}
                        </h4>
                        <p className="text-(--food-accent-brand) font-bold text-sm mt-1">
                          ₹{dish.price}
                        </p>
                      </div>
                      <div className="flex flex-col items-center gap-2">
                        {cartItem ? (
                          <div className="flex items-center bg-(--food-accent-brand) text-white rounded-full overflow-hidden text-xs">
                            <button
                              onClick={() =>
                                updateQuantity(dish.id, cartItem.quantity - 1)
                              }
                              className="px-3 py-1 font-bold hover:bg-black/10"
                            >
                              -
                            </button>
                            <span className="px-1 font-bold">
                              {cartItem.quantity}
                            </span>
                            <button
                              onClick={() =>
                                updateQuantity(dish.id, cartItem.quantity + 1)
                              }
                              className="px-3 py-1 font-bold hover:bg-black/10"
                            >
                              +
                            </button>
                          </div>
                        ) : (
                          <button
                            onClick={() => addToCart(dish)}
                            className="bg-(--food-bg-surface) text-(--food-accent-brand) border border-(--food-accent-brand) hover:bg-(--food-accent-brand) hover:text-white px-4 py-1 rounded-full text-xs font-bold transition-colors shadow-xs"
                          >
                            Add +
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12 bg-(--food-bg-surface) rounded-(--food-radius-main) border border-(--food-border-light)">
          <span className="text-4xl mb-4 block">🍽️</span>
          <h3 className="text-lg font-medium text-(--food-text-dark)">
            No results found
          </h3>
          <p className="text-(--food-text-muted) mt-1">
            Try adjusting your category filters or search text.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodDeliveryContent;
