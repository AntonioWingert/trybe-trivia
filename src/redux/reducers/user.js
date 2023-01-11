import { SAVE_DATA_LOGIN } from '../Actions';

const INITIAL_STATE = {
  name: '',
  email: '',
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DATA_LOGIN: return {
    ...state,
    name: action.data.name,
    email: action.data.email,
  };
  default: return state;
  }
};

export default userReducer;
