const initialState = {
  data: {},
  token: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return initialState;
    case "DELETE_USER": 
      return {
        data: {}
      }
    default:
      return state;
  }
};

export default reducer;
