import React from "react";
import { Link } from "react-router-dom";

// STYLES
import "../styles/footer.css";

const Footer = ({ marginTop }) => {
  return (
    <>
      <footer style={{ marginTop: marginTop }}>
        <ul className="grid-footer">
          <li>
            <h5>Sitemap</h5>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/search">
                <li>Properties</li>
              </Link>
              <Link to="/agents">
                <li>Agents</li>
              </Link>
              <Link to="/contact">
                <li>Contact Us</li>
              </Link>
            </ul>
          </li>
          <li>
            <h5>Information</h5>
            <ul>
              <Link to="/faq">
                {" "}
                <li>FAQ</li>
              </Link>
              <Link to="/privacy-policy">
                <li>Privacy Policy</li>
              </Link>
            </ul>
          </li>
          <li>
            <h5>Join Our Newsletter</h5>
            <p>
              Subscribe to our newletters and be the first to know about
              exclusive deals, property price trends and real estate news in the
              U.A.E.
            </p>
            <form>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <button type="submit">Subscribe</button>
            </form>
          </li>
        </ul>
      </footer>
    </>
  );
};

export default Footer;
