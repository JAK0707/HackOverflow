import React, { useState, useEffect } from 'react';

const trendingTopics = [
  "LLMs in Healthcare",
  "Federated Learning for IoT",
  "AI-based Climate Modeling",
  "Multimodal Learning",
  "AI-Powered Cybersecurity",
  "Diffusion Models for Image Synthesis",
  "RLHF (Reinforcement Learning with Human Feedback)"
];

const assistantReplies = [
  "Sure! Let's start with the abstract. What's your core idea?",
  "Got it. Now write your problem statement — what gap are you addressing?",
  "Nice. Which dataset will you be using? Is it public or custom?",
  "What methods/models are you planning to use?",
  "Great. Include evaluation metrics like accuracy, F1, etc.",
  "Finally, what do you conclude and propose for future work?"
];

const ResearchAssistant = () => {
  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  }, []);

  const [chat, setChat] = useState(["👋 Hello! I’m your research buddy. Let’s write a great paper."]);
  const [input, setInput] = useState("");
  const [step, setStep] = useState(0);

  const sendMessage = () => {
    if (!input.trim()) return;

    const updatedChat = [...chat, `🧑 You: ${input}`];

    if (step < assistantReplies.length) {
      updatedChat.push(`🤖 Assistant: ${assistantReplies[step]}`);
      setStep(step + 1);
    } else {
      updatedChat.push(`🤖 Assistant: Looks like we’re done! Would you like to review or edit something?`);
    }

    setChat(updatedChat);
    setInput("");
  };

  return (
    <div
      className="container my-5"
      style={{
        background: 'linear-gradient(135deg, #f3e7e9 0%, #e3eeff 100%)', // Match BuyModels background
        borderRadius: '20px',
        padding: '30px',
        color: '#333',
        boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
      }}
    >
      <h2
        className="text-center mb-4"
        style={{
          fontWeight: 'bold',
          fontSize: '2.5rem',
          color: 'var(--heading-color, #333)',
          textShadow: '1px 1px 2px rgba(0, 0, 0, 0.1)', // Subtle shadow
        }}
      >
        📚 AI Research Assistant
      </h2>

      <div className="row mb-5">
        <div className="col-md-12">
          <h5 style={{ fontWeight: 'bold', color: 'var(--text-color, #333)' }}>🔥 Trending Research Topics (2025)</h5>
          <ul className="list-group">
            {trendingTopics.map((topic, idx) => (
              <li
                className="list-group-item"
                key={idx}
                style={{
                  background: '#f8f9fa', // Subtle light gray background
                  color: '#333',
                  borderRadius: '8px',
                  marginBottom: '10px',
                  padding: '10px 15px', // Added padding inside the box
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Softer shadow
                  transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
                }}
              >
                {topic}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div
        className="card shadow-sm p-4"
        style={{
          background: '#ffffff', // White background for the card
          borderRadius: '12px',
          boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', // Softer shadow
          padding: '20px', // Added padding inside the card
          color: '#000', // Black text for better readability
        }}
      >
        <h5
          className="mb-3"
          style={{
            fontWeight: 'bold',
            color: '#000', // Black text for better readability
          }}
        >
          🧠 Start Writing with Your AI Guide
        </h5>
        <div
          className="chat-box mb-3"
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
            background: '#ffffff', // White background for the chat box
            color: '#000', // Black text
            padding: '15px', // Added padding inside the chat box
            borderRadius: '10px',
            border: '1px solid #ddd', // Light border
            boxShadow: 'inset 0 2px 4px rgba(0, 0, 0, 0.05)', // Subtle inset shadow
          }}
        >
          {chat.map((msg, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '10px',
                color: idx % 2 === 0 ? '#000' : '#555', // Black text for user messages
                fontWeight: idx % 2 === 0 ? 'bold' : 'normal',
                background: idx % 2 === 0 ? '#ffffff' : '#f1f1f1', // Alternate subtle background colors
                padding: '10px', // Added padding inside messages
                borderRadius: '6px',
              }}
            >
              {msg}
            </div>
          ))}
        </div>
        <div className="input-group" style={{ display: 'flex', alignItems: 'center' }}>
          <input
            type="text"
            className="form-control"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type your response..."
            onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
            style={{
              flex: '1',
              borderRadius: '10px 0 0 10px',
              padding: '10px 15px',
              border: '1px solid #ddd',
              background: '#ffffff',
              color: '#000',
              fontSize: '1rem',
            }}
          />
          <button
            className="btn btn-primary"
            onClick={sendMessage}
            style={{
              borderRadius: '0 10px 10px 0',
              padding: '10px 20px',
              fontWeight: 'bold',
              background: '#007bff', // Subtle blue background
              color: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Softer shadow
              transition: 'transform 0.2s, box-shadow 0.2s', // Smooth hover effect
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'scale(1.02)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
            }}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResearchAssistant;
