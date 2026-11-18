import { createSlice } from '@reduxjs/toolkit';

// Every visit opens in dark mode. The toggle only lasts for the current visit,
// so an earlier "light" choice never overrides the default.
const initialState = {
  darkMode: true,
};

// Clear the preference saved by older versions of the site.
if (typeof window !== 'undefined') {
  try {
    window.localStorage.removeItem('portfolio_theme');
  } catch {
    /* storage disabled: nothing to clear */
  }
}

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleDarkMode: (state) => {
      state.darkMode = !state.darkMode;
    },
  },
});

export const { toggleDarkMode } = themeSlice.actions;
export default themeSlice.reducer;
