import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGifItem } from '../models/IGif';
import api, { apiUrls } from '../../shared/api';
import type { AppDispatch, RootState } from '../Store';

export type FetchGifGridFulfilled = {
  fixedData: IGifItem[],
  totalCount: number
};

const fetchGifs = createAsyncThunk<
    FetchGifGridFulfilled,
    string | undefined,
    { dispatch: AppDispatch, state: RootState}
  >(
    'gifGrid/fetchGifs',
    async (value, thunkApi) => {
      const { offset } = thunkApi.getState().gifGridReducer;

      try {
        const apiCall = value
          ? api.get(apiUrls.searchApiUrl, { params: { q: value, offset, limit: 9 } })
          : api.get(apiUrls.trendingApiUrl, { params: { offset, limit: 9 } });

        const response = await apiCall;
        const { data } = response;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const fixedData: IGifItem[] = data.data.map((g: any, index: number) => ({
          key: `${g.id}${index}`,
          id: g.id,
          baseImgUrl: g.images.downsized_medium.url,
          extraImgUrl: g.images.downsized_large.url,
          altText: g.images.title,
          name: g.images.title,
        }));
        const totalCount = data.pagination.total_count;
        return { fixedData, totalCount };
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    },
  );

export default fetchGifs;
