import { useState } from "react";
import type { Contact } from "./data";

type RealTimeChatSidebarProps = {
  isSidebarOpen: boolean;
  onClose: () => void;
  contacts: Contact[];
  globalUsers: Contact[];
  currentUserId: string;
  activeContactId: string;
  onSelectContact: (contact: Contact) => void;
  onAddContact: (contact: Contact) => void;
  onDeleteConversation: (contactId: string) => void;
};

const RealTimeChatSidebar = ({
  isSidebarOpen,
  onClose,
  contacts,
  globalUsers,
  currentUserId,
  activeContactId,
  onSelectContact,
  onAddContact,
  onDeleteConversation,
}: RealTimeChatSidebarProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  // Search exclusively across other global database entries matching input criteria
  const isSearching = searchTerm.trim().length > 0;

  const searchResults = globalUsers.filter(
    (u) =>
      u.id !== currentUserId &&
      u.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-20 md:hidden"
          onClick={onClose}
        />
      )}

      <aside
        className={`fixed inset-y-0 left-0 z-30 w-(--chat-sidebar-width) bg-(--chat-bg-surface) border-r border-(--chat-border-color) flex flex-col transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static h-full ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="p-4 border-b border-(--chat-border-color) bg-(--chat-accent-brand) text-(--chat-text-inverse) flex justify-between items-center shrink-0">
          <h2 className="text-lg font-bold">Conversations</h2>
          <button onClick={onClose} className="md:hidden text-xl">
            &times;
          </button>
        </div>

        <div className="p-3 border-b border-(--chat-border-light) shrink-0">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search network directory..."
            className="w-full px-3 py-1.5 bg-(--chat-bg-input) border border-transparent rounded-lg text-xs text-(--chat-text-main) focus:border-(--chat-accent-brand) focus:bg-(--chat-bg-surface) outline-none transition"
          />
        </div>

        <div className="flex-1 overflow-y-auto">
          {isSearching ? (
            <div>
              <div className="px-4 py-2 bg-black/5 text-[10px] font-bold text-(--chat-text-muted) uppercase tracking-wider">
                Directory Results
              </div>
              {searchResults.length === 0 ? (
                <div className="p-4 text-center text-xs text-(--chat-text-muted)">
                  No registered users match search.
                </div>
              ) : (
                searchResults.map((user) => (
                  <div
                    key={user.id}
                    onClick={() => {
                      onAddContact(user);
                      setSearchTerm("");
                    }}
                    className="flex items-center justify-between p-3 border-b border-(--chat-border-light) hover:bg-(--chat-bg-main) cursor-pointer transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <img
                        src={user.avatar}
                        alt={user.name}
                        className="w-8 h-8 rounded-full"
                      />
                      <span className="text-sm font-medium text-(--chat-text-main) truncate">
                        {user.name}
                      </span>
                    </div>
                    <span className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded-full font-bold">
                      Connect
                    </span>
                  </div>
                ))
              )}
            </div>
          ) : (
            <div>
              <div className="px-4 py-2 bg-black/5 text-[10px] font-bold text-(--chat-text-muted) uppercase tracking-wider">
                Active Feeds
              </div>
              {contacts.length === 0 ? (
                <div className="p-4 text-center text-xs text-(--chat-text-muted)">
                  No active threads. Search above to find contacts.
                </div>
              ) : (
                contacts.map((contact) => (
                  <div
                    key={contact.id}
                    className={`flex items-center justify-between p-3 border-b border-(--chat-border-light) hover:bg-(--chat-bg-main) transition group ${contact.id === activeContactId ? "bg-(--chat-bg-input)" : ""}`}
                  >
                    <div
                      onClick={() => onSelectContact(contact)}
                      className="flex items-center gap-3 min-w-0 flex-1 cursor-pointer"
                    >
                      <div className="relative w-8 h-8 shrink-0">
                        <img
                          src={contact.avatar}
                          alt={contact.name}
                          className="w-full h-full rounded-full"
                        />
                        <span
                          className={`absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full border border-white ${contact.isOnline ? "bg-(--chat-accent-success)" : "bg-(--chat-text-muted)"}`}
                        />
                      </div>
                      <div className="min-w-0">
                        <h4 className="text-sm font-semibold text-(--chat-text-main) truncate">
                          {contact.name}
                        </h4>
                        <span className="text-[10px] text-(--chat-text-muted)">
                          {contact.isOnline ? "Active Stream" : "Disconnected"}
                        </span>
                      </div>
                    </div>
                    <button
                      onClick={() => onDeleteConversation(contact.id)}
                      className="text-xs p-1 text-red-500 opacity-0 group-hover:opacity-100 hover:bg-red-50 rounded transition"
                      title="Delete Conversation"
                    >
                      ✕
                    </button>
                  </div>
                ))
              )}
            </div>
          )}
        </div>
      </aside>
    </>
  );
};

export default RealTimeChatSidebar;
