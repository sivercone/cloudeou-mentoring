import React from 'react';
import { useForm } from 'react-hook-form';
import { sessionMemory } from '../utils/sessionMemory';

type Inputs = {
   login: string;
   password: string;
};

export const Auth = () => {
   const { register, handleSubmit } = useForm<Inputs>();
   const onSubmit = (data: Inputs) => {
      console.log(data);
      sessionMemory.set('auth', data);
   };

   return (
      <form onSubmit={handleSubmit(onSubmit)}>
         <input type="text" placeholder="login" {...register('login')} />
         <input type="password" placeholder="password" {...register('password')} />
         <button>login</button>
      </form>
   );
};
