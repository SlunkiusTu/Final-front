// RegistrationForm.tsx
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./registrationFom.module.css";

const RegistrationForm: React.FC = () => {
  const [fullName, setFullName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const [fullNameError, setFullNameError] = useState<string | null>(null);
  const [emailError, setEmailError] = useState<string | null>(null);
  const [passwordError, setPasswordError] = useState<string | null>(null);

  const router = useRouter();

  const handleRegistration = async () => {
    try {
      const fullNameValidation = /^[A-Z][a-z]{0,11}$/;
      const emailValidation = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const passwordValidation = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;

      if (!fullNameValidation.test(fullName)) {
        setFullNameError("Pirmoji vardo raide turi buti is didziosios raides");
        return;
      }

      if (!emailValidation.test(email)) {
        setEmailError("Blogai suvestas email");
        return;
      }

      if (!passwordValidation.test(password)) {
        setPasswordError(
          "Slaptazodis turi tureti viena didziaja raide, skaiciu, ir buti trumpesnis nei 8 simbolai"
        );
        return;
      }

      const response = await axios.post("http://localhost:3001/register", {
        fullName,
        email,
        password,
      });

      console.log("Registracija Sekminga:", response.data);
      router.push("/");
    } catch (error) {
      console.error("Kazkas ne taip:", error.response?.data);
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h1>Registration</h1>

        <input
          placeholder="Your Name"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            setFullNameError(null);
          }}
        />
        {fullNameError && <p className={styles.error}>{fullNameError}</p>}
        <input
          placeholder="Email"
          type="email"
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
        <button className={styles.button} onClick={handleRegistration}>
          Register
        </button>
      </div>
    </div>
  );
};

export default RegistrationForm;
