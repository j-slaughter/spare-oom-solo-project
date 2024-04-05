import { configureStore } from '@reduxjs/toolkit';
import homepageSlice from './homepageSlice.js';

export const store = configureStore({
    reducer: {
        homepage: homepageSlice,
    },
});