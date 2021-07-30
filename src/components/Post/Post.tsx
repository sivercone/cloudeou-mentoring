import React, {useState} from 'react';
import { PostInterface } from '../../interfaces';
import s from './Post.module.scss';
import {postApi} from "../../api/postApi";
import {EditPost} from "../EditPost/EditPost";

export const Post: React.FC<{ content: PostInterface, getPost: any }> = ({ content, getPost }) => {
    const [updateComponent, setUpdateComponent] = useState<boolean>(false);
    const [editPostModal, setEditPostModal] = useState<boolean>(false);

    const deletePost = async (post: PostInterface) => {
        await postApi.delete(content)
        setUpdateComponent(!updateComponent)

        getPost();
    }

    const editPost = () => {
      setEditPostModal(true)
    }
   return (
      <div className={s.post}>
         <h2>{content.title}</h2>
         <p>
            <b>{content.genre}</b>
         </p>
         <p>{content.body}</p>
          {editPostModal? <EditPost content={content}/> : undefined}
          <button onClick={() => deletePost(content)}>Delete</button>
          <button onClick={() => editPost()}>Edit</button>
      </div>
   );
};
