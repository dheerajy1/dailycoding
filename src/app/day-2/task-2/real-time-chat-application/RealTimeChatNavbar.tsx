import type { Contact } from "./data";

type RealTimeChatNavbarProps = {
  activeContact: Contact;
  onMenuClick: () => void;
  onClearChat: () => void;
};

const RealTimeChatNavbar = ({
  activeContact,
  onMenuClick,
  onClearChat,
}: RealTimeChatNavbarProps) => {
  return (
    <header className="bg-(--chat-bg-surface) border-b border-(--chat-border-color) px-4 py-3 flex items-center justify-between shadow-sm z-10 shrink-0">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-(--chat-text-muted) hover:bg-(--chat-bg-input) rounded-md"
        >
          <svg
            className="w-5 h-5"
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

        <div className="relative w-(--chat-avatar-md) h-(--chat-avatar-md)">
          <img
            src={activeContact.avatar}
            alt={activeContact.name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div>
          <h1 className="text-sm font-semibold text-(--chat-text-main)">
            {activeContact.name}
          </h1>
          <div className="flex items-center gap-1">
            <span
              className={`w-2 h-2 rounded-full ${activeContact.isOnline ? "bg-(--chat-accent-success)" : "bg-(--chat-text-muted)"}`}
            />
            <span className="text-[11px] text-(--chat-text-muted)">
              {activeContact.isOnline ? "Online" : "Offline"}
            </span>
          </div>
        </div>
      </div>

      <div>
        <button
          onClick={onClearChat}
          className="text-xs px-3 py-1.5 bg-red-50 hover:bg-red-100 text-red-600 font-medium rounded-lg border border-red-200 transition"
        >
          Clear Chat
        </button>
      </div>
    </header>
  );
};

export default RealTimeChatNavbar;
