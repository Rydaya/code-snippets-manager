import { configureStore } from '@reduxjs/toolkit';
import theme from './slices/themeSlice.js';

export const store = configureStore({
  reducer: {
    theme,
  },
});
