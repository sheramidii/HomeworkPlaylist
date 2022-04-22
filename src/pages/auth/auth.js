import queryString from "query-string";
import Login from "../login/login.js";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { dataAccessToken, setUserData } from "../../data/dataAction.js";
import axios from "axios";

const Auth = () => {
  const accessToken = useSelector((state) => state.user.accessToken);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    const parsed = queryString.parse(window.location.hash);
    getUserData(parsed.access_token);
    dispatch(dataAccessToken(parsed.access_token));
  });

  const getUserData = async (accessToken) => {
    const data = await axios.get(
      `https://api.spotify.com/v1/me?access_token=${accessToken}`
    );
    dispatch(
      setUserData({
        displayName: data.data.display_name,
        imagesUrl: data.data.images[0].url,
        user_id: data.data.id,
      })
    );
    console.log(data);
  };

  useEffect(() => {
    if (accessToken !== undefined) {
      history.push("create-playlist");
    }
  }, [accessToken, history]);

  return <Login />;
};
export default Auth;
