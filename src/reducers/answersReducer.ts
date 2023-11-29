import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FollowersConfig } from '../config/followersConfig';

interface followerStorylineState {
  currentStorylineStepId: number,
  chosenOptions: { [storylineStepId: number]: number },
  nextStorylineStepId: number | null
}

interface storylinesState {
  [followerIndex: number]: followerStorylineState
}

const initialState = FollowersConfig.map((): followerStorylineState => {
  return {
    currentStorylineStepId: 0,
    chosenOptions: {},
    nextStorylineStepId: null
  }
} )

interface answerPayload {
  followerIndex: number,
  storylineStepId: number,
  chosenOption: number,
  nextStep?: number | null,
}

export const storylinesSlice = createSlice({
  name: 'storylines',
  initialState,
  reducers: {
    chooseAnswer: (state: storylinesState, action: PayloadAction<answerPayload>) => {
      const answer = action.payload;
      state[answer.followerIndex].chosenOptions[answer.storylineStepId] = action.payload.chosenOption;
      if (action.payload.nextStep) {
        state[answer.followerIndex].nextStorylineStepId = action.payload.nextStep;
      }
    },
    executeNextStep: (state: storylinesState, action: PayloadAction<number>) => {
      if (state[action.payload].nextStorylineStepId !== null) {
        state[action.payload].currentStorylineStepId = (state[action.payload].nextStorylineStepId) as number;
      }
    }
  },
})

export const { chooseAnswer, executeNextStep } = storylinesSlice.actions

export default storylinesSlice.reducer
