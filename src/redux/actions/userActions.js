import { apiConnectionWithToken } from "../../helpers/apiConnection";

export const loginUser = (user, token) => {
  return {
    type: "LOGIN",
    payload: { data: user, token },
  };
};

export const logoutUser = () => {
  return {
    type: "LOGOUT",
  };
};

export const deleteUser = (id) => {
  return {
    type: "DELETE_USER",
    id: id
  }
}

export const deletUserFn = (id) => {
  return (dispatch) => {
    dispatch(deleteUser(id))
    await apiConnectionWithToken(`/users/${id}`, {}, 'DELETE');
    window.localStorage.removeItem("jwt")
  }
}