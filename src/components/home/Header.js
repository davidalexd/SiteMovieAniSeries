import React from "react";
import { Navbar } from "./Navbar";
export const Header = () => {
  return (
    <header id="header">
      <div className="center">
        <div id="logo">
          <img
            src="https://images.vexels.com/media/users/3/149475/isolated/lists/843ba40b04d0d0498dc48d26d5cf0a99-ilustracion-de-ojo-de-anime-femenino-enojado.png"
            className="app-logo"
            alt="logotipo"
          />
          <span id="brand">
            <strong>Ani</strong>Series
          </span>
        </div>
        <Navbar />
        <div className="clearflix"></div>
      </div>
    </header>
  );
};
