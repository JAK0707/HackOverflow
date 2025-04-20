import React, { useState, useEffect } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  }, []);

  const sendMessage = () => {
    const newMsg = {
      user: "You",
      text: input,
      time: new Date().toLocaleTimeString()
    };
    setMessages([...messages, newMsg]);
    setInput('');
    // TODO: Integrate with backend WebSocket or Firestore
  };

  return (
    <div
      className="container my-5"
      style={{
        background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)', // Match BuyModels background
        borderRadius: '20px',
        padding: '30px',
        color: '#333',
        boxShadow: '0 6px 20px rgba(208, 197, 197, 0.15)',
      }}
    >
      <h2>💬 Global Chat</h2>
      <div className="border p-3" style={{ height: "300px", overflowY: "auto" }}>
        {messages.map((msg, idx) => (
          <div key={idx}>
            <strong>{msg.user}</strong>: {msg.text} <small className="text-muted">({msg.time})</small>
          </div>
        ))}
      </div>
      <div className="input-group mt-3">
        <input
          type="text"
          className="form-control"
          placeholder="Type your message..."
          value={input}
          onChange={e => setInput(e.target.value)}
        />
        <button className="btn btn-primary" onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
