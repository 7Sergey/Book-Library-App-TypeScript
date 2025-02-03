// src/redux/slices/errorSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ErrorState {
  message: string | null;
}

const initialState: ErrorState = {
  message: null,
};

const errorSlice = createSlice({
  name: 'error',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<string>) => {
      state.message = action.payload;
    },
    clearError: () => {
      return initialState;
    },
  },
});

export const { setError, clearError } = errorSlice.actions;

export const selectErrorMessage = (state: { error: ErrorState }) =>
  state.error.message;

export default errorSlice.reducer;
