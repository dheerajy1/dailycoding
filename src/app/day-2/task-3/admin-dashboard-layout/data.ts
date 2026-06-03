export type KPICard = {
  id: number;
  title: string;
  value: string;
  change: string;
  isPositive: boolean;
  icon: string;
};

export type OrderItem = {
  id: string;
  customer: string;
  email: string;
  status: "Paid" | "Pending" | "Failed";
  amount: string;
  date: string;
};

export type ChartDataPoint = {
  label: string;
  revenue: number;
  signups: number;
};

export const KPI_DATA: KPICard[] = [
  { id: 1, title: "Monthly Revenue", value: "₹1,25,400", change: "+12.4%", isPositive: true, icon: "💰" },
  { id: 2, title: "Active Users", value: "8,450", change: "+18.2%", isPositive: true, icon: "👥" },
  { id: 3, title: "Total Orders", value: "1,230", change: "-3.1%", isPositive: false, icon: "📦" },
  { id: 4, title: "Conversion Rate", value: "2.4%", change: "+0.6%", isPositive: true, icon: "📈" },
];

export const RECENT_ORDERS: OrderItem[] = [
  { id: "#101", customer: "John Doe", email: "john@example.com", status: "Paid", amount: "₹2,500", date: "Jun 03, 2026" },
  { id: "#102", customer: "Jane Smith", email: "jane@example.com", status: "Pending", amount: "₹1,200", date: "Jun 02, 2026" },
  { id: "#103", customer: "Rahul Sharma", email: "rahul@example.com", status: "Paid", amount: "₹4,850", date: "Jun 02, 2026" },
  { id: "#104", customer: "Amit Patel", email: "amit@example.com", status: "Failed", amount: "₹950", date: "Jun 01, 2026" },
];

export const ANALYTICS_TREND: ChartDataPoint[] = [
  { label: "Jan", revenue: 45000, signups: 240 },
  { label: "Feb", revenue: 52000, signups: 310 },
  { label: "Mar", revenue: 61000, signups: 450 },
  { label: "Apr", revenue: 58000, signups: 400 },
  { label: "May", revenue: 85000, signups: 620 },
  { label: "Jun", revenue: 125400, signups: 890 },
];