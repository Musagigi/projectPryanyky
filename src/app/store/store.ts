import { configureStore } from '@reduxjs/toolkit';

import authTokenReducer from './slices/authTokenSlice';
import tableDataReducer from './slices/tableDataSlice';

export const store = configureStore({
  reducer: {
    authToken: authTokenReducer,
    tableData: tableDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
