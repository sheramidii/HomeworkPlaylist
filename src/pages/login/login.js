// import { useState } from "react";
// import axios from "axios";

const Login = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY;
    const redirectURI = 'http://localhost:3000/';
    const scope = 'playlist-modify-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

    // const [user, setUser] = useState({
    //     displayName: '',
    //     imagesUrl: '',
    //     user_id: undefined
    // })
    
    // const getUserData = async (accessToken) => {
    //     try {
    //       const data = await axios
    //         .get(
    //             `https://api.spotify.com/v1/me?access_token=${accessToken}`
    //         )
    //         setUser({ ...user, displayName: data.data.display_name, imagesUrl: data.data.images[0].url, user_id: data.data.id })
    //         console.log(data, `got user data`);
    //     } catch (error) {
    //       console.log('get user data error');
    //     }
    // }

    return (
        <>
            <div className="header-login" >
                <h1>Welcome to Spotify!</h1>
                <a href={url}><button className="btn login">Login</button></a>
            </div>
        </>
    )
}

export default Login;
export var url;