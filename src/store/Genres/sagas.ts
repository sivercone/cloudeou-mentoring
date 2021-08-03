import { call, put, takeLatest } from 'redux-saga/effects';
import { genreApi } from '../../api/genreApi';
import { GenreInterface } from '../../interfaces';
import { setGenres } from './actionCreator';
import { createGenresInterface } from './actionTypes';

export function* fetchGenresRequest() {
   const data: GenreInterface[] = yield call(genreApi.get);
   yield put(setGenres(data));
}

export function* fetchCreateGenreRequest({ payload }: createGenresInterface) {
   yield call(genreApi.create, payload);
}

export function* genresSaga() {
   yield takeLatest('GENRES/FETCH', fetchGenresRequest);
   yield takeLatest('GENRES/ADD', fetchCreateGenreRequest);
}
