import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
  id: string;
  name: string;
  email: string;
}

const initialState: UserState = {
  id: '',
  name: 'Sergey',
  email: '',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
  },
});

export const { setUserName } = userSlice.actions;
export const selectUser = (state: { user: UserState }) => state.user;
export default userSlice.reducer;
