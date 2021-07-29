import React from 'react';
import { PostInterface } from '../../interfaces';
import s from './Post.module.scss';

export const Post: React.FC<{ content: PostInterface }> = ({ content }) => {
   return (
      <div className={s.post}>
         <h2>{content.title}</h2>
         <p>{content.body}</p>
      </div>
   );
};
