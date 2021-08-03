import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { Dropdown } from '../Dropdown/Dropdown';
import s from './Form.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { createPosts } from '../../store/Posts/actionCreator';
import { fetchGenres } from '../../store/Genres/actionCreator';
import { RootState } from '../../store/store';

type Inputs = {
   title: string;
   body: string;
   genre: string;
};

export const CreatePost = () => {
   const [activeOption, setActiveOption] = useState<string>();
   const dispatch = useDispatch();

   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = (data, event?: any) => {
      if (activeOption) data.genre = activeOption;
      dispatch(createPosts(data));
      alert('successfully created post!');
      event.target.reset();
   };

   const genres = useSelector(({ genres }: RootState) => genres.items);

   useEffect(() => {
      dispatch(fetchGenres());
   }, [dispatch]);

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
         <input type="text" placeholder="Title" required {...register('title')} />
         <textarea placeholder="Body" required {...register('body')} />
         {genres.length ? (
            <Dropdown
               activeOption={activeOption}
               setActiveOption={setActiveOption}
               options={genres.map((genre) => genre.name)}
               placeHolder="Select genre"
            />
         ) : undefined}
         <button type="submit">Create post</button>
      </form>
   );
};
