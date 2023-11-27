import { configureStore } from '@reduxjs/toolkit';
import followerReducer from './followerReducer';
import screenReducer from './screenReducer';
import answersReducer from './answersReducer';
import dialogueReducer from './dialogueReducer';

export default configureStore({
  reducer: {
    currentFollower: followerReducer,
    screen: screenReducer,
    answers: answersReducer,
    dialogues: dialogueReducer,
  },
})
