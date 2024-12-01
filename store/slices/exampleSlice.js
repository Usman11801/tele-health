import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: null,
};

const exampleSlice = createSlice({
  name: 'example',
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});

export const { setData } = exampleSlice.actions;
export const selectData = (state) => state.example.data;
export default exampleSlice.reducer;
