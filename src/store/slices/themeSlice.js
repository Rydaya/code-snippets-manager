import { createSlice } from '@reduxjs/toolkit';
import { THEMES } from 'store/constants';

const getTheme = () => {
  const theme = `${window?.localStorage?.getItem('theme')}`;
  if ([THEMES.LIGHT, THEMES.DARK].includes(theme)) return theme;

  const userMedia = window.matchMedia('(prefers-color-scheme: light)');
  if (userMedia.matches) return THEMES.LIGHT;

  return THEMES.DARK;
};

const initialState = getTheme();

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme: (state, action) => action.payload,
  },
});

export const {setTheme} = themeSlice.actions;

export default themeSlice.reducer;
