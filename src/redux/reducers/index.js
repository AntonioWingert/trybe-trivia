import { combineReducers } from 'redux';
import gravatarReducer from './gravatarreducer';
import playerReducer from './player';

const rootReducer = combineReducers({ gravatarReducer, playerReducer });

export default rootReducer;
