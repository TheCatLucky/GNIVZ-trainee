import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Posts from '../Posts';
import { PostProps } from '../../data/posts';
import Search from '../Search';

const App: React.FC = () => {
  const [posts, setPosts] = useState<PostProps[]>([]);
  const [search, setSearch] = useState('');
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then((response) => {
        setPosts(response.data);
      });
  }, []);
  return (
    <>
      <Search search={search} handleSearch={handleSearch} />
      <Posts data={posts} search={search} />
    </>
  );
};

export default App;
