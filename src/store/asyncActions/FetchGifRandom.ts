import { createAsyncThunk } from '@reduxjs/toolkit';
import { IGifItem } from '../models/IGif';
import api, { apiUrls } from '../../shared/api';
import type { AppDispatch, RootState } from '../Store';

const fetchGifRandom = createAsyncThunk<
    IGifItem,
    undefined,
    { dispatch: AppDispatch, state: RootState}
  >(
    'gifRandom/fetchGifRandom',
    async (_, thunkApi) => {
      try {
        const response = await api.get(apiUrls.randomApiUrl);
        const { data: { data: gif } } = response;
        const fixedData: IGifItem = {
          key: `${gif.id}`,
          id: gif.id,
          baseImgUrl: gif.images.downsized_large.url,
          extraImgUrl: gif.images.downsized_large.url,
          altText: gif.images.title,
          name: gif.images.title,
        };
        return fixedData;
      } catch (error) {
        return thunkApi.rejectWithValue(error);
      }
    },
  );

export default fetchGifRandom;
