import { createSlice } from '@reduxjs/toolkit';

export enum Screens {
  Office,
  Desktop,
  FollowersList,
  FollowerDialogue,
  GodsRating
}

export type ScreenId = Screens;

interface screenState {
  currentScreenId: ScreenId;
}

export const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    currentScreenId: Screens.Office,
  },
  reducers: {
    openDesktopScreen: (state: screenState) => {
      state.currentScreenId = Screens.Desktop;
    },
    openFollowerWindow: (state: screenState) => {
      state.currentScreenId = Screens.FollowerDialogue;
    },
    openFollowersDialogues: (state: screenState) => {
      state.currentScreenId = Screens.FollowersList;
    },
    openGodsRating: (state: screenState) => {
      state.currentScreenId = Screens.GodsRating;
    },
    closeDesktop: (state: screenState) => {
      state.currentScreenId = Screens.Office;
    },
  },
})

export const { openFollowerWindow, openDesktopScreen, openFollowersDialogues, closeDesktop, openGodsRating } = screenSlice.actions

export default screenSlice.reducer
