/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import "./Header.css";
import iconLogo from "/icons/logo.svg";
import { Link, NavLink } from "react-router-dom";
import iconMenu from "/icons/menu.svg";
import iconSearch from "/icons/search.svg";
import iconMenuClose from "/icons/menu-close.svg";
import iconArrowLeft from "/icons/arrow-left.svg";
import gsap from "gsap"
import useGSAP from "@gsap/react"

function Header({ displaySearch, bgTransparent }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
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
              <img
                className="query-from__submit-icon"
                src={iconSearch}
                alt="submit search"
              />
            </button>
          </form>
        ) : (
          false
        )}
        <div className="hello \ ">
          <Link className=" | fw-bold" to="/">
            Dashboard
          </Link>
          <button className="menu-button">
            <img className="menu-button__icon" src={iconMenu} alt="open menu" />
          </button>
        </div>
      </div>
      <MenuModal />
    </header>
  );
}

function MenuModal({ open, toggleOpen }) {

  return (
    <div className="menu-backdrop" onClick={() => toggleOpen(false)}>
      <div className="menu">
        <div className="container menu-container">
          <button className="menu-button" onClick={() => toggleOpen(false)}>
            <img className="menu-button__icon" src={iconMenuClose} alt="close menu" />
          </button>
          <nav className="menu-navi">
            <ul className="menu-navi-list" role="list">
              <li className="menu-navi-list__item">
                <NavLink to="/" className="menu-navi__link | fs-600 fl-height-600 link-underline">
                  Home <img src={iconArrowLeft} alt="You're at Home page" />
                </NavLink>
              </li>
              <li className="menu-navi-list__item">
                <NavLink to="/movies" className="menu-navi__link | fs-600 fl-height-600 link-underline">
                  Movies <img src={iconArrowLeft} alt="You're at Movies page" />
                </NavLink>
              </li>
              <li className="menu-navi-list__item">
                <NavLink to="/dashboard" className="menu-navi__link | fs-600 fl-height-600 link-underline">
                  Dashboard <img src={iconArrowLeft} alt="You're at Dashboard page" />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Header;
