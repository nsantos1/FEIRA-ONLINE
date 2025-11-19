import React, { useState } from "react";
import ConversationItem from "./conversationItem";
import { IoSearch } from "react-icons/io5";
import "./conversationsList.css";

function ConversationsList({
  conversations,
  activeConversationId,
  onConversationClick,
}) {
  const [activeTab, setActiveTab] = useState("recentes");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations
    .filter((convo) => {
      if (activeTab === "favoritas") {
        return convo.isFavorite;
      }
      return true;
    })
    .filter((convo) => {
      return convo.participant.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
    });

  return (
    <aside className="conversations-list-panel">
      <div className="list-header">
        <h2>Canal Interno</h2>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Pesquisar..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <IoSearch className="search-icon" />
        </div>
      </div>
      <div className="list-tabs">
        <button
          className={`tab-button ${activeTab === "recentes" ? "active" : ""}`}
          onClick={() => setActiveTab("recentes")}
        >
          Recentes
        </button>
        <button
          className={`tab-button ${activeTab === "favoritas" ? "active" : ""}`}
          onClick={() => setActiveTab("favoritas")}
        >
          Favoritas
        </button>
      </div>
      <div className="conversations-scroll-area">
        {filteredConversations.length > 0 ? (
          filteredConversations.map((convo) => (
            <ConversationItem
              key={convo.id}
              conversation={convo}
              isActive={convo.id === activeConversationId}
              onClick={onConversationClick}
            />
          ))
        ) : (
          <div className="no-conversations-found">
            <p>Nenhuma conversa encontrada.</p>
          </div>
        )}
      </div>
    </aside>
  );
}

export default ConversationsList;