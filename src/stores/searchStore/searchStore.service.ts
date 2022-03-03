import axios, { AxiosError } from 'axios';

import { PostProps } from '../../data/posts';
import searchStore from './searchStore';

const service = {
  getSomeData(): Promise<Array<PostProps>> {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=50')
      .then((response) => {
        //throw new Error('Ошибка');
        return response.data;
      });
  },
};

export default service;
