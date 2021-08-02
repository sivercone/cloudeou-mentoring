import { call, put, takeLatest } from 'redux-saga/effects';
import { postApi } from '../../api/postApi';
import { setPosts } from './actionCreator';
import { createPostsInteface, deletePostInterface, editPostInterface } from './actionTypes';

export function* fetchPostsRequest(): any {
   const data = yield call(postApi.get);
   yield put(setPosts(data));
}

export function* fetchCreatePostRequest({ payload }: createPostsInteface) {
   yield call(postApi.create, payload);
}

export function* fetchDeletePostRequest({ payload }: deletePostInterface): any {
   yield call(postApi.delete, payload);
   const data = yield call(postApi.get);
   yield put(setPosts(data));
}

export function* fetchUpdatePostRequest({ payload }: editPostInterface): any {
   yield call(postApi.edit, payload);
   const data = yield call(postApi.get);
   yield put(setPosts(data));
}

export function* postsSaga() {
   yield takeLatest('POSTS/FETCH', fetchPostsRequest);
   yield takeLatest('POSTS/ADD', fetchCreatePostRequest);
   yield takeLatest('POSTS/DELETE', fetchDeletePostRequest);
   yield takeLatest('POSTS/PUT', fetchUpdatePostRequest);
}
