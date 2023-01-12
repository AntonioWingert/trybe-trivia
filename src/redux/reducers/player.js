import { SAVE_DATA_LOGIN, SAVE_GRAVATAR, UPDATE_SCORE } from '../Actions';

const INITIAL_STATE = {
  name: '',
  gravatarEmail: '',
  score: 0,
  assertions: 0,
};

const player = (state = INITIAL_STATE, action) => {
  switch (action.type) {
  case SAVE_DATA_LOGIN: return {
    ...state,
    name: action.data.name,
  };
  case UPDATE_SCORE: return {
    ...state,
    score: state.score + action.payload,
  };
  case SAVE_GRAVATAR: return {
    ...state,
    gravatarEmail: action.hash,
  };
  default: return state;
  }
};

export default player;
