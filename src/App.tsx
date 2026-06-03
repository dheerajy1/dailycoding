// C:\Users\ADMIN\Downloads\vs-code\reactjs_task\src\App.tsx
import { Routes, Route } from "react-router-dom";
import BaseLayout from "./layouts/BaseLayout";
import { appRoutes } from "./lib/constants";

export default function App() {
  // 1. Get the links for the Navbar menu
  const navLinks = appRoutes.filter((route) => route.showInNav);

  // 2. Define exactly which paths SHOULD have the Navbar
  const pathsWithNavbar = [
    "/",
    "/day-1",
    "/day-2",
    "/day-1/task-1",
    "/day-1/task-2",
    "/day-1/task-3",
    "/day-2/task-1",
    "/day-2/task-2",
    "/day-2/task-3",
  ];

  // 3. Split the routes into two groups based on the list above
  const layoutRoutes = appRoutes.filter((route) =>
    pathsWithNavbar.includes(route.path),
  );
  const standaloneRoutes = appRoutes.filter(
    (route) => !pathsWithNavbar.includes(route.path),
  );

  return (
    <Routes>
      {/* GROUP 1: Routes WITH the Navbar */}
      <Route element={<BaseLayout navLinks={navLinks} />}>
        {layoutRoutes.map((route) => (
          <Route
            key={route.id}
            path={route.path}
            element={<route.Component />}
          />
        ))}
      </Route>

      {/* GROUP 2: Routes WITHOUT the Navbar (Your standalone apps!) */}
      {standaloneRoutes.map((route) => (
        <Route key={route.id} path={route.path} element={<route.Component />} />
      ))}
    </Routes>
  );
}
