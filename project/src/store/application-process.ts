import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ApplicationProcess } from '../types/state';
import NameSpace from '../types/name-space';
import { ALL_GENRES } from '../consts';

const initialState: ApplicationProcess = {
  genre: ALL_GENRES
};


export const applicationProcess = createSlice({
  name: NameSpace.Application,
  initialState,
  reducers: {
    chooseGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    }
  }
});

export const { chooseGenre } = applicationProcess.actions;

