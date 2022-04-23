const initialState = {
  user: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return initialState;
    case "DELETE_USER":
      return initialState;
    case "EDIT_USER":
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
