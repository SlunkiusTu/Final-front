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
  onDelete: (answerId: string) => void;
};

const AnswerCard: React.FC<AnswerComponentType> = ({ answer, onDelete }) => {
  const justDate = new Date(answer.date).toISOString().split("T")[0];

  const handleDelete = () => {
    onDelete(answer._id);
  };

  return (
    <div className={styles.wrapper}>
      <h1>{answer.answer_title}</h1>
      <p>{answer.answer_text}</p>
      <div>{justDate}</div>
      <div>{answer.gained_likes_number}</div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default AnswerCard;
