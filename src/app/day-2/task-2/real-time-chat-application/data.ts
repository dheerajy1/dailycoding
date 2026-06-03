export type Message = {
  id: number;
  text: string;
  sender: "me" | "other";
};

export type Contact = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
};

export const MOCK_CONTACTS: Contact[] = [
  {
    id: 1,
    name: "Alice Johnson",
    avatar:
      "https://ui-avatars.com/api/?name=Alice+Johnson&background=0D8ABC&color=fff",
    lastMessage: "Hello! UI looks good",
    time: "10:42 AM",
    unread: 2,
  },
  {
    id: 2,
    name: "Bob Smith",
    avatar:
      "https://ui-avatars.com/api/?name=Bob+Smith&background=F59E0B&color=fff",
    lastMessage: "Are we still on for the meeting?",
    time: "Yesterday",
  },
  {
    id: 3,
    name: "Design Team",
    avatar:
      "https://ui-avatars.com/api/?name=Design+Team&background=10B981&color=fff",
    lastMessage: "I'll send the Figma link.",
    time: "Yesterday",
  },
];