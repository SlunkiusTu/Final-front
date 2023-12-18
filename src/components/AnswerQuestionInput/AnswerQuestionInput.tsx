import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import styles from "./answerQuestionInput.module.css";

const AnswerQuestionInput = () => {
  const [answer_title, setAnswer_title] = useState("");
  const [answer_text, setAnswer_text] = useState("");

  const router = useRouter();
  const questionId = router.query.id as string;

  const onAnswerQuestion = async () => {
    try {
      const answer = {
        answer_title: answer_title,
        answer_text: answer_text,
      };

      const response = await axios.post(
        `http://localhost:3001/question/${questionId}/answers`,
        {
          ...answer,
        }
      );

      if (response.status === 200) {
        router.reload();
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div className={styles.wrapper}>
      <input
        value={answer_title}
        onChange={(e) => setAnswer_title(e.target.value)}
        placeholder="Answer Title"
      />
      <input
        value={answer_text}
        onChange={(e) => setAnswer_text(e.target.value)}
        placeholder="More info to question"
      />
      <button onClick={onAnswerQuestion}>Add Answer</button>
    </div>
  );
};

export default AnswerQuestionInput;
