import { DATA } from "./data";

type FoodDeliveryContentProps = {
  search: string;
  setSearch: (value: string) => void;
};

const FoodDeliveryContent = ({
  search,
  setSearch,
}: FoodDeliveryContentProps) => {
  // Execute real-time filtering from centralized source array
  const filtered = DATA.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase()),
  );

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
          <button className="bg-(--food-bg-surface) text-(--food-accent-brand) font-bold py-3 px-6 rounded-full hover:bg-(--food-border-light) transition shadow-md">
            Explore Menu
          </button>
        </div>
        {/* Decorative SVG Graphic Background */}
        <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 hidden md:block">
          <svg width="300" height="300" fill="currentColor" viewBox="0 0 24 24">
            <path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z" />
          </svg>
        </div>
      </div>

      {/* Header Labels */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-(--food-text-main) mb-2">
          Explore Restaurants
        </h2>
        <p className="text-(--food-text-muted) text-sm">
          Find the best food and drinks near you
        </p>
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
          placeholder="Search for restaurants, cuisines, or dishes..."
          className="w-full pl-10 pr-4 py-3 border border-(--food-border-main) rounded-(--food-radius-input) outline-none focus:ring-2 focus:ring-(--food-accent-brand) focus:border-transparent shadow-sm transition"
        />
      </div>

      {/* Restaurant Layout Grid System */}
      {filtered.length > 0 ? (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="bg-(--food-bg-surface) border border-(--food-border-light) rounded-(--food-radius-main) overflow-hidden hover:shadow-xl hover:border-(--food-accent-hover-border) transition-all duration-300 group cursor-pointer"
            >
              {/* Media Thumbnail Container with Category Tag */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-(--food-text-dark) rounded-full shadow-sm">
                  {item.category}
                </span>
              </div>

              {/* Core Content Box */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-(--food-text-main) mb-1 group-hover:text-(--food-accent-brand) transition-colors">
                  {item.name}
                </h3>
                <div className="flex items-center justify-between mt-3">
                  <div className="flex items-center gap-1 text-sm text-(--food-text-muted)">
                    Im ⭐ 4.5{" "}
                    <span className="text-(--food-border-main)">•</span> 20-30
                    min
                  </div>
                  <span className="text-(--food-accent-brand) font-semibold text-sm hover:underline">
                    Order Now &rarr;
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        /* Empty Query State Layout */
        <div className="text-center py-12 bg-(--food-bg-surface) rounded-(--food-radius-main) border border-(--food-border-light)">
          <span className="text-4xl mb-4 block">🍽️</span>
          <h3 className="text-lg font-medium text-(--food-text-dark)">
            No restaurants found
          </h3>
          <p className="text-(--food-text-muted) mt-1">
            Try adjusting your search terms.
          </p>
        </div>
      )}
    </div>
  );
};

export default FoodDeliveryContent;
