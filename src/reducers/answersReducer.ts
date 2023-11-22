import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FollowersConfig } from '../config/config';

interface followerStorylineState {
  currentStorylineStepId: number,
  chosenOptions: { [storylineStepId: number]: number | null },
}

interface answersState {
  [followerIndex: number]: followerStorylineState
}

const initialState = FollowersConfig.map((followerInfo, followerIndex): followerStorylineState => {
  return {currentStorylineStepId: 0, chosenOptions: []}
} )

interface answerPayload {
  followerIndex: number,
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
        state[answer.followerIndex].chosenOptions[answer.storylineStepId] = action.payload.chosenOption;
      }
    },
  },
})

export const { chooseAnswer } = answersSlice.actions

export default answersSlice.reducer
