import React from "react";
import { Link } from "react-router-dom";
import classes from "../../styles/Signup.module.css";
import Button from "../Button";
import Checkbox from "../Checkbox";
import Form from "../Form";
import Illustration from "../Illustration";
import TextInput from "../TextInput";

const Signup = () => {
  return (
    <>
      <h1>Create an account</h1>
      <div className="column">
        <Illustration />
        <Form className={classes.singup}>
          <TextInput icon="person" type="text" placeholder="Enter name" />
          <TextInput
            icon="alternate_email"
            type="email"
            placeholder="Enter email"
          />
          <TextInput icon="lock" type="password" placeholder="Enter password" />
          <TextInput
            icon="lock_clock"
            type="password"
            placeholder="Confirm password"
          />

          <Checkbox text="I agree to the Terms &amp; Conditions" />

          <Button>Submit now</Button>

          <div className="info">
            Already have an account? <Link to="login">Login</Link> instead.
          </div>
        </Form>
      </div>
    </>
  );
};

export default Signup;
