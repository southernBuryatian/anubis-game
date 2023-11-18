import { createSlice } from '@reduxjs/toolkit'

export const followerSlice = createSlice({
  name: 'follower',
  initialState: {
    currentFollowerId: null,
  },
  reducers: {
    chooseFollower: (state, action) => {
      state.currentFollowerId = action.payload
    },
    closeFollowerWindow: (state) => {
      state.currentFollowerId = null
    }
  },
})

export const { chooseFollower, closeFollowerWindow } = followerSlice.actions

export default followerSlice.reducer
