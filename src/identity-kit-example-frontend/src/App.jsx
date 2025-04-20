import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ConnectWallet } from '@nfid/identitykit/react';
import { useAuth } from './StateManagement/useContext/useClient';

//import css from './App.css';  

import LandingPage from './pages/LandingPage';
import HomePage from './pages/HomePage';
import TrainWithChatbot from './pages/TrainWithBot';
import ListDatasets from './pages/ListDatasets';
import BuyModels from './pages/BuyModels';
import ResearchAssistant from './pages/ResearchAssistant';
import ModelApps from './pages/ModelApps';
import CloudGPU from './pages/CloudGPU';
import Chat from './pages/Chat';
import Profile from './pages/Profile';

import Login from './pages/Login';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import ThemeToggle from './components/ThemeToggle';

import './index.scss';

const ConnectBtn = ({ onClick }) => (
  <button onClick={onClick} className="bg-white">
    <div className="w-full h-full rounded-xl flex items-center justify-center">
      Connect Wallet
    </div>
  </button>
);

const App = () => {
  const { isAuthenticated, principal } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      userCheck();
      userDatacheck();
    }
  }, [isAuthenticated]);

  const toggleDropdown = () => {
    // Implement dropdown toggle logic if needed
    console.log("Dropdown toggle clicked");
  };

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Combined Navbar */}
        <nav className="flex justify-between px-20 py-10 items-center h-10 bg-slate-400">
          <div className="flex items-center">
            <Navbar />
          </div>

          {!isAuthenticated ? (
            <div className="hidden font-posterama md:block">
              <ConnectWallet
                connectButtonComponent={ConnectBtn}
                className="rounded-full bg-black"
              />
            </div>
          ) : (
            <div className="hidden md:inline-block relative rounded-2xl bg-gradient-to-r from-[#f09787] to-[#CACCF5] text-left p-[1.5px]">
              <button
                onClick={toggleDropdown}
                className="flex items-center text-white rounded-full"
              >
                <div className="bg-black h-full w-full rounded-2xl flex items-center p-1 px-3">
                  <div className="flex flex-col items-start w-24 h-8 lg:w-40 lg:h-full">
                    <span className="text-[10px] lg:text-xs text-gray-400 w-full overflow-hidden whitespace-nowrap text-ellipsis">
                      {principal?.toString() || "N/A"}
                    </span>
                  </div>
                </div>
              </button>
            </div>
          )}
        </nav>

        {/* Page content */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/train" element={<TrainWithChatbot />} />
            <Route path="/datasets" element={<ListDatasets />} />
            <Route path="/buy-models" element={<BuyModels />} />
            <Route path="/research-assistant" element={<ResearchAssistant />} />
            <Route path="/model-apps" element={<ModelApps />} />
            <Route path="/cloud-gpu" element={<CloudGPU />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
