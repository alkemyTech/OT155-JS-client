const initialState = {
  token: localStorage.getItem("jwt"),
  firstName: "",
  lastName: "",
  email: "",
  roleId: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return initialState;
    default:
      return state;
  }
};

export default reducer;
