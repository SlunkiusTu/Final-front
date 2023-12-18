import React, { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import styles from "./styles.module.css";

const AskQuestion = () => {
  const [question_title, setQuestion_title] = useState("");
  const [question_text, setQuestion_text] = useState("");

  const router = useRouter();

  const onAskQuestion = async () => {
    const question = {
      question_title: question_title,
      question_text: question_text,
    };

    const response = await axios.post("http://localhost:3001/question", {
      ...question,
    });

    if (response.status === 200) {
      router.push("/");
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
