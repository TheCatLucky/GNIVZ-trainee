import React, { useEffect, useState } from 'react';
import axios, { AxiosError } from 'axios';

import Posts from '../Posts';
import { PostProps } from '../../data/posts';
import Search from '../Search';
import Loading from '../ui/Loading';
import CustomError from '../Error';
import styles from './App.module.scss';

const App: React.FC = () => {
  const [data, setData] = useState<PostProps[]>([]);
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [isSearching, setSearching] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [search, setSearch] = useState('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  const handleMorePosts = () => {
    setPosts(data.slice(0, posts.length + 3));
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then((response) => {
        //throw new Error('Ошибка');
        setData(response.data);
        setPosts(response.data.slice(0, 3));
        setLoading(false);
      })
      .catch((err: Error | AxiosError) => {
        console.log(err.message);
        setLoading(false);
        setError(err.message);
      });
  }, []);
  useEffect(() => {
    if (search) {
      setSearching(true);
    } else {
      setSearching(false);
    }
  }, [search]);
  return (
    <div className={styles.component}>
      <Search search={search} handleSearch={handleSearch} />
      {isLoading && <Loading />}
      {error && <CustomError error={error} />}
      <Posts
        posts={posts}
        data={data}
        search={search}
        handleMorePosts={handleMorePosts}
        isSearching={isSearching}
      />
    </div>
  );
};

export default App;
