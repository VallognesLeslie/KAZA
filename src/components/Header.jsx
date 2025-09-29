import React from "react";
import "../styles/header.scss";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa" />
      </div>
      <nav>
        <a href="/">Accueil</a>
        <a href="/about">A propos</a>
      </nav>
    </header>
  );
};

export default Header;
