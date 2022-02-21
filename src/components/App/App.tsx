import React, { useState } from 'react';

import { PostProps, posts as data } from '../../data/posts';
import Posts from '../Posts';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>(data.slice(0, 3));
  const [isVisible, setVisible] = useState(true);
  const handleMorePosts = () => {
    setPosts(data.slice(0, posts.length + 3));
  };
  const toggleVisibility = () => {
    setVisible(!isVisible);
  };
  return (
    <>
      <button type="button" onClick={toggleVisibility}>
        {isVisible ? 'Скрыть посты' : 'Показать посты'}
      </button>
      {isVisible && <Posts posts={posts} handleMorePosts={handleMorePosts} data={data} />}
    </>
  );
};

export default App;
