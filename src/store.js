import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice'

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import interviewReducer from "./slices/interviewSlice";
import inviteReducer from './slices/invitationSlice';
import jdReducer from './slices/jdSlice';

const persistConfig = {
    key: 'root',
    storage,
};


const rootReducer = combineReducers({
    auth: authReducer,
    interview: interviewReducer,
    invite: inviteReducer,
    jd: jdReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);


const store = configureStore({
    reducer: persistedReducer,
});
const persistor = persistStore(store);

export { store, persistor };


