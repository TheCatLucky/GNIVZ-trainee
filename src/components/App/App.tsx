import React, { useState } from 'react';

import Posts from '../Posts';
import { PostProps, posts as data } from '../../data/posts';

const App: React.FC = () => {
  const [value, setValue] = useState(0);
  const [posts, setPosts] = useState<PostProps[]>(data.slice(0, 3));
  console.log(data.length);
  const handleClick = () => {
    setValue(value + 1);
  };
  const handleMorePosts = () => {
    setPosts(data.slice(0, posts.length + 3));
  };
  return (
    <>
      <button type="button" onClick={handleClick}>
        {value}
      </button>
      <Posts data={posts} />
      {posts.length !== data.length && (
        <button type="button" onClick={handleMorePosts}>
          Показать еще
        </button>
      )}
    </>
  );
};

export default App;
