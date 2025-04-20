import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ConnectWallet } from '@nfid/identitykit/react'; // Import ConnectWallet
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
      <div className="container text-center">
        <h1 className="landing-title">
          🌐 AI<span className="highlight">x</span>Change
        </h1>
        <p className="landing-subtitle">
          A Web3 + AI/ML platform for collaboration and innovation
        </p>

        <div className="d-flex justify-content-center mb-5">
          <button className="btn btn-primary mx-2" onClick={() => navigate('/home')}>
            Enter Marketplace
          </button>
          <ConnectWallet
            connectButtonComponent={({ onClick }) => (
              <button className="btn btn-outline-secondary mx-2" onClick={onClick}>
                Connect Wallet
              </button>
            )}
          />
        </div>

        <div className="row mt-5">
          <div className="col-md-4 d-flex">
            <div className="card landing-card flex-fill">
              <div className="card-body text-center">
                <h3 className="card-title">🤖 Train Models with Guidance</h3>
                <p className="card-text">
                  Use our AI chatbot to learn model training step-by-step.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card landing-card flex-fill">
              <div className="card-body text-center">
                <h3 className="card-title">🗂️ Share Datasets</h3>
                <p className="card-text">
                  Upload datasets & let others train for you with incentives.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
            <div className="card landing-card flex-fill">
              <div className="card-body text-center">
                <h3 className="card-title">🧠 Buy AI Models</h3>
                <p className="card-text">
                  Browse and purchase pre-trained models.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
