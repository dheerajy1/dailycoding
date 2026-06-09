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
import Day2RealTimeChatApplication from "../app/day-2/task-2/real-time-chat-application";
import Day2AdminDashboard from "../app/day-2/task-3/admin-dashboard-layout";

// Day 3 Imports
import Day3 from "../app/day-3";
import Day3Task1 from "../app/day-3/task-1";
import Day3Task2 from "../app/day-3/task-2";
import Day3EcommercePayment from "../app/day-3/task-1/ecommerce-payment";
import Day3OnlineExaminationSystem from "../app/day-3/task-2/online-examination-system";
import Day3SignIn from "../app/day-3/task-1/ecommerce-payment/SignInPage";
import Day3EcommercePaymentLayout from "../app/day-3/task-1/ecommerce-payment/EcommercePaymentLayout";
import Day3CartPage from "../app/day-3/task-1/ecommerce-payment/CartPage";
import Day3CheckoutPage from "../app/day-3/task-1/ecommerce-payment/CheckoutPage";
import Day3PaymentPage from "../app/day-3/task-1/ecommerce-payment/PaymentPage";
import Day3OrderConfirmationPage from "../app/day-3/task-1/ecommerce-payment/OrderConfirmationPage";
import Day3OrdersPage from "../app/day-3/task-1/ecommerce-payment/OrdersPage";

// Import your submodules so they can be referenced inside the routing tree array
import AdminContent from "../app/day-2/task-3/admin-dashboard-layout/AdminContent";
import AdminAnalytics from "../app/day-2/task-3/admin-dashboard-layout/AdminAnalytics";
import AdminCustomers from "../app/day-2/task-3/admin-dashboard-layout/AdminCustomers";
import AdminOrders from "../app/day-2/task-3/admin-dashboard-layout/AdminOrders";
import AdminSettings from "../app/day-2/task-3/admin-dashboard-layout/AdminSettings";

export interface SubRoute {
  path: string;
  isIndex?: boolean;
  Component: React.ComponentType<object>;
  children?: SubRoute[];
}

export interface AppRoute {
  id: number;
  name: string;
  path: string;
  showInNav: boolean;
  Component: React.ComponentType<object>;
  children?: SubRoute[]; // Added to match Next.js layout child architectures
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
  {
    id: 20,
    name: "Day 2 task 1",
    path: "/day-2/task-2/real-time-chat-application",
    showInNav: false,
    Component: Day2RealTimeChatApplication,
  },
  {
    id: 21,
    name: "Day 2 task 1",
    path: "/day-2/task-3/admin-dashboard-layout",
    showInNav: false,
    Component: Day2AdminDashboard,
    // Define the child layout routes right here to build clean nested URLs!
    children: [
      { path: "", isIndex: true, Component: AdminContent },
      { path: "analytics", Component: AdminAnalytics },
      { path: "customers", Component: AdminCustomers },
      { path: "orders", Component: AdminOrders },
      { path: "settings", Component: AdminSettings },
    ],
  },
  // Day 3 Routes Configuration
  { id: 22, name: "Day 3", path: "/day-3", showInNav: true, Component: Day3 },
  {
    id: 23,
    name: "Day 3 task 1",
    path: "/day-3/task-1",
    showInNav: false,
    Component: Day3Task1,
  },
  {
    id: 24,
    name: "Day 3 task 2",
    path: "/day-3/task-2",
    showInNav: false,
    Component: Day3Task2,
  },
  {
    id: 25,
    name: "Day 3 task 1",
    path: "/day-3/task-1/ecommerce-payment",
    showInNav: false,
    Component: Day3EcommercePaymentLayout,
    children: [
      {
        path: "",
        isIndex: true,
        Component: Day3EcommercePayment,
      },
      {
        path: "signin",
        Component: Day3SignIn,
      },
      {
        path: "cart",
        Component: Day3CartPage,
      },
      {
        path: "checkout",
        Component: Day3CheckoutPage,
      },
      {
        path: "payment",
        Component: Day3PaymentPage,
      },
      {
        path: "order-confirmation",
        Component: Day3OrderConfirmationPage,
      },
      {
        path: "orders",
        Component: Day3OrdersPage,
      },
    ],
  },
  {
    id: 26,
    name: "Day 3 task 2",
    path: "/day-3/task-2/online-examination-system",
    showInNav: false,
    Component: Day3OnlineExaminationSystem,
  },
];
