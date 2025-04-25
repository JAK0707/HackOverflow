import React, { useState, useEffect } from 'react';
import './ResearchAssistant.css'; // Import custom CSS for styling

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
      style={{
        background: 'linear-gradient(135deg, #3d2b5e 0%, #1a1a1a 100%)',
        padding: '30px',
        color: 'white',
      }}
    >
      {/* New Section */}
      <div className="latest-research-section">
        <h2 className="section-title">AI Research Assistant</h2>
        <p className="section-subtitle">
          Get personalized guidance for choosing and refining your research topic, whether you're a student or an experienced researcher.
        </p>

        <div className="latest-topics-card">
          <h3 className="card-title">📘 Latest Research Topics in AI/ML</h3>
          <p className="card-description">
            Stay updated with cutting-edge advancements in Artificial Intelligence and Machine Learning. Explore trending topics, groundbreaking research, and emerging technologies in the field.
          </p>
          <div className="topics-grid">
            <div className="topic-item">Generative AI</div>
            <div className="topic-item">Reinforcement Learning</div>
            <div className="topic-item">Explainable AI</div>
            <div className="topic-item">AI Ethics</div>
          </div>
        </div>

        <h3 className="process-title">Research Topic Selection Process</h3>
        <div className="process-grid">
          <div className="process-step">
            <span className="step-icon">🔍</span>
            <h4>Identify Interests</h4>
            <p>Explore areas of interest and identify topics that excite you.</p>
          </div>
          <div className="process-step">
            <span className="step-icon">📚</span>
            <h4>Literature Review</h4>
            <p>Review existing research to find gaps and opportunities.</p>
          </div>
          <div className="process-step">
            <span className="step-icon">🎯</span>
            <h4>Narrow Down</h4>
            <p>Focus on a specific problem or question within your chosen area.</p>
          </div>
          <div className="process-step">
            <span className="step-icon">📝</span>
            <h4>Draft Proposal</h4>
            <p>Write a clear and concise research proposal outlining your objectives.</p>
          </div>
          <div className="process-step">
            <span className="step-icon">🤝</span>
            <h4>Collaborate</h4>
            <p>Discuss your ideas with peers or mentors for feedback.</p>
          </div>
          <div className="process-step">
            <span className="step-icon">✅</span>
            <h4>Finalize Topic</h4>
            <p>Confirm your research topic and start planning your study.</p>
          </div>
        </div>
      </div>

      {/* Existing AI Guide Section */}
      <div
        className="card shadow-sm p-4"
        style={{
          background: 'transparent',
          borderRadius: '10px',
          padding: '20px',
          color: '#fff',
        }}
      >
        <h5 className="mb-3" style={{ fontWeight: 'bold', color: '#fff' }}>
          🧠 Start Writing with Your AI Guide
        </h5>
        <div
          className="chat-box mb-3"
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
            background: 'transparent',
            color: '#fff',
            padding: '15px',
            borderRadius: '10px',
            border: '1px solid #555',
          }}
        >
          {chat.map((msg, idx) => (
            <div
              key={idx}
              style={{
                marginBottom: '10px',
                color: idx % 2 === 0 ? '#fff' : '#ccc',
                fontWeight: idx % 2 === 0 ? 'bold' : 'normal',
                background: idx % 2 === 0 ? 'transparent' : '#444',
                padding: '10px',
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
              border: '1px solid #555',
              background: '#2c2c2c',
              color: '#fff',
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
              background: '#007bff',
              color: '#fff',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
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
