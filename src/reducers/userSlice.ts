import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsersState {
    users: IUser[]
    info: Partial<IInfo>

}

const initialState: UsersState = {
    users: [],
    info: {},
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<{results: IUser[], info: IInfo }>) {
            debugger;
            state.users = action.payload.results;
            state.info = action.payload.info;

        },
        // Other actions for user state
    },
});

export const { setUsers } = usersSlice.actions;
export default usersSlice.reducer;