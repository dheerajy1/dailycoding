import { useState } from "react";
import FoodDeliverySidebar from "./FoodDeliverySidebar";
import FoodDeliveryNavbar from "./FoodDeliveryNavbar";
import FoodDeliveryContent from "./FoodDeliveryContent";

const FoodDeliveryIndex = () => {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-(--food-bg-main) font-sans">
      {/* 1. The Specific Sidebar */}
      <FoodDeliverySidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col min-w-0">
        {/* 2. The Specific Navbar */}
        <FoodDeliveryNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* 3. The Main Content Stream */}
        <FoodDeliveryContent search={search} setSearch={setSearch} />
      </div>
    </div>
  );
};

export default FoodDeliveryIndex;
