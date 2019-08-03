import React from "react";

import "./Footer.css";
const Footer = () => {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-right">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-facebook" />
          </a>
          <a
            href="https://www.twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-twitter" />
          </a>
          <a
            href="https://il.linkedin.com/in/nick-minovsky-557383184"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-linkedin" />
          </a>
          <a
            href="https://github.com/nickminovsky"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-github" />
          </a>
        </div>

        <p className="no-margin">
          <span className="brand-name">weatherfy 2.0</span> &copy; 2019
        </p>
        <div className="footer-left">
          <p className="footer-links">
            <span className="by">another weather app </span>
            <span className="by">by Nick Minovsky</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
