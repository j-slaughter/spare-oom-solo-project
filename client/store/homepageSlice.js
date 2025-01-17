import { createSlice } from '@reduxjs/toolkit';

// Initialize empty state for homepage
const initialState = {
    url: {},
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    // Update url in state
    getURL: (state, action) => {
        state.url = action.payload;
    },
  },
});

// Action creators generated for each case reducer function per docs
export const { getURL } = homepageSlice.actions;

export default homepageSlice.reducer;