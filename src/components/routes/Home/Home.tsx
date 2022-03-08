import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

import Posts from '../../Posts';
import Search from '../../Search';
import Loading from '../../ui/Loading';
import CustomError from '../../Error';
import searchStore from '../../../stores/searchStore';
import classes from './Home.module.scss';

const Home: React.FC = observer(() => {
  const { error, search, data, posts, isLoading, isSearching } = searchStore;
  const { view } = useParams();
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    searchStore.setSearch(e.target.value);
  };
  const handleMorePosts = (): void => {
    searchStore.setPosts();
  };
  useEffect(() => {
    searchStore.getData();
  }, []);
  useEffect(() => {
    if (search) {
      searchStore.setSearching(true);
    } else {
      searchStore.setSearching(false);
    }
  }, [search]);
  return (
    <div className={classes.component}>
      <div className={classes.search}>
        <Search search={search} handleSearch={handleSearch} />
      </div>
      {isLoading && <Loading />}
      {error && <CustomError error={error} />}
      <div className={classes.content}>
        <Posts
          posts={posts}
          search={search}
          view={view}
          data={data}
          handleMorePosts={handleMorePosts}
          isSearching={isSearching}
        />
      </div>
    </div>
  );
});

export default Home;
