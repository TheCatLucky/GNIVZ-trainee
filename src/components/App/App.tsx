import React, { useState } from 'react';

import Posts from '../Posts';
import { PostProps, posts as data } from '../../data/posts';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>(data.slice(0, 3));
  const handleMorePosts = () => {
    setPosts(data.slice(0, posts.length + 3));
  };
  return (
    <>
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
