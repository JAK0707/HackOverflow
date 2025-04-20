import React, { useState } from 'react';

const TrainWithBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const fetchResponse = async (query) => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL; // Ensure REACT_APP_API_URL is defined
      const apiKey = process.env.GEMINI_API_KEY; // Ensure GEMINI_API_KEY is defined

      if (!apiUrl || !apiKey) {
        throw new Error('API URL or API Key is not defined in the environment variables.');
      }

      const response = await fetch(`${apiUrl}/answer`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({ query }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`API Error: ${errorText}`);
      }

      const data = await response.json();
      return data.answer || "Sorry, I couldn't find an answer to your question.";
    } catch (error) {
      console.error('Error fetching response:', error);
      return `An error occurred: ${error.message}`;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);

    const botResponse = await fetchResponse(input);
    const botMessage = { sender: 'bot', text: botResponse };

    setMessages(prev => [...prev, botMessage]);
    setInput('');
  };

  return (
    <div
      className="container my-5"
      style={{
        background: 'var(--form-background, linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%))',
        borderRadius: '15px',
        padding: '20px',
        color: 'var(--text-color, #333)',
        boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
          color: 'var(--heading-color, #4a4a4a)',
        }}
      >
        🧠 Train With AI Guide
      </h2>
      <p
        className="text-center mb-4"
        style={{
          fontSize: '1.2rem',
          fontStyle: 'italic',
          color: 'var(--subtext-color, #555)',
        }}
      >
        Ask the AI guide anything about training models, best practices, or troubleshooting tips.
      </p>
      <div
        className="border rounded p-4 mb-4"
        style={{
          height: '400px',
          overflowY: 'scroll',
          background: 'var(--card-background, #ffffff)',
          border: '1px solid var(--card-border, #ddd)',
          boxShadow: 'inset 0 4px 8px rgba(0, 0, 0, 0.05)',
          borderRadius: '10px',
        }}
      >
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`d-flex mb-3 ${msg.sender === 'user' ? 'justify-content-end' : 'justify-content-start'}`}
          >
            <div
              className={`p-3 rounded ${
                msg.sender === 'user' ? 'bg-light' : 'bg-info'
              }`}
              style={{
                maxWidth: '70%',
                color: msg.sender === 'user' ? 'var(--user-text-color, #e0e0e0)' : 'var(--bot-text-color, #ffffff)',
                fontSize: '1rem',
                animation: 'fadeIn 0.5s ease',
              }}
            >
              <strong>{msg.sender === 'user' ? 'You' : 'Bot'}</strong>
              <pre className="mt-2 mb-0" style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>
                {msg.text}
              </pre>
            </div>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="d-flex">
        <input
          className="form-control me-2"
          value={input}
          placeholder="Ask: How do I train YOLOv8?"
          onChange={(e) => setInput(e.target.value)}
          style={{
            borderRadius: '20px',
            padding: '15px 20px',
            fontSize: '1rem',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            border: '1px solid var(--input-border, #ccc)',
            background: 'var(--input-background, #fff)',
            color: 'var(--input-text-color, #333)',
          }}
        />
        <button
          type="submit"
          className="btn btn-primary"
          style={{
            borderRadius: '20px',
            padding: '15px 25px',
            fontSize: '1rem',
            fontWeight: 'bold',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background 0.3s ease',
            background: 'var(--button-background, #007bff)',
            color: 'var(--button-text-color, #fff)',
          }}
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default TrainWithBot;
