import { combineReducers } from 'redux';
import { postsReducer } from './Posts/reducer';

export const rootReducer = combineReducers({
   posts: postsReducer,
});
