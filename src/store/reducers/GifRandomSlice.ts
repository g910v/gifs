import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IGifItem } from '../models/IGif';
import fetchGif from '../asyncActions/FetchGifRandom';

interface IGifGridState {
  loading: boolean,
  gifList: IGifItem[],
  error: string,
}

const initialState: IGifGridState = {
  gifList: [],
  loading: false,
  error: '',
};

const gifRandomSlice = createSlice({
  name: 'gifRandom',
  initialState,
  reducers: {
    switchPageReset(state) {
      state.gifList = [];
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGif.pending.type, state => {
        state.loading = true;
      })
      .addCase(fetchGif.fulfilled.type, (state, action: PayloadAction<IGifItem>) => {
        state.gifList.push(action.payload);
        state.loading = false;
      })
      .addCase(fetchGif.rejected.type, (state, action: PayloadAction<AxiosError>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const { actions: { switchPageReset } } = gifRandomSlice;

export default gifRandomSlice.reducer;
