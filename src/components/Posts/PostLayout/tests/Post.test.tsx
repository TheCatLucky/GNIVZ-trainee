import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Post from '../Post';
const page = (
  <BrowserRouter>
    <Post title="Title 1" body="body" id={1} userId={25} />
  </BrowserRouter>
);
describe('Компонент Post', () => {
  it('отображается без ошибок', () => {
    render(page);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  it('отображается с body', () => {
    render(page);
    expect(screen.getByText('body')).toBeInTheDocument();
  });
  it('совпадает с snapshot', () => {
    const app = render(page);
    expect(app).toMatchSnapshot();
  });
});
