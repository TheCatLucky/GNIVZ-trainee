import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Search from '../Search';

describe('Компонент Search', () => {
  it('handleSearch работает', () => {
    const onChange = jest.fn();
    render(<Search search="" handleSearch={onChange} />);
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(onChange).toHaveBeenCalledTimes(5);
  });
});
