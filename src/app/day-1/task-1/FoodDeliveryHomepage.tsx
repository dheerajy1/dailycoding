import { useState } from "react";

type Restaurant = {
  id: number;
  name: string;
  category: string;
  image: string;
};

const DATA: Restaurant[] = [
  {
    id: 1,
    name: "Biryani House",
    category: "Indian",
    image:
      "https://plus.unsplash.com/premium_photo-1694141252774-c937d97641da?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    name: "Pizza Corner",
    category: "Fast Food",
    image:
      "https://plus.unsplash.com/premium_photo-1673439304183-8840bd0dc1bf?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    name: "Tandoori Hub",
    category: "Indian",
    image:
      "https://images.unsplash.com/photo-1727280376746-b89107a5b0df?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 4,
    name: "Burger Point",
    category: "Fast Food",
    image:
      "https://plus.unsplash.com/premium_photo-1683619761468-b06992704398?q=80&w=665&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 5,
    name: "Healthy Bowl",
    category: "Healthy",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const FoodDeliveryHomepage = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const filtered = DATA.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-20 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-30 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:block ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="h-full flex flex-col">
          <div className="p-6 border-b border-gray-100 flex justify-between items-center lg:block">
            <h2 className="text-2xl font-extrabold text-orange-600 tracking-tight">FoodieExpress</h2>
            <button onClick={() => setIsSidebarOpen(false)} className="lg:hidden text-gray-500 text-2xl">
              &times;
            </button>
          </div>
          
          <nav className="flex-1 p-6 flex flex-col gap-4 text-gray-600">
            <a href="#" className="flex items-center gap-3 hover:text-orange-600 font-medium transition-colors">
              🏠 Home
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-orange-600 font-medium transition-colors">
              🔥 Trending
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-orange-600 font-medium transition-colors">
              🥗 Healthy Options
            </a>
            <a href="#" className="flex items-center gap-3 hover:text-orange-600 font-medium transition-colors">
              ❤️ Favorites
            </a>
          </nav>

          <div className="p-6 border-t border-gray-100">
            <a href="#" className="flex items-center gap-3 hover:text-orange-600 font-medium transition-colors">
              ⚙️ Settings
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col min-w-0">
        
        {/* Navbar */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setIsSidebarOpen(true)} 
              className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div className="hidden sm:flex items-center text-sm font-medium text-gray-500">
              📍 Delivering to: <span className="text-gray-900 ml-1">Khammam, TG</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors">
              🛒
              <span className="absolute top-0 right-0 bg-orange-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">2</span>
            </button>
            <div className="w-9 h-9 rounded-full bg-gray-200 border-2 border-orange-500 overflow-hidden cursor-pointer">
              <img src="https://ui-avatars.com/api/?name=User&background=random" alt="User Profile" className="w-full h-full object-cover"/>
            </div>
          </div>
        </header>

        {/* Scrollable Page Content */}
        <div className="p-6 lg:p-8 flex-1 overflow-y-auto max-w-7xl mx-auto w-full">
          
          {/* Hero Section */}
          <div className="relative bg-linear-to-r from-orange-500 to-red-500 rounded-2xl p-8 lg:p-12 text-white shadow-lg mb-10 overflow-hidden">
            <div className="relative z-10 md:w-2/3">
              <h1 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight">
                Craving something delicious?
              </h1>
              <p className="text-orange-100 text-lg mb-6 max-w-md">
                Get your favorite meals delivered fast straight to your door. Fresh, hot, and right on time.
              </p>
              <button className="bg-white text-orange-600 font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition shadow-md">
                Explore Menu
              </button>
            </div>
            {/* Decorative Element */}
            <div className="absolute right-0 bottom-0 opacity-20 transform translate-x-1/4 translate-y-1/4 hidden md:block">
              <svg width="300" height="300" fill="currentColor" viewBox="0 0 24 24"><path d="M11 9H9V2H7v7H5V2H3v7c0 2.12 1.66 3.84 3.75 3.97V22h2.5v-9.03C11.34 12.84 13 11.12 13 9V2h-2v7zm5-3v8h2.5v8H21V2c-2.76 0-5 2.24-5 4z"/></svg>
            </div>
          </div>

          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Explore Restaurants</h2>
            <p className="text-gray-500 text-sm">Find the best food and drinks near you</p>
          </div>

          {/* Search Input */}
          <div className="relative mb-8 max-w-xl">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
              🔍
            </span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              type="text"
              placeholder="Search for restaurants, cuisines, or dishes..."
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent shadow-sm transition"
            />
          </div>

          {/* Restaurant Grid */}
          {filtered.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filtered.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-xl hover:border-orange-200 transition-all duration-300 group cursor-pointer"
                >
                  {/* Image Container with category badge */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-bold text-gray-800 rounded-full shadow-sm">
                      {item.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-gray-800 mb-1 group-hover:text-orange-600 transition-colors">
                      {item.name}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-1 text-sm text-gray-500">
                        ⭐ 4.5 <span className="text-gray-300">•</span> 20-30 min
                      </div>
                      <span className="text-orange-500 font-semibold text-sm hover:underline">
                        Order Now &rarr;
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="text-center py-12 bg-white rounded-2xl border border-gray-100">
              <span className="text-4xl mb-4 block">🍽️</span>
              <h3 className="text-lg font-medium text-gray-900">No restaurants found</h3>
              <p className="text-gray-500 mt-1">Try adjusting your search terms.</p>
            </div>
          )}
          
        </div>
      </main>
    </div>
  );
};

export default FoodDeliveryHomepage;