import { configureStore } from "@reduxjs/toolkit";
import accessTokenReducer from "./accessTokenReducer";

const store = configureStore({
    reducer: {
        dataAccessToken: accessTokenReducer
    }
});

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch