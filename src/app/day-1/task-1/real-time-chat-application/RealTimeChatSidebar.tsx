import { MOCK_CONTACTS } from "./data";

type RealTimeChatSidebarProps = {
  isSidebarOpen: boolean;
  onClose: () => void;
};

const RealTimeChatSidebar = ({
  isSidebarOpen,
  onClose,
}: RealTimeChatSidebarProps) => {
  return (
    <>
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar (Contacts List) */}
      <aside
        className={`fixed inset-y-0 left-0 z-30 w-(--chat-sidebar-width) bg-(--chat-bg-surface) border-r border-(--chat-border-color) flex flex-col transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-(--chat-border-color) bg-(--chat-accent-brand) text-(--chat-text-inverse) flex justify-between items-center">
          <h2 className="text-xl font-bold">Messages</h2>
          <button onClick={onClose} className="md:hidden text-2xl">
            &times;
          </button>
        </div>

        {/* Search Contacts */}
        <div className="p-4 border-b border-(--chat-border-light)">
          <input
            type="text"
            placeholder="Search chats..."
            className="w-full px-4 py-2 bg-(--chat-bg-input) border-transparent rounded-lg text-sm focus:border-(--chat-accent-brand) focus:bg-(--chat-bg-surface) focus:ring-0 outline-none transition"
          />
        </div>

        {/* Contact Cards */}
        <div className="flex-1 overflow-y-auto">
          {MOCK_CONTACTS.map((contact) => (
            <div
              key={contact.id}
              className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-(--chat-bg-main) transition border-b border-(--chat-border-light) ${
                contact.id === 1
                  ? "bg-(--chat-bg-input) border-l-2 border-l-(--chat-accent-brand)"
                  : ""
              }`}
            >
              <img
                src={contact.avatar}
                alt={contact.name}
                className="w-(--chat-avatar-lg) h-(--chat-avatar-lg) rounded-full"
              />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline mb-1">
                  <h3 className="text-sm font-semibold text-(--chat-text-main) truncate">
                    {contact.name}
                  </h3>
                  <span className="text-xs text-(--chat-text-muted)">
                    {contact.time}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-sm text-(--chat-text-muted) truncate">
                    {contact.lastMessage}
                  </p>
                  {contact.unread && (
                    <span className="bg-(--chat-accent-brand) text-(--chat-text-inverse) text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {contact.unread}
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default RealTimeChatSidebar;
