import Home from "../app/Home";
import Day1 from "../app/day-1";

import Day1Task1 from "../app/day-1/task-1";
import Day1Task2 from "../app/day-1/task-2";
import Day1Task3 from "../app/day-1/task-3";
import RealTimeChatApplication from "../app/day-1/task-1/RealTimeChatApplication";
import FoodDeliveryHomepage from "../app/day-1/task-1/FoodDeliveryHomepage";
import AdminDashboardLayout from "../app/day-1/task-1/AdminDashboardLayout";
import Login from "../app/day-1/task-2/Login";
import Register from "../app/day-1/task-2/Register";
import Products from "../app/day-1/task-3/Products";
import ProductDetails from "../app/day-1/task-3/ProductDetails";

// import Day2 from "../app/day-2";
// import Day3 from "../app/day-3";

export interface AppRoute {
  id: number;
  name: string;
  path: string;
  showInNav: boolean;
  Component: React.ComponentType; // Pure TypeScript reference type
}

export const appRoutes: AppRoute[] = [
  { id: 1, name: "Home", path: "/", showInNav: true, Component: Home },
  { id: 2, name: "Day 1", path: "/day-1", showInNav: true, Component: Day1 },
  {
    id: 3,
    name: "Day 1 task 1",
    path: "/day-1/task-1",
    showInNav: false,
    Component: Day1Task1,
  },
  {
    id: 4,
    name: "Day 1 task 2",
    path: "/day-1/task-2",
    showInNav: false,
    Component: Day1Task2,
  },
  {
    id: 5,
    name: "Day 1 task 3",
    path: "/day-1/task-3",
    showInNav: false,
    Component: Day1Task3,
  },
  {
    id: 6,
    name: "Day 1 task 1",
    path: "/day-1/task-1/real-time-chat-application",
    showInNav: false,
    Component: RealTimeChatApplication,
  },
  {
    id: 7,
    name: "Day 1 task 1",
    path: "/day-1/task-1/food-delivery-homepage",
    showInNav: false,
    Component: FoodDeliveryHomepage,
  },
  {
    id: 8,
    name: "Day 1 task 1",
    path: "/day-1/task-1/admin-dashboard-layout",
    showInNav: false,
    Component: AdminDashboardLayout,
  },
  {
    id: 9,
    name: "Day 1 task 2",
    path: "/day-1/task-2/login",
    showInNav: false,
    Component: Login,
  },
  {
    id: 10,
    name: "Day 1 task 2",
    path: "/day-1/task-2/register",
    showInNav: false,
    Component: Register,
  },
  {
    id: 11,
    name: "Day 1 task 3",
    path: "/day-1/task-3/products",
    showInNav: false,
    Component: Products,
  },
  {
    id: 12,
    name: "Day 1 task 3",
    path: "/day-1/task-3/product/:id",
    showInNav: false,
    Component: ProductDetails,
  },

  // { id: 15, name: "Day 2", path: "/day-2", showInNav: true, Component: Day2 },
  // { id: 31, name: "Day 3", path: "/day-3", showInNav: true, Component: Day3 },
];
