import { combineReducers, configureStore } from '@reduxjs/toolkit';
import gifGridReducer from './reducers/GifGridSlice';
import gifRandomReducer from './reducers/GifRandomSlice';

const rootReducer = combineReducers({
  gifGridReducer,
  gifRandomReducer,
});

const setupStore = () => {
  const store = configureStore({
    reducer: rootReducer,
  });
  return store;
};

export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch'];
export type RootState = ReturnType<typeof rootReducer>;

export default setupStore;
