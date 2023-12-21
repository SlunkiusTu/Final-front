import React from "react";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";
import PageTemplate from "@/components/PageTemplate/PageTemplate";

const Registration: React.FC = () => {
  return (
    <div>
      <PageTemplate>
        <RegistrationForm />
      </PageTemplate>
    </div>
  );
};

export default Registration;
