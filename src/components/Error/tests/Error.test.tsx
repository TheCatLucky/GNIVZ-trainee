import React from 'react';
import { render } from '@testing-library/react';

import Error from '../Error';

const testId = 'testingError';

type ErrorProps = React.ComponentProps<typeof Error>;

const renderComponent = (props: ErrorProps) => render(
  <Error
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Error', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
