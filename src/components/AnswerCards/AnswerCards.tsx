import React from "react";
import AnswerCard from "../AnswerCard/AnswerCard";

type AnswerType = {
  // kazkodel meta klaida reikia priminimas paziurek veliau
  answers: Array<any> | null;
};

const AnswerCards: React.FC<AnswerType> = ({ answers }) => {
  return (
    <div>
      {answers &&
        answers.map((answer) => (
          <div key={answer._id}>
            <AnswerCard answer={answer} />
          </div>
        ))}
    </div>
  );
};

export default AnswerCards;
