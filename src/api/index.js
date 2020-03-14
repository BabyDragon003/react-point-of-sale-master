import axios from "axios";
import apiBuilder, { URL_PREFIX } from "./apiBuilder";
import "./axiosClient";
import transaction from "./transaction";

const auth = {
  login: async ({ username, password }) => {
    try {
      const res = await axios.post(`${URL_PREFIX}/login`, {
        userid: username,
        password
      });
      const { authToken } = res.data;

      if (!authToken) throw new { error: "Invalid credentials" }();
      else return res.data;
    } catch (error) {
      if (error.response && error.response.status === 401)
        throw new Error("Invalid credentials.");
      if (error.response && error.response.status > 200)
  auth,
  productType,
  product,
  customer,
  expense,
  expenseType,
  vendor,
  receiving,
  transaction
};
