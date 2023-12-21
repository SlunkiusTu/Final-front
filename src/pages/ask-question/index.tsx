import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import cookie from "js-cookie";
import styles from "./styles.module.css";

const AskQuestion = () => {
  const [question_title, setQuestion_title] = useState("");
  const [question_text, setQuestion_text] = useState("");

  const router = useRouter();

  const onAskQuestion = async () => {
    const question = {
      question_title: question_title,
      question_text: question_text,
      user_id: cookie.get("user_id"),
    };

    const headers = {
      authorization: cookie.get("jwt_token"),
    };
    try {
      const response = await axios.post(
        "http://localhost:3001/question",
        question,
        {
          headers,
        }
      );

      if (response.status === 200) {
        router.push("/");
      }
    } catch (error) {
      console.log("error question", error);
    }
  };

  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1>Ask Your Question Here: </h1>
        <input
          value={question_title}
          onChange={(e) => setQuestion_title(e.target.value)}
          placeholder="Klausimo tytle"
        />
        <input
          value={question_text}
          onChange={(e) => setQuestion_text(e.target.value)}
          placeholder="Problema su kuria susiduri"
        />
        <button onClick={onAskQuestion}>Ask Question</button>
      </div>
      <Footer />
    </div>
  );
};

export default AskQuestion;
