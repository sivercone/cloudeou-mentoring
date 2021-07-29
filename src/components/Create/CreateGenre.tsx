import { useForm } from 'react-hook-form';
import { genreApi } from '../../api/genreApi';
import s from './Form.module.scss';

type Inputs = {
   name: string;
};

export const CreateGenre = () => {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit = async (data: Inputs, event?: any) => {
      try {
         await genreApi.create(data);
         alert('successfully created genre!');
         event.target.reset();
      } catch (error) {
         alert(error);
      }
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
         <input placeholder="Name" {...register('name')} />
         <button type="submit">Create genre</button>
      </form>
   );
};
