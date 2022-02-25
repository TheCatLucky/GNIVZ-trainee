import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import PostItem from '../PostItem';

const testId = 'testingPostItem';

const renderComponent = (
  <BrowserRouter>
    <PostItem data-testid={testId} />
  </BrowserRouter>
);

describe('Компонент PostItem', () => {
  it('должен иметь стиль', () => {
    render(renderComponent);
    expect(screen.getByText('Назад')).toHaveStyle({ color: 'rgb(0,0,0);' });
  });
});
