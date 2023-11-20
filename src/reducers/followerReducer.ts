import { createSlice } from '@reduxjs/toolkit';

interface FollowerState {
  currentFollowerId: number | null
}

export const followerSlice = createSlice({
  name: 'follower',
  initialState: {
    currentFollowerId: null,
  },
  reducers: {
    chooseFollower: (state: FollowerState, action) => {
      state.currentFollowerId = action.payload
    },
    closeFollowerWindow: (state: FollowerState) => {
      state.currentFollowerId = null
    }
  },
})

export const { chooseFollower, closeFollowerWindow } = followerSlice.actions

export default followerSlice.reducer
