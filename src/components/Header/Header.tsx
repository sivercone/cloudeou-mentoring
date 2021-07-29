import React from 'react';
import { Link } from 'react-router-dom';
import s from './Header.module.scss';

export const Header: React.FunctionComponent = () => {
   return (
      <header className={s.header}>
         <Link to="/">home</Link>
         <Link to="/create">create</Link>
      </header>
   );
};
