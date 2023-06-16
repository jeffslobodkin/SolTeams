import React, { useState } from 'react';
import styles from './ChatUI.module.scss';

function ChatUI({ conversations, selectConversation, sendMessage }) {
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [message, setMessage] = useState('');

  const handleConversationClick = (conversation) => {
    setSelectedConversation(conversation);
    selectConversation(conversation);
  };

  const handleSendMessage = () => {
    if (message.trim()) {
      sendMessage(selectedConversation, message);
      setMessage('');
    }
  };

  return (
    <div className={styles.chatContainer}>
      <div className={styles.conversationList}>
        {conversations.map((conversation) => (
          <div
            key={conversation.id}
            onClick={() => handleConversationClick(conversation)}
            className={`${styles.conversationItem} ${selectedConversation === conversation ? styles.active : ''}`}
          >
            {conversation.otherUser}
          </div>
        ))}
      </div>

      {selectedConversation && (
        <div className={styles.messageView}>
          {selectedConversation.messages.map((message) => (
            <div key={message.id} className={styles.message}>
              <strong>{message.sender}:</strong> {message.content}
            </div>
          ))}

          <div className={styles.messageInput}>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ChatUI;
