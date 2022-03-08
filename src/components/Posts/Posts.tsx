import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { Button } from 'antd';

import Post, { PostProps } from './PostLayout/Post';
import Card from './CardLayout/Card';
import classes from './Posts.module.scss';
import searchStore from '../../stores/searchStore';

type PostsProps = {
  posts: PostProps[];
  data: PostProps[];
  isSearching: boolean;
  handleMorePosts: () => void;
  search?: string;
  view?: string;
};

const Posts: React.FC<PostsProps> = observer(
  ({
    posts,
    data,
    isSearching,
    search = '',
    view = 'list',
    handleMorePosts,
  }) => {
    const { filtredPosts } = searchStore;
    useEffect(() => {
      searchStore.setFilter(search);
    }, [search, posts]);
    if (view === 'list') {
      return (
        <div>
          {filtredPosts.map((post) => (
            <Post key={post.id} {...post} />
          ))}
          {posts.length < data.length && !isSearching && (
            <Button
              size="small"
              className={classes.button}
              onClick={handleMorePosts}
            >
              Показать еще
            </Button>
          )}
        </div>
      );
    }
    if (view === 'cards') {
      return (
        <>
          <div className={classes.component}>
            {filtredPosts.map((post) => (
              <Card key={post.id} {...post} />
            ))}
          </div>
          {posts.length < data.length && !isSearching && (
            <Button
              size="small"
              className={classes.button}
              onClick={handleMorePosts}
            >
              Показать еще
            </Button>
          )}
        </>
      );
    }
    return null;
  },
);

export default Posts;
