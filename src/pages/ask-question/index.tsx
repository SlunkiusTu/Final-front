import Header from "@/components/Header/Header";
import styles from "./styles.module.css";
import Footer from "@/components/Footer/Footer";

const AskQuestion = () => {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <h1>Ask Your Question Here: </h1>
        <input type="text" placeholder="Klausimo tytle" />
        <input type="text" placeholder="Problema su kuria susiduri" />
        <button>Ask Question</button>
      </div>
      <Footer />
    </div>
  );
};

export default AskQuestion;
