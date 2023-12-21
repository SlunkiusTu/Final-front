import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import cookie from "js-cookie";
import styles from "./header.module.css";

const Header = () => {
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
      <div>
        <Link className={styles.logo} href="/">
          Forum-App
        </Link>
      </div>
      <ul>
        <li>
          <Link
            href="/ask-question"
            className={styles.askQuestion}
            onClick={askQuestionClick}
          >
            Ask Question
          </Link>
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
        {!isLoggedIn && (
          <li>
            <Link href="/register">
              <button>SingUp</button>
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Header;
