import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

import { PostProps } from '../../../data/posts';
import CustomError from '../../Error';
import Loading from '../../ui/Loading';
import classes from './PostItem.module.scss';

const PostItem: React.FC = () => {
  const { userId } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState<PostProps>();
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${userId}`)
      .then((response) => {
        //throw new Error('Ошибка');
        setPost(response.data);
        setLoading(false);
      })
      .catch((err: Error | AxiosError) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
  }, []);
  console.log('s');
  return (
    <div className={classes.component}>
      {isLoading && <Loading />}
      {error && <CustomError error={error} />}
      <Link to={'/post/list'}>Назад</Link>
      <h3>{post?.title}</h3>
      <p>{post?.body}</p>
      <p>Номер поста: {post?.id}</p>
      <p>Номер пользователя: {post?.userId}</p>
    </div>
  );
};

export default PostItem;
