import React from 'react';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { CreatePost } from '../Create/CreatePost';
import { CreateGenre } from '../Create/CreateGenre';

export const Create = () => {
   const [activeOption, setactiveOption] = React.useState<string>();

   return (
      <>
         <h1>Create Page</h1>
         <Dropdown activeOption={activeOption} setactiveOption={setactiveOption} options={['Post', 'Genre']} placeHolder='Select what you want to create'/>
         {activeOption === 'Post' ? <CreatePost /> : activeOption === 'Genre' ? <CreateGenre /> : undefined}
      </>
   );
};
