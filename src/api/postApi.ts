import axios from 'axios';
import { PostInterface } from '../interfaces';

export const postApi = {
   async get(): Promise<PostInterface[]> {
      return await axios.get('/posts').then(({ data }) => data);
   },

   async create(payload: PostInterface): Promise<void> {
      return await axios.post('/posts', payload);
   },

   async delete(payload: PostInterface): Promise<void> {
      return await axios.delete(`/posts/${payload.id}`);
   },
};
