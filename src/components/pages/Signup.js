import React from "react";
import Illustration from "../Illustration";
import SingupForm from "../SingupForm";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <SingupForm />
      </div>
    </>
  );
};

export default Signup;
