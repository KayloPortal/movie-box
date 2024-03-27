/* eslint-disable react/prop-types */
import { useState } from "react";
import "./Header.css";
import iconLogo from "/icons/logo.svg";
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
      className="header | neutral-100 fs-300 fl-height-600 "
    >
      <div className="container header-container">
        <img src={iconLogo} alt="MovieBox" className="header__logo" />
        {displaySearch ? (
          <form action="" className="query-form">
            <input
              type="text"
              value={query}
              onChange={({ target }) => handleQuery(target.value)}
              className="query-form__input"
              placeholder="What do you want to watch?"
            />
            <button className="query-form__submit" type="submit">
              <img className="query-from__submit-icon" src={iconSearch} alt="submit search" />
            </button>
          </form>
        ) : (
          false
        )}
        <div className="hello \ ">
          <Link className=" | fw-bold" to="/">Dashboard</Link>
          <button className="menu-button">
            <img className="menu-button__icon" src={iconMenu} alt="open menu" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
