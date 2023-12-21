import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import axios from "axios";
import cookie from "js-cookie";
import AnswerCards from "../../components/AnswerCards/AnswerCards";
import styles from "./styles.module.css";
import AnswerQuestionInput from "@/components/AnswerQuestionInput/AnswerQuestionInput";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

type QuestionType = {
  _id: string;
  question_title: string;
  question_text: string;
  date: string;
  user_id: string;
};

type AnswerType = {
  _id: string;
  answer_title: string;
  answer_text: string;
  date: string;
  user_id: string;
};

const Question = () => {
  const [question, setQuestion] = useState<QuestionType | null>(null);
  const [answers, setAnswers] = useState<AnswerType[] | null>(null);
  const [userId, setUserId] = useState<string | null>(null);

  const router = useRouter();

  const fetchQuestion = async (id: string) => {
    try {
      const questionResponse = await axios.get(
        `http://localhost:3001/question/${id}`
      );

      setQuestion(questionResponse.data.question);
    } catch (error) {
      console.log("err", error);
    }
  };

  const fetchAnswers = async (id: string) => {
    try {
      const answerResponse = await axios.get(
        `http://localhost:3001/question/${id}/answers`
      );

      setAnswers(answerResponse.data.answers);
    } catch (error) {
      console.log("err", error);
    }
  };

  useEffect(() => {
    const savedUserId = cookie.get("user_id");

    if (savedUserId) {
      setUserId(savedUserId);
    }
    // setUserId(cookie.get("user_id"));
    router.query.id && fetchQuestion(router.query.id as string);
    router.query.id && fetchAnswers(router.query.id as string);
  }, [router.query.id]);

  const handleDeleteAnswer = async (answerId: string) => {
    try {
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      await axios.delete(`http://localhost:3001/answer/${answerId}`, {
        headers,
      });

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
      const headers = {
        authorization: cookie.get("jwt_token"),
      };

      await axios.delete(`http://localhost:3001/question/${question_id}`, {
        headers,
      });

      router.push("/");
    } catch (error) {
      console.log("error ", error);
    }
  };

  return (
    <PageTemplate>
      <div className={styles.wrapper}>
        {question && (
          <div className={styles.container}>
            <h1>{question.question_title}</h1>
            <p>{question.question_text}</p>
            {userId === question.user_id && (
              <button
                className={styles.button}
                onClick={() => handleDeleteQuestion(question?._id)}
              >
                Delete Your Question
              </button>
            )}
          </div>
        )}
      </div>
      <AnswerCards answers={answers} onDelete={handleDeleteAnswer} />
      <AnswerQuestionInput />
    </PageTemplate>
  );
};

export default Question;
