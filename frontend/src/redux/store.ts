import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import booksReducer from './slices/booksSlice';
import errorReducer from './slices/errorSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
  reducer: {
    books: booksReducer,
    filter: filterReducer,
    error: errorReducer,
    user: userReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export default store;
