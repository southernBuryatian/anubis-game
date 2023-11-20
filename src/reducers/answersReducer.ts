import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FollowerId } from '../config/config';

interface followerStorylineState {
  currentStorylineStepId: number,
  chosenOptions: { [storylineStepId: number]: number | null },
}

interface answersState {
  [followerId: string]: followerStorylineState
}

const initialState = {
  Ville: {
    currentStorylineStepId: 0,
    chosenOptions: { 0: null }
  }
};

interface answerPayload {
  followerId: FollowerId,
  storylineStepId: number,
  chosenOption: number | null
}

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    chooseAnswer: (state: answersState, action: PayloadAction<answerPayload>) => {
      const answer = action.payload;
      if (action.payload.chosenOption != null) {
        state[answer.followerId].chosenOptions[answer.storylineStepId] = action.payload.chosenOption;
      }
    },
  },
})

export const { chooseAnswer } = answersSlice.actions

export default answersSlice.reducer
