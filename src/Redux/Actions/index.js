export const SAVE_GRAVATAR = 'SAVE_GRAVATAR';

export const saveIconOnStore = (hash) => ({
  type: SAVE_GRAVATAR,
  hash,
});
