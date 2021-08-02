import { genreActions } from './actionCreator';

const initialState = {
   items: [],
};

export const genresReducer = (state = initialState, action: genreActions) => {
   switch (action.type) {
      case 'GENRES/SET':
         return {
            ...state,
            items: action.payload,
         };

      default:
         return state;
   }
};
