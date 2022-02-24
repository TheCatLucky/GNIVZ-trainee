import axios, { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { PostProps } from '../../../data/posts';
import CustomError from '../../Error';
import Loading from '../../ui/Loading';
import styles from './PostItem.module.scss';

const PostItem: React.FC = () => {
  const { id } = useParams();
  const [isLoading, setLoading] = useState(false);
  const [post, setPost] = useState<PostProps>();
  const [error, setError] = useState('');
  useEffect(() => {
    setLoading(true);
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
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
  return (
    <div className={styles.component}>
      {isLoading && <Loading />}
      {error && <CustomError error={error} />}
      <h5>{post?.title}</h5>
      <p>{post?.body}</p>
    </div>
  );
};

export default PostItem;
