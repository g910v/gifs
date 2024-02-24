import setupStore from '../store/Store';
import {
  resetError, switchPageReset,
} from '../store/reducers/GifRandomSlice';
import { formattedData, responseData } from '../testMockValues/randomGifs';
import fetchGifs from '../store/asyncActions/FetchGifRandom';
import api from '../shared/api';

describe('git random slice', () => {
  const store = setupStore();

  test('reset error', () => {
    store.dispatch(resetError());
    const { gifRandomReducer: { error } } = store.getState();
    expect(error).toBe('');
  });

  test('switch page reset', () => {
    store.dispatch(switchPageReset());
    const { gifRandomReducer: { error, gifList } } = store.getState();
    expect(error).toBe('');
    expect(gifList).toEqual([]);
  });

  test('fetch random gif', async () => {
    const responce = {
      data: {
        data: responseData,
      },
    };
    const getRandomGif = jest.spyOn(api, 'get').mockResolvedValueOnce(responce);
    await store.dispatch(fetchGifs());
    const { gifRandomReducer: { gifList } } = store.getState();

    expect(getRandomGif).toHaveBeenCalled();
    expect(gifList[0]).toEqual(formattedData);
  });
});
