import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FollowersConfig } from '../config/followersConfig';

interface followerStorylineState {
  currentStorylineStepId: number,
  chosenOptions: { [storylineStepId: number]: number },
}

interface answersState {
  [followerIndex: number]: followerStorylineState
}

const initialState = FollowersConfig.map((): followerStorylineState => {
  return {currentStorylineStepId: 0, chosenOptions: {}}
} )

interface answerPayload {
  followerIndex: number,
  storylineStepId: number,
  chosenOption: number
}

export const answersSlice = createSlice({
  name: 'answers',
  initialState,
  reducers: {
    chooseAnswer: (state: answersState, action: PayloadAction<answerPayload>) => {
      const answer = action.payload;
      state[answer.followerIndex].chosenOptions[answer.storylineStepId] = action.payload.chosenOption;
    },
  },
})

export const { chooseAnswer } = answersSlice.actions

export default answersSlice.reducer
