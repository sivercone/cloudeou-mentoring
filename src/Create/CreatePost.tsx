import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postApi } from '../api/postApi';

type Inputs = {
   title: string;
   body: string;
};

export const CreatePost = () => {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      await postApi.create(data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', marginTop: '25px' }}>
         <input type="text" placeholder="title" {...register('title')} />
         <textarea placeholder="body" {...register('body')} />
         <button type="submit">create post</button>
      </form>
   );
};
