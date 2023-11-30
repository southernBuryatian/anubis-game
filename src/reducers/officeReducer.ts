import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Offices {
  Poor,
  Mediocre,
  Luxury
}

interface officeState {
  currentOffice: Offices;
  isNewOffice: boolean;
}

export const officeSlice = createSlice({
  name: 'office',
  initialState: {
    currentOffice: Offices.Poor,
    isNewOffice: true,
  },
  reducers: {
    changeOffice: (state: officeState, payload: PayloadAction<Offices>) => {
      state.currentOffice = payload.payload;
      state.isNewOffice = true;
    },
    markOfficeAsSeen: (state: officeState) => {
      state.isNewOffice = false;
    }
  },
})

export const { changeOffice, markOfficeAsSeen } = officeSlice.actions;

export default officeSlice.reducer
