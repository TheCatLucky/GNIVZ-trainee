import React, { useEffect, useState } from 'react';

import Post, { PostProps } from './Post';

type PostsProps = {
  data: PostProps[];
  search?: string;
};

const Posts: React.FC<PostsProps> = ({ data, search = '' }) => {
  const [filtred, setFiltred] = useState<PostProps[]>([]);
  useEffect(() => {
    if (search) {
      const filtredPosts = data.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      console.log(data);
      setFiltred(filtredPosts);
    } else {
      setFiltred(data);
    }
  }, [search, data]);
  useEffect(() => {
    setFiltred(data);
  }, [data]);
  return (
    <div>
      {filtred.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
