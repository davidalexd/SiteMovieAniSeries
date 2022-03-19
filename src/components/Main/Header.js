import React from "react";
import "./header.css";
export const Header = () => {
  return (
    <div className="header">
      <div className="header-left">
        <i className="fas fa-bars"></i>
        <img
          className="logo"
          src="https://images.vexels.com/media/users/3/149475/isolated/lists/843ba40b04d0d0498dc48d26d5cf0a99-ilustracion-de-ojo-de-anime-femenino-enojado.png"
        />
        <span id="brand">
          <strong>Ani</strong>Series
        </span>
      </div>
      <div className="header-center">
        <div className="search">
          <input type="text" placeholder="Search" className="search-box" />
          <button className="search-btn">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </div>
      <div className="header-right">
        <div className="user-info">
          <i class="fas fa-ellipsis-v"></i>
        </div>
        <div className="session">
          <button className="session-btn">
            <i class="fas fa-user-circle"></i>
            <span id='session-txt'>
              Acceder
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};
