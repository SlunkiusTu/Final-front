import React from "react";
import styles from "./answerCard.module.css";

type AnswerType = {
  _id: string;
  answer_title: string;
  answer_text: string;
  date: string;
  gained_likes_number: number;
};

type AnswerComponentType = {
  answer: AnswerType;
};

const AnswerCard: React.FC<AnswerComponentType> = ({ answer }) => {
  const justDate = new Date(answer.date).toISOString().split("T")[0];

  return (
    <div className={styles.wrapper}>
      <h1>{answer.answer_title}</h1>
      <p>{answer.answer_text}</p>
      <div>{justDate}</div>
      <div>{answer.gained_likes_number}</div>
    </div>
  );
};

export default AnswerCard;
