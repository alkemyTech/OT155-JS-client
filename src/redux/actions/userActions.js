import {
  apiConnectionWithoutToken,
  apiConnectionWithToken,
} from "../../helpers/apiConnection";
import { errorAlert, confirmationAlert } from "../../helpers/AlertService";

export const loginUser = (email, password, navigate) => {
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
        navigate("/");
      })
      .catch((err) => errorAlert("Error", "Contraseña o E-Mail incorrecto"));
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const deleteUser = (id, navigate) => {
  return async (dispatch) => {
    await apiConnectionWithToken(`/users/${id}`, {}, "DELETE")
      .then(
        dispatch({
          type: "DELETE_USER",
          payload: {
            user: {},
            token: "",
          },
        })
      ).then(confirmationAlert("Exito", "Se ha eliminado su cuenta"))
      .then(navigate("/"))
      .catch((error) => console.log(error));
  };
};

export const editUser = (firstName, lastName, email, role, id) => {
  return async (dispatch) => {
    await apiConnectionWithToken(
      `/users/${id}`,
      {
        firstName: firstName,
        lastName: lastName,
        email: email,
        roleId: role,
      },
      "PUT"
    )
      .then(({ data }) => {
        const { jwt, user } = data;

        dispatch({
          type: "EDIT_USER",
          payload: {
            user: user,
            token: jwt,
          },
        });
      })
      .catch((err) => console.log(err.response));
  };
};
