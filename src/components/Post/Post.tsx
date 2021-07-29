import React from 'react';
import { PostInterface } from '../../interfaces';
import s from './Post.module.scss';
import {postApi} from "../../api/postApi";

export const Post: React.FC<{ content: PostInterface, getPost: any }> = ({ content, getPost }) => {
    const deletePost = async (post: PostInterface) => {
        await postApi.delete(content)
        getPost();
    }
   return (
      <div className={s.post}>
         <h2>{content.title}</h2>
         <p>
            <b>{content.genre}</b>
         </p>
         <p>{content.body}</p>
          <button onClick={() => deletePost(content)}>Delete</button>
      </div>
   );
};
