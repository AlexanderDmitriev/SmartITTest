import { configureStore } from '@reduxjs/toolkit';
import { userDataApi } from './userData';
import {filterSlice} from './filter';

export const store = configureStore({
  reducer: {
    [userDataApi.reducerPath]: userDataApi.reducer,
    [filterSlice.name]: filterSlice.reducer,
  },
  middleware: getDefaultMiddleware => 
    getDefaultMiddleware().concat(userDataApi.middleware),
});
