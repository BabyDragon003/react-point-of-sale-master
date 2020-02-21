import api from "../api";
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import { setAuthorizationHeader } from "../utils";

const userLoggedIn = authInfo => ({
  type: USER_LOGGED_IN,
  authInfo
});

const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

export const loginUser = credentials => async dispatch => {
  console.log(process.env.IS_PROD);
