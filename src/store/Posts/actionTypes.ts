import { Action } from 'redux';
import { PostInterface } from '../../interfaces';

export interface fetchPostsInterface extends Action {
   type: 'POSTS/FETCH';
}

export interface setPostsInterface extends Action {
   type: 'POSTS/SET';
   payload: PostInterface[];
}

export interface createPostsInteface extends Action {
   type: 'POSTS/ADD';
   payload: PostInterface;
}

export interface deletePostInterface extends Action {
   type: 'POSTS/DELETE';
   payload: PostInterface;
}

export interface editPostInterface extends Action {
   type: 'POSTS/PUT';
   payload: PostInterface;
}
