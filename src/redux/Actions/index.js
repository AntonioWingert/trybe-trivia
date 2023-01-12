export const SAVE_GRAVATAR = 'SAVE_GRAVATAR';
export const SAVE_DATA_LOGIN = 'SAVE_DATA_LOGIN';
export const UPDATE_SCORE = 'UPDATE_SCORE';
export const UPDATE_CORRECT_ANSWERS = 'UPDATE_CORRECT_ANSWERS';

export const saveIconOnStore = (hash) => ({
  type: SAVE_GRAVATAR,
  hash,
});

export const saveDataOnStore = (data) => ({
  type: SAVE_DATA_LOGIN,
  data,
});

export const saveNewQuestionScore = (score) => ({
  type: UPDATE_SCORE,
  payload: score,
});

export const updateCorrectAnswers = () => ({
  type: UPDATE_CORRECT_ANSWERS,
});
