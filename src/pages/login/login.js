const Login = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY;
    const redirectURI = process.env.REACT_APP_SPOTIFY_CALLBACK; //tambahin vercel env disini//
    const scope = 'playlist-modify-private playlist-modify-public';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

    return (
        <>
            <div className="header-login" >
                <h1>Welcome to Spotify!</h1>
                <img alt="spotify logo" src="https://pnggrid.com/wp-content/uploads/2021/05/White-Spotify-Icon-1024x1024.png" width="200px"/>
                <a href={url}><button className="btn login">Login</button></a>
            </div>
        </>
    )
}

export default Login;
export var url;