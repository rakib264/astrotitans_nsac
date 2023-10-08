'use client';

import { configureStore } from '@reduxjs/toolkit';

import { Provider } from 'react-redux';
import  themeConfigSlice  from './slices/themeConfigSlices';

const store = configureStore({
   reducer: {
    //   [apiSlice.reducerPath]: apiSlice.reducer,
    themeConfig: themeConfigSlice,
   },
   devTools: true,
   middleware: getDefaultMiddleware =>
      getDefaultMiddleware()
//    middleware: getDefaultMiddleware =>
//       getDefaultMiddleware().concat(apiSlice.middleware)
});

export { Provider };
export default store;