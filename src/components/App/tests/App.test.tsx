import React from 'react';
import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import axios from 'axios';

import App from '../App';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('Компонент App', () => {
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
    render(<App />);
    // eslint-disable-next-line
    await act(() => Promise.resolve<any>({ data: posts }));
    await userEvent.type(screen.getByRole('textbox'), 'qui est esse');
    expect(screen.queryByText('qui est esse')).toBeInTheDocument();
    await userEvent.type(screen.getByRole('textbox'), 'Ramda');
    expect(screen.queryByText('qui est esse')).toBeNull();
  });
});
