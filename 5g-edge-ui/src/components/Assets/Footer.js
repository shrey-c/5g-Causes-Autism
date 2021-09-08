import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            {/*<Link to="/" className="social-logo">
              5gEDGE
              <i class="fab fa-typo3" />
            </Link>*/}
          </div>
          <small className="website-rights">5gEDGE © 2021</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
