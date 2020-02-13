import React, { Fragment } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Home from "../home/Home";
import LoginPage from "../login/LoginPage";

const App = props => {
  const checkForAuth = () => {
    if (props.isLoggedIn) {
      return <Home />;
  };
}

export default withRouter(connect(mapStateToProps, null)(App));
