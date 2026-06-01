import { MOCK_CONTACTS } from "./data";

type RealTimeChatNavbarProps = {
  onMenuClick: () => void;
};

const RealTimeChatNavbar = ({ onMenuClick }: RealTimeChatNavbarProps) => {
  return (
    <header className="bg-(--chat-bg-surface) border-b border-(--chat-border-color) px-4 py-3 flex items-center justify-between shadow-sm z-10">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="md:hidden p-2 text-(--chat-text-muted) hover:bg-(--chat-bg-input) rounded-md"
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
          className="w-(--chat-avatar-md) h-(--chat-avatar-md) rounded-full"
        />
        <div>
          <h1 className="text-base font-semibold text-(--chat-text-main)">
            {MOCK_CONTACTS[0].name}
          </h1>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-(--chat-accent-success) rounded-full"></span>
            <span className="text-xs text-(--chat-text-muted)">Online</span>
          </div>
        </div>
      </div>

      <div className="flex gap-2 text-(--chat-text-muted)">
        <button className="p-2 hover:bg-(--chat-bg-input) rounded-full">
          📞
        </button>
        <button className="p-2 hover:bg-(--chat-bg-input) rounded-full">
          🎥
        </button>
        <button className="p-2 hover:bg-(--chat-bg-input) rounded-full">
          ⋮
        </button>
      </div>
    </header>
  );
};

export default RealTimeChatNavbar;
