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
