import React, { useState } from 'react';

const TrainWithBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  // Fetching response directly from Gemini API using the hardcoded API key
  const fetchResponse = async (query) => {
    const apiKey = 'AIzaSyDTPaU1XmJWCDaiqkk_SYBdFOBZzDW5DUE'; // Hardcoded API key

    try {
      // Corrected endpoint for Gemini 1.5 Pro (gemini-1.5-pro-latest)
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro-latest:generateContent?key=${apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [{ text: query }],
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${errorText}`);
      }

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || "No response from Gemini.";
      return text;
    } catch (error) {
      console.error('Error fetching response:', error);
      return `An error occurred: ${error.message}`;
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    // Add user's message to state
    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Fetch bot's response from Gemini API
    const botResponse = await fetchResponse(input);
    const botMessage = { sender: 'bot', text: botResponse };

    // Add bot's message to state
    setMessages((prev) => [...prev, botMessage]);
    setInput('');
  };

  return (
    <div className="container-fluid my-5" style={{ fontFamily: 'Arial, sans-serif', height: '100vh' }}>
      <h2 className="text-center mb-4" style={{ color: '#4CAF50', fontWeight: 'bold' }}>🧠 Train With AI Guide</h2>
      <div
        className="border rounded p-4 mb-4"
        style={{
          height: 'calc(100% - 150px)',
          overflowY: 'scroll',
          background: '#f1f1f1',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          border: '1px solid #ddd',
          color: '#000', // Set text color to black
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`mb-3 text-${msg.sender === 'user' ? 'end' : 'start'}`}
            style={{
              display: 'flex',
              flexDirection: msg.sender === 'user' ? 'row-reverse' : 'row',
              alignItems: 'center',
            }}
          >
            <span
              className={`badge bg-${msg.sender === 'user' ? 'primary' : 'secondary'}`}
              style={{
                padding: '0.5em 1em',
                borderRadius: '20px',
                fontSize: '0.9em',
              }}
            >
              {msg.sender === 'user' ? 'You' : 'Bot'}
            </span>
            <pre
              className="mt-2"
              style={{
                background: msg.sender === 'user' ? '#d1e7dd' : '#e2e3e5',
                padding: '10px',
                borderRadius: '10px',
                margin: '0 10px',
                whiteSpace: 'pre-wrap',
                wordWrap: 'break-word',
                maxWidth: '70%',
                color: '#000', // Set text color to black
              }}
            >
              {msg.text}
            </pre>
          </div>
        ))}
      </div>

      <form
        onSubmit={handleSubmit}
        className="d-flex"
        style={{
          gap: '10px',
          alignItems: 'center',
        }}
      >
        <input
          className="form-control"
          value={input}
          placeholder="Ask: How do I train YOLOv8?"
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #ccc',
            boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)',
            width: '100%', // Make input box occupy full width
          }}
        />
        <button
          type="submit"
          className="btn btn-success"
          style={{
            padding: '10px 20px',
            borderRadius: '5px',
            fontWeight: 'bold',
            backgroundColor: '#4CAF50',
            border: 'none',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TrainWithBot;