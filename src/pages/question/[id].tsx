import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import AnswerCards from "@/components/AnswerCards/AnswerCards";
import styles from "./styles.module.css";
import AnswerQuestionInput from "@/components/AnswerQuestionInput/AnswerQuestionInput";

type QuestionType = {
  _id: string;
  question_title: string;
  question_text: string;
  date: string;
};

type AnswerType = {
  _id: string;
  answer_title: string;
  answer_text: string;
  date: string;
};

const Question = () => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [answers, setAnswers] = useState<AnswerType[] | null>(null);

  const router = useRouter();

  const fetchQuestion = async (id: string) => {
    try {
      const questionResponse = await axios.get(
        `http://localhost:3001/question/${id}`
      );
      const answerResponse = await axios.get(
        `http://localhost:3001/question/${id}/answers`
      );

      setQuestion(questionResponse.data.question);
      setAnswers(answerResponse.data.answers);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    console.log("router.query.id:", router.query.id);
    router.query.id && fetchQuestion(router.query.id as string);
  }, [router.query.id]);

  const handleDeleteAnswer = async (answerId: string) => {
    try {
      await axios.delete(`http://localhost:3001/answer/${answerId}`);

      setAnswers((prevAnswers) =>
        prevAnswers
          ? prevAnswers.filter((answer) => answer._id !== answerId)
          : null
      );
    } catch (error) {
      console.log("error ", error);
    }
  };

  const handleDeleteQuestion = async (question_id: string) => {
    try {
      await axios.delete(`http://localhost:3001/question/${question_id}`);

      router.push("/");
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <div>
      <Header />
      {question && (
        <div className={styles.wrapper}>
          <h1>{question.question_title}</h1>
          <p>{question.question_text}</p>
          <button onClick={() => handleDeleteQuestion(question?._id)}>
            deleteQuestion
          </button>
        </div>
      )}
      <AnswerCards answers={answers} onDelete={handleDeleteAnswer} />
      <AnswerQuestionInput />
      <Footer />
    </div>
  );
};

export default Question;
