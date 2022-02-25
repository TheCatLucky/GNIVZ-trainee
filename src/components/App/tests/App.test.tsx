import React from 'react';
import { act, configure, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import Home from '../../routes/Home';
configure({ defaultHidden: true });
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Компонент Home', () => {
  it('работает поиск', async () => {
    const posts = [
      {
        id: 1,
        userId: 1,
        title: 'qui est esse',
        body: '',
      },
    ];
    mockedAxios.get.mockImplementationOnce(() =>
      Promise.resolve({ data: posts }),
    );
    render(<Home />);
    // eslint-disable-next-line
    await act(() => Promise.resolve<any>({ data: posts }));
    const userScreen = screen.getByRole('textbox');
    userEvent.type(userScreen, 'qui est esse');
    expect(screen.queryByText('qui est esse')).toBeInTheDocument();
    userEvent.type(userScreen, 'Ramda');
    expect(screen.queryByText('qui est esse')).toBeNull();
  });
});
