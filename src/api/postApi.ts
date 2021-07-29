import axios from 'axios';
import { create } from 'domain';
import { PostInterface } from '../interfaces';

export const postApi = {
   async get(): Promise<PostInterface[]> {
      return await axios.get('/posts').then(({ data }) => data);
   },

   async create(payload: PostInterface): Promise<void> {
      return await axios.post('/posts', payload);
   },
};
