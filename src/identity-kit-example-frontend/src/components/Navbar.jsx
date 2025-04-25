import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ConnectWallet } from '@nfid/identitykit/react';
import { useAuth } from '../StateManagement/useContext/useClient';
import './Navbar.css';

const ConnectBtn = ({ onClick }) => (
  <button onClick={onClick} className="connect-wallet-btn">
    <div className="connect-wallet-content">
      Connect Wallet
    </div>
  </button>
);

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { isAuthenticated, principal } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-brand brand-styled">
        <NavLink to="/">
          🌐 AI<span className="brand-highlight">x</span>Change
        </NavLink>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/home"
          >
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/train"
          >
            Train Model
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/datasets"
          >
            Datasets
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/buy-models"
          >
            Buy Models
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/research-assistant"
          >
            Research Assistant
          </NavLink>
        </li>
        
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/cloud-gpu"
          >
            Cloud GPU
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/chat"
          >
            Chat
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            className={({ isActive }) =>
              `nav-link ${isActive ? 'active-route' : ''}`
            }
            to="/profile"
          >
            Profile
          </NavLink>
        </li>
      </ul>
      <div className="wallet-container">
        {!isAuthenticated ? (
          <div className="hidden font-posterama md:block">
            <ConnectWallet
              connectButtonComponent={ConnectBtn}
              className="rounded-full bg-black"
            />
          </div>
        ) : (
          <div className="hidden md:inline-block relative rounded-2xl bg-gradient-to-r from-[#f09787] to-[#CACCF5] text-left p-[1.5px]">
            <div className="bg-black h-full w-full rounded-2xl flex items-center p-1 px-3">
              <div className="flex flex-col items-start w-24 h-8 lg:w-40 lg:h-full">
                <span className="text-[10px] lg:text-xs text-gray-400 w-full overflow-hidden whitespace-nowrap text-ellipsis">
                  {principal?.toString() || "N/A"}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
