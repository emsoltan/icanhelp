import React from "react";
import "./Header.css";
import "./logo2.png";

const Header = () => {
  return (
    <header class="header">
      <div class="logo-box"></div>
      <div class="text-box">
        <h1 class="heading-primary">
          <span class="heading-primary-main">Icanhelp.DE</span>
          <span class="heading-primary-sub">We can do better together</span>
        </h1>
        <a href="#" class="btn btn-white btn-animated">
check good deeds        </a>
      </div>
    </header>
  );
};

export default Header;
