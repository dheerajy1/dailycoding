import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate, useSearchParams } from "react-router-dom"; // 1. Added useSearchParams
import { useAuth } from "./middleware/auth";
import toast from "react-hot-toast";

export default function SignInPage() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [searchParams] = useSearchParams(); // 2. Initialize the query param reader

  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");

  const loginMutation = useMutation({
    mutationFn: async () => {
      const res = await fetch("https://dummyjson.com/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password, expiresInMins: 30 }),
      });
      if (!res.ok) throw new Error("Invalid username or password supplied");
      return res.json();
    },
    onSuccess: (data) => {
      login(data.accessToken);
      toast.success("Welcome back! Loading store...");

      // 3. Extract the 'redirect_to' value from the URL query line
      const fallbackPath = "/day-3/task-1/ecommerce-payment";
      const targetDestination = searchParams.get("redirect_to") || fallbackPath;

      // Navigate cleanly to their exact destination state
      navigate(targetDestination, { replace: true });
    },
    onError: (err: unknown) => {
      const message =
        err instanceof Error ? err.message : "Authentication failed";
      toast.error(message);
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    loginMutation.mutate();
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="bg-neutral-900 border border-neutral-800 p-8 rounded-md max-w-md mx-auto shadow-sm text-white">
        <h2 className="text-2xl font-bold mb-2">Sign In Route UI</h2>
        <p className="text-sm text-neutral-400 mb-6">
          Enter your credentials to access the store
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={`w-full bg-neutral-950 border rounded-sm p-2 text-sm text-white focus:outline-none ${
                loginMutation.isError
                  ? "border-red-500 focus:border-red-400"
                  : "border-neutral-800 focus:border-emerald-50"
              }`}
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-neutral-400 uppercase mb-1">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={`w-full bg-neutral-950 border rounded-sm p-2 text-sm text-white focus:outline-none ${
                loginMutation.isError
                  ? "border-red-500 focus:border-red-400"
                  : "border-neutral-800 focus:border-emerald-50"
              }`}
              required
            />
          </div>

          <div className="flex space-x-3 pt-2">
            <button
              type="submit"
              disabled={loginMutation.isPending}
              className="w-full bg-white text-black font-semibold py-3 rounded-sm text-sm disabled:opacity-50 hover:bg-neutral-200 transition-colors"
            >
              {loginMutation.isPending ? "Verifying..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
