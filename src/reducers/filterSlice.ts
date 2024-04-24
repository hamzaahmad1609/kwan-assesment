import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IfilterState = {
    gender: null,
    input: ''
};

const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setGender(state, action: PayloadAction<{gender: IOption | null }>) {
            state.gender = action.payload.gender;
        },
        setInput(state, action: PayloadAction<{input: string }>) {
            state.input = action.payload.input;
        },
    },
});

export const { setGender, setInput } = filterSlice.actions;
export default filterSlice.reducer;