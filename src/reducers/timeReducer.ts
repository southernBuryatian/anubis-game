import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
  currentTimeBlock: number,
}

export const gameDuration = 9;

export const timeSlice = createSlice({
  name: 'time',
  initialState: {
    currentTimeBlock: 0
  },
  reducers: {
    switchTimeBlock: (state: TimeState) => {
      if (state.currentTimeBlock <= gameDuration) {
        state.currentTimeBlock = state.currentTimeBlock + 1;
      }
    },
  },
})

export const { switchTimeBlock } = timeSlice.actions

export default timeSlice.reducer
