import React, { useEffect, useState } from 'react';

import Post, { PostProps } from './PostLayout/Post';
import Card from './CardLayout/Card';

type PostsProps = {
  posts: PostProps[];
  data: PostProps[];
  isSearching: boolean;
  handleMorePosts: () => void;
  search?: string;
  view?: string;
};

const Posts: React.FC<PostsProps> = ({
  posts,
  data,
  isSearching,
  search = '',
  view = 'list',
  handleMorePosts,
}) => {
  const [filtered, setFiltred] = useState<PostProps[]>([]);

  useEffect(() => {
    if (search.length > 2) {
      const filtredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase()),
      );
      setFiltred(filtredPosts);
    } else {
      setFiltred(posts);
    }
  }, [search, posts]);

  if (view === 'list') {
    return (
      <div>
        {filtered.map((post) => (
          <Post key={post.id} {...post} />
        ))}
        {posts.length < data.length && !isSearching && (
          <button type="button" onClick={handleMorePosts}>
            Показать еще
          </button>
        )}
      </div>
    );
  }
  if (view === 'cards') {
    return (
      <div>
        {filtered.map((post) => (
          <Card key={post.id} {...post} />
        ))}
        {posts.length < data.length && !isSearching && (
          <button type="button" onClick={handleMorePosts}>
            Показать еще
          </button>
        )}
      </div>
    );
  }
  return null;
};

export default Posts;
