import {createStore, combineReducers} from 'redux';
import {reducer as classifiesReducer} from './pages/index/';
import {reducer as articleOverflowReducer} from './components/articleOverflow/';

const reducer = combineReducers({
  classifies: classifiesReducer,
  articleOverflow: articleOverflowReducer
});

export default createStore(reducer);
