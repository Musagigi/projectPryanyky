import { createSlice } from '@reduxjs/toolkit';

type TAuth = {
  authToken: string | null;
};

const token = localStorage.getItem('authToken');

const initialState: TAuth = {
  authToken: token ? JSON.parse(token) : null,
};

const authTokenSlice = createSlice({
  name: 'authToken',
  initialState,
  reducers: {
    setToken(state, action) {
      state.authToken = action.payload;
      localStorage.setItem('authToken', JSON.stringify(action.payload));
    },
    removeToken(state, action) {
      localStorage.removeItem(action.payload);
      state.authToken = null;
    },
  },
});

export const { setToken, removeToken } = authTokenSlice.actions;
export default authTokenSlice.reducer;
