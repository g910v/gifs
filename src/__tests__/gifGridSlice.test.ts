import gifGridSlice, {
  addOffset, initialState, resetError, resetSearch, setTrueFetching, switchPageReset,
} from '../store/reducers/GifGridSlice';

describe('getCounterValue', () => {
  test('true fetching', () => {
    expect(gifGridSlice(initialState, setTrueFetching())).toEqual({ ...initialState, fetching: true });
  });
  test('resert error', () => {
    expect(gifGridSlice(initialState, resetError())).toEqual({ ...initialState, error: '' });
  });
  test('reset search', () => {
    expect(gifGridSlice(initialState, resetSearch())).toEqual({ ...initialState, gifList: null, offset: 0 });
  });
  test('switch page reset', () => {
    expect(gifGridSlice(initialState, switchPageReset())).toEqual({
      ...initialState,
      gifList: null,
      error: '',
      offset: 0,
      totalRecord: 0,
      fetching: false,
    });
  });
  test('add offset', () => {
    expect(gifGridSlice(initialState, addOffset())).toEqual({ ...initialState, offset: 9 });
  });
});
