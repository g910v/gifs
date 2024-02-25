import api from '../src/shared/api';
import { setupStore } from '../src/store/Store';
import fetchGifs from '../src/store/asyncActions/FetchGifGrid';
import {
  addOffset, resetError, resetSearch, setTrueFetching, switchPageReset,
} from '../src/store/reducers/GifGridSlice';
import { formattedData, responseData } from './testMockValues/gridGifs';

describe('gif grid slice', () => {
  const store = setupStore();

  test('true fetching', () => {
    store.dispatch(setTrueFetching());
    const { gifGridReducer: { fetching } } = store.getState();
    expect(fetching).toBeTruthy();
  });

  test('reset search', () => {
    store.dispatch(resetSearch());
    const { gifGridReducer: { gifList, offset } } = store.getState();
    expect(offset).toBe(0);
    expect(gifList).toBeNull();
  });

  test('reset error', () => {
    store.dispatch(resetError());
    const { gifGridReducer: { error } } = store.getState();
    expect(error).toBe('');
  });

  test('add offset', () => {
    store.dispatch(addOffset());
    const { gifGridReducer: { offset } } = store.getState();
    expect(offset).toBe(9);
  });

  test('switch page reset', () => {
    store.dispatch(switchPageReset());
    const {
      gifGridReducer: {
        error, gifList, offset, totalRecord, fetching,
      },
    } = store.getState();
    expect(error).toBe('');
    expect(gifList).toBeNull();
    expect(offset).toBe(0);
    expect(fetching).toBeFalsy();
    expect(totalRecord).toBe(0);
  });

  test('fetch grid gifs', async () => {
    const responce = {
      data: {
        data: responseData,
        pagination: {
          offset: 0,
          count: 3,
          total_count: 3,
        },
      },
    };
    const getRandomGif = jest.spyOn(api, 'get').mockResolvedValueOnce(responce);
    await store.dispatch(fetchGifs());
    const { gifGridReducer: { gifList, totalRecord } } = store.getState();

    expect(getRandomGif).toHaveBeenCalled();
    expect(gifList).toEqual(formattedData);
    expect(totalRecord).toBe(3);
  });
});
