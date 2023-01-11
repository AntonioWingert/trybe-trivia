import { SAVE_GRAVATAR } from '../Actions';

const INITIAL_STATE = {
  gravatarUser: '',
};

const gravatarReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_GRAVATAR: return {
    ...state,
    gravatarUser: action.hash,
  };
  default: return state;
  }
};

export default gravatarReducer;
