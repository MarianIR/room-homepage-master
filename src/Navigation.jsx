import logo from "/images/logo.svg";
import openMenuIcon from "/images/icon-hamburger.svg";
import closeMenuIcon from "/images/icon-close.svg";
import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navigation ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="nav-btns">
        {isMenuOpen ? (
          <img
            src={closeMenuIcon}
            alt="this is the close menu button"
            className="close-menu"
            onClick={toggleMenu}
          />
        ) : (
          <img
            src={openMenuIcon}
            alt="this is the open menu button"
            className="open-menu"
            onClick={toggleMenu}
          />
        )}
      </div>
      <img
        src={logo}
        alt="this is the logo"
        width={80}
        height={30}
        className="logo"
      />
      <ul className={`nav-list ${isMenuOpen ? "active" : ""}`}>
        <li className="list-item">
          <a href="#" className="list-link">
            home
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            shop
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            about
          </a>
        </li>
        <li className="list-item">
          <a href="#" className="list-link">
            contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
