import React from "react";
import { Redirect, Route } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const AuthRoute = ({ component: Component, ...rest }) => {
  const { currentUser } = useAuth();
  if (currentUser) {
    return <Route {...rest}>{(props) => <Component {...props} />}</Route>;
  } else {
    return <Redirect to="/login" />;
  }
};

export default AuthRoute;
