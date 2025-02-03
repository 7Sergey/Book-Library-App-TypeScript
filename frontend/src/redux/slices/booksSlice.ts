// src/redux/slices/booksSlice.ts
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { setError } from './errorSlice';
import { Book } from '../../types/types';

interface BooksState {
  books: Book[];
  isLoadingViaAPI: boolean;
}

const initialState: BooksState = {
  books: [],
  isLoadingViaAPI: false,
};

export const fetchBook = createAsyncThunk<Book, string>(
  'books/fetchBook',
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        thunkAPI.dispatch(setError(error.message));
      }
      throw error;
    }
  }
);

export const addBookApi = createAsyncThunk<Book, { url: string; book: Book }>(
  'books/addBook',
  async ({ url, book }, thunkAPI) => {
    try {
      const res = await axios.post(url, book);
      return res.data;
    } catch (error: unknown) {
      if (error instanceof Error) {
        thunkAPI.dispatch(setError(error.message));
      }
      throw error;
    }
  }
);

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action: PayloadAction<Book>) => {
      state.books.push(action.payload);
    },
    deleteBook: (state, action: PayloadAction<string>) => {
      state.books = state.books.filter((book) => book._id !== action.payload);
    },
    toggleFavorite: (state, action: PayloadAction<string>) => {
      state.books.forEach((book) => {
        if (book._id === action.payload) {
          book.isFavorite = !book.isFavorite;
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBook.pending, (state) => {
      state.isLoadingViaAPI = true;
    });
    builder.addCase(fetchBook.fulfilled, (state, action) => {
      state.isLoadingViaAPI = false;
      state.books.push(action.payload);
    });
    builder.addCase(fetchBook.rejected, (state) => {
      state.isLoadingViaAPI = false;
    });
  },
});

export const { addBook, deleteBook, toggleFavorite } = booksSlice.actions;

export const selectBooks = (state: { books: BooksState }) => state.books.books;
export const selectIsLoadingViaAPI = (state: { books: BooksState }) =>
  state.books.isLoadingViaAPI;

export default booksSlice.reducer;
