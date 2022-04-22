const dataAccessToken = (parsedAccessToken) => {
  return {
    type: "dataAccessToken",
    payload: parsedAccessToken,
  };
};

const setUserData = (userData) => {
  return {
    type: "setUserData",
    payload: userData,
  };
};

export { dataAccessToken, setUserData };
