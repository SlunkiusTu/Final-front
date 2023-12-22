import React, { useState } from "react";
import Link from "next/link";
import styles from "./header.module.css";
import DesktopNavbar from "../DesktopNavbar/DesktopNavbar";
import MobileNavbar from "../MobileNavbar/MobileNavbar";

const Header = () => {
  const [isShowMobileNavbar, setIsShowMobileNavbar] = useState(false);
  return (
    <header className={styles.wrapper}>
      <div>
        <Link className={styles.logo} href="/">
          Forum-App
        </Link>
      </div>
      <DesktopNavbar />
      <button
        className={styles.burgerButton}
        onClick={() => {
          setIsShowMobileNavbar((prevState) => !prevState);
        }}
      >
        <svg viewBox="0 0 100 80" width="20" height="20">
          <rect width="100" height="10"></rect>
          <rect y="30" width="100" height="10"></rect>
          <rect y="60" width="100" height="10"></rect>
        </svg>
      </button>
      <MobileNavbar isActive={isShowMobileNavbar} />
    </header>
  );
};

export default Header;
