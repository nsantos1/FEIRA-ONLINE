import React from 'react';
import './ConversationItem.css';

function ConversationItem({ conversation, isActive, onClick }) {
  const lastMessage = conversation.messages[conversation.messages.length - 1];

  return (
    <div
      className={`conversation-item ${isActive ? 'active' : ''}`}
      onClick={() => onClick(conversation.id)}
    >
      <img src={conversation.participant.avatar} alt={conversation.participant.name} className="avatar" />
      <div className="conversation-details">
        <div className="conversation-header">
          
          <div className="participant-info-block">
            <span className="participant-name">{conversation.participant.name}</span>
            
            <span className="participant-job-title">{conversation.participant.jobTitle}</span>
          </div>
          <span className="last-message-time">{lastMessage.timestamp}</span>
        </div>
        <p className="last-message-preview">{lastMessage.text}</p>
      </div>
    </div>
  );
}

export default ConversationItem;