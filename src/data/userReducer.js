const initialState = { accessToken: "", userData: null };

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "dataAccessToken":
      return { ...state, accessToken: action.payload };
    case "setUserData":
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};

export default userReducer;
