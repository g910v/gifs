import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { IGifItem } from '../models/IGif';
import fetchGifs, { FetchGifGridFulfilled } from '../asyncActions/FetchGifGrid';

interface IGifGridState {
  loading: boolean,
  gifList: IGifItem[] | null,
  error: string,
  offset: number,
  totalRecord: number,
  fetching: boolean,
}

export const initialState: IGifGridState = {
  gifList: null,
  loading: false,
  error: '',
  offset: 0,
  totalRecord: 0,
  fetching: false,
};

const gifGridSlice = createSlice({
  name: 'gifGrid',
  initialState,
  reducers: {
    resetSearch(state) {
      state.gifList = null;
      state.offset = 0;
    },
    resetError(state) {
      state.error = '';
    },
    addOffset(state) {
      state.offset += 9;
    },
    setTrueFetching(state) {
      state.fetching = true;
    },
    switchPageReset(state) {
      state.fetching = false;
      state.totalRecord = 0;
      state.gifList = null;
      state.offset = 0;
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGifs.pending.type, state => {
        state.loading = true;
      })
      .addCase(fetchGifs.fulfilled.type, (state, action: PayloadAction<FetchGifGridFulfilled>) => {
        state.loading = false;
        state.totalRecord = action.payload.totalCount;
        state.fetching = false;
        state.gifList
          ? state.gifList.push(...action.payload.fixedData)
          : state.gifList = action.payload.fixedData;
      })
      .addCase(fetchGifs.rejected.type, (state, action: PayloadAction<AxiosError>) => {
        state.loading = false;
        state.error = action.payload.message;
      });
  },
});

export const {
  actions: {
    resetSearch, addOffset, setTrueFetching, switchPageReset, resetError,
  },
} = gifGridSlice;

export default gifGridSlice.reducer;
