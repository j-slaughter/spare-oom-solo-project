import { createSlice } from '@reduxjs/toolkit';

// Initialize empty state for homepage
const initialState = {
    url: {},
    genres: {},
};

export const homepageSlice = createSlice({
  name: 'homepage',
  initialState,
  reducers: {
    // Update Api URL in state
    getApiURL: (state, action) => {
        state.url = action.payload;
    },
    // Update genres in state
    getGenres: (state, action) => {
        state.genres = action.payload;
    },
  },
});

// Action creators generated for each case reducer function per docs
export const { getApiURL, getGenres } = homepageSlice.actions;

export default homepageSlice.reducer;