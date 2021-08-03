import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { GenreInterface, PostInterface } from '../interfaces';
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';

export interface RootState {
   genres: { items: GenreInterface[] };
   posts: { items: PostInterface[] };
}

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSaga);
