import { configureStore } from '@reduxjs/toolkit';
import followerReducer from './followerReducer';

export default configureStore({
  reducer: {
    currentFollower: followerReducer,
  },
})
