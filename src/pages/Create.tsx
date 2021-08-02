import React from 'react';
import { Dropdown } from '../components/Dropdown/Dropdown';
import { CreatePost } from '../components/Create/CreatePost';
import { CreateGenre } from '../components/Create/CreateGenre';
import AuthCheck from '../components/AuthCheck';

const Create = () => {
   const [activeOption, setactiveOption] = React.useState<string>();

   return (
      <>
         <div style={{ textAlign: 'center', margin: '2rem 0' }}>
            <h1>Create Page</h1>
         </div>
         <Dropdown
            activeOption={activeOption}
            setActiveOption={setactiveOption}
            options={['Post', 'Genre']}
            placeHolder="Select what you want to create"
         />
         {activeOption === 'Post' ? <CreatePost /> : activeOption === 'Genre' ? <CreateGenre /> : undefined}
      </>
   );
};

export const WrappedCreate = AuthCheck(Create);
