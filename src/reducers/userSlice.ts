import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const initialState: IUsersState = {
    users: [],
    info: {},
    selectedUser: {}
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        setUsers(state, action: PayloadAction<{results: IUser[], info: IInfo }>) {
            state.users = action.payload.results;
            state.info = action.payload.info;

        },
        selectedUser(state, action: PayloadAction<IUser>) {
            state.selectedUser = action.payload;
        },
    },
});

export const { setUsers, selectedUser } = usersSlice.actions;
export default usersSlice.reducer;