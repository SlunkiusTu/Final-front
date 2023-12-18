import React, { useEffect, useState } from "react";
import axios from "axios";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import QuestionCards from "@/components/QuestionCards/QuestionCards";

const Index = () => {
  const [questions, setQuestions] = useState(null);

  const fetchQuestion = async () => {
    try {
      const response = await axios.get("http://localhost:3001/questions");
      setQuestions(response.data.questions);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  return (
    <div>
      <Header />
      <QuestionCards questions={questions} />
      <Footer />
    </div>
  );
};

export default Index;
