import React, { createContext, useContext, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

// Define the shape of our global auth context state
interface AuthContextType {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

/**
 * AuthProvider Component
 * Wraps the top-level layout to distribute session state down through the tree.
 */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [token, setToken] = useState<string | null>(() =>
    localStorage.getItem("authToken"),
  );

  const login = (newToken: string) => {
    localStorage.setItem("authToken", newToken);
    setToken(newToken);
  };

  const logout = () => {
    localStorage.removeItem("authToken");
    setToken(null);
  };

  const isAuthenticated = !!token;

  return (
    <AuthContext.Provider value={{ token, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

/**
 * useAuth Hook
 * Clean reusable macro interface to grab auth state anywhere inside your application tree.
 */
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error(
      "useAuth must be invoked from within an AuthProvider element tree block",
    );
  }
  return context;
}

/**
 * COMPONENT-LEVEL MIDDLEWARE GUARD LAYERS
 */

interface GuardProps {
  children: React.ReactNode;
}

/**
 * PrivateRoute Interceptor
 * Leverages the useAuth hook to block guest traffic and force nested signin URL routing.
 */
export function PrivateRoute({ children }: GuardProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    const baseModulePath = location.pathname.split("/signin")[0];
    const targetRedirect = `${baseModulePath}/signin`.replace(/\/+/g, "/");

    return <Navigate to={targetRedirect} state={{ from: location }} replace />;
  }

  return <>{children}</>;
}

/**
 * PublicRoute Interceptor
 * Leverages the useAuth hook to prevent logged-in users from seeing the sign-in page.
 */
export function PublicRoute({ children }: GuardProps) {
  const { isAuthenticated } = useAuth();
  const location = useLocation();

  if (isAuthenticated) {
    const baseModulePath = location.pathname.split("/signin")[0];
    const targetRedirect = baseModulePath || "/";

    return <Navigate to={targetRedirect} replace />;
  }

  return <>{children}</>;
}
