import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum GodsCharacters {
  Anubis
}

interface DialogueState {
  currentScriptLine: string | null,
  speaker: GodsCharacters | null
}

export const dialogueSlice = createSlice({
  name: 'dialogue',
  initialState: {
    currentScriptLine: null,
    speaker: null,
  },
  reducers: {
    openScriptLine: (state: DialogueState, action: PayloadAction<string>) => {
      state.currentScriptLine = action.payload
    },
    closeScriptLine: (state: DialogueState) => {
      state.currentScriptLine = null;
      state.speaker = null;
    }
  },
})

export const { openScriptLine, closeScriptLine } = dialogueSlice.actions

export default dialogueSlice.reducer
