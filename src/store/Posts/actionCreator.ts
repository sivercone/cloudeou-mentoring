import { PostInterface } from '../../interfaces';
import {
   createPostsInteface,
   deletePostInterface,
   editPostInterface,
   fetchPostsInterface,
   setPostsInterface,
} from './actionTypes';

export const fetchPosts = (): fetchPostsInterface => ({
   type: 'POSTS/FETCH',
});

export const setPosts = (payload: PostInterface[]): setPostsInterface => ({
   type: 'POSTS/SET',
   payload,
});

export const createPosts = (payload: PostInterface): createPostsInteface => ({
   type: 'POSTS/ADD',
   payload,
});

export const deletePost = (payload: PostInterface): deletePostInterface => ({
   type: 'POSTS/DELETE',
   payload,
});

export const editPost = (payload: PostInterface): editPostInterface => ({
   type: 'POSTS/PUT',
   payload,
});

export type postActions = fetchPostsInterface | setPostsInterface | createPostsInteface | deletePostInterface | editPostInterface;
