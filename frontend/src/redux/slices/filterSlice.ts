// src/redux/slices/filterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface FilterState {
  title: string;
  author: string;
  favorite: boolean;
}

const initialState: FilterState = {
  title: '',
  author: '',
  favorite: false,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setTitleFilter: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setAuthorFilter: (state, action: PayloadAction<string>) => {
      state.author = action.payload;
    },
    setFavoriteFilter: (state, action: PayloadAction<boolean>) => {
      state.favorite = action.payload;
    },
    resetFilters: () => {
      return initialState;
    },
  },
});

export const {
  setTitleFilter,
  setAuthorFilter,
  setFavoriteFilter,
  resetFilters,
} = filterSlice.actions;

export const selectTitleFilter = (state: { filter: FilterState }) =>
  state.filter.title;
export const selectAuthorFilter = (state: { filter: FilterState }) =>
  state.filter.author;
export const selectFavoriteFilter = (state: { filter: FilterState }) =>
  state.filter.favorite;

export default filterSlice.reducer;
