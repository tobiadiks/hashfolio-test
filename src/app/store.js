import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import { userSlice } from "../features/user/userSlice";

const reducers = combineReducers({
  userStore:userSlice.reducer
})

const persitConfig = {
  key:'root',
  storage
}

const persistedReducer = persistReducer(persitConfig,reducers)

const store = configureStore({
  reducer: persistedReducer
});

export default store;
