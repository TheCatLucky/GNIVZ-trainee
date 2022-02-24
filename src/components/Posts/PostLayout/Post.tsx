import React, { memo } from 'react';

export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Post: React.FC<PostProps> = ({ title, body }) => (
  <>
    <h1>{title}</h1>
    <div>{body}</div>
  </>
);

export default memo(Post);
