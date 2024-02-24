import setupStore from '../store/Store';
import {
  resetError, switchPageReset,
} from '../store/reducers/GifRandomSlice';
import { formattedData, responseData } from '../testMockValues/randomGifs';
import api from '../shared/api';
import fetchGifRandom from '../store/asyncActions/FetchGifRandom';

describe('gif random slice', () => {
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
    await store.dispatch(fetchGifRandom());
    const { gifRandomReducer: { gifList } } = store.getState();

    expect(getRandomGif).toHaveBeenCalled();
    expect(gifList[0]).toEqual(formattedData);
  });
});
