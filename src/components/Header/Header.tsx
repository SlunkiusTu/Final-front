import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import styles from "./header.module.css";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(!!cookie.get("jwt_token"));

  const router = useRouter();

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
    setIsLoggedIn(false);
    router.push("/");
  };

  return (
    <div className={styles.wrapper}>
      <div>
        <Link className={styles.logo} href="/">
          Forum-App
        </Link>
      </div>
      <ul>
        <li>
          <a className={styles.askQuestion} onClick={askQuestionClick}>
            Ask Question
          </a>
        </li>
        <li>
          {isLoggedIn ? (
            <button onClick={handleLogout}>Logout</button>
          ) : (
            <Link href="/login">
              <button>Login</button>
            </Link>
          )}
        </li>
        <li>
          <a href="">
            <button>SingUp</button>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
