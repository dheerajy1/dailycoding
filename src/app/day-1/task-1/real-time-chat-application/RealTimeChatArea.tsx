import { useState } from "react";
import { type Message, MOCK_CONTACTS } from "./data";

const RealTimeChatArea = () => {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hey 👋 This is a sample message", sender: "other" },
    { id: 2, text: "Hello! UI looks good", sender: "me" },
  ]);

  const [input, setInput] = useState("");

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
    <>
      {/* Chat Messages Area */}
      <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto bg-(--chat-bg-main)">
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
                className="w-(--chat-avatar-sm) h-(--chat-avatar-sm) rounded-full mr-2 self-end"
              />
            )}
            <div
              className={`px-4 py-2.5 rounded-(--chat-radius-main) max-w-[75%] md:max-w-md shadow-sm text-sm ${
                msg.sender === "me"
                  ? "bg-(--chat-accent-brand) text-(--chat-text-inverse) rounded-br-none"
                  : "bg-(--chat-bg-surface) text-(--chat-text-main) border border-(--chat-border-light) rounded-bl-none"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Form Footer */}
      <div className="bg-(--chat-bg-surface) border-t border-(--chat-border-color) p-4">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSend();
          }}
          className="flex items-center gap-3 max-w-4xl mx-auto"
        >
          <button
            type="button"
            className="text-(--chat-text-muted) hover:text-(--chat-text-main) p-2"
          >
            📎
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Type your message..."
            className="flex-1 px-4 py-2.5 bg-(--chat-bg-input) border-transparent rounded-(--chat-radius-input) text-sm focus:border-(--chat-accent-brand) focus:bg-(--chat-bg-surface) focus:ring-2 focus:ring-blue-200 outline-none transition"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="bg-(--chat-accent-brand) text-(--chat-text-inverse) p-2.5 rounded-(--chat-radius-input) hover:bg-(--chat-accent-hover) disabled:opacity-50 disabled:cursor-not-allowed transition shadow-sm"
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
    </>
  );
};

export default RealTimeChatArea;
