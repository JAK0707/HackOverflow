import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // Import the custom CSS file

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

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
            to="/model-apps"
          >
            Model Apps
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
    </nav>
  );
};

export default Navbar;
