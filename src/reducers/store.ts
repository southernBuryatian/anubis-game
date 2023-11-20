import { configureStore } from '@reduxjs/toolkit';
import followerReducer from './followerReducer';
import screenReducer from './screenReducer';
import answersReducer from './answersReducer';

export default configureStore({
  reducer: {
    currentFollower: followerReducer,
    screen: screenReducer,
    answers: answersReducer,
  },
})
