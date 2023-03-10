import React from "react";
import "./Header.css";

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src="../images/IG logo.png" alt="" />
        <img src="../images/Arrow.svg" alt="" />
      </div>

      <div className="header__menu">
        <img src="../images/Heart.svg" alt="" />
        <img src="../images/Cloud.svg" alt="" />
        <img src="../images/Cross.svg" alt="" />
      </div>
    </header>
  );
};
