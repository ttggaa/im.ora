import {GET_CLASSIFY} from './actionTypes.js';
import {classifies} from '../../data/';

export default (state = classifies, action) => {
  switch(action.type) {
    case GET_CLASSIFY:
      return state;
    default:
      return state;
  }
};
