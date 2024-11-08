// authSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  user: null,
  accessToken: null,
  // Add any other authentication-related state here
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      // Handle login action here, update isAuthenticated, user, accessToken, etc.
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.accessToken = action.payload.accessToken;
    },
    logout(state) {
      // Handle logout action here, reset authentication-related state
      state.isAuthenticated = false;
      state.user = null;
      state.accessToken = null;
    },
    // Add other authentication-related actions here
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
