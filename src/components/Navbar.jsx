import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";

function Navbar_sg() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  const [showServicesMenu, setShowServicesMenu] = useState(false);

  const toggleServicesMenu = () => {
    setShowServicesMenu(!showServicesMenu);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isHeaderActive ? "active" : ""}`} data-header>
      <div className="container">
        <Link to="/" className="logo">
          <img src="../../public/logo.png" alt=" logo" />
        </Link>

        <nav className={`navbar ${isMenuOpen ? "active" : ""}`} data-navbar>
          <div className="wrapper">
            <Link to="/" className="logo">
              <img src="../../public/logo.png" alt=" logo" />
            </Link>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={toggleMenu}
              data-nav-toggler
            >
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link
                to="/"
                className="navbar-link"
                data-nav-link
                onClick={closeNavbar}
              >
                Home
              </Link>
            </li>
            <li
              className="navbar-item"
              onClick={toggleServicesMenu}
              style={{ position: "relative" }}
            >
              <Link
                to="#"
                className="navbar-link"
                data-nav-link
                style={{ display: "flex", alignItems: "center" }}
              >
                Services
                <span
                  className={`ml-2 transition-transform transform ${
                    showServicesMenu ? "rotate-180" : ""
                  } duration-200 ease-in-out`}
                >
                  <FaAngleDown />
                </span>
              </Link>
              {showServicesMenu && (
                <div className="absolute bg-white shadow-md top-full left-0 w-[300px] z-10 animate-fadeIn">
                  <ul className="py-2 text-left">
                    <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                      <Link to="/bde">Beginner Driver Education (BDE)</Link>
                    </li>
                    <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                      <Link to="/il">Hourly Driving Lessons</Link>
                    </li>
                    <li className="px-4 py-2 hover:text-secondaryGreen cursor-pointer">
                      <Link to="/crt">Vehicle for Road Test</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li className="navbar-item">
              <Link
                to="/aboutus"
                className="navbar-link"
                data-nav-link
                onClick={closeNavbar}
              >
                About Us
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/contact"
                className="navbar-link"
                data-nav-link
                onClick={closeNavbar}
              >
                Contact
              </Link>
            </li>
            <li className="navbar-item">
              <Link
                to="/login"
                className="navbar-link"
                data-nav-link
                onClick={closeNavbar}
              >
                Login
              </Link>
            </li>
            
          </ul>
        </nav>

        <div className="header-actions">
          <Link to="/postalcode" className="btn has-before">
            <span className="span">Signup</span>
            <ion-icon
              name="arrow-forward-outline"
              aria-hidden="true"
            ></ion-icon>
          </Link>
          <button
            className="header-action-btn"
            aria-label="open menu"
            onClick={toggleMenu}
            data-nav-toggler
          >
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        {isMenuOpen && (
          <div
            className="overlay"
            data-nav-toggler
            data-overlay
            onClick={closeNavbar}
          ></div>
        )}
      </div>
    </header>
  );
}

export default Navbar_sg;
