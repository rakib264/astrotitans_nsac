import { createSlice } from "@reduxjs/toolkit";
import themeConfig from "@/theme.config";

const initialState = {
  // isDarkMode: false,
  // theme: themeConfig.theme,
  openSidebar: true,
  animation: themeConfig.animation,
  languageList: [
    { code: 'en', name: 'English' },
    { code: 'fr', name: 'French' },

],
};

export const themeConfigSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    // toggleTheme(state, { payload }) {
    //   payload = payload || state.theme; // light | dark | system
    //   localStorage.setItem("theme", payload);
    //   state.theme = payload;
    //   if (payload === "light") {
    //     state.isDarkMode = false;
    //     console.log("Dark mode", state.isDarkMode)
    //   } else if (payload === 'dark') {
    //     state.isDarkMode = true;
    //     console.log("Dark mode", state.isDarkMode)
    // }

    //   if (state.isDarkMode) {
    //     document.querySelector("body")?.classList.add("dark");
    //   } else {
    //     document.querySelector("body")?.classList.remove("dark");
    //   }
    // },

    toggleSidebar(state) {
      state.openSidebar = !state.openSidebar;
  },
//   toggleLocale(state, { payload }) {
//     payload = payload || state.locale;
//     localStorage.setItem('i18nextLng', payload);
//     state.locale = payload;
// },
  setPageTitle(state, { payload }) {
    document.title = `${payload} | Netviper - Tailwind Dashboard Library`;
},

  },
});

// Action creators are generated for each case reducer function
export const { toggleSidebar, setPageTitle  } = themeConfigSlice.actions;

export default themeConfigSlice.reducer;
