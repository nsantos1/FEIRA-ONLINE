import React, { useState } from "react";
import ConversationsList from "../../../components/vendedor/chat/conversationsList.jsx";
import ChatWindow from "../../../components/vendedor/chat/chatWindow.jsx";
import ChatPlaceholder from "../../../components/vendedor/chat/chatPlaceholder.jsx";
import { chatData } from "../../../data/chatData.js";
import "./chatPage.css";
import SidebarDashboard from "../../../components/vendedor/sidebarDashboardVendedor/sidebarDashboard.jsx";

function ChatPage() {
  const [conversations, setConversations] = useState(chatData.conversations);
  const [activeConversationId, setActiveConversationId] = useState(null);

  const handleSendMessage = (convoId, messageText) => {
    const newMessage = {
      id: `msg_${Date.now()}`,
      senderId: chatData.currentUser.id,
      text: messageText,
      timestamp: new Date().toLocaleTimeString("pt-BR", {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    const updatedConversations = conversations.map((convo) => {
      if (convo.id === convoId) {
        return { ...convo, messages: [...convo.messages, newMessage] };
      }
      return convo;
    });

    setConversations(updatedConversations);
  };

  const handleToggleFavorite = (convoId) => {
    const updatedConversations = conversations.map((convo) => {
      if (convo.id === convoId) {
        return { ...convo, isFavorite: !convo.isFavorite };
      }
      return convo;
    });
    setConversations(updatedConversations);
  };

  const handleCloseChat = () => {
    setActiveConversationId(null);
  };

  const activeConversation = conversations.find(
    (c) => c.id === activeConversationId
  );

  return (
    <main className="main-chatpage">
      <SidebarDashboard />
      <div className="chat-page-container">
        <ConversationsList
          conversations={conversations}
          activeConversationId={activeConversationId}
          onConversationClick={setActiveConversationId}
        />
        {activeConversation ? (
          <ChatWindow
            conversation={activeConversation}
            currentUser={chatData.currentUser}
            onSendMessage={handleSendMessage}
            onToggleFavorite={handleToggleFavorite}
            onCloseChat={handleCloseChat}
          />
        ) : (
          <ChatPlaceholder />
        )}
      </div>
    </main>
  );
}

export default ChatPage;
