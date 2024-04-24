import { combineReducers } from '@reduxjs/toolkit';

import usersSlice  from './userSlice';
import filterSlice from './filterSlice';


export const rootReducer = combineReducers({
  users: usersSlice,
  filter: filterSlice,
});