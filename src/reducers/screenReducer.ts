import { createSlice } from '@reduxjs/toolkit';

export enum Screens {
  Office,
  Desktop,
  FollowersList,
  FollowerDialogue
}

export type ScreenId = Screens;

interface screenState {
  previousScreenId: ScreenId;
  currentScreenId: ScreenId;
}

export const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    previousScreenId: Screens.Office,
    currentScreenId: Screens.Office,
  },
  reducers: {
    openFollowerWindow: (state: screenState) => {
      state.currentScreenId = Screens.FollowerDialogue;
      state.previousScreenId = Screens.FollowersList;
      console.log(`reducer: state.currentScreenId = ${state.currentScreenId}` );
    },
    closeFollowerWindow: (state: screenState) => {
      state.currentScreenId = Screens.FollowersList;
      state.previousScreenId = Screens.Desktop;
    }
  },
})

export const { openFollowerWindow, closeFollowerWindow } = screenSlice.actions

export default screenSlice.reducer
