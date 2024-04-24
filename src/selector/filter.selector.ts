import { createDraftSafeSelector } from '@reduxjs/toolkit'
import { RootState } from '../store';


const selectDomain = (state: RootState) => state.filter;

export const selectFilter = createDraftSafeSelector(selectDomain, (filter: IfilterState) => filter);