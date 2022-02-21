import React from 'react';

import Post, { PostProps } from './Post';

type PostsProps = {
  posts: PostProps[];
  data: PostProps[];
  handleMorePosts: () => void;
};

const Posts: React.FC<PostsProps> = ({ posts, data, handleMorePosts }) => (
  <>
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
    {posts.length < data.length && (
      <button type="button" onClick={handleMorePosts}>
        Показать еще
      </button>
    )}
  </>
);

export default Posts;
