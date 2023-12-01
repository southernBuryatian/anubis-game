import { createSlice } from '@reduxjs/toolkit';

export enum Screens {
  Intro,
  Office,
  Desktop,
  FollowersList,
  FollowerDialogue,
  GodsRating,
  Ending
}

export type ScreenId = Screens;

interface screenState {
  currentScreenId: ScreenId;
}

export const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    currentScreenId: Screens.Intro,
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
    openEndingScreen: (state: screenState) => {
      state.currentScreenId = Screens.Ending;
    }
  },
})

export const { openFollowerWindow, openDesktopScreen, openFollowersDialogues, closeDesktop, openGodsRating, openEndingScreen } = screenSlice.actions

export default screenSlice.reducer
