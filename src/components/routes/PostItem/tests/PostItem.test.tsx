import React from 'react';
import { render } from '@testing-library/react';

import PostItem from '../PostItem';

const testId = 'testingPostItem';

type PostItemProps = React.ComponentProps<typeof PostItem>;

const renderComponent = (props: PostItemProps = {}) => render(
  <PostItem
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент PostItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
