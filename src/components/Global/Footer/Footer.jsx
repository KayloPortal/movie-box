import { Link } from "react-router-dom";
import "./Footer.css";
import sprites from "/icons/__all-sprites.svg";

function Footer() {
  return (
    <footer className="footer | fs-400 gray-900 fw-bold">
      <div className="container footer-container">
        <ul role="list" className="footer-icons">
          <li>
            <svg className="footer-icon">
              <use xlinkHref={sprites + "#" + "facebook-square"}></use>
            </svg>
          </li>
          <li>
            <svg className="footer-icon">
              <use xlinkHref={sprites + "#" + "instagram"}></use>
            </svg>
          </li>
          <li>
            <svg className="footer-icon">
              <use xlinkHref={sprites + "#" + "twitter"}></use>
            </svg>
          </li>
          <li>
            <svg className="footer-icon">
              <use xlinkHref={sprites + "#" + "youtube"}></use>
            </svg>
          </li>
        </ul>
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
