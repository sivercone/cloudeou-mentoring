import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import {genreApi} from '../api/genreApi';

type Inputs = {
    name: string;
};

export const CreateGenre = () => {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await genreApi.create(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', marginTop: '25px' }}>
    <input placeholder="body" {...register('name')} />
    <button type="submit">Add genre</button>
    </form>
);
};
