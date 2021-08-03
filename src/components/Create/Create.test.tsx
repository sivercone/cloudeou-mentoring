import { render, screen } from '@testing-library/react';
import { CreatePost } from './CreatePost';
import { Provider } from 'react-redux';
import { store } from '../../store/store';

// test('show debug', () => {
//    const { debug } = render(
//       <Provider store={store}>
//          <CreatePost />
//       </Provider>,
//    );

// //    debug();
// });

test('inputs and button should appear', () => {
   render(
      <Provider store={store}>
         <CreatePost />
      </Provider>,
   );
   const inputTitle = screen.getByPlaceholderText('Title');
   const inputBody = screen.getByPlaceholderText('Body');
   const buttonCreate = screen.getByText('Create post');

   expect(inputTitle).toBeInTheDocument();
   expect(inputBody).toBeInTheDocument();
   expect(buttonCreate).toBeInTheDocument();
});
