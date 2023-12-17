import React from "react";
import QuestionCard from "../QuestionCard/QuestionCard";

type QuestionType = {
  questions: Array<any> | null;
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
