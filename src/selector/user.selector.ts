import { createDraftSafeSelector } from '@reduxjs/toolkit'
import { RootState } from '../store';


const selectDomain = (state: RootState) => state.users;

export const selectUser = createDraftSafeSelector(selectDomain, (users: IUsersState) => users);