export type Employee = {
  id: number;
  name: string;
  role: string;
  salary: string;
  image: string;
  active: boolean;
  likes: number;
};

export const employeesData: Employee[] = [
  {
    id: 1,
    name: "John Smith",
    role: "Frontend Developer",
    salary: "$75,000",
    image: "https://i.pravatar.cc/300?img=1",
    active: true,
    likes: 0,
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "UI/UX Designer",
    salary: "$68,000",
    image: "https://i.pravatar.cc/300?img=5",
    active: true,
    likes: 0,
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Backend Developer",
    salary: "$82,000",
    image: "https://i.pravatar.cc/300?img=8",
    active: false,
    likes: 0,
  },
];
