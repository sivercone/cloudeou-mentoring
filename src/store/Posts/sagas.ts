import { call, put, takeLatest } from 'redux-saga/effects';
import { postApi } from '../../api/postApi';
import { setPosts } from './actionCreator';

export function* fetchPostsRequest(): any {
   const data = yield call(postApi.get);
   yield put(setPosts(data));
}

export function* fetchDeletePostRequest({ payload }: any): any {
   yield call(postApi.delete, payload);
   const data = yield call(postApi.get);
   yield put(setPosts(data));
}

export function* postsSaga() {
   yield takeLatest('POSTS/FETCH', fetchPostsRequest);
   yield takeLatest('POSTS/DELETE', fetchDeletePostRequest);
}
