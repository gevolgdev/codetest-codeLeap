import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { StateProps } from '../../types/types';
import { RootState } from '../../redux/RootState';

const initialState: StateProps = {
  name: '',
  activeButton: false,
}

export const userNameSlice = createSlice({
  name: 'userName',
  initialState,
  reducers: {
    userNameReducer: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
      state.activeButton = true;
    }
  }
})

export const { userNameReducer } = userNameSlice.actions;

export const selectUserName = (state: RootState) => state.userName;
export default userNameSlice.reducer;