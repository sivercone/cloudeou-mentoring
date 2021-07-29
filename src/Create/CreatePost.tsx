import React, {useEffect, useState} from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postApi } from '../api/postApi';
import { genreApi } from '../api/genreApi';
import {Dropdown} from "../components/Dropdown/Dropdown";


type Inputs = {
   title: string;
   genre: string;
   body: string;
};

export const CreatePost = () => {
    const [activeOption, setActiveOption] = useState<string>();
    const [genre, setGenre] = useState<string[]>([])
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = async (data) => {
      await postApi.create(data);
   };

   useEffect(() => {
       const getGenres = async () => {
           const data = await genreApi.get()
            const genres = data.map(genre => genre.name)
            setGenre(genres)
       }
       getGenres();
   }, [])

   return (
      <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', marginTop: '25px' }}>
         <input type="text" placeholder="title" {...register('title')} />
          <input type="hidden" value={activeOption} {...register('genre')} />
         <textarea placeholder="body" {...register('body')} />
         <Dropdown activeOption={activeOption} setactiveOption={setActiveOption} options={genre} placeHolder='Select genre'/>
          <button type="submit">create post</button>
      </form>
   );
};
