/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Header.css";
import imageLogo from "/images/logo.png";
import { Link } from "react-router-dom";
import iconMenu from "/icons/menu.svg";
import iconSearch from "/icons/search.svg";

function Header({ displaySearch, bgTransparent }) {
  const [query, setQuery] = useState("");
  function handleQuery(newData) {
    setQuery(newData);
  }

  return (
    <header
      style={{
        backgroundColor: bgTransparent ? "var(--gray-900)" : "var(--gray-900)",
      }}
      className="header | neutral-100"
    >
      <div className="container">
        <img src={imageLogo} alt="MovieBox" className="header__logo" />
        {displaySearch ? (
          <form action="" className="header-query">
            <input
              type="text"
              value={query}
              onChange={({ target }) => handleQuery(target.value)}
              className="header-query__input"
              placeholder="Search"
            />
            <button className="header-query__submit" type="submit">
              <img src={iconSearch} alt="submit search" />
            </button>
          </form>
        ) : (
          false
        )}
        <div className="hello \ ">
          <Link to="/" />
          <button className="menu-button">
            <img className="menu-button__icon" src={iconMenu} alt="open menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
