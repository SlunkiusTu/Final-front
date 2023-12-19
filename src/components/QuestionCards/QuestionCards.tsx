import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";

type QuestionType = {
  // kazkodel meta klaida reikia priminimas paziurek veliau
  questions: Array<any> | null;
  onDelete?: (question_id: string) => Promise<void>;
};

const QuestionCards: React.FC<QuestionType> = ({ questions }) => {
  return (
    <div>
      {questions &&
        questions.map((question) => (
          <div key={question._id}>
            <QuestionCard question={question} />
          </div>
        ))}
    </div>
  );
};

export default QuestionCards;
