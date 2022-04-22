import axios from "axios";
import { apiConnectionWithoutToken } from "../../helpers/apiConnection";

export const loginUser = (email, password) => {
  return (dispatch) => {
    const loginValues = { email, password };
    apiConnectionWithoutToken("/users/login", loginValues, "post")
      .then(({ data }) => {
        const { jwt, user } = data;
        dispatch({
          type: "LOGIN",
          payload: {
            user: user,
            token: jwt,
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

export const deleteUser = (id) => {
  return async(dispatch) => {
    await apiConnectionWithToken(`/users/${id}`, {}, 'DELETE')
    .then(
      dispatch({
        type: "DELETE_USER",
        payload: {
          user: {},
          token: ""
        }
      })
    )

  }
}


export const editUser = (firstName,lastName,email,role,id) => {

  return async(dispatch) => {
    await apiConnectionWithToken(`/users/${id}`, {
      firstName: firstName,
      lastName: lastName,
      email: email,
      roleId: role
    } , 'PUT')
    .then(({data}) => {
      const { jwt, user } = data;

      dispatch({
        type: "EDIT_USER",
        payload: {
          user: user,
          token: jwt
        }
      })
    })
    .catch((err) => console.log(err.response))
  }
}