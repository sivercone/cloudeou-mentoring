import { PostInterface } from '../../interfaces';
import { postActions } from './actionCreator';

const initialState = {
   items: [] as PostInterface[],
};

export const postsReducer = (state = initialState, action: postActions) => {
   switch (action.type) {
      case 'POSTS/SET':
         return {
            ...state,
            items: action.payload,
         };

      case 'POSTS/DELETE':
         return {
            ...state,
            items: state.items.filter((item) => item.id !== action.payload.id),
         };

      case 'POSTS/PUT': {
         const itemsWithoutPrev = state.items.filter((item) => item.id !== action.payload.id);
         return {
            ...state,
            items: [...itemsWithoutPrev, action.payload],
         };
      }

      // case 'POSTS/ADD':
      //    return {
      //       ...state,
      //       items: [...state.items, action.payload],
      //    };

      default:
         return state;
   }
};
