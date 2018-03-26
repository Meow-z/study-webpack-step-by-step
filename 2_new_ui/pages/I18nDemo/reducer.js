import * as at from './actionTypes';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case at.RETURN_STATE:
      return state;
    default:
      return state;
  }
};
