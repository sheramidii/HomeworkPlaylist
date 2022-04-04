import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./accessTokenReducer";

export default configureStore({
    reducer: {
        dataAccessToken: accessTokenReducer
    }
});