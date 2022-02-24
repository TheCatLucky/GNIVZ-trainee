import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from '../Card';

describe('Компонент Card', () => {
  it('совпадает с snapshot', () => {
    const app = render(<Card title="Загловок" body="Информация" />);
    expect(app).toMatchSnapshot();
  });
  it('отображается без ошибок', () => {
    render(<Card title="Загловок" body="Информация" />);
    expect(screen.getByText('Загловок')).toBeInTheDocument();
  });
  it('при клике показывает body', () => {
    render(<Card title="Загловок" body="Информация" />);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Информация')).toBeInTheDocument();
  });
});
