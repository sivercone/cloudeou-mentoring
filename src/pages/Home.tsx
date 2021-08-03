import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AuthCheck from '../components/AuthCheck';
import { Post } from '../components/Post/Post';
import { PostInterface } from '../interfaces';
import { fetchPosts } from '../store/Posts/actionCreator';
import { RootState } from '../store/store';

const Home: React.FC = () => {
   const dispatch = useDispatch();
   const posts: PostInterface[] = useSelector(({ posts }: RootState) => posts.items);

   useEffect(() => {
      dispatch(fetchPosts());
   }, [dispatch]);

   return (
      <>
         <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1>Home Page</h1>
         </div>
         {posts ? posts.map((content, index) => <Post key={index} content={content} />) : undefined}
      </>
   );
};

export const WrappedHome = AuthCheck(Home);
