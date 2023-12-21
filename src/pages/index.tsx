import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import QuestionCards from "@/components/QuestionCards/QuestionCards";
import Forum from "@/components/Forum/Forum";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const Index = () => {
  const [questions, setQuestions] = useState<Array<any> | null>(null);
  const router = useRouter();
  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions");
      setQuestions(response.data.questions);
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleDeleteQuestion = async (questionId: string) => {
    try {
      const response = await axios.delete(
        `http://localhost:3001/question/${questionId}`
      );
      if (response.status === 200) {
        setQuestions(
          (prevQuestions) =>
            prevQuestions?.filter((question) => question._id !== questionId) ||
            null
        );
        router.push("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div>
      <PageTemplate>
        <Forum />
        <QuestionCards questions={questions} onDelete={handleDeleteQuestion} />
      </PageTemplate>
    </div>
  );
};

export default Index;
