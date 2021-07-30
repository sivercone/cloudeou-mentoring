import s from './EditPost.module.scss';
import React , { ChangeEvent } from "react";
import {PostInterface} from "../../interfaces";
import { SubmitHandler, useForm } from 'react-hook-form';
import {postApi} from "../../api/postApi";

type Inputs = {
    id: number;
    title: string;
    genre: string;
    body: string;
};

export const EditPost: React.FC<{ content: PostInterface}> = ({ content }) => {
    const [visibleModal, setVisibleModal] = React.useState<boolean>(true);

    const modalRef = React.useRef<HTMLDivElement>(null);

    const nonModalClick = (event: any) => {
        const path = event.path || (event.composedPath && event.composedPath());
        if (!path.includes(modalRef.current)) setVisibleModal(false);
    };
    React.useEffect(() => {
        document.body.addEventListener('click', nonModalClick);
        return () => document.body.removeEventListener('click', nonModalClick);
    }, []);


    const { register, handleSubmit } = useForm<Inputs>({
        defaultValues: {
            id: content.id,
            title: content.title,
            genre: content.genre,
            body: content.body,
        }
    });
    const onSubmit: SubmitHandler<Inputs> = async (data, event?: any) => {
        try {
            await postApi.edit(data);
            alert('successfully created post!');
            event.target.reset();
        } catch (error) {
            alert(error);
        }
    };

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        console.log(event.target.value)
    }

    return (
        <div className={visibleModal? s.modal: s.hidden}>
            <div  ref={modalRef}>
                <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
                    <input type="text" required {...register('title')} onChange={handleChange}/>
                    <textarea required {...register('body')} />
                    <button type="submit">Edit post</button>
                </form>
            </div>
        </div>
    );

}