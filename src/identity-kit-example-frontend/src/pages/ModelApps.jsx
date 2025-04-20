import React, { useEffect } from 'react';

const modelApps = [
  {
    id: 1,
    name: "Road Pothole Detector",
    description: "Upload an image or video and detect potholes using YOLOv8.",
    creator: "Jaiditya Kapoor",
    demoLink: "https://pothole-detector.streamlit.app/",
    tags: ["Computer Vision", "YOLOv8", "Streamlit"]
  },
  {
    id: 2,
    name: "Text Sentiment Analyzer",
    description: "Enter any sentence and classify its sentiment using BERT.",
    creator: "AI Wizard",
    demoLink: "https://huggingface.co/spaces/AIWizard/SentimentApp",
    tags: ["NLP", "Sentiment", "Transformers"]
  },
  {
    id: 3,
    name: "Currency Note Forgery Detector",
    description: "Upload currency note images and check for counterfeits.",
    creator: "SecureNet",
    demoLink: "https://example.com/currency-app",
    tags: ["Classification", "CNN", "Security"]
  }
];

const ModelApps = () => {
  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);
  }, []);

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
      <h2 className="text-center mb-4">🧩 Ready-to-Use AI Apps</h2>

      <div className="row">
        {modelApps.map(app => (
          <div className="col-md-4" key={app.id}>
            <div className="app-card">
              <h3 className="app-title">{app.name}</h3>
              <h5 className="app-creator">By {app.creator}</h5>
              <p className="app-description">{app.description}</p>
              <div className="app-tags">
                {app.tags.map((tag, idx) => (
                  <span key={idx} className="tag-badge">{tag}</span>
                ))}
              </div>
              <a
                href={app.demoLink}
                target="_blank"
                rel="noopener noreferrer"
                className="app-button"
              >
                Try App
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelApps;
