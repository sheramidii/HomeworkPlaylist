import queryString from 'query-string';
import Login from '../login/login.js';
// import CreatePlaylist from '../createplaylist/createplaylist.js';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { dataAccessToken } from '../../data/dataAction.js';

const Auth = () => {
    const accessToken = useSelector(state => state.dataAccessToken.value);
    const dispatch = useDispatch();
    const history = useHistory();

    useEffect(()=>{
        const parsed = queryString.parse(window.location.hash);
        dispatch(dataAccessToken(parsed.access_token));
    }, [accessToken, dispatch])

    useEffect(()=>{
        accessToken !== undefined && (
            history.push("create-playlist")
        )
    }, [accessToken, history])

    return (
        <Login/>
    )

    // if(accessToken !== undefined){
    //     return (
    //         <CreatePlaylist/>
    //     )
    // }

    // else {
    //     return (
    //         <Login/>
    //     )
    // }
}

export default Auth;