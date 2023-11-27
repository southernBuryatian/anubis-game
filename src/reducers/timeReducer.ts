import { createSlice } from '@reduxjs/toolkit';

interface TimeState {
  currentTimeBlock: number,
}

export const timeSlice = createSlice({
  name: 'time',
  initialState: {
    currentTimeBlock: 0
  },
  reducers: {
    switchTimeBlock: (state: TimeState) => {
      state.currentTimeBlock += state.currentTimeBlock;
    },
  },
})

export const { switchTimeBlock } = timeSlice.actions

export default timeSlice.reducer
