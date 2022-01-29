import styles from "@styles/Header.module.scss";

import React, { useState } from "react";
import { FaAlignRight } from "react-icons/fa";
import links from "../constants/links";
import socialIcons from "../constants/social-icons";
import logo from "../images/gs2022_logo.png";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <Link href='/'>
            <Image src={logo} alt='garden school logo' />
          </Link>
          <button type='button' className={styles.logoBtn} onClick={toggleNav}>
            <FaAlignRight className={styles.logoIcon} />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.path}>{item.text}</Link>
              </li>
            );
          })}
        </ul>
        <div className={styles.navSocialLinks}>
          {socialIcons.map((item, index) => {
            return (
              <a
                key={index}
                href={item.url}
                target='_blank'
                rel='noopener noreferrer'
              >
                {item.icon}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Header;
