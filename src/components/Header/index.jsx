import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './style.css';



function Navbar() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <Link className="navbar-brand" to="/">
            Antimio's Portfolio Webpage
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/projects"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  My Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                >
                  Contact Me
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default Navbar;