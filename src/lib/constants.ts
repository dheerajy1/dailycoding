import Home from "../app/Home";
import Day1 from "../app/day-1";

import Day1Task1 from "../app/day-1/task-1";
import Day1Task2 from "../app/day-1/task-2";
import Day1Task3 from "../app/day-1/task-3";
import RealTimeChatApplication from "../app/day-1/task-1/real-time-chat-application";
import FoodDeliveryHomepage from "../app/day-1/task-1/food-delivery-homepage";
import AdminDashboardLayout from "../app/day-1/task-1/admin-dashboard-layout";
import Login from "../app/day-1/task-2/Login";
import Register from "../app/day-1/task-2/Register";
import Ecommerce from "../app/day-1/task-3/ecommerce";
import ProductDetails from "../app/day-1/task-3/ecommerce/ProductDetails";

// Day 2 Imports
import Day2 from "../app/day-2";
import Day2Task1 from "../app/day-2/task-1";
import Day2Task2 from "../app/day-2/task-2";
import Day2Task3 from "../app/day-2/task-3";
import Day2FoodDeliveryHomepage from "../app/day-2/task-1/food-delivery-homepage";

export interface AppRoute {
  id: number;
  name: string;
  path: string;
  showInNav: boolean;
  Component: React.ComponentType<object>;
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
    path: "/day-1/task-3/ecommerce",
    showInNav: false,
    Component: Ecommerce,
  },
  {
    id: 12,
    name: "Day 1 task 3",
    path: "/day-1/task-3/product/:id",
    showInNav: false,
    Component: ProductDetails,
  },

  // Day 2 Routes Configuration
  { id: 15, name: "Day 2", path: "/day-2", showInNav: true, Component: Day2 },
  {
    id: 16,
    name: "Day 2 task 1",
    path: "/day-2/task-1",
    showInNav: false,
    Component: Day2Task1,
  },
  {
    id: 17,
    name: "Day 2 task 2",
    path: "/day-2/task-2",
    showInNav: false,
    Component: Day2Task2,
  },
  {
    id: 18,
    name: "Day 2 task 3",
    path: "/day-2/task-3",
    showInNav: false,
    Component: Day2Task3,
  },
  {
    id: 19,
    name: "Day 2 task 1",
    path: "/day-2/task-1/food-delivery-homepage",
    showInNav: false,
    Component: Day2FoodDeliveryHomepage,
  },
];
