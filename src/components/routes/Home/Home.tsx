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
  //const [data, setData] = useState<PostProps[]>([]);
  //const [posts, setPosts] = useState<PostProps[]>([]);
  //const [isSearching, setSearching] = useState(false);
  //const [isLoading, setLoading] = useState(false);
  //const [error, setError] = useState('');
  //const [search, setSearch] = useState('');
  const { view } = useParams();
  const handleSearch: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    searchStore.setSearch(e.target.value);
  };
  const handleMorePosts = (): void => {
    searchStore.setPosts();
  };
  useEffect(() => {
    searchStore.getData();
    //searchStore.setLoading(true);
    //axios
    //  .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
    //  .then((response) => {
    //    //throw new Error('Ошибка');
    //    searchStore.setData(response.data);
    //    searchStore.setPosts(response.data.slice(0, 3));
    //    searchStore.setLoading(false);
    //  })
    //  .catch((err: Error | AxiosError) => {
    //    console.log(err.message);
    //    searchStore.setLoading(false);
    //    searchStore.setError(err.message);
    //  });
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
