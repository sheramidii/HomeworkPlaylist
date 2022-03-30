const Login = () => {
    const clientID = process.env.REACT_APP_SPOTIFY_KEY;
    const redirectURI = 'http://localhost:3000/';
    const scope = 'playlist-modify-private';

    var url = 'https://accounts.spotify.com/authorize';
    url += '?response_type=token';
    url += '&client_id=' + encodeURIComponent(clientID);
    url += '&scope=' + encodeURIComponent(scope);
    url += '&redirect_uri=' + encodeURIComponent(redirectURI);

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