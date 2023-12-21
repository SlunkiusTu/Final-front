import React from "react";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";

const Registration: React.FC = () => {
  return (
    <div>
      <Header />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Registration;
