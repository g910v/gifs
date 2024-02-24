import setupStore from '../store/Store';
import {
  resetError, switchPageReset,
} from '../store/reducers/GifRandomSlice';

jest.mock('axios');

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
});
