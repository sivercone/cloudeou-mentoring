import { fireEvent, render, waitForElementToBeRemoved } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../../store/store';
import { Post } from './Post';
import { posts } from '../../db.json';

test('after delete must be disappeared', async () => {
   const { getByText } = render(
      <Provider store={store}>
         <Post content={posts[0]} />
      </Provider>,
   );

   const buttonDelete = getByText('Delete');

   expect(buttonDelete).toBeInTheDocument();

   fireEvent.click(buttonDelete);

   await waitForElementToBeRemoved(buttonDelete);

   expect(buttonDelete).not.toBeInTheDocument();

   //    debug();
});
