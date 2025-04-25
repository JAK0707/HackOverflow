import React, { useState, useEffect } from 'react';
import './Chat.css'; // Import custom CSS for styling

const Chat = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" },
  ]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMessage = { sender: "user", text: input };
    setMessages([...messages, userMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = { sender: "bot", text: "Sure! AI models are algorithms trained to perform specific tasks..." };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);

    setInput('');
  };

  return (
    <div className="chat-page-container">
      <div className="chat-container">
        <div className="chat-header">
          <h2>Global Chat</h2>
        </div>
        <div className="chat-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chat-input">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
          />
          <button onClick={sendMessage}>
            <span role="img" aria-label="send">📤</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
