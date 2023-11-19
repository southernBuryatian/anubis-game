import { configureStore } from '@reduxjs/toolkit';
import followerReducer from './followerReducer';
import screenSlice from './screenReducer';

export default configureStore({
  reducer: {
    currentFollower: followerReducer,
    screen: screenSlice,
  },
})
