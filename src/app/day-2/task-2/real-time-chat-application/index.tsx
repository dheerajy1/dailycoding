import { useState, useEffect } from "react";
import RealTimeChatSidebar from "./RealTimeChatSidebar";
import RealTimeChatNavbar from "./RealTimeChatNavbar";
import RealTimeChatArea from "./RealTimeChatArea";
import {
  registerUserProfile,
  subscribeToGlobalUsers,
  subscribeToRoomMessages,
  sendRoomMessage,
  getRoomId,
  clearFirebaseChatRoom,
  checkUsernameAvailability, // Added this import
} from "./data";
import type { Contact, Message } from "./data";
import "./RealTimeChat.css";

const ChatAppIndex = () => {
  const [currentUser, setCurrentUser] = useState<{
    id: string;
    name: string;
    avatar: string;
  } | null>(null);
  const [usernameInput, setUsernameInput] = useState("");
  const [avatarSeed] = useState(() =>
    Math.floor(Math.random() * 16777215).toString(16),
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [globalUsers, setGlobalUsers] = useState<Contact[]>([]);
  const [activeChatIds, setActiveChatIds] = useState<string[]>([]);
  const [activeContact, setActiveContact] = useState<Contact | null>(null);
  const [roomMessages, setRoomMessages] = useState<Message[]>([]);

  // Username validation states
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isValidating, setIsValidating] = useState(false);

  // Sync Global Directory state mapping
  useEffect(() => {
    if (!currentUser) return;
    const unsubscribe = subscribeToGlobalUsers((allUsers) => {
      setGlobalUsers(allUsers);
    });
    return () => unsubscribe();
  }, [currentUser]);

  // Debounced Username Availability Validation Lookups
  useEffect(() => {
    const delayDebounceFn = setTimeout(async () => {
      if (usernameInput.trim().length >= 3) {
        setIsValidating(true);
        const available = await checkUsernameAvailability(usernameInput);
        setIsAvailable(available);
        setIsValidating(false);
      } else {
        setIsAvailable(null);
      }
    }, 400); // 400ms delay to prevent slamming Firebase on every single keystroke

    return () => clearTimeout(delayDebounceFn);
  }, [usernameInput]);

  // Sync Active Chat Messages State channel mapping
  useEffect(() => {
    if (!currentUser || !activeContact) return;
    const roomId = getRoomId(currentUser.id, activeContact.id);
    const unsubscribe = subscribeToRoomMessages(roomId, (messages) => {
      setRoomMessages(messages);
    });
    return () => unsubscribe();
  }, [currentUser, activeContact]);

  // Find and update active selection metrics if status changes downstream
  const dynamicSidebarContacts = globalUsers.filter(
    (u) => u.id !== currentUser?.id && activeChatIds.includes(u.id),
  );

  const currentSelectedContact =
    globalUsers.find((u) => u.id === activeContact?.id) || activeContact;

  const handleRegisterProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!usernameInput.trim() || isAvailable !== true) return;
    try {
      const profile = await registerUserProfile(
        usernameInput.trim(),
        avatarSeed,
      );
      setCurrentUser(profile);
    } catch (err) {
      console.error("Auth Exception:", err);
    }
  };

  const handleSendMessage = (text: string) => {
    if (!text.trim() || !currentUser || !currentSelectedContact) return;
    const roomId = getRoomId(currentUser.id, currentSelectedContact.id);
    sendRoomMessage(roomId, currentUser.id, currentUser.name, text);
  };

  const handleClearChatCanvas = async () => {
    if (!currentUser || !currentSelectedContact) return;
    const roomId = getRoomId(currentUser.id, currentSelectedContact.id);
    await clearFirebaseChatRoom(roomId);
  };

  const handleDeleteConversation = (contactId: string) => {
    setActiveChatIds((prev) => prev.filter((id) => id !== contactId));
    if (activeContact?.id === contactId) {
      setActiveContact(null);
    }
  };

  const handleAddUserToSidebar = (contact: Contact) => {
    if (!activeChatIds.includes(contact.id)) {
      setActiveChatIds((prev) => [...prev, contact.id]);
    }
    setActiveContact(contact);
  };

  // UI STATE 1: Registration Screen with Real-Time Validation Feedback Indicators
  if (!currentUser) {
    return (
      <div className="flex h-screen items-center justify-center bg-(--chat-bg-main) p-4 font-sans">
        <div className="w-full max-w-md bg-(--chat-bg-surface) border border-(--chat-border-color) rounded-(--chat-radius-main) p-6 shadow-md">
          <h2 className="text-2xl font-bold text-(--chat-text-main) text-center mb-2">
            Create Profile
          </h2>
          <p className="text-sm text-(--chat-text-muted) text-center mb-6">
            Pick a completely unique username to enter the live room cluster.
          </p>

          <form onSubmit={handleRegisterProfile} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-(--chat-text-muted) uppercase mb-2">
                Your Chat Name
              </label>
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={usernameInput}
                  onChange={(e) => setUsernameInput(e.target.value)}
                  placeholder="Enter nickname (min 3 chars)..."
                  maxLength={20}
                  required
                  className="w-full pl-4 pr-10 py-2.5 bg-(--chat-bg-input) border border-transparent rounded-lg text-sm text-(--chat-text-main) focus:border-(--chat-accent-brand) focus:bg-(--chat-bg-surface) outline-none transition"
                />

                {/* Visual Status Indicator Icons */}
                <div className="absolute right-3 flex items-center justify-center text-sm select-none">
                  {isValidating && (
                    <span className="animate-spin text-(--chat-status-loading)">
                      ⏳
                    </span>
                  )}
                  {!isValidating && isAvailable === true && (
                    <span className="text-(--chat-status-success) font-bold">
                      ✅
                    </span>
                  )}
                  {!isValidating && isAvailable === false && (
                    <span className="text-(--chat-status-error) font-bold">
                      ❌
                    </span>
                  )}
                </div>
              </div>

              {/* Text helper notices */}
              {isAvailable === false && (
                <p className="text-xs text-(--chat-status-error) font-medium mt-1.5 pl-1">
                  This username is already online! Please pick a different one.
                </p>
              )}
              {isAvailable === true && (
                <p className="text-xs text-(--chat-status-success-dark) font-medium mt-1.5 pl-1">
                  Looks great! Username is available.
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={
                !usernameInput.trim() || isAvailable !== true || isValidating
              }
              className="w-full bg-(--chat-accent-brand) hover:bg-(--chat-accent-hover) disabled:opacity-(--chat-opacity-disabled) disabled:cursor-not-allowed text-(--chat-text-inverse) py-2.5 font-semibold rounded-lg transition text-sm shadow-sm"
            >
              Enter Chat Lobby
            </button>
          </form>
        </div>
      </div>
    );
  }

  // UI STATE 2: Main Workspace
  return (
    <div className="flex h-screen bg-(--chat-bg-main) overflow-hidden font-sans">
      <RealTimeChatSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
        contacts={dynamicSidebarContacts}
        globalUsers={globalUsers}
        currentUserId={currentUser.id}
        activeContactId={currentSelectedContact?.id || ""}
        onSelectContact={(contact: Contact) => {
          setActiveContact(contact);
          setIsSidebarOpen(false);
        }}
        onAddContact={handleAddUserToSidebar}
        onDeleteConversation={handleDeleteConversation}
      />

      <div className="flex-1 flex flex-col h-screen min-w-0">
        {currentSelectedContact ? (
          <>
            <RealTimeChatNavbar
              activeContact={currentSelectedContact}
              onMenuClick={() => setIsSidebarOpen(true)}
              onClearChat={handleClearChatCanvas}
            />
            <RealTimeChatArea
              messages={roomMessages}
              currentUserId={currentUser.id}
              activeContact={currentSelectedContact}
              onSendMessage={handleSendMessage}
            />
          </>
        ) : (
          <div className="flex flex-1 flex-col items-center justify-center text-center p-6 bg-(--chat-bg-main)">
            <div className="text-4xl mb-2">🔍</div>
            <h3 className="text-base font-bold text-(--chat-text-main)">
              Your Workspace is Empty
            </h3>
            <p className="text-xs text-(--chat-text-muted) max-w-xs mt-1">
              Search for your friend's exact username in the left search panel
              to start a private real-time session vector.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatAppIndex;
