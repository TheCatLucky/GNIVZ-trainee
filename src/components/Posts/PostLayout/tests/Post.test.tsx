import React from 'react';
import { render, screen } from '@testing-library/react';

import Post from '../Post';

describe('Компонент Post', () => {
  it('отображается без ошибок', () => {
    render(<Post title="Title 1" body="body" id={1} userId={25} />);
    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getByText('Title 1')).toBeInTheDocument();
  });

  it('отображается с body', () => {
    render(<Post title="Title 1" body="123" id={1} userId={25} />);
    expect(screen.getByText('123')).toBeInTheDocument();
  });
  it('совпадает с snapshot', () => {
    const app = render(<Post title="Title 1" body="123" id={1} userId={25} />);
    expect(app).toMatchSnapshot();
  });
});
