import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Card from '../Card';

const renderComponent = <Card title="Загловок" body="Информация" />;
describe('Компонент Card', () => {
  it('совпадает с snapshot', () => {
    const app = render(renderComponent);
    expect(app).toMatchSnapshot();
  });
  it('отображается без ошибок', () => {
    render(renderComponent);
    expect(screen.getByText('Загловок')).toBeInTheDocument();
  });
  it('при клике показывает body', () => {
    render(renderComponent);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Информация')).toBeInTheDocument();
  });
  it('должен иметь стиль', () => {
    render(renderComponent);
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Информация')).toHaveStyle({
      color: 'rgb(0,0,0);',
    });
  });
});
