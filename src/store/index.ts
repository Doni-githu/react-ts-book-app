import { configureStore } from '@reduxjs/toolkit';
import { book } from '../reducers';

const store = configureStore({
    reducer: { book },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
