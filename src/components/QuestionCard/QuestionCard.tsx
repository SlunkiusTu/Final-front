import React from "react";
import Link from "next/link";
import styles from "./questionCard.module.css";

type QuestionType = {
  _id: string;
  question_title: string;
  question_text: string;
  date: string;
  onDelete?: (question_id: string) => Promise<void>;
};

type QuestionComponentType = {
  question: QuestionType;
};

const QuestionCard: React.FC<QuestionComponentType> = ({ question }) => {
  const justDate = new Date(question.date).toISOString().split("T")[0];

  return (
    <Link className={styles.link} href={`/question/${question._id}`}>
      <div className={styles.wrapper}>
        <h1>{question.question_title}</h1>
        <p>{question.question_text}</p>
        <div>{justDate}</div>
      </div>
    </Link>
  );
};

export default QuestionCard;
