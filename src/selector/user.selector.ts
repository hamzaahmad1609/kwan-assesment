import { createDraftSafeSelector } from '@reduxjs/toolkit'


const selectDomain = (state: any) => state.users;

export const selectUser = createDraftSafeSelector(selectDomain, (users: any) => users);