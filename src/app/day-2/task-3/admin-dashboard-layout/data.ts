export type KPICard = {
  id: number;
  title: string;
  value: string;
};

export type OrderItem = {
  id: string;
  customer: string;
  status: "Paid" | "Pending";
  amount: string;
};

export const KPI_DATA: KPICard[] = [
  { id: 1, title: "Revenue", value: "₹1,25,000" },
  { id: 2, title: "Users", value: "8,450" },
  { id: 3, title: "Orders", value: "1,230" },
];

export const RECENT_ORDERS: OrderItem[] = [
  { id: "#101", customer: "John Doe", status: "Paid", amount: "₹2,500" },
  { id: "#102", customer: "Jane Smith", status: "Pending", amount: "₹1,200" },
];
