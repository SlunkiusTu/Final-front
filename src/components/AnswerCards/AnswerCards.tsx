import React from "react";
import AnswerCard from "../AnswerCard/AnswerCard";
import styles from "./answerCards.module.css";

type AnswerType = {
  // kazkodel meta klaida reikia priminimas paziurek veliau
  answers: Array<any> | null;
  onDelete: (answerId: string) => void;
};

const AnswerCards: React.FC<AnswerType> = ({ answers, onDelete }) => {
  return (
    <div className={styles.wrapper}>
      <h2>Answers To Question</h2>
      {answers &&
        answers.map((answer) => (
          <div key={answer._id}>
            <AnswerCard answer={answer} onDelete={onDelete} />
          </div>
        ))}
    </div>
  );
};

export default AnswerCards;
