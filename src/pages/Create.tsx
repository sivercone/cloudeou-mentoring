import React from 'react';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { CreatePost } from '../Create/CreatePost';

export const Create = () => {
   const [activeOption, setactiveOption] = React.useState<string>();

   return (
      <>
         <h1>Create Page</h1>
         <Dropdown activeOption={activeOption} setactiveOption={setactiveOption} />
         {activeOption === 'Post' ? <CreatePost /> : undefined}
      </>
   );
};
