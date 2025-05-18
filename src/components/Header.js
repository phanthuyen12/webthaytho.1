import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/css/header.css';
import TransparentLogo from '../assets/Transparent text logo 4.png';

const Header = () => {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logo-container">
        <img src={TransparentLogo} alt="Tishi Stay Logo" className="logo" />
      </div>

      {/* Navigation */}
      <nav className="nav">
        <a href="https://toshistay.com/" className="stay-with-us">
          Stay with us
        </a>
        <a href="https://toshistay.com/interior-design/" className="stay-with-us">
          Interior design
        </a>
        <a href="https://toshistay.com/blog-toshi/" className="stay-with-us">
          Blog
        </a>
      </nav>
    </header>
  );
};

export default Header;