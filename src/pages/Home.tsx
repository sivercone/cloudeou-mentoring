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

   return (
      <>
         <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1>Home Page</h1>
         </div>
         {posts ? posts.map((content) => <Post key={content.id} content={content} />) : undefined}
      </>
   );
};
