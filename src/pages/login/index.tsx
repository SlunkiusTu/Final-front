import React, { useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import styles from "./styles.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const Login = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const onLogin = async () => {
    try {
      const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordValidation = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

      if (!emailValidation.test(email)) {
        setEmailError("Blogai suvedete email duomenis");
        return;
      }

      if (!passwordValidation.test(password)) {
        setPasswordError("Blogas slaptazodis ");
        return;
      }

      const body = {
        email: email,
        password: password,
      };

      const response = await axios.post("http://localhost:3001/login", body);

      if (response.status === 200) {
        cookie.set("jwt_token", response.data.token);
        cookie.set("user_id", response.data.userId);
        router.push("/");
      }

      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <h1>Login</h1>
          <input
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError(null);
            }}
          />
          {emailError && <p className={styles.error}>{emailError}</p>}
          <input
            placeholder="Password"
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setPasswordError(null);
            }}
          />
          {passwordError && <p className={styles.error}>{passwordError}</p>}
          <button className={styles.button} onClick={onLogin}>
            Login
          </button>
        </div>
      </div>
    </PageTemplate>
  );
};

export default Login;
