import React from 'react';

import Post, { PostProps } from './Post';

type PostsProps = {
  data: PostProps[];
};

const Posts: React.FC<PostsProps> = ({ data }) => (
  <div>
    {data.map((post) => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

export default Posts;
