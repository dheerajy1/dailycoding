import { useState } from "react";
import RealTimeChatSidebar from "./RealTimeChatSidebar";
import RealTimeChatNavbar from "./RealTimeChatNavbar";
import RealTimeChatArea from "./RealTimeChatArea";

const ChatAppIndex = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    // Replaced bg-gray-100 with our CSS token variable
    <div className="flex h-screen bg-(--chat-bg-main) overflow-hidden font-sans">
      {/* 1. The Specific Sidebar */}
      <RealTimeChatSidebar
        isSidebarOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="flex-1 flex flex-col h-screen min-w-0">
        {/* 2. The Specific Navbar */}
        <RealTimeChatNavbar onMenuClick={() => setIsSidebarOpen(true)} />

        {/* 3. The Main UI */}
        <RealTimeChatArea />
      </div>
    </div>
  );
};

export default ChatAppIndex;
