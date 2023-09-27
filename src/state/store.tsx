import {configureStore} from '@reduxjs/toolkit';
import {testSliceReducer} from './slices/test';

export const store = configureStore({
	reducer: {route: testSliceReducer},
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;
