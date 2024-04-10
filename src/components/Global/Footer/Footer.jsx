import { Link } from "react-router-dom";
import "./Footer.css";
import sprites from "/icons/__all-sprites.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-icons">
          <svg className="footer-icon">
            <use xlinkHref={sprites + "#" + "facebook-square"}></use>
          </svg>
          <svg className="footer-icon">
            <use xlinkHref={sprites + "#" + "instagram"}></use>
          </svg>
          <svg className="footer-icon">
            <use xlinkHref={sprites + "#" + "twitter"}></use>
          </svg>
          <svg className="footer-icon">
            <use xlinkHref={sprites + "#" + "youtube"}></use>
          </svg>
        </div>
        <nav className="footer-navigation">
          <ul className="footer-links" role="list">
            <li>
              <Link className="footer-link" to={""}>
                Conditions of Use
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={""}>
                Privacy & Policy
              </Link>
            </li>
            <li>
              <Link className="footer-link" to={""}>
                Press Room
              </Link>
            </li>
          </ul>
        </nav>
        <p className="footer-copyright">
          &copy; 2021 MovieBox by Adriana Eka Prayudha
        </p>
      </div>
    </footer>
  );
}

export default Footer;
