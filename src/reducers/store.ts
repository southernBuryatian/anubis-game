import { configureStore } from '@reduxjs/toolkit';
import followerReducer from './followerReducer';
import screenReducer from './screenReducer';
import answersReducer from './answersReducer';
import dialogueReducer from './dialogueReducer';
import timeReducer from './timeReducer';

export default configureStore({
  reducer: {
    currentFollower: followerReducer,
    screen: screenReducer,
    storylines: answersReducer,
    dialogues: dialogueReducer,
    time: timeReducer,
  },
})
