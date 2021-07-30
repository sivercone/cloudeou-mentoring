import React, { useState } from 'react';
import { PostInterface } from '../../interfaces';
import s from './Post.module.scss';
import { EditPost } from '../EditPost/EditPost';
import { useDispatch } from 'react-redux';
import { deletePost } from '../../store/Posts/actionCreator';

export const Post: React.FC<{ content: PostInterface }> = ({ content }) => {
   // const [updateComponent, setUpdateComponent] = useState<boolean>(false);
   const [editPostModal, setEditPostModal] = useState<boolean>(false);
   const dispatch = useDispatch();

   const del = () => {
      dispatch(deletePost(content));
   };

   const editPost = () => {
      setEditPostModal(true);
   };
   return (
      <div className={s.post}>
         <h2>{content.title}</h2>
         <p>
            <b>{content.genre}</b>
         </p>
         <p>{content.body}</p>
         {editPostModal ? <EditPost content={content} /> : undefined}
         <button onClick={del}>Delete</button>
         <button onClick={() => editPost()}>Edit</button>
      </div>
   );
};
