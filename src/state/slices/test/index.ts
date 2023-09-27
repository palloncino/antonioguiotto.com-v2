import {createSlice} from '@reduxjs/toolkit';

export type TestProp1Type = number;

interface TestState {
  testProp1: TestProp1Type;
}

const initialState: TestState = {
	testProp1: 1234,
};

export const testSlice = createSlice({
	name: 'test',
	initialState,
	reducers: {
		testAction(s, a) {
			s.testProp1 = a.payload;
		},
	},
});

// Thunks
export const {testAction} = testSlice.actions;

// Selectors
export const selectTestProp1 = (state: TestState) => state.testProp1;

// Reducer
export const testSliceReducer = testSlice.reducer;

