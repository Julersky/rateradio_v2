import React from 'react';
import Navbar from "../../components/Navbar/Navbar";
import './Header.scss';
import logo_header from "../../assets/rate_radio_logo.jpg"
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={logo_header} alt="raté radio" />        
        </Link>
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
