import React, { useEffect, useState } from 'react';

import Post, { PostProps } from './Post';

type PostsProps = {
  posts: PostProps[];
  data: PostProps[];
  isSearching: boolean;
  handleMorePosts: () => void;
  search?: string;
};

const Posts: React.FC<PostsProps> = ({
  posts,
  data,
  isSearching,
  search = '',
  handleMorePosts,
}) => {
  const [filtred, setFiltred] = useState<PostProps[]>([]);
  useEffect(() => {
    if (search.length > 2) {
      const filtredPosts = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFiltred(filtredPosts);
    } else {
      setFiltred(posts);
    }
  }, [search, posts]);

  return (
    <div>
      {filtred.map((post) => (
        <Post key={post.id} {...post} />
      ))}
      {posts.length < data.length && !isSearching && (
        <button type="button" onClick={handleMorePosts}>
          Показать еще
        </button>
      )}
    </div>
  );
};

export default Posts;
