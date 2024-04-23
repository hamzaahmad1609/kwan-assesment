import { combineReducers } from '@reduxjs/toolkit';

import usersSlice  from './userSlice';


export const rootReducer = combineReducers({
  users: usersSlice,

});