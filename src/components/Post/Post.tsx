import React from 'react';
import { PostInterface } from '../../interfaces';

export const Post: React.FC<{ content: PostInterface }> = ({ content }) => {
   return (
      <div>
         <h2>{content.title}</h2>
         <p>{content.body}</p>

      </div>
   );
};
