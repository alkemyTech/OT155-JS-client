import axios from "axios";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";

export const loginUser = (email, password) => {
  return (dispatch) => {
    const loginValues = { email, password };
    apiConnectionWithoutToken("/users/login", loginValues, "post")
      .then(({ data }) => {
        const { token, user } = data;
        dispatch({
          type: "LOGIN",
          payload: {
            user: user,
            token: token,
          },
        });
      })
      .catch((err) => console.log(err.response));
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};
