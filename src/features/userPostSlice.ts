import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PostProps } from "../types/types";
import { RootState } from "../redux/RootState";


const initialState: PostProps[] = [{
  userName: '',
  title: '',
  content: '',
}];

const userPostSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addNewPostReducer: (state, action: PayloadAction<PostProps> ): PostProps[] => {
      return [
        ...state,
        {
          userName: action.payload.userName,
          title: action.payload.title,
          content: action.payload.content,
        }
      ]
    }
  }
});

export const { addNewPostReducer } = userPostSlice.actions;
export const SelectUserPosts = (state: RootState) => state
export default userPostSlice.reducer;