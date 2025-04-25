import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import './LandingPage.css'; // Import custom CSS for styling

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const darkModeEnabled = window.matchMedia('(prefers-color-scheme: dark)').matches;
    document.body.classList.toggle('dark-mode', darkModeEnabled);

    const handleDarkModeChange = (e) => {
      document.body.classList.toggle('dark-mode', e.matches);
    };

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleDarkModeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleDarkModeChange);
    };
  }, []);

  return (
    <div className="landing-page container-fluid">
      <div className="container">
        <div className="hero-section">
          <div className="hero-content">
            <div className="platform-badge">Web3 + AI Marketplace</div>
            <h1 className="main-heading">
              Revolutionize <span className="text-white">the</span><br />
              Way You <br />
              Build <span className="gradient-text">AI Models</span>
            </h1>
            <p className="main-description">
              The first decentralized marketplace connecting AI developers,<br />
              dataset providers, and GPU resources in one seamless ecosystem.
            </p>

            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">AI Models</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10K+</span>
                <span className="stat-label">Datasets</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">5K+</span>
                <span className="stat-label">Developers</span>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI Technology" />
          </div>
        </div>

        <div className="button-container">
          <button className="btn btn-primary" onClick={() => navigate('/home')}>
            Enter Marketplace
          </button>
        </div>

        <div className="features-section">
          <h2 className="features-title">
            <span style={{color
: 'white'
            }}>Comprehensive</span> <span className="gradient-text">AI Platform</span> <span style={{color
              : 'white'
                          }}>Features</span>
          </h2>
          <p className="features-subtitle">
            Everything you need to develop, train, and monetize AI models in one place.
          </p>
          
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon pink-icon">🤖</div>
              <h3 className="feature-title">AI Training Assistant</h3>
              <p className="feature-description">
                Get step-by-step guidance for training your AI models with our interactive chatbot.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon blue-icon">🗂️</div>
              <h3 className="feature-title">Dataset Marketplace</h3>
              <p className="feature-description">
                Browse, buy, or sell datasets from around the world to train your AI models.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon purple-icon">⚙️</div>
              <h3 className="feature-title">Model Marketplace</h3>
              <p className="feature-description">
                Discover pre-trained AI models for your specific use case or sell your own.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon green-icon">📚</div>
              <h3 className="feature-title">Research Paper Assistant</h3>
              <p className="feature-description">
                Get guidance on trending topics and help with writing AI research papers.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon orange-icon">📱</div>
              <h3 className="feature-title">Custom App Showcase</h3>
              <p className="feature-description">
                Explore custom AI applications built by the community or showcase your own.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon cyan-icon">☁️</div>
              <h3 className="feature-title">Cloud GPU Resources</h3>
              <p className="feature-description">
                Access on-demand GPU computing power for training your AI models.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon pink-icon">💬</div>
              <h3 className="feature-title">Community Interaction</h3>
              <p className="feature-description">
                Connect with other AI developers, researchers, and enthusiasts in real-time.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon green-icon">📖</div>
              <h3 className="feature-title">Courses</h3>
              <p className="feature-description">
                Explore AI/ML and Web3 courses curated by experts to boost your skills and portfolio.
              </p>
            </div>
          </div>
        </div>

        <div className="why-choose-section">
          <div className="why-choose-content">
            <h2 className="why-choose-title">
              Why Choose Our <span className="gradient-text">AI Marketplace?</span>
            </h2>
            <p className="why-choose-description">
              Our platform offers unique advantages that set us apart from traditional AI development environments.
            </p>
            <ul className="why-choose-list">
              <li>
                <span className="why-choose-icon">🔒</span>
                <div>
                  <h3>Secure Blockchain Integration</h3>
                  <p>All transactions and model ownership are secured by blockchain technology, ensuring immutable records and transparency.</p>
                </div>
              </li>
              <li>
                <span className="why-choose-icon">⚡</span>
                <div>
                  <h3>Distributed Computing Power</h3>
                  <p>Access a global network of GPUs to speed up your model training at a fraction of traditional cloud costs.</p>
                </div>
              </li>
              <li>
                <span className="why-choose-icon">⏱️</span>
                <div>
                  <h3>Time-to-Market Acceleration</h3>
                  <p>Reduce development time by 60% with our streamlined workflows, pre-trained models, and expert guidance.</p>
                </div>
              </li>
              <li>
                <span className="why-choose-icon">💰</span>
                <div>
                  <h3>Monetize Your AI Assets</h3>
                  <p>Generate passive income by sharing your datasets, renting your GPU, or selling your custom AI models.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="why-choose-image">
            <img src="https://images.pexels.com/photos/8438982/pexels-photo-8438982.jpeg?auto=compress&cs=tinysrgb&w=800" alt="AI Marketplace" />
            <div className="image-caption">
              <h3>Join the AI Revolution</h3>
              <p>Our marketplace connects over 5,000 AI developers with resources they need.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
