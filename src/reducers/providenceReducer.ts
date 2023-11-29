import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProvidenceState {
  providenceAmount: number,
}

const standardProvidence = 100;

export const providenceSlice = createSlice({
  name: 'providence',
  initialState: {
    providenceAmount: 0
  },
  reducers: {
    changeProvidenceAmount: (state: ProvidenceState, providenceMultiplier: PayloadAction<number>) => {
        state.providenceAmount = state.providenceAmount + standardProvidence * providenceMultiplier.payload;
    },
  },
})

export const { changeProvidenceAmount } = providenceSlice.actions

export default providenceSlice.reducer
