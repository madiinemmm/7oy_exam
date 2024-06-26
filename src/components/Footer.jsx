import React from "react";
import { Link } from "react-router-dom";
import styles from "./index.module.css";

import facebook from "../assets/facebook.svg";
import twitter from "../assets/twitter.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/logo.svg";

function Footer() {
  return (
    <div className={styles.footerContainer} >
      <div className={styles.footer} >
        <div className={styles.footer__nav}>
          <div className={styles.footer__logo}>
            <Link to="/">
              <img src={logo} alt="Logo" />
            </Link>
          </div>
          <div className={styles.footer__links} style={{marginRight: "auto", marginLeft: "auto"}}>
            <ul>
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link to="/pages/HEADPHONES">HEADPHONES</Link>
              </li>
              <li>
                <Link to="/pages/SPEAKERS">SPEAKERS</Link>
              </li>
              <li>
                <Link to="/pages/EARPHONES">EARPHONES</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.footer__description}>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're a
            small team of music lovers and sound specialists who are devoted to
            helping you get the most out of personal audio. Come and visit our
            demo facility - we’re open 7 days a week.
          </p>
          <div className={styles.boglanish}>
            <Link to="/">
              <img src={facebook} alt="Facebook" />
            </Link>
            <Link to="/">
              <img src={twitter} alt="Twitter" />
            </Link>
            <Link to="/">
              <img src={instagram} alt="Instagram" />
            </Link>
          </div>
        </div>
        <div className={styles.Copyright}>
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
