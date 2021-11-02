import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: {
      username: "",
      loggedIn: false,
    },
  },  
    reducers: {
      //reducers
      login: (state, action) => {
        
        state.user.username = action.payload.username;
        state.user.loggedIn = true;
      },
      logout: (state) => {
        state.user.username = "";
        state.user.loggedIn = false;
      },
    },
  },
);

//generate action creators

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
