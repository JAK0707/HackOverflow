import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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

const App = () => {
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      userCheck();
      userDatacheck();
    }
  }, [isAuthenticated]);

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        {/* Simplified Navbar */}
        <div className="flex items-center">
          <Navbar />
        </div>

        {/* Page content */}
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/train" element={<TrainWithChatbot />} />
            <Route path="/datasets" element={<ListDatasets />} />
            <Route path="/buy-models" element={<BuyModels />} />
            <Route path="/research-assistant" element={<ResearchAssistant />} />
            {/* <Route path="/model-apps" element={<ModelApps />} /> */}
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
