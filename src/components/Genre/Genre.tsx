import React from 'react';
import { GenreInterface } from '../../interfaces';

export const Post: React.FC<{ content: GenreInterface }> = ({ content }) => {
    return (
        <div>
            <p>{content.name}</p>
        </div>
    );
};
