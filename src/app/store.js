import { configureStore } from '@reduxjs/toolkit';
import movieReducer from '../features/counter/movie/movieSlice'
import userSlice from '../features/user/userSlice';
import userReducer from '../features/user/userSlice'
//src\features\counter\movie\movieSlice.js


export const store = configureStore({
  reducer: {
    user : userSlice,
    movie : movieReducer
  },
});
