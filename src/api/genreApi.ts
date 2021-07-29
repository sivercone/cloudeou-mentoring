import axios from "axios";
import {GenreInterface} from '../interfaces'

export const genreApi = {
    async get(): Promise<GenreInterface[]> {
        return await axios.get('/genres').then(({data}) => data);
    },

    async create(payload: GenreInterface): Promise<void> {
        return await axios.post('/genres', payload);
    },
}