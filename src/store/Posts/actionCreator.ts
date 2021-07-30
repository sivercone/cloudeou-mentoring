import { PostInterface } from '../../interfaces';

export const fetchPosts = () => ({
   type: 'POSTS/FETCH',
});

export const setPosts = (payload: PostInterface[]) => ({
   type: 'POSTS/SET',
   payload,
});

export const deletePost = (payload: PostInterface) => ({
   type: 'POSTS/DELETE',
   payload,
});
