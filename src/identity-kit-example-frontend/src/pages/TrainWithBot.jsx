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
    <div className="container my-5">
      <h2 className="text-center mb-4">🧠 Train With AI Guide</h2>
      <div className="border rounded p-4 mb-4" style={{ height: '400px', overflowY: 'scroll', background: '#f8f9fa' }}>
        {messages.map((msg, idx) => (
          <div key={idx} className={`mb-3 text-${msg.sender === 'user' ? 'end' : 'start'}`}>
            <span className={`badge bg-${msg.sender === 'user' ? 'primary' : 'secondary'}`}>
              {msg.sender === 'user' ? 'You' : 'Bot'}
            </span>
            <pre className="mt-2">{msg.text}</pre>
          </div>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="d-flex">
        <input
          className="form-control me-2"
          value={input}
          placeholder="Ask: How do I train YOLOv8?"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="btn btn-success">Send</button>
      </form>
    </div>
  );
};

export default TrainWithBot;