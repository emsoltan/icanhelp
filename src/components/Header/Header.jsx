import React from "react";
import "./Header.css";
import "./logo2.png";

const Header = () => {
  return (
    <header className="header">
      <div className="logo-box"></div>
      <div className="text-box">
        <h1 className="heading-primary">
          <span className="heading-primary-main">Icanhelp.DE</span>
          <span className="heading-primary-sub">We can do better together</span>
        </h1>
        <a
          href="https://icanhelp.vercel.app/"
          className="btn btn-white btn-animated"
        >
          check good deeds
        </a>
      </div>
    </header>
  );
};

export default Header;
