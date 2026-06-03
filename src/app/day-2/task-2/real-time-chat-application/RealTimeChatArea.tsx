import { useState } from "react";
import type { Message, Contact } from "./data";

type RealTimeChatAreaProps = {
  messages: Message[];
  currentUserId: string;
  activeContact: Contact;
  onSendMessage: (text: string) => void;
};

const RealTimeChatArea = ({
  messages,
  currentUserId,
  activeContact,
  onSendMessage,
}: RealTimeChatAreaProps) => {
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim() || !activeContact.isOnline) return;
    onSendMessage(input);
    setInput("");
  };

  return (
    <>
      <div className="flex-1 p-4 md:p-6 space-y-4 overflow-y-auto bg-(--chat-bg-main)">
        {messages.map((msg) => {
          const isMe = msg.senderId === currentUserId;
          return (
            <div
              key={msg.id}
              className={`flex ${isMe ? "justify-end" : "justify-start"}`}
            >
              <div className="flex flex-col max-w-[75%] md:max-w-md gap-0.5">
                {!isMe && (
                  <span className="text-[9px] font-semibold text-(--chat-text-muted) px-1">
                    {msg.senderName}
                  </span>
                )}
                <div
                  className={`px-4 py-2 rounded-(--chat-radius-main) shadow-xs text-sm wrap-break-word ${isMe ? "bg-(--chat-accent-brand) text-(--chat-text-inverse) rounded-br-none" : "bg-(--chat-bg-surface) text-(--chat-text-main) border border-(--chat-border-light) rounded-bl-none"}`}
                >
                  {msg.text}
                </div>
                <span
                  className={`text-[9px] text-(--chat-text-muted) px-1 ${isMe ? "text-right" : "text-left"}`}
                >
                  {msg.timestamp}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-(--chat-bg-surface) border-t border-(--chat-border-color) p-4 shrink-0">
        {!activeContact.isOnline ? (
          /* Dead connection status vector warning */
          <div className="bg-red-50 border border-red-200 text-red-700 text-center text-xs py-2 px-4 rounded-xl font-medium animate-pulse">
            ⚠️ {activeContact.name} has left the session. Transmission disabled.
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="flex items-center gap-3 max-w-4xl mx-auto"
          >
            <button
              type="button"
              className="text-(--chat-text-muted) hover:text-(--chat-text-main) p-1.5 text-sm"
            >
              📎
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
              placeholder="Type a message..."
              className="flex-1 px-4 py-2 bg-(--chat-bg-input) border border-transparent rounded-(--chat-radius-input) text-sm focus:border-(--chat-accent-brand) focus:bg-(--chat-bg-surface) outline-none transition text-(--chat-text-main)"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="bg-(--chat-accent-brand) text-(--chat-text-inverse) p-2 rounded-(--chat-radius-input) hover:bg-(--chat-accent-hover) disabled:opacity-50 transition shadow-xs"
            >
              <svg
                className="w-4 h-4 transform rotate-90"
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
        )}
      </div>
    </>
  );
};

export default RealTimeChatArea;
