import "../Styles/Header.css";
import { useState } from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <a href="/">KitchenHub</a>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search"  />
          <img src="Images/Vector (16).png" alt="Search" />    
        </div>
        <div className="cart-icon">
          <a href="/cart">
            <img src="Images/Vector (17).png" alt="Cart" />
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
