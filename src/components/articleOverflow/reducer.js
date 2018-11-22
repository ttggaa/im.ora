import {HIDE_ARTICLEOVERFLOW} from './actionTypes.js';

export default (state = {hide: false}, action) => {
  switch(action.type) {
    case HIDE_ARTICLEOVERFLOW:
      return {...state, hide: true};
    default:
      return state;
  }
};
