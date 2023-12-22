import React, { useState } from "react";
import QuestionCard from "../QuestionCard/QuestionCard";
import styles from "./questionCards.module.css";

type QuestionType = {
  questions: Array<any> | null;
  onDelete?: (question_id: string) => Promise<void>;
};

const QuestionCards: React.FC<QuestionType> = ({ questions }) => {
  const [filter, setFilter] = useState<number>(0);

  const handleAnsweredQuestion = () => {
    setFilter(2);
  };
  const handleNotAnsweredQuestion = () => {
    setFilter(1);
  };
  const handleAllQuestion = () => {
    setFilter(0);
  };
  return (
    <div>
      <div className={styles.buttonWrapper}>
        <button className={styles.button} onClick={handleAnsweredQuestion}>
          Atsakyti
        </button>
        <button className={styles.button} onClick={handleNotAnsweredQuestion}>
          Neatsakyti
        </button>
        <button className={styles.button} onClick={handleAllQuestion}>
          Visi
        </button>
      </div>

      <div className={styles.wrapper}>
        {questions &&
          filter === 0 &&
          questions.map((question) => (
            <div key={question._id}>
              <QuestionCard question={question} />
            </div>
          ))}
        {questions &&
          filter === 1 &&
          questions
            .filter((item) => item.answersCount === 0)
            .map((question) => (
              <div key={question._id}>
                <QuestionCard question={question} />
              </div>
            ))}
        {questions &&
          filter === 2 &&
          questions
            .filter((item) => item.answersCount > 0)
            .map((question) => (
              <div key={question._id}>
                <QuestionCard question={question} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default QuestionCards;
