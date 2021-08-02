import { Action } from 'redux';
import { GenreInterface } from '../../interfaces';

export interface fetchGenresInterface extends Action {
   type: 'GENRES/FETCH';
}

export interface setGenresInterface extends Action {
   type: 'GENRES/SET';
   payload: GenreInterface[];
}

export interface createGenresInterface extends Action {
   type: 'GENRES/ADD';
   payload: GenreInterface;
}
