import axios from "axios";
import { apiConnectionWithoutToken, apiConnectionWithToken } from "../../helpers/apiConnection";

export const loginUser = (email, password) => {
  return (dispatch) => {
    const loginValues = {email,password}
     apiConnectionWithoutToken("/users/login", loginValues, "post")

    .then((token) => {
      localStorage.setItem("jwt", JSON.stringify(token.data));
      dispatch({
        type: "LOGIN",
        token: token.data
      })
    })
    .catch((err) => console.log(err.response))
  }
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
