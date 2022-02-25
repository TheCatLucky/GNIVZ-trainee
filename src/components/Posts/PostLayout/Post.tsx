import React, { memo } from 'react';
import { Link } from 'react-router-dom';

import classes from './Post.module.scss';
export type PostProps = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const Post: React.FC<PostProps> = ({ title, body, id }) => (
  <Link to={`/posts/${id}`} className={classes.component}>
    <h2>{title}</h2>
    <p>{body}</p>
  </Link>
);

export default memo(Post);
