import React from 'react';

import { FaPaperPlane, FaPlus, FaRegStar, FaStar } from 'react-icons/fa';
import { FiMoreVertical } from 'react-icons/fi';
import { IoClose } from 'react-icons/io5';
import './ChatWindow.css';


function MessageBubble({ message, isSender }) {
  return (
    <div className={`message-bubble-wrapper ${isSender ? 'sent' : 'received'}`}>
      <div className="message-bubble">{message.text}</div>
      <span className="message-timestamp">{message.timestamp}</span>
    </div>
  );
}


function ChatWindow({ conversation, currentUser, onSendMessage, onToggleFavorite, onCloseChat }) {
  if (!conversation) return null;

  const [newMessage, setNewMessage] = React.useState('');

  const handleSend = (e) => {
    e.preventDefault();
    if (newMessage.trim()) {
      onSendMessage(conversation.id, newMessage);
      setNewMessage('');
    }
  };

  return (
    <div className="chat-window">
      <header className="chat-header">
        <div className="participant-info">
          <img src={conversation.participant.avatar} alt={conversation.participant.name} className="avatar" />
          <div>
            <span className="participant-name">{conversation.participant.name}</span>
            <span className="participant-status">Online agora</span>
          </div>
        </div>
        <div className="chat-actions">
          <button 
            className="action-button" 
            onClick={() => onToggleFavorite(conversation.id)}
          >
            {conversation.isFavorite ? <FaStar className="action-icon favorited" /> : <FaRegStar className="action-icon" />}
          </button>
          <button className="action-button">
            <FiMoreVertical className="action-icon" />
          </button>
          
          <button className="action-button" onClick={onCloseChat}>
            <IoClose className="action-icon" />
          </button>
        </div>
      </header>
      <main className="messages-list">
        {conversation.messages.map(msg => (
          <MessageBubble key={msg.id} message={msg} isSender={msg.senderId === currentUser.id} />
        ))}
      </main>
      <footer className="message-input-area">
        <form onSubmit={handleSend} className="message-form">
          <button type="button" className="attach-button"><FaPlus /></button>
          <input
            type="text"
            placeholder="Digite a sua mensagem aqui..."
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button type="submit" className="send-button"><FaPaperPlane /></button>
        </form>
      </footer>
    </div>
  );
}

export default ChatWindow;