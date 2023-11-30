import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProvidenceState {
  providenceAmount: number,
  followers: number,
}

export const standardProvidence = 100;

export const providenceSlice = createSlice({
  name: 'providence',
  initialState: {
    providenceAmount: 0,
    followers: 1,
  },
  reducers: {
    changeProvidenceAmount: (state: ProvidenceState, providenceMultiplier: PayloadAction<number>) => {
      state.providenceAmount = state.providenceAmount + standardProvidence * providenceMultiplier.payload;
    },
    changeFollowersAmount: (state: ProvidenceState, followersAmount: PayloadAction<number>) => {
      state.followers = state.followers + followersAmount.payload;
    }
  },
})

export const { changeProvidenceAmount, changeFollowersAmount } = providenceSlice.actions

export default providenceSlice.reducer
