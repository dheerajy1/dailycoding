// C:\Users\ADMIN\Downloads\vs-code\reactjs_task\src\layouts\BaseLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

// Define the props to accept the navLinks
type BaseLayoutProps = {
  navLinks: Array<{ id: number; name: string; path: string }>;
};

const BaseLayout = ({ navLinks }: BaseLayoutProps) => {
  return (
    <div className="min-h-screen bg-(--bg-normal)">
      
      {/* Plug in your reusable Navbar component here */}
      <Navbar logo="ReactUI" navLinks={navLinks} />

      {/* The page content goes here */}
      <main>
        <Outlet />
      </main>
      
    </div>
  );
};

export default BaseLayout;