import { useState } from "react";

type Message = {
  id: number;
  text: string;
  sender: "me" | "other";
};

type Contact = {
  id: number;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: number;
};

const MOCK_CONTACTS: Contact[] = [
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

const RealTimeChatApplication = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey 👋 This is a sample message", sender: "other" },
    { id: 2, text: "Hello! UI looks good", sender: "me" },
  ]);

  const [input, setInput] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSend = () => {
    if (!input.trim()) return;

    const newMessage: Message = {
      id: Date.now(),
      text: input,
      sender: "me",
    };

    setMessages((prev) => [...prev, newMessage]);
    setInput("");
  };

  return (
    <div className="flex h-screen bg-gray-50 font-sans overflow-hidden">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar (Contacts List) */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-80 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Sidebar Header (Mini Hero) */}
        <div className="p-4 border-b border-gray-200 bg-blue-600 text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Messages</h2>
          <button
            onClick={() => setIsSidebarOpen(false)}
            className="md:hidden text-2xl"
          >
            &times;
          </button>
        </div>

        {/* Search Contacts */}
        <div className="p-4 border-b border-gray-100">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full px-4 py-2 bg-gray-100 border-transparent rounded-lg text-sm focus:border-blue-500 focus:bg-white focus:ring-0 outline-none transition"
          />
        </div>

        {/* Contact Cards */}
        <div className="flex-1 overflow-y-auto">
          {MOCK_CONTACTS.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 transition border-b border-gray-50 ${contact.id === 1 ? "bg-blue-50 border-l-4 border-l-blue-600" : ""}`}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-12 h-12 rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-semibold text-gray-900 truncate">
                    {contact.name}
                  </h3>
                  <span className="text-xs text-gray-500">{contact.time}</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-gray-500 truncate">
                    {contact.lastMessage}
                  </p>
                  {contact.unread && (
                    <span className="bg-blue-600 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>

      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col min-w-0 h-screen">
        {/* Navbar (Active Chat Header) */}
        <header className="bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between shadow-sm z-10">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="md:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <img
              src={MOCK_CONTACTS[0].avatar}
              alt="Alice"
              className="w-10 h-10 rounded-full"
            />
            <div>
              <h1 className="text-base font-semibold text-gray-900">
                {MOCK_CONTACTS[0].name}
              </h1>
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span className="text-xs text-gray-500">Online</span>
              </div>
            </div>
          </div>

          <div className="flex gap-2 text-gray-500">
            <button className="p-2 hover:bg-gray-100 rounded-full">📞</button>
            <button className="p-2 hover:bg-gray-100 rounded-full">🎥</button>
            <button className="p-2 hover:bg-gray-100 rounded-full">⋮</button>
          </div>
        </header>

        {/* Chat Messages */}
        <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "me" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "other" && (
                <img
                  src={MOCK_CONTACTS[0].avatar}
                  alt="Alice"
                  className="w-8 h-8 rounded-full mr-2 self-end"
                />
              )}
              <div
                className={`px-4 py-2.5 rounded-2xl max-w-[75%] md:max-w-md shadow-sm text-sm ${
                  msg.sender === "me"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-gray-800 border border-gray-100 rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        {/* Input Footer */}
        <div className="bg-white border-t border-gray-200 p-4">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3 max-w-4xl mx-auto"
          >
            <button
              type="button"
              className="text-gray-400 hover:text-gray-600 p-2"
            >
              📎
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Type your message..."
              className="flex-1 px-4 py-2.5 bg-gray-100 border-transparent rounded-full text-sm focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-200 outline-none transition"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-blue-600 text-white p-2.5 rounded-full hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm"
            >
              <svg
                className="w-5 h-5 transform rotate-90"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                />
              </svg>
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default RealTimeChatApplication;
