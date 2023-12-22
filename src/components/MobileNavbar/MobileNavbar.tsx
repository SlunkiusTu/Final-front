import React, { useEffect, useState } from "react";
import styles from "./mobileNavbar.module.css";
import Link from "next/link";
import cookie from "js-cookie";
import { useRouter } from "next/router";

interface MobileNavbarProps {
  isActive: boolean;
}

const MobileNavbar: React.FC<MobileNavbarProps> = ({ isActive }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const router = useRouter();

  useEffect(() => {
    const savedCookie = cookie.get("jwt_token");

    if (savedCookie) {
      setIsLoggedIn(true);
    }
  }, []);

  const askQuestionClick = () => {
    const jwtToken = cookie.get("jwt_token");

    if (!jwtToken) {
      router.push("/login");
    } else {
      router.push("/ask-question");
    }
  };

  const handleLogout = () => {
    cookie.remove("jwt_token");
    cookie.remove("user_id");
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <nav className={`${styles.mobileNav} ${isActive && styles.active}`}>
      <ul>
        <li>
          <Link href="/ask-question">
            <button className={styles.askQuestion} onClick={askQuestionClick}>
              Ask Question
            </button>
          </Link>
        </li>

        <li>
          {isLoggedIn ? (
            <button className={styles.logout} onClick={handleLogout}>
              Logout
            </button>
          ) : (
            <Link href="/login">
              <button className={styles.login}>Login</button>
            </Link>
          )}
        </li>
        {!isLoggedIn && (
          <li>
            <Link href="/register">
              <button className={styles.singup}>SingUp</button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default MobileNavbar;
