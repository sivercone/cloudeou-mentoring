import React from 'react';
import { postApi } from '../api/postApi';
import { Post } from '../components/Post/Post';
import { PostInterface } from '../interfaces';

export const Home: React.FC = () => {
   const [posts, setPosts] = React.useState<PostInterface[]>([]);

   React.useEffect(() => {
      const getPosts = async () => {
         const data = await postApi.get();
         if (data) setPosts(data);
      };
      getPosts();
   }, []);

   return <div>{posts ? posts.map((content) => <Post key={content.id} content={content} />) : undefined}</div>;
};
