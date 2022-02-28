import axios from 'axios';

import { PostProps } from '../../data/posts';

const service = {
  getSomeData(): Promise<Array<PostProps>> {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then((response) => response.data);
  },
};

export default service;
