import { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { postApi } from '../../api/postApi';
import { genreApi } from '../../api/genreApi';
import { Dropdown } from '../Dropdown/Dropdown';
import s from './Form.module.scss';

type Inputs = {
   title: string;
   body: string;
   genre: string;
};

export const CreatePost = () => {
   const [activeOption, setActiveOption] = useState<string>();

   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit: SubmitHandler<Inputs> = async (data, event?: any) => {
      try {
         await postApi.create(data);
         alert('successfully created post!');
         event.target.reset();
      } catch (error) {
         alert(error);
      }
   };

   const [genres, setGenres] = useState<string[]>([]);
   useEffect(() => {
      const getGenres = async () => {
         const data = await genreApi.get();
         if (!data) return;
         const genresNames = data.map((genre) => genre.name);
         setGenres(genresNames);
      };
      getGenres();
   }, []);

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
         <input type="text" placeholder="Title" required {...register('title')} />
         <textarea placeholder="Body" required {...register('body')} />
         {activeOption ? <input type="hidden" value={activeOption} {...register('genre')} /> : undefined}
         {genres.length ? (
            <Dropdown activeOption={activeOption} setActiveOption={setActiveOption} options={genres} placeHolder="Select genre" />
         ) : undefined}
         <button type="submit">Create post</button>
      </form>
   );
};
