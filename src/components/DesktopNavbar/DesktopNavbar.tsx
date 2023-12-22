import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import styles from "./desktopNavbar.module.css";

const DesktopNavbar = () => {
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
    <div className={styles.wrapper}>
      <nav className={styles.desktopNav}>
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
    </div>
  );
};

export default DesktopNavbar;
