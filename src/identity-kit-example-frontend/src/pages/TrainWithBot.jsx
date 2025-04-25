import React, { useState } from 'react';
import './TrainWithBot.css'; // Import custom CSS for styling

const TrainWithBot = () => {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI assistant. How can I help you today?" },
  ]);
  const [input, setInput] = useState('');

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
    <div className="train-with-bot-container">
      <div className="training-info-section">
        <h1 className="section-title">AI Training Assistant</h1>
        <p className="section-subtitle">
          Get personalized guidance for training your AI models, whether you're a beginner or an experienced developer.
        </p>

        <div className="how-it-works-card">
          <h3 className="card-title">⚡ How It Works</h3>
          <p className="card-description">
            Our AI training assistant will guide you through the entire process of developing and training AI models. Ask questions, get code samples, and receive step-by-step instructions tailored to your specific project.
          </p>
          <div className="user-levels">
            <div className="user-level beginner">For Beginners: Learn ML concepts and get started with simple models</div>
            <div className="user-level expert">For Experts: Advanced techniques, optimization, and architecture design</div>
          </div>
        </div>

        <h3 className="training-process-title">Training Process</h3>
        <div className="training-process-grid">
          <div className="process-step">
            <h4>📊 Data Preparation</h4>
            <p>Clean, normalize, and preprocess your data for optimal model performance.</p>
          </div>
          <div className="process-step">
            <h4>⚙️ Model Selection</h4>
            <p>Choose the right model architecture for your specific task and data type.</p>
          </div>
          <div className="process-step">
            <h4>📈 Model Training</h4>
            <p>Configure hyperparameters and train your model to achieve optimal results.</p>
          </div>
          <div className="process-step">
            <h4>🔧 Fine-tuning</h4>
            <p>Make incremental improvements to boost model performance and accuracy.</p>
          </div>
          <div className="process-step">
            <h4>🚀 Deployment</h4>
            <p>Optimize your model for production environments and deploy efficiently.</p>
          </div>
          <div className="process-step">
            <h4>💰 Monetization</h4>
            <p>List your model on our marketplace and set your preferred pricing model.</p>
          </div>
        </div>
      </div>

      <div className="chatbot-section">
        <div className="chatbot-header">
          <h3>AI Training Assistant</h3>
          <p>Ask me about model training, data preprocessing, or any ML topic</p>
        </div>
        <div className="chatbot-messages">
          {messages.map((msg, idx) => (
            <div key={idx} className={`chat-message ${msg.sender}`}>
              <p>{msg.text}</p>
            </div>
          ))}
        </div>
        <div className="chatbot-input">
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

export default TrainWithBot;