import { call, put, takeLatest } from 'redux-saga/effects';
import { postApi } from '../../api/postApi';
import { PostInterface } from '../../interfaces';
import { setPosts } from './actionCreator';
import { createPostsInteface, deletePostInterface, editPostInterface } from './actionTypes';

export function* fetchPostsRequest() {
   const data: PostInterface[] = yield call(postApi.get);
   yield put(setPosts(data));
}

export function* fetchCreatePostRequest({ payload }: createPostsInteface) {
   yield call(postApi.create, payload);
}

export function* fetchDeletePostRequest({ payload }: deletePostInterface) {
   yield call(postApi.delete, payload);
   // const data: PostInterface[] = yield call(postApi.get);
   // yield put(setPosts(data));
}

export function* fetchUpdatePostRequest({ payload }: editPostInterface) {
   yield call(postApi.edit, payload);
   // const data: PostInterface[] = yield call(postApi.get);
   // yield put(setPosts(data));
}

export function* postsSaga() {
   yield takeLatest('POSTS/FETCH', fetchPostsRequest);
   yield takeLatest('POSTS/ADD', fetchCreatePostRequest);
   yield takeLatest('POSTS/DELETE', fetchDeletePostRequest);
   yield takeLatest('POSTS/PUT', fetchUpdatePostRequest);
}
