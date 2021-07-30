import { all } from 'redux-saga/effects';
import { postsSaga } from './Posts/sagas';

export function* rootSaga() {
   yield all([postsSaga()]);
}
