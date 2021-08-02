import { GenreInterface } from '../../interfaces';
import { createGenresInterface, fetchGenresInterface, setGenresInterface } from './actionTypes';

export const fetchGenres = (): fetchGenresInterface => ({
   type: 'GENRES/FETCH',
});

export const setGenres = (payload: GenreInterface[]): setGenresInterface => ({
   type: 'GENRES/SET',
   payload,
});

export const createGenres = (payload: GenreInterface): createGenresInterface => ({
   type: 'GENRES/ADD',
   payload,
});

export type genreActions = fetchGenresInterface | setGenresInterface | createGenresInterface;
