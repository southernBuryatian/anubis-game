import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum GodsCharacters {
  Anubis,
  Isis
}

interface DialogueState {
  currentScriptLine: string | null,
  speaker: GodsCharacters | null
}

interface DialoguePayload {
  text: string,
  speaker: GodsCharacters
}

export const dialogueSlice = createSlice({
  name: 'dialogue',
  initialState: {
    currentScriptLine: null,
    speaker: null,
  },
  reducers: {
    openScriptLine: (state: DialogueState, action: PayloadAction<DialoguePayload>) => {
      state.currentScriptLine = action.payload.text;
      state.speaker = action.payload.speaker;
    },
    closeScriptLine: (state: DialogueState) => {
      state.currentScriptLine = null;
      state.speaker = null;
    }
  },
})

export const { openScriptLine, closeScriptLine } = dialogueSlice.actions

export default dialogueSlice.reducer
