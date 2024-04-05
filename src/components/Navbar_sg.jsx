import React, { useEffect, useState } from 'react';

function Navbar_sg() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderActive, setIsHeaderActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsHeaderActive(true);
      } else {
        setIsHeaderActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeNavbar = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className={`header ${isHeaderActive ? 'active' : ''}`} data-header>
      <div className="container">
        <a href="#" className="logo">
          <img src="../../public/logo.png"  alt=" logo" />
        </a>

        <nav className={`navbar ${isMenuOpen ? 'active' : ''}`} data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
              <img src="../../public/logo.png"  alt=" logo" />
            </a>
            <button className="nav-close-btn" aria-label="close menu" onClick={toggleMenu} data-nav-toggler>
              <ion-icon name="close-outline" aria-hidden="true"></ion-icon>
            </button>
          </div>
          <ul className="navbar-list">
            <li className="navbar-item">
              <a href="#home" className="navbar-link" data-nav-link onClick={closeNavbar}>Home</a>
            </li>
            <li className="navbar-item">
              <a href="#about" className="navbar-link" data-nav-link onClick={closeNavbar}>Services</a>
            </li>
            <li className="navbar-item">
              <a href="#courses" className="navbar-link" data-nav-link onClick={closeNavbar}>About Us</a>
            </li>
            <li className="navbar-item">
              <a href="#blog" className="navbar-link" data-nav-link onClick={closeNavbar}>Contact</a>
            </li>
            <li className="navbar-item">
              <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>Login</a>
            </li>
           {toggleMenu &&
             <li className="navbar-item">
             <a href="#" className="navbar-link" data-nav-link onClick={closeNavbar}>Signup</a>
           </li>
           }
          </ul>
        </nav>

        <div className="header-actions">
          <a href="#" className="btn has-before">
            <span className="span">Signup</span>
            <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
          </a>
          <button className="header-action-btn" aria-label="open menu" onClick={toggleMenu} data-nav-toggler>
            <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
          </button>
        </div>

        {isMenuOpen && <div className="overlay" data-nav-toggler data-overlay onClick={closeNavbar}></div>}
      </div>
    </header>
  );
}

export default Navbar_sg;
