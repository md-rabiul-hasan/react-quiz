import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const GuestRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();

  if (currentUser) {
    return <Redirect to="/" />;
  } else {
    return <Route {...rest}>{(props) => <Component {...props} />}</Route>;
  }
};

export default GuestRoute;
