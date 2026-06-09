import { useState, useRef, useEffect } from "react";
import { useAuth } from "../middleware/auth";
import { useNavigate } from "react-router-dom";

interface NavbarProps {
  cartCount: number;
}

export default function Navbar({ cartCount }: NavbarProps) {
  const navigate = useNavigate();

  const { logout } = useAuth();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown if user clicks outside of it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-neutral-900 border-b border-neutral-800 text-white shadow-sm backdrop-blur-md bg-opacity-95">
      <div className="max-w-4xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Logo */}
        <div className="text-lg font-bold tracking-tight flex items-center space-x-2">
          <span>🛍️</span>
          <span>E-Shop</span>
        </div>

        {/* Right Actions */}
        <div className="flex items-center space-x-4">
          {/* Cart Icon Badge */}
          <div className="relative p-2 text-neutral-400 hover:text-white transition-colors cursor-pointer">
            <button
              type="button"
              onClick={() => navigate("/day-3/task-1/ecommerce-payment/cart")}
              className=""
            >
              <span className="text-xl">🛒</span>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-emerald-500 text-white text-[10px] font-bold h-4 w-4 rounded-full flex items-center justify-center animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

          {/* Account Dropdown Menu */}
          <div className="relative" ref={dropdownRef}>
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-2 p-1.5 rounded-full border border-neutral-800 bg-neutral-950 hover:border-neutral-700 transition-all focus:outline-none"
            >
              <svg
                className="w-6 h-6 text-neutral-400"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.28A7.747 7.747 0 0112 15.75a7.747 7.747 0 015.855 2.066A7.948 7.948 0 0112 19.75a7.948 7.948 0 01-5.855-2.033zM8.054 9.57a3.946 3.946 0 117.892 0 3.946 3.946 0 01-7.892 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-neutral-900 border border-neutral-800 rounded-md shadow-xl py-1 z-50">
                <div className="px-4 py-2 border-b border-neutral-800">
                  <p className="text-xs text-neutral-400 font-medium">
                    Signed in as
                  </p>
                  <p className="text-sm font-semibold truncate text-neutral-200">
                    Emily Smith
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    alert("Account settings details panel opening...");
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors flex items-center space-x-2"
                >
                  <span>⚙️</span>
                  <span>Account Settings</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    navigate("/day-3/task-1/ecommerce-payment/orders");
                    setIsDropdownOpen(false);
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-neutral-300 hover:bg-neutral-800 transition-colors flex items-center space-x-2"
                >
                  <span>📦</span>
                  <span>My Orders</span>
                </button>

                <div className="border-t border-neutral-800 my-1"></div>

                <button
                  type="button"
                  onClick={() => {
                    setIsDropdownOpen(false);
                    logout();
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-red-400 hover:bg-red-950/40 transition-colors flex items-center space-x-2 font-medium"
                >
                  <span>🚪</span>
                  <span>Log Out</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
