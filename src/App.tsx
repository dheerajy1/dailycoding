import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { appRoutes } from "./lib/constants";

export default function App() {
  const navLinks = appRoutes.filter(route => route.showInNav);

  return (
    <main className="min-h-screen bg-(--bg-normal)">
      <Navbar logo="ReactUI" navLinks={navLinks} />

      <Routes>
        {appRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.Component />} // Seamlessly instantiates the component
          />
        ))}
      </Routes>
    </main>
  );
}
