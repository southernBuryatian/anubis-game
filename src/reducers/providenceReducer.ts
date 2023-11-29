import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ProvidenceState {
  providenceAmount: number,
}

export const providenceSlice = createSlice({
  name: 'providence',
  initialState: {
    providenceAmount: 0
  },
  reducers: {
    changeProvidenceAmount: (state: ProvidenceState, providenceEarned: PayloadAction<number>) => {
        state.providenceAmount = state.providenceAmount + providenceEarned.payload;
    },
  },
})

export const { changeProvidenceAmount } = providenceSlice.actions

export default providenceSlice.reducer
