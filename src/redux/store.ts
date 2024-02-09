import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authReducer';
import profileReducer from './profileReducer';
import asyncReducer from './asyncReducer';


const store = configureStore({
    reducer: {
        auth: authReducer,
        profile: profileReducer,
        async: asyncReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
});
export default store
