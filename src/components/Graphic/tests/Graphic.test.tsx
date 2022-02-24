import React from 'react';
import { render } from '@testing-library/react';

import Graphic from '../Graphic';

const testId = 'testingGraphic';

type GraphicProps = React.ComponentProps<typeof Graphic>;

const renderComponent = (props: GraphicProps = {}) => render(
  <Graphic
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент Graphic', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
