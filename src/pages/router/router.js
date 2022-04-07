import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import CreatePlaylist from "../createplaylist/createplaylist";
import Auth from "../auth/auth";

const AppRouter =()=>{
    const accessToken = useSelector((state)=> state.dataAccessToken.value);
    return (
        <Router>
            <Switch>
                <Route path="/" component={Auth} exact/>
                <Route path="/create-playlist">
                    {accessToken ? <CreatePlaylist/> : <Redirect to ="/" />}
                </Route>
                <Route path="*" component={() => (<h1>Error 404</h1>)} />
            </Switch>
        </Router>
    )
}

export default AppRouter;