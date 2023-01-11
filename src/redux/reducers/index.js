import { combineReducers } from 'redux';
import gravatarReducer from './gravatarreducer';
import userReducer from './user';

const rootReducer = combineReducers({ gravatarReducer, userReducer });

export default rootReducer;
