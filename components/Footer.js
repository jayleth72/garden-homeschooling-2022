import React from "react";
import styles from "@styles/Footer.module.scss";
import links from "@constants/links";
import socialIcons from "@constants/socialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map((item, index) => {
          return (
            <Link fade key={index} href={item.path}>
              {item.text}
            </Link>
          );
        })}
      </div>
      <div className={styles.icons}>
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

      <div className={styles.copyright}>
        copyright &copy; Garden homeschooling {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  );
};

export default Footer;
